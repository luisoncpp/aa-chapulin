# @Architecture(descriptionShort="High-performance AI asset extraction with multi-stage chroma-key and despill", type="pipeline", icon="wrench")
"""
High-Performance Asset Processor & Sprite Fixer
Applies the generate2dsprite asset sanitization pipeline:
1. Multi-stage Euclidean distance chroma keying (captures outer background + interior cavities)
2. Skin tone protection (G < 125 guard)
3. Subpixel dilation & mathematical contour despill (excess = max(0, min(r-g, b-g)))
4. Margin grid line clearing & connected component filtering
5. Extended bounding box support for outstretched gestures
"""

import os
import shutil
import numpy as np
from PIL import Image
from scipy import ndimage

CURRENT_ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\3f1cace1-70b9-41d6-a3a5-40ae385364fc"
PREV_ARTIFACT_DIR_3 = r"C:\Users\luiso\.gemini\antigravity\brain\0904b11c-4c33-4084-907e-e27c0820bf0f"
PREV_ARTIFACT_DIR_2 = r"C:\Users\luiso\.gemini\antigravity\brain\08f107f5-df93-448c-9eb8-753b2f2f4634"
PREV_ARTIFACT_DIR_1 = r"C:\Users\luiso\.gemini\antigravity\brain\91e780e1-ee3d-4c04-949d-db65c67e0f4d"
PREV_ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\7d7a0700-41bc-4655-a94e-d886430a5c04"
LEGACY_ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\d6601f43-c0ae-494d-bbf8-ca413b3a64ed"
DEST_DIR = r"c:\Proyectos\ace-attorney-gemini\assets"
os.makedirs(DEST_DIR, exist_ok=True)

def find_asset_file(filename: str) -> str:
    for d in [CURRENT_ARTIFACT_DIR, PREV_ARTIFACT_DIR_3, PREV_ARTIFACT_DIR_2, PREV_ARTIFACT_DIR_1, PREV_ARTIFACT_DIR, LEGACY_ARTIFACT_DIR]:
        p = os.path.join(d, filename)
        if os.path.exists(p):
            return p
    return os.path.join(CURRENT_ARTIFACT_DIR, filename)

# -------------------------------------------------------------
# 1. ADVANCED CHROMA-KEY, FLOOD-FILL & DESPILL
# -------------------------------------------------------------

def remove_bg_magenta_vectorized(
    img: Image.Image,
    threshold: float = 160.0,
    despill_depth: int = 4
) -> Image.Image:
    """
    Vectorized chroma keying handling outer background, grid lines, and interior cavities.
    """
    img = img.convert("RGBA")
    arr = np.array(img, dtype=np.float32)
    h, w = arr.shape[:2]

    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]

    # Euclidean distance to pure magenta (255, 0, 255)
    dist = np.sqrt((r - 255.0) ** 2 + g ** 2 + (b - 255.0) ** 2)

    # 1. Pure and edge magenta (outer background + interior cavities)
    # G < 125 guard ensures fair/warm skin tones (G >= 140) are protected
    is_magenta = (dist < threshold) | ((r > 140) & (b > 140) & (g < 125) & (np.abs(r - b) < 65))

    # 2. Border-connected neutral grid lines (strictly on outer 10px perimeter)
    edge_zone = np.zeros((h, w), dtype=bool)
    edge_zone[:10, :], edge_zone[-10:, :] = True, True
    edge_zone[:, :10], edge_zone[:, -10:] = True, True
    is_grid = edge_zone & (r > 180) & (b > 180) & (np.abs(r - b) < 40)

    # Combined background mask
    bg_mask = is_magenta | is_grid

    # 1-pixel subpixel dilation to catch fringe
    dilated_bg = ndimage.binary_dilation(bg_mask, structure=np.ones((3, 3), dtype=bool), iterations=1)
    heavy_fringe = dilated_bg & ~bg_mask & ((r > 120) & (b > 120) & (g < 120))
    bg_mask = bg_mask | heavy_fringe

    # Despill zone for fringe (within despill_depth of any background)
    dilated_bg_despill = ndimage.binary_dilation(bg_mask, structure=np.ones((3, 3), dtype=bool), iterations=despill_depth)
    despill_zone = dilated_bg_despill & ~bg_mask

    excess = np.maximum(0.0, np.minimum(r - g, b - g))
    r_despilled = np.where(despill_zone & (excess > 0), np.maximum(0.0, r - excess), r)
    b_despilled = np.where(despill_zone & (excess > 0), np.maximum(0.0, b - excess), b)

    arr[:, :, 0] = r_despilled
    arr[:, :, 2] = b_despilled
    arr[bg_mask, 3] = 0

    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), mode="RGBA")


def clean_edges_vectorized(img: Image.Image, depth: int = 5) -> Image.Image:
    """Clear outer border margin lines."""
    arr = np.array(img)
    h, w = arr.shape[:2]

    edge_zone = np.zeros((h, w), dtype=bool)
    edge_zone[:depth, :], edge_zone[-depth:, :] = True, True
    edge_zone[:, :depth], edge_zone[:, -depth:] = True, True

    arr[edge_zone, 3] = 0
    return Image.fromarray(arr, mode="RGBA")


def despill_final(img: Image.Image) -> Image.Image:
    """Post-crop/post-resize despill pass ensuring 0 purple edge fringe."""
    arr = np.array(img, dtype=np.float32)
    alpha = arr[:, :, 3]
    fg = alpha > 0
    if not np.any(fg):
        return img
    eroded = ndimage.binary_erosion(fg, structure=np.ones((3, 3)))
    fringe = fg & ~eroded

    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    excess = np.maximum(0.0, np.minimum(r - g, b - g))
    arr[fringe, 0] = np.where(excess[fringe] > 0, np.maximum(0.0, r[fringe] - excess[fringe]), r[fringe])
    arr[fringe, 2] = np.where(excess[fringe] > 0, np.maximum(0.0, b[fringe] - excess[fringe]), b[fringe])
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), mode="RGBA")


# -------------------------------------------------------------
# 2. CONNECTED COMPONENT FILTERING (DROP STRAY ARTIFACTS / LIMBS)
# -------------------------------------------------------------

def extract_primary_components_fast(img: Image.Image, min_area_fraction: float = 0.08, drop_boxes: list = None) -> Image.Image:
    """
    Keep primary character body components while dropping stray floating limbs, speech bubbles, and text.
    """
    arr = np.array(img)
    alpha = arr[:, :, 3]
    h, w = alpha.shape

    # If drop boxes specified, zero out alpha in those regions first
    if drop_boxes:
        for (x0, y0, x1, y1) in drop_boxes:
            arr[max(0, y0):min(h, y1), max(0, x0):min(w, x1), 3] = 0
            alpha = arr[:, :, 3]

    fg_mask = alpha > 0
    if not np.any(fg_mask):
        return Image.fromarray(arr, mode="RGBA")

    labeled, num_features = ndimage.label(fg_mask)
    if num_features == 0:
        return Image.fromarray(arr, mode="RGBA")

    # Count area of each component
    counts = np.bincount(labeled.ravel())
    counts[0] = 0  # Ignore background

    max_area = counts.max()
    threshold_area = max(500, int(max_area * min_area_fraction))

    keep_labels = np.where(counts >= threshold_area)[0]
    keep_mask = np.isin(labeled, keep_labels)

    arr[~keep_mask, 3] = 0
    return Image.fromarray(arr, mode="RGBA")


# -------------------------------------------------------------
# 3. SPECIFIC ASSET EXTRACTION PIPELINE
# -------------------------------------------------------------

def process_character_sheet(
    sheet_name: str,
    pose_names: list,
    custom_crops: list = None,
    drop_boxes_per_cell: list = None
):
    sheet_path = find_asset_file(sheet_name)
    if not os.path.exists(sheet_path):
        print(f"Warning: Sheet not found {sheet_path}")
        return

    img = Image.open(sheet_path)
    w, h = img.size
    cw, ch = w // 2, h // 2

    for idx, name in enumerate(pose_names):
        r = idx // 2
        c = idx % 2

        if custom_crops and idx < len(custom_crops) and custom_crops[idx] is not None:
            crop_box = custom_crops[idx]
        else:
            crop_box = (c * cw, r * ch, (c + 1) * cw, (r + 1) * ch)

        cell = img.crop(crop_box)
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=5)

        drop_boxes = drop_boxes_per_cell[idx] if (drop_boxes_per_cell and idx < len(drop_boxes_per_cell)) else None
        final_img = extract_primary_components_fast(cleaned, min_area_fraction=0.10, drop_boxes=drop_boxes)
        final_img = despill_final(final_img)

        out_path = os.path.join(DEST_DIR, f"{name}.png")
        final_img.save(out_path)
        print(f"  [OK] Processed: {name}.png ({final_img.size})")


def process_standalone_prop(prop_name: str, out_filename: str, crop_box=None):
    prop_path = find_asset_file(prop_name)
    if not os.path.exists(prop_path):
        print(f"Warning: Prop not found {prop_path}")
        return

    img = Image.open(prop_path)
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=4)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.10)
    final_img = despill_final(filtered)

    if crop_box:
        final_img = final_img.crop(crop_box)

    out_path = os.path.join(DEST_DIR, out_filename)
    final_img.save(out_path)
    print(f"  [OK] Processed prop: {out_filename} ({final_img.size})")




def process_evidence_icons(ev_name: str):
    ev_path = find_asset_file(ev_name)
    if not os.path.exists(ev_path):
        return

    img = Image.open(ev_path)
    w, h = img.size
    cw, ch = w // 4, h // 3

    items = [
        (0, 0, "chipote_chillon.png"),
        (1, 0, "pastillas_chiquitolina.png"),
        (2, 0, "antenitas_vinil.png"),
        (3, 0, "chicharra_oro.png"),
        (0, 1, "informe_medico.png"),
        (1, 1, "foto_crimen.png"),
        (2, 1, "bolsa_dolares.png"),
        (3, 1, "insignia_abogado.png")
    ]

    for col, row, name in items:
        cell = img.crop((col * cw, row * ch, (col + 1) * cw, (row + 1) * ch))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=4)

        # Drop the bottom text label zone (y in 275..341) and top/side frame bleed
        drop_boxes = [
            (0, 275, cw, ch),  # Bottom text label
            (0, 0, cw, 55),    # Top frame line
            (0, 0, 10, ch),    # Left frame line
            (cw - 10, 0, cw, ch)# Right frame line
        ]
        filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.15, drop_boxes=drop_boxes)

        # Trim transparent margins around the card/icon
        bbox = filtered.getbbox()
        if bbox:
            cropped = filtered.crop(bbox)
            max_dim = max(cropped.width, cropped.height)
            canvas = Image.new("RGBA", (max_dim + 12, max_dim + 12), (0, 0, 0, 0))
            offset_x = (canvas.width - cropped.width) // 2
            offset_y = (canvas.height - cropped.height) // 2
            canvas.paste(cropped, (offset_x, offset_y))
            out_img = canvas.resize((128, 128), Image.Resampling.LANCZOS)
            out_img = despill_final(out_img)
        else:
            out_img = despill_final(filtered)

        out_path = os.path.join(DEST_DIR, name)
        out_img.save(out_path)
        print(f"  [OK] Processed: {name} ({out_img.size})")


def process_cutins(cutin_name: str):
    cutin_path = find_asset_file(cutin_name)
    if not os.path.exists(cutin_path):
        return

    img = Image.open(cutin_path)
    w, h = img.size
    cw, ch = w // 2, h // 2

    names = ["objection_protesto", "objection_un_momento", "objection_toma_eso", "objection_culpable"]
    for idx, name in enumerate(names):
        r = idx // 2
        c = idx % 2
        cell = img.crop((c * cw, r * ch, (c + 1) * cw, (r + 1) * ch))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=4)
        filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.25)
        filtered = despill_final(filtered)

        out_path = os.path.join(DEST_DIR, f"{name}.png")
        filtered.save(out_path)
        print(f"  [OK] Processed: {name}.png ({filtered.size})")


def process_ui_elements(ui_name: str):
    ui_path = find_asset_file(ui_name)
    if not os.path.exists(ui_path):
        return

    img = Image.open(ui_path)
    img_keyed = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    w, h = img.size

    crops = [
        ("dialogue_box.png", (0, 0, w, int(h * 0.26))),
        ("badge_button.png", (0, int(h * 0.25), int(w * 0.35), int(h * 0.48))),
        ("health_bar.png", (int(w * 0.35), int(h * 0.28), w, int(h * 0.46))),
        ("btn_press.png", (0, int(h * 0.48), int(w * 0.38), int(h * 0.75))),
        ("btn_present.png", (int(w * 0.38), int(h * 0.48), int(w * 0.68), int(h * 0.75))),
        ("btn_magnifier.png", (int(w * 0.68), int(h * 0.48), w, int(h * 0.75)))
    ]

    for name, box in crops:
        cropped = img_keyed.crop(box)
        cleaned = clean_edges_vectorized(cropped, depth=4)
        cleaned = despill_final(cleaned)
        out_path = os.path.join(DEST_DIR, name)
        cleaned.save(out_path)
        print(f"  [OK] Processed UI: {name}")


def run_all_fixes():
    print("=== EXECUTING HIGH-PERFORMANCE ASSET RE-PROCESSING ===")

    # 1. Chapulín Colorado (Clean Poses without baked podium/table)
    process_character_sheet(
        "chapulin_sprites_clean_1787540691618.jpg",
        ["chapulin_idle", "chapulin_slam", "chapulin_point", "chapulin_panic"],
        None,
        None
    )

    # 2. Super Sam
    sam_drop = [
        [(0, 0, 50, 50)],
        [(0, 0, 50, 50), (20, 180, 135, 360)],
        [(300, 0, 512, 135)],
        [(0, 0, 50, 50)]
    ]
    process_character_sheet(
        "supersam_sprites_1787377120436.jpg",
        ["supersam_idle", "supersam_slam", "supersam_point", "supersam_breakdown"],
        None,
        sam_drop
    )

    # 3. El Tripaseca
    process_character_sheet(
        "tripaseca_sprites_1787377534812.jpg",
        ["tripaseca_smug", "tripaseca_sweat", "tripaseca_panic", "tripaseca_breakdown"],
        None,
        None
    )

    # 4. El Juez (The Judge)
    process_character_sheet(
        "judge_sprites_1787377585527.jpg",
        ["judge_neutral", "judge_gavel", "judge_shock", "judge_thinking"],
        None,
        None
    )

    # 5. Doña Florinda (Museum Curator)
    flor_drop = [
        [(0, 0, 512, 55)],
        [(0, 0, 512, 55)],
        [(0, 0, 512, 55)],
        [(0, 0, 512, 55)]
    ]
    process_character_sheet(
        "witness_florinda_sprites_1787377757004.jpg",
        ["florinda_idle", "florinda_angry", "florinda_crying", "florinda_shock"],
        None,
        flor_drop
    )

    # Copy florinda_idle to florinda_fanning
    shutil.copy(os.path.join(DEST_DIR, "florinda_idle.png"), os.path.join(DEST_DIR, "florinda_fanning.png"))

    # 6. Standalone Courtroom Furniture Props (Podium & Defense Table)
    process_standalone_prop(
        "court_podium_clean_1787626053367.jpg",
        "court_podium.png",
        crop_box=(19, 24, 1358, 762)
    )
    # Top of the crop must land on the desk's far-edge outline, NOT above it. Rows above
    # that outline are a flat featureless band from the source art; because the bench is
    # staged as a foreground layer whose top edge is the hand-contact line, any such rows
    # paint a solid strip across the frame in front of the character. See
    # docs/lessons-learned/decoupled-character-furniture-sprites.md
    process_standalone_prop(
        "court_bench_hd_1787628231232.jpg",
        "court_bench.png",
        crop_box=(158, 127, 1218, 768)
    )

    # 7. Objection Cut-Ins
    process_cutins("ui_objection_cutins_1787377615093.jpg")

    # 8. Evidence Icons
    process_evidence_icons("evidence_icons_1787377665647.jpg")

    # 9. UI Elements
    process_ui_elements("ui_elements_1787377712626.jpg")

    # 10. Backgrounds
    bgs = [
        ("court_witness_stand_1787377876023.jpg", "bg_witness.jpg"),
        ("court_judge_view_1787377926397.jpg", "bg_judge.jpg"),
        ("museum_crime_scene_1787377814093.jpg", "bg_museum.jpg"),
        ("detention_center_room_1787377837506.jpg", "bg_detention.jpg"),
        ("courtroom_scenes_1787377789540.jpg", "bg_courtroom.jpg"),
        ("bg_defense_wood_wall_1787626957213.jpg", "bg_defense.jpg")
    ]
    for src, dst in bgs:
        src_p = find_asset_file(src)
        if os.path.exists(src_p):
            shutil.copy(src_p, os.path.join(DEST_DIR, dst))
            print(f"  [OK] Copied background: {dst}")

    print("\nAll assets cleaned, despilled, and saved successfully!")

if __name__ == "__main__":
    run_all_fixes()
