"""
High-Performance Asset Processor & Sprite Fixer
Powered by scipy.ndimage, NumPy and PIL.
Applies the agent-sprite-forge pipeline:
1. Multi-stage Euclidean distance chroma keying
2. Boundary-connected flood mask & edge dilation
3. Vectorized color despill & defringing (eliminates pink halos)
4. Connected component analysis (removes floating limbs, speech bubbles, and text)
5. Auto-trimming & centering for evidence icons and UI assets
"""

import os
import shutil
import numpy as np
from PIL import Image
from scipy import ndimage

ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\d6601f43-c0ae-494d-bbf8-ca413b3a64ed"
DEST_DIR = r"c:\Proyectos\ace-attorney-gemini\assets"
os.makedirs(DEST_DIR, exist_ok=True)

# @Section(Boundary Chroma-Key & Despill)
def remove_bg_magenta_vectorized(
    img: Image.Image,
    threshold: float = 160.0,
    despill_depth: int = 4
) -> Image.Image:
    """Vectorized chroma keying handling outer background, grid lines, and interior cavities."""
    img = img.convert("RGBA")
    arr = np.array(img, dtype=np.float32)
    h, w = arr.shape[:2]

    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

    dist = np.sqrt((r - 255.0) ** 2 + g ** 2 + (b - 255.0) ** 2)

    # 1. Pure and edge magenta (covers outer background + interior cavities/holes like wings/arms)
    # Strict low G (g < 125) and balanced R/B prevents falsely capturing fair skin tones
    is_magenta = (dist < threshold) | ((r > 140) & (b > 140) & (g < 125) & (np.abs(r - b) < 65))

    # 2. Border-connected neutral grid lines (strictly on outer 10px perimeter)
    edge_zone = np.zeros((h, w), dtype=bool)
    edge_zone[:10, :], edge_zone[-10:, :] = True, True
    edge_zone[:, :10], edge_zone[:, -10:] = True, True
    is_grid = edge_zone & (r > 180) & (b > 180) & (np.abs(r - b) < 40)

    # Combined background mask
    bg_mask = is_magenta | is_grid

    dilated_bg = ndimage.binary_dilation(bg_mask, structure=np.ones((3, 3), dtype=bool), iterations=1)
    heavy_fringe = dilated_bg & ~bg_mask & ((r > 120) & (b > 120) & (g < 120))
    bg_mask = bg_mask | heavy_fringe

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
    counts[0] = 0 # Ignore background
    
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
    drop_boxes_per_cell: list = None,
    custom_crops: list = None
):
    sheet_path = os.path.join(ARTIFACT_DIR, sheet_name)
    if not os.path.exists(sheet_path):
        print(f"Warning: Sheet not found {sheet_path}")
        return

    img = Image.open(sheet_path)
    w, h = img.size
    cw, ch = w // 2, h // 2

    for idx, name in enumerate(pose_names):
        if custom_crops and idx < len(custom_crops) and custom_crops[idx]:
            cell = img.crop(custom_crops[idx])
        else:
            r = idx // 2
            c = idx % 2
            cell = img.crop((c * cw, r * ch, (c + 1) * cw, (r + 1) * ch))

        cleaned = remove_bg_magenta_vectorized(cell, threshold=160.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=5)

        drop_boxes = drop_boxes_per_cell[idx] if (drop_boxes_per_cell and idx < len(drop_boxes_per_cell)) else None
        final_img = extract_primary_components_fast(cleaned, min_area_fraction=0.10, drop_boxes=drop_boxes)

        out_path = os.path.join(DEST_DIR, f"{name}.png")
        final_img.save(out_path)
        print(f"  [OK] Processed: {name}.png ({final_img.size})")

def process_evidence_icons(ev_name: str):
    ev_path = os.path.join(ARTIFACT_DIR, ev_name)
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
        else:
            out_img = filtered

        out_path = os.path.join(DEST_DIR, name)
        out_img.save(out_path)
        print(f"  [OK] Processed: {name} ({out_img.size})")

def process_cutins(cutin_name: str):
    cutin_path = os.path.join(ARTIFACT_DIR, cutin_name)
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

        out_path = os.path.join(DEST_DIR, f"{name}.png")
        filtered.save(out_path)
        print(f"  [OK] Processed: {name}.png ({filtered.size})")

def run_all_fixes():
    print("=== EXECUTING HIGH-PERFORMANCE ASSET RE-PROCESSING ===")

    # 1. Chapulín Colorado
    # Point (cell 2): extend crop to x: 0..576 so pointing hand is fully captured. Drop neighbor panic wing at (535, 350, 576, 512).
    # Panic (cell 3): drop neighbor pointing finger bleed at (0, 100, 65, 230).
    chap_crops = [
        None,
        None,
        (0, 512, 576, 1024),
        None
    ]
    chap_drop = [
        None, # Idle
        None, # Slam
        [(535, 350, 576, 512)], # Point: drop panic wing on bottom right
        [(0, 100, 65, 230)] # Panic: Drop pointing hand bleed from left neighbor
    ]
    process_character_sheet(
        "chapulin_sprites_1787377102240.jpg",
        ["chapulin_idle", "chapulin_slam", "chapulin_point", "chapulin_panic"],
        chap_drop,
        chap_crops
    )

    # 2. Super Sam
    sam_drop = [
        [(0, 0, 50, 50)], # Idle: drop corner [1]
        [(0, 0, 50, 50), (20, 180, 135, 360)], # Slam: drop corner [2] and speech bubble
        [(300, 0, 512, 138)], # Point: drop "TIME IS MONEY" speech bubble without clipping hand
        [(0, 0, 50, 50)]  # Breakdown: drop corner [4]
    ]
    process_character_sheet(
        "supersam_sprites_1787377120436.jpg",
        ["supersam_idle", "supersam_slam", "supersam_point", "supersam_breakdown"],
        sam_drop
    )

    # 3. El Tripaseca
    process_character_sheet(
        "tripaseca_sprites_1787377534812.jpg",
        ["tripaseca_smug", "tripaseca_sweat", "tripaseca_panic", "tripaseca_breakdown"],
        None
    )

    # 4. El Juez (The Judge)
    process_character_sheet(
        "judge_sprites_1787377585527.jpg",
        ["judge_neutral", "judge_gavel", "judge_shock", "judge_thinking"],
        None
    )

    # 5. Doña Florinda (Museum Curator)
    # Drop top text banner zones (y in 0..55)
    flor_drop = [
        [(0, 0, 512, 55)],
        [(0, 0, 512, 55)],
        [(0, 0, 512, 55)],
        [(0, 0, 512, 55)]
    ]
    process_character_sheet(
        "witness_florinda_sprites_1787377757004.jpg",
        ["florinda_idle", "florinda_angry", "florinda_crying", "florinda_shock"],
        flor_drop
    )
    shutil.copy(os.path.join(DEST_DIR, "florinda_idle.png"), os.path.join(DEST_DIR, "florinda_fanning.png"))

    # 6. Objection Cut-Ins
    process_cutins("ui_objection_cutins_1787377615093.jpg")

    # 7. Evidence Icons
    process_evidence_icons("evidence_icons_1787377665647.jpg")

    # 8. Backgrounds
    bgs = [
        ("court_witness_stand_1787377876023.jpg", "bg_witness.jpg"),
        ("court_judge_view_1787377926397.jpg", "bg_judge.jpg"),
        ("museum_crime_scene_1787377814093.jpg", "bg_museum.jpg"),
        ("detention_center_room_1787377837506.jpg", "bg_detention.jpg"),
        ("courtroom_scenes_1787377789540.jpg", "bg_courtroom.jpg")
    ]
    for src, dst in bgs:
        src_p = os.path.join(ARTIFACT_DIR, src)
        if os.path.exists(src_p):
            shutil.copy(src_p, os.path.join(DEST_DIR, dst))
            print(f"  [OK] Copied background: {dst}")

    print("\nAll assets cleaned, despilled, and saved successfully!")

if __name__ == "__main__":
    run_all_fixes()
