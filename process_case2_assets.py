# @Architecture(descriptionShort="Case 2 sprite, evidence, and background extraction", type="pipeline", icon="wrench")
"""Extract Case 2 poses, court-record icons, and location backgrounds into assets/."""

import os
import shutil

from PIL import Image

from process_assets import (
    DEST_DIR,
    clean_edges_vectorized,
    despill_final,
    extract_primary_components_fast,
    find_asset_file,
    process_character_sheet,
    remove_bg_magenta_vectorized,
)

os.makedirs(DEST_DIR, exist_ok=True)

SHEETS = [
    ("chompiras_sprites_raw.png",
     ["chompiras_idle", "chompiras_nervous", "chompiras_crying", "chompiras_relieved"]),
    ("peterete_sprites_raw.png",
     ["peterete_smug", "peterete_thinking", "peterete_sweat", "peterete_panic"]),
    ("jirafales_sprites_raw.png",
     ["jirafales_idle", "jirafales_smoking", "jirafales_angry", "jirafales_shock"]),
    ("jaimito_sprites_raw.png",
     ["jaimito_idle", "jaimito_tired", "jaimito_proud", "jaimito_talk"]),
    ("clotilde_sprites_raw.png",
     ["clotilde_idle", "clotilde_flustered", "clotilde_mysterious", "clotilde_cackle"]),
]

EV_NAMES = [
    "chanfle_oro.png", "reloj_pendulo.png", "informe_boveda.png", "palanca_rota.png",
    "aroma_dulce.png", "plano_hacienda.png", "caja_generador.png", "registro_postal.png",
    "multa_transito.png", "frasco_valeriana.png", "molde_cera.png", "lata_grasa.png",
]

BGS = [
    "bg_boveda.jpg", "bg_restaurante.jpg", "bg_postal.jpg", "bg_clotilde.jpg",
    "bg_waiting_room.jpg",
]


STANDING_CANVAS = 512
STANDING_HEM_MARGIN = 5


def anchor_standing_bust(img: Image.Image) -> Image.Image:
    """Sit the opaque hem on the canvas floor so the plain stage meets the dialogue box."""
    bbox = img.getbbox()
    if not bbox:
        return img
    cropped = img.crop(bbox)
    canvas = Image.new("RGBA", (STANDING_CANVAS, STANDING_CANVAS), (0, 0, 0, 0))
    ox = (STANDING_CANVAS - cropped.width) // 2
    oy = STANDING_CANVAS - STANDING_HEM_MARGIN - cropped.height
    if oy < 0:
        oy = 0
    canvas.paste(cropped, (ox, oy), cropped)
    return canvas


def process_grid_cell(sheet_name: str, out_name: str, cell_xy: tuple[int, int]) -> None:
    """Crop one 2x2 cell (col, row) and chroma-key it into assets/."""
    path = find_asset_file(sheet_name)
    if not os.path.exists(path):
        print(f"Warning: Sheet not found {path}")
        return
    img = Image.open(path)
    w, h = img.size
    cw, ch = w // 2, h // 2
    col, row = cell_xy
    cell = img.crop((col * cw, row * ch, (col + 1) * cw, (row + 1) * ch))
    cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=5)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.10)
    final_img = despill_final(filtered)
    final_img.save(os.path.join(DEST_DIR, f"{out_name}.png"))
    print(f"  [OK] Processed: {out_name}.png ({final_img.size})")


def icon_drop_boxes(cw: int, ch: int) -> list:
    """Outer card frame + bottom label zone, scaled to cell size."""
    return [
        (0, int(ch * 0.80), cw, ch),
        (0, 0, cw, 40),
        (0, 0, 8, ch),
        (cw - 8, 0, cw, ch),
    ]


def save_evidence_icon(filtered: Image.Image, name: str) -> None:
    bbox = filtered.getbbox()
    if not bbox:
        despill_final(filtered).save(os.path.join(DEST_DIR, name))
        return
    cropped = filtered.crop(bbox)
    max_dim = max(cropped.width, cropped.height)
    canvas = Image.new("RGBA", (max_dim + 12, max_dim + 12), (0, 0, 0, 0))
    ox = (canvas.width - cropped.width) // 2
    oy = (canvas.height - cropped.height) // 2
    canvas.paste(cropped, (ox, oy))
    out_img = canvas.resize((128, 128), Image.Resampling.LANCZOS)
    out_img = despill_final(out_img)
    out_img.save(os.path.join(DEST_DIR, name))
    print(f"  [OK] Processed: {name} ({out_img.size})")


def process_case2_evidence() -> None:
    path = find_asset_file("case2_evidence_icons_raw.png")
    if not os.path.exists(path):
        print(f"Warning: Evidence sheet not found {path}")
        return
    img = Image.open(path)
    w, h = img.size
    cw, ch = w // 4, h // 3
    drops = icon_drop_boxes(cw, ch)
    for idx, name in enumerate(EV_NAMES):
        col, row = idx % 4, idx // 4
        cell = img.crop((col * cw, row * ch, (col + 1) * cw, (row + 1) * ch))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=4)
        filtered = extract_primary_components_fast(
            cleaned, min_area_fraction=0.15, drop_boxes=drops
        )
        save_evidence_icon(filtered, name)


def copy_backgrounds() -> None:
    for name in BGS:
        src_p = find_asset_file(name)
        if not os.path.exists(src_p):
            print(f"Warning: Background not found {src_p}")
            continue
        shutil.copy(src_p, os.path.join(DEST_DIR, name))
        print(f"  [OK] Copied background: {name}")


def run_case2() -> None:
    print("=== CASE 2 ASSET PROCESSING ===")
    for sheet, names in SHEETS:
        process_character_sheet(sheet, names)
    process_grid_cell("peterete_breakdown_raw.png", "peterete_breakdown", (0, 0))
    process_grid_cell("supersam_sweat_raw.png", "supersam_sweat", (1, 0))
    process_grid_cell("donramon_shock_raw.png", "donramon_shock", (0, 0))
    shock_path = os.path.join(DEST_DIR, "donramon_shock.png")
    if os.path.exists(shock_path):
        anchored = despill_final(anchor_standing_bust(Image.open(shock_path)))
        anchored.save(shock_path)
        print(f"  [OK] Anchored standing hem: donramon_shock.png ({anchored.size})")
    process_case2_evidence()
    copy_backgrounds()
    print("\nCase 2 assets saved.")


if __name__ == "__main__":
    run_case2()
