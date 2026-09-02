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

CURRENT_ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\ea504c98-228b-4b3d-ad8c-a1a238ea3b94"
PREV_ARTIFACT_DIR_8 = r"C:\Users\luiso\.gemini\antigravity\brain\242c8b4f-9360-4ec8-b38f-ecac117b2298"
PREV_ARTIFACT_DIR_7 = r"C:\Users\luiso\.gemini\antigravity\brain\e2f1a61b-7fc5-4a37-9032-9dce380a7993"
PREV_ARTIFACT_DIR_6 = r"C:\Users\luiso\.gemini\antigravity\brain\9705331f-35fd-45c3-b901-2f14dab60aed"
PREV_ARTIFACT_DIR_5 = r"C:\Users\luiso\.gemini\antigravity\brain\ce3ca77a-06af-4722-9a51-22316a36f2fc"
PREV_ARTIFACT_DIR_4 = r"C:\Users\luiso\.gemini\antigravity\brain\3f1cace1-70b9-41d6-a3a5-40ae385364fc"
PREV_ARTIFACT_DIR_3 = r"C:\Users\luiso\.gemini\antigravity\brain\0904b11c-4c33-4084-907e-e27c0820bf0f"
PREV_ARTIFACT_DIR_2 = r"C:\Users\luiso\.gemini\antigravity\brain\08f107f5-df93-448c-9eb8-753b2f2f4634"
PREV_ARTIFACT_DIR_1 = r"C:\Users\luiso\.gemini\antigravity\brain\91e780e1-ee3d-4c04-949d-db65c67e0f4d"
PREV_ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\7d7a0700-41bc-4655-a94e-d886430a5c04"
LEGACY_ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\d6601f43-c0ae-494d-bbf8-ca413b3a64ed"
_REPO_ROOT = os.path.dirname(os.path.abspath(__file__))
DEST_DIR = os.path.join(_REPO_ROOT, "assets")
REPO_RAW_DIR = os.path.join(_REPO_ROOT, "tools", "raw")
os.makedirs(DEST_DIR, exist_ok=True)

def find_asset_file(filename: str) -> str:
    search = [REPO_RAW_DIR, CURRENT_ARTIFACT_DIR, PREV_ARTIFACT_DIR_8, PREV_ARTIFACT_DIR_7,
              PREV_ARTIFACT_DIR_6, PREV_ARTIFACT_DIR_5, PREV_ARTIFACT_DIR_4, PREV_ARTIFACT_DIR_3,
              PREV_ARTIFACT_DIR_2, PREV_ARTIFACT_DIR_1, PREV_ARTIFACT_DIR, LEGACY_ARTIFACT_DIR]
    for d in search:
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
    arr[bg_mask] = [0, 0, 0, 0]

    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), mode="RGBA")


def clean_edges_vectorized(img: Image.Image, depth: int = 5) -> Image.Image:
    """Clear outer border margin lines."""
    arr = np.array(img)
    h, w = arr.shape[:2]

    edge_zone = np.zeros((h, w), dtype=bool)
    edge_zone[:depth, :], edge_zone[-depth:, :] = True, True
    edge_zone[:, :depth], edge_zone[:, -depth:] = True, True

    r, g, b = arr[:, :, 0].astype(int), arr[:, :, 1].astype(int), arr[:, :, 2].astype(int)
    bg_like = (r > 140) & (b > 140) & (g < 120)
    arr[edge_zone & bg_like] = [0, 0, 0, 0]

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
    arr[alpha == 0] = [0, 0, 0, 0]
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


def slam_waist_notch_top(img: Image.Image) -> int | None:
    """First row in the lower third where both arms are opaque and the waist is see-through."""
    fg = np.array(img)[:, :, 3] > 8
    h, w = fg.shape
    cx0, cx1 = int(w * 0.35), int(w * 0.65)
    for y in range(int(h * 0.70), h):
        row = fg[y]
        if row[:cx0].any() and row[cx1:].any() and row[cx0:cx1].mean() < 0.25:
            return y
    return None


def shift_slam_to_notch(img: Image.Image, target_row: int) -> Image.Image:
    """Translate a slam pose down so its waist notch matches bench-slam geometry."""
    notch = slam_waist_notch_top(img)
    if notch is None:
        return img
    # Palms sit near the bottom; more than 8px eats them.
    shift = max(0, min(8, target_row - notch))
    if shift == 0:
        return img
    arr = np.array(img)
    out = np.zeros_like(arr)
    out[shift:] = arr[:-shift]
    return Image.fromarray(out, mode="RGBA")


# -------------------------------------------------------------
# 3. SPECIFIC ASSET EXTRACTION PIPELINE
# -------------------------------------------------------------

def process_character_sheet(
    sheet_name: str,
    pose_names: list,
    custom_crops: list = None,
    drop_boxes_per_cell: list = None,
    min_area_fractions: list = None
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
        min_area = min_area_fractions[idx] if (min_area_fractions and idx < len(min_area_fractions)) else 0.10
        final_img = extract_primary_components_fast(cleaned, min_area_fraction=min_area, drop_boxes=drop_boxes)
        final_img = despill_final(final_img)

        out_path = os.path.join(DEST_DIR, f"{name}.webp")
        final_img.save(out_path, 'WEBP', quality=85, method=6)
        print(f"  [OK] Processed: {name}.webp ({final_img.size})")


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
    final_img.save(out_path, 'WEBP', quality=85, method=6)
    print(f"  [OK] Processed prop: {out_filename} ({final_img.size})")




def process_evidence_icons(ev_name: str):
    ev_path = find_asset_file(ev_name)
    if not os.path.exists(ev_path):
        return

    img = Image.open(ev_path)
    w, h = img.size
    cw, ch = w // 4, h // 3

    items = [
        (0, 0, "chipote_chillon.webp"),
        (1, 0, "pastillas_chiquitolina.webp"),
        (2, 0, "antenitas_vinil.webp"),
        (3, 0, "chicharra_oro.webp"),
        (0, 1, "informe_medico.webp"),
        (1, 1, "foto_crimen.webp"),
        (2, 1, "bolsa_dolares.webp"),
        (3, 1, "insignia_abogado.webp")
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
        out_img.save(out_path, 'WEBP', quality=85, method=6)
        print(f"  [OK] Processed: {name} ({out_img.size})")


def process_cutins(cutin_name: str):
    cutin_path = find_asset_file(cutin_name)
    if os.path.exists(cutin_path):
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

            out_path = os.path.join(DEST_DIR, f"{name}.webp")
            filtered.save(out_path, 'WEBP', quality=85, method=6)
            print(f"  [OK] Processed: {name}.webp ({filtered.size})")

    inocente_path = find_asset_file("objection_inocente_raw.jpg")
    if os.path.exists(inocente_path):
        img_inocente = Image.open(inocente_path).convert("RGBA")
        cleaned_i = remove_bg_magenta_vectorized(img_inocente, threshold=165.0, despill_depth=4)
        cleaned_i = clean_edges_vectorized(cleaned_i, depth=4)
        filtered_i = extract_primary_components_fast(cleaned_i, min_area_fraction=0.25)
        final_i = despill_final(filtered_i).resize((512, 512), Image.Resampling.LANCZOS)
        final_i.save(os.path.join(DEST_DIR, "objection_inocente.webp"), 'WEBP', quality=85, method=6)
        print(f"  [OK] Processed: objection_inocente.webp ({final_i.size})")


def process_ui_elements(ui_name: str):
    ui_path = find_asset_file(ui_name)
    if not os.path.exists(ui_path):
        return

    img = Image.open(ui_path)
    img_keyed = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    w, h = img.size

    crops = [
        ("dialogue_box.webp", (0, 0, w, int(h * 0.26))),
        ("badge_button.webp", (0, int(h * 0.25), int(w * 0.35), int(h * 0.48))),
        ("health_bar.webp", (int(w * 0.35), int(h * 0.28), w, int(h * 0.46))),
        ("btn_press.webp", (0, int(h * 0.48), int(w * 0.38), int(h * 0.75))),
        ("btn_present.webp", (int(w * 0.38), int(h * 0.48), int(w * 0.68), int(h * 0.75))),
        ("btn_magnifier.webp", (int(w * 0.68), int(h * 0.48), w, int(h * 0.75)))
    ]

    for name, box in crops:
        cropped = img_keyed.crop(box)
        cleaned = clean_edges_vectorized(cropped, depth=4)
        cleaned = despill_final(cleaned)
        out_path = os.path.join(DEST_DIR, name)
        cleaned.save(out_path, 'WEBP', quality=85, method=6)
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
    sam_sheet = find_asset_file("supersam_sprites_clean_1787702494437.jpg")
    if os.path.exists(sam_sheet):
        sam_drop = [
            None,
            [(0, 400, 50, 480)],  # Drop edge impact spark on slam
            None,
            None
        ]
        process_character_sheet(
            os.path.basename(sam_sheet),
            ["supersam_idle", "supersam_slam", "supersam_point", "supersam_breakdown"],
            custom_crops=None,
            drop_boxes_per_cell=sam_drop,
            min_area_fractions=[0.10, 0.10, 0.10, 0.01]
        )
    else:
        sam_drop = [
            [(0, 0, 50, 50)],
            [(0, 0, 50, 50), (20, 180, 135, 360)],
            [(300, 0, 512, 135)],
            [(0, 0, 50, 50)]
        ]
        process_character_sheet(
            "supersam_sprites_1787377120436.jpg",
            ["supersam_idle", "supersam_slam", "supersam_point", "supersam_breakdown"],
            custom_crops=None,
            drop_boxes_per_cell=sam_drop
        )

    # Dedicated Super Sam slam: same identity as idle/point, Chapulín slam contact silhouette.
    sam_slam_sheet = find_asset_file("supersam_slam_sheet_raw.png")
    if os.path.exists(sam_slam_sheet):
        img = Image.open(sam_slam_sheet)
        w, h = img.size
        cell = img.crop((0, 0, w // 2, h // 2))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=2)
        filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.10)
        aligned = shift_slam_to_notch(filtered, target_row=448)
        final_slam = despill_final(aligned)
        final_slam.save(os.path.join(DEST_DIR, "supersam_slam.webp"), 'WEBP', quality=85, method=6)
        print("  [OK] Processed dedicated Super Sam desk slam sprite")

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
    shutil.copy(os.path.join(DEST_DIR, "florinda_idle.webp"), os.path.join(DEST_DIR, "florinda_fanning.webp"))

    # 5b. Don Ramón (Defense Lawyer)
    donramon_sheet = find_asset_file("donramon_sprites_clean_1787638918112.jpg")
    if not os.path.exists(donramon_sheet):
        donramon_sheet = find_asset_file("donramon_sprites_1787636324654.jpg")
    if os.path.exists(donramon_sheet):
        process_character_sheet(
            os.path.basename(donramon_sheet),
            ["donramon_idle", "donramon_slam", "donramon_point", "donramon_sweat"],
            None,
            None
        )
        shutil.copy(os.path.join(DEST_DIR, "donramon_sweat.webp"), os.path.join(DEST_DIR, "donramon_panic.webp"))
        print("  [OK] Processed Don Ramón defense sprites")

    # 6. Standalone Courtroom Furniture Props (Podium & Defense Table)
    process_standalone_prop(
        "court_podium_clean_1787626053367.jpg",
        "court_podium.webp",
        crop_box=(19, 24, 1358, 762)
    )
    # Top of the crop must land on the desk's far-edge outline, NOT above it. Rows above
    # that outline are a flat featureless band from the source art; because the bench is
    # staged as a foreground layer whose top edge is the hand-contact line, any such rows
    # paint a solid strip across the frame in front of the character. See
    # docs/lessons-learned/decoupled-character-furniture-sprites.md
    process_standalone_prop(
        "court_bench_hd_1787628231232.jpg",
        "court_bench.webp",
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
        ("court_witness_stand_1787377876023.jpg", "bg_witness.webp"),
        ("court_judge_view_1787377926397.jpg", "bg_judge.webp"),
        ("museum_crime_scene_1787377814093.jpg", "bg_museum.webp"),
        ("detention_center_room_1787377837506.jpg", "bg_detention.webp"),
        ("bg_prosecution_curtains_arch_1787633685599.jpg", "bg_courtroom.webp"),
        ("bg_defense_wood_wall_1787626957213.jpg", "bg_defense.webp")
    ]
    for src, dst in bgs:
        src_p = find_asset_file(src)
        if os.path.exists(src_p):
            bg_img = Image.open(src_p)
            bg_img.save(os.path.join(DEST_DIR, dst), 'WEBP', quality=85, method=6)
            print(f"  [OK] Saved WebP background: {dst}")

    print("\nAll assets cleaned, despilled, and saved successfully!")

if __name__ == "__main__":
    run_all_fixes()
