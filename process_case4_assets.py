# @Architecture(descriptionShort="Case 4 sprite, evidence, and hotel plate extraction", type="pipeline", icon="wrench")
"""Extract Case 4 poses, court-record icons, hotel plates, and examine views."""

import argparse
import os

from PIL import Image, ImageDraw

from process_assets import (
    DEST_DIR,
    clean_edges_vectorized,
    despill_final,
    extract_primary_components_fast,
    find_asset_file,
    process_character_sheet,
    remove_bg_magenta_vectorized,
)
from process_case3_assets import (
    floor_standing_busts,
    process_evidence_grid,
    process_full_pose,
    process_unlabeled_evidence_grid,
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

# Case 1 owns assets/foto_crimen.webp (museum still). Case 4 uses a unique icon.
EV = [
    (0, 0, "informe_policial.webp"),
    (1, 0, "foto_suite304.webp"),
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

# 1×1 replacements for rewrite icons (and two new ids). Overwrite 4×4 cells of the same name.
SOLO_ICONS = [
    ("orden_servicios_icon_raw.png", "orden_servicios.webp"),
    ("toxicologia_vino_icon_raw.png", "toxicologia_vino.webp"),
    ("casquillo_fogueo_icon_raw.png", "casquillo_fogueo.webp"),
    ("sello_lacre_icon_raw.png", "sello_lacre.webp"),
    ("candado_cadena_icon_raw.png", "candado_cadena.webp"),
    ("registro_montacargas_icon_raw.png", "registro_montacargas.webp"),
    ("informe_forense_icon_raw.png", "informe_forense.webp"),
    ("botella_vino_icon_raw.png", "botella_vino.webp"),
]

BGS = [
    ("bg_hotel_lobby.jpg", "bg_hotel_lobby.webp"),
    ("bg_hotel_bar.jpg", "bg_hotel_bar.webp"),
    ("bg_hotel_sotano.jpg", "bg_hotel_sotano.webp"),
    ("bg_hotel_suite204.jpg", "bg_hotel_suite204.webp"),
    ("bg_hotel_cava.jpg", "bg_hotel_cava.webp"),
    ("bg_hotel_azotea.jpg", "bg_hotel_azotea.webp"),
    ("bg_hotel_azotea_day.png", "bg_hotel_azotea_day.webp"),
]

EXAMINE = [
    # examine_foto.jpg is retained as the historical source; v3 overrides it below.
    ("examine_cadena.jpg", "examine_cadena.webp"),
    ("examine_plano.jpg", "examine_plano.webp"),
    ("examine_botella.jpg", "examine_botella.webp"),
    ("examine_nota.jpg", "examine_nota.webp"),
    ("examine_orden.jpg", "examine_orden.webp"),
    ("examine_registro.jpg", "examine_registro.webp"),
    ("examine_sello.jpg", "examine_sello.webp"),
]

FLOOR_BUSTS = [name for _sheet, names in SHEETS for name in names] + [
    "maruja_shock", "rufino_breakdown",
]

SOLO_ICONS = [
    ("orden_servicios_icon_raw.png", "orden_servicios.webp"),
    ("toxicologia_vino_icon_raw.png", "toxicologia_vino.webp"),
    ("casquillo_fogueo_icon_raw.png", "casquillo_fogueo.webp"),
    ("sello_lacre_icon_raw.png", "sello_lacre.webp"),
    ("candado_cadena_icon_raw.png", "candado_cadena.webp"),
    ("registro_montacargas_icon_raw.png", "registro_montacargas.webp"),
    ("informe_forense_icon_raw.png", "informe_forense.webp"),
    ("botella_vino_icon_raw.png", "botella_vino.webp"),
]
EXAMINE_SIZE = (960, 540)
BG_SIZE = (1536, 1024)
WIDE_BG_SIZE = (1536, 864)

WIDE_BGS = [
    ("bg_hotel_suite_v5.png", "bg_hotel_suite.webp"),
]

WIDE_EXAMINE = [
    ("examine_foto_v3.png", "examine_foto.webp"),
]
PHOTO_ICON_SOURCE = "examine_foto_v3.png"


def output_stem(filename: str) -> str:
    return os.path.splitext(os.path.basename(filename))[0]


def pair_outputs(pairs: list, selected: set[str] | None) -> list:
    if selected is None:
        return pairs
    return [pair for pair in pairs if output_stem(pair[1]) in selected]


def process_selected_character_sheet(
    sheet_name: str, pose_names: list[str], selected: set[str]
) -> None:
    sheet_path = find_asset_file(sheet_name)
    if not os.path.exists(sheet_path):
        print(f"Warning: Sheet not found {sheet_path}")
        return
    with Image.open(sheet_path) as img:
        cell_width, cell_height = img.width // 2, img.height // 2
        for idx, name in enumerate(pose_names):
            if name not in selected:
                continue
            row, col = divmod(idx, 2)
            cell = img.crop((
                col * cell_width,
                row * cell_height,
                (col + 1) * cell_width,
                (row + 1) * cell_height,
            ))
            cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
            cleaned = clean_edges_vectorized(cleaned, depth=5)
            final_img = extract_primary_components_fast(cleaned, min_area_fraction=0.10)
            final_img = despill_final(final_img)
            final_img.save(os.path.join(DEST_DIR, f"{name}.webp"), "WEBP", quality=85, method=6)
            print(f"  [OK] Processed: {name}.webp ({final_img.size})")


def all_output_stems() -> set[str]:
    names = set(FLOOR_BUSTS)
    names.update(output_stem(item[2]) for item in EV)
    names.update(output_stem(pair[1]) for pair in SOLO_ICONS)
    names.update(output_stem(pair[1]) for pair in BGS)
    names.update(output_stem(pair[1]) for pair in EXAMINE)
    names.update(output_stem(pair[1]) for pair in WIDE_BGS)
    names.update(output_stem(pair[1]) for pair in WIDE_EXAMINE)
    names.add("foto_suite304")
    return names


def parse_selected_assets() -> set[str] | None:
    parser = argparse.ArgumentParser(
        description="Regenerate all Case 4 assets, or only selected output names."
    )
    parser.add_argument(
        "assets",
        nargs="*",
        metavar="ASSET",
        help="Output stems to regenerate; accepts .webp names and comma-separated values.",
    )
    parser.add_argument(
        "--only",
        nargs="+",
        dest="selected_assets",
        metavar="ASSET",
        help="Regenerate only these output stems.",
    )
    args = parser.parse_args()
    requested = (args.assets or []) + (args.selected_assets or [])
    if not requested:
        return None
    selected = {
        output_stem(value)
        for item in requested
        for value in item.split(",")
        if value
    }
    unknown = sorted(selected - all_output_stems())
    if unknown:
        parser.error(f"Unknown Case 4 asset(s): {', '.join(unknown)}")
    return selected


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


def export_photo_icon() -> None:
    """Make the Court Record polaroid from the approved examine photograph."""
    # The legacy polaroid source is intentionally not reused: it is a different
    # bedroom scene and would break the examine/photo identity lock.
    src_p = find_asset_file(PHOTO_ICON_SOURCE)
    if not os.path.exists(src_p):
        print(f"Warning: Photo icon source not found {src_p}")
        return
    with Image.open(src_p) as source:
        photo = cover_crop(source, (112, 84))
    card = Image.new("RGBA", (128, 128), (0, 0, 0, 0))
    draw = ImageDraw.Draw(card)
    draw.rectangle((4, 4, 123, 123), fill=(248, 246, 237, 255))
    card.paste(photo, (8, 8))
    card.save(os.path.join(DEST_DIR, "foto_suite304.webp"), "WEBP", quality=85, method=6)
    print("  [OK] Saved photo icon from examine_foto_v3.png (128, 128)")


def run_case4(selected: set[str] | None = None) -> None:
    print("=== CASE 4 ASSET PROCESSING ===")
    for sheet, names in SHEETS:
        if selected is None:
            process_character_sheet(sheet, names)
            continue
        selected_poses = [name for name in names if name in selected]
        if selected_poses:
            process_selected_character_sheet(sheet, names, selected)
    if selected is None or "maruja_shock" in selected:
        process_full_pose("maruja_shock_raw.png", "maruja_shock")
    if selected is None or "rufino_breakdown" in selected:
        process_full_pose("rufino_breakdown_raw.png", "rufino_breakdown")
    # Every plain bust: floor_standing_busts → anchor_standing_bust (canvas hem).
    floor_standing_busts(
        FLOOR_BUSTS if selected is None else [name for name in FLOOR_BUSTS if name in selected]
    )
    # 4×4 image-only grid; preserve lower artwork and remove only separators.
    solo_outputs = {output_stem(pair[1]) for pair in SOLO_ICONS}
    grid_items = EV if selected is None else [
        item for item in EV
        if output_stem(item[2]) in selected and output_stem(item[2]) not in solo_outputs
    ]
    if grid_items:
        process_unlabeled_evidence_grid("case4_evidence_icons_raw.png", grid_items, (4, 4))
    for raw, out in pair_outputs(SOLO_ICONS, selected):
        process_evidence_grid(raw, [(0, 0, out)], 1, 1)
    if selected is None or "foto_suite304" in selected:
        export_photo_icon()
    export_plates(pair_outputs(BGS, selected), BG_SIZE)
    export_plates(pair_outputs(EXAMINE, selected), EXAMINE_SIZE)
    export_plates(pair_outputs(WIDE_BGS, selected), WIDE_BG_SIZE)
    export_plates(pair_outputs(WIDE_EXAMINE, selected), EXAMINE_SIZE)
    print("\nCase 4 assets saved.")


if __name__ == "__main__":
    run_case4(parse_selected_assets())
