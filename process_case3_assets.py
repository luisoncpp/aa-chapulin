# @Architecture(descriptionShort="Case 3 sprite, evidence, and background extraction", type="pipeline", icon="wrench")
"""Extract Case 3 poses, court-record icons, and location backgrounds into assets/."""

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
from process_case2_assets import (
    anchor_standing_bust,
    icon_drop_boxes,
    process_grid_cell,
    save_evidence_icon,
)

os.makedirs(DEST_DIR, exist_ok=True)

SHEETS = [
    ("chapatin_sprites_raw.png",
     ["chapatin_idle", "chapatin_enojado", "chapatin_bolsa", "chapatin_sweat"]),
    ("pazguato_sprites_raw.png",
     ["pazguato_idle", "pazguato_saludo", "pazguato_sweat", "pazguato_decidido"]),
    ("aniceto_sprites_raw.png",
     ["aniceto_terciopelo", "aniceto_thinking", "aniceto_sweat", "aniceto_panic"]),
    ("barriga_sprites_raw.png",
     ["barriga_idle", "barriga_vendado", "barriga_shock", "barriga_enojado"]),
    ("nono_sprites_raw.png",
     ["nono_idle", "nono_nervioso", "nono_llorando"]),
    ("chimoltrufia_sprites_raw.png",
     ["chimoltrufia_idle", "chimoltrufia_confundida", "chimoltrufia_shock"]),
]

EV_A = [
    (2, 0, "lentes_barriga.png"),
    (3, 0, "microfono_oro.png"),
    (0, 1, "bolsa_papel.png"),
    (1, 1, "microfono_cabina.png"),
    (2, 1, "cinta_salud.png"),
    (3, 1, "marcas_carrito.png"),
    (0, 2, "ventana_cabina.png"),
    (1, 2, "libro_verde.png"),
    (2, 2, "bitacora_transmision.png"),
    (3, 2, "receta_nono.png"),
]

EV_B = [
    (0, 0, "programa_kermes.png"),
    (1, 0, "ataduras_bodega.png"),
    (2, 0, "cartucho_corte.png"),
    (0, 1, "cinta_sketch.png"),
    (1, 1, "boleta_empeno.png"),
]

BGS = [
    "bg_cabina.jpg", "bg_kermes.jpg", "bg_despacho.jpg",
    "bg_clinica.jpg", "bg_bodega.jpg", "bg_delegacion.jpg",
]


def process_full_pose(sheet_name: str, out_name: str) -> None:
    path = find_asset_file(sheet_name)
    if not os.path.exists(path):
        print(f"Warning: Sheet not found {path}")
        return
    img = Image.open(path)
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=5)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
    anchored = despill_final(anchor_standing_bust(filtered))
    anchored.save(os.path.join(DEST_DIR, f"{out_name}.png"))
    print(f"  [OK] Processed: {out_name}.png ({anchored.size})")


def process_evidence_grid(sheet_name: str, cells: list, cols: int, rows: int) -> None:
    path = find_asset_file(sheet_name)
    if not os.path.exists(path):
        print(f"Warning: Evidence sheet not found {path}")
        return
    img = Image.open(path)
    w, h = img.size
    cw, ch = w // cols, h // rows
    drops = icon_drop_boxes(cw, ch)
    for col, row, name in cells:
        cell = img.crop((col * cw, row * ch, (col + 1) * cw, (row + 1) * ch))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=4)
        filtered = extract_primary_components_fast(
            cleaned, min_area_fraction=0.12, drop_boxes=drops
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


def run_case3() -> None:
    print("=== CASE 3 ASSET PROCESSING ===")
    for sheet, names in SHEETS:
        process_character_sheet(sheet, names)
    process_grid_cell("chapatin_conmovido_raw.png", "chapatin_conmovido", (0, 0))
    shock_path = os.path.join(DEST_DIR, "chapatin_conmovido.png")
    if os.path.exists(shock_path):
        anchored = despill_final(anchor_standing_bust(Image.open(shock_path)))
        anchored.save(shock_path)
    process_full_pose("aniceto_breakdown_raw.png", "aniceto_breakdown")
    process_evidence_grid("case3_evidence_icons_raw.png", EV_A, 4, 4)
    process_evidence_grid("case3_evidence_icons_b_raw.png", EV_B, 3, 2)
    copy_backgrounds()
    print("\nCase 3 assets saved.")


if __name__ == "__main__":
    run_case3()
