# @Architecture(descriptionShort="Case 4 sprite, evidence, and hotel plate extraction", type="pipeline", icon="wrench")
"""Extract Case 4 poses, court-record icons, hotel plates, and examine views."""

import os

from PIL import Image

from process_assets import DEST_DIR, find_asset_file, process_character_sheet
from process_case3_assets import (
    floor_standing_busts,
    process_evidence_grid,
    process_full_pose,
)

os.makedirs(DEST_DIR, exist_ok=True)

SHEETS = [
    ("botija_sprites_raw.png",
     ["botija_idle", "botija_nervioso", "botija_llorando", "botija_aliviado"]),
    ("cecilio_sprites_raw.png",
     ["cecilio_idle", "cecilio_ciego", "cecilio_escandalo", "cecilio_shock"]),
    ("maruja_sprites_raw.png",
     ["maruja_idle", "maruja_coqueta", "maruja_abanico", "maruja_nerviosa"]),
    ("rufino_sprites_raw.png",
     ["rufino_smug", "rufino_monocle", "rufino_sweat", "rufino_panic"]),
]

# foto_crimen.webp is a shared EvidenceId with Case 1; this sheet paints the
# Suite 304 polaroid used by Case 4 Present & Point.
EV = [
    (0, 0, "informe_policial.webp"),
    (1, 0, "foto_crimen.webp"),
    (2, 0, "candado_cadena.webp"),
    (3, 0, "plano_hotel.webp"),
    (0, 1, "residuos_manos.webp"),
    (1, 1, "billetera_cuajinais.webp"),
    (2, 1, "informe_forense.webp"),
    (3, 1, "casquillo_fogueo.webp"),
    (0, 2, "registro_montacargas.webp"),
    (1, 2, "copa_vino.webp"),
    (2, 2, "botella_vino.webp"),
    (3, 2, "boleta_baccarat.webp"),
    (0, 3, "baul_etiquetas.webp"),
    (1, 3, "sello_lacre.webp"),
    (2, 3, "nota_amenaza.webp"),
]

BGS = [
    ("bg_hotel_lobby.jpg", "bg_hotel_lobby.webp"),
    ("bg_hotel_suite.jpg", "bg_hotel_suite.webp"),
    ("bg_hotel_bar.jpg", "bg_hotel_bar.webp"),
    ("bg_hotel_sotano.jpg", "bg_hotel_sotano.webp"),
    ("bg_hotel_suite204.jpg", "bg_hotel_suite204.webp"),
    ("bg_hotel_cava.jpg", "bg_hotel_cava.webp"),
    ("bg_hotel_azotea.jpg", "bg_hotel_azotea.webp"),
]

EXAMINE = [
    ("examine_foto.jpg", "examine_foto.webp"),
    ("examine_cadena.jpg", "examine_cadena.webp"),
    ("examine_plano.jpg", "examine_plano.webp"),
    ("examine_botella.jpg", "examine_botella.webp"),
    ("examine_nota.jpg", "examine_nota.webp"),
]

FLOOR_BUSTS = [name for _sheet, names in SHEETS for name in names] + [
    "maruja_shock", "rufino_breakdown",
]

BG_SIZE = (1536, 1024)
EXAMINE_SIZE = (960, 540)


def cover_crop(img: Image.Image, size: tuple) -> Image.Image:
    """Center cover-crop so 4:3 plates become 3:2 and 16:9 stays 16:9."""
    tw, th = size
    rgb = img.convert("RGB")
    w, h = rgb.size
    scale = max(tw / w, th / h)
    nw = max(1, int(w * scale + 0.5))
    nh = max(1, int(h * scale + 0.5))
    resized = rgb.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def export_plates(pairs: list, size: tuple) -> None:
    for src_name, dst_name in pairs:
        src_p = find_asset_file(src_name)
        if not os.path.exists(src_p):
            print(f"Warning: Plate not found {src_p}")
            continue
        out = cover_crop(Image.open(src_p), size)
        out.save(os.path.join(DEST_DIR, dst_name), "WEBP", quality=85, method=6)
        print(f"  [OK] Saved WebP plate: {dst_name} {out.size}")


def run_case4() -> None:
    print("=== CASE 4 ASSET PROCESSING ===")
    for sheet, names in SHEETS:
        process_character_sheet(sheet, names)
    process_full_pose("maruja_shock_raw.png", "maruja_shock")
    process_full_pose("rufino_breakdown_raw.png", "rufino_breakdown")
    # Every plain bust: floor_standing_busts → anchor_standing_bust (canvas hem).
    floor_standing_busts(FLOOR_BUSTS)
    # 4×4 card grid; cell (3,3) is unused magenta.
    process_evidence_grid("case4_evidence_icons_raw.png", EV, 4, 4)
    export_plates(BGS, BG_SIZE)
    export_plates(EXAMINE, EXAMINE_SIZE)
    print("\nCase 4 assets saved.")


if __name__ == "__main__":
    run_case4()
