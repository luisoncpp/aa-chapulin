# @Architecture(descriptionShort="Case 5 sprite and archive background extraction", type="pipeline", icon="wrench")
"""Extract Case 5 poses and investigation backgrounds from tools/raw/case5/."""

import argparse
import os

from PIL import Image

from process_assets import (
    DEST_DIR,
    clean_edges_vectorized,
    despill_final,
    extract_primary_components_fast,
    remove_bg_magenta_vectorized,
)
from process_case2_assets import anchor_standing_bust, icon_drop_boxes, save_evidence_icon
from process_case3_assets import floor_standing_busts

os.makedirs(DEST_DIR, exist_ok=True)
CASE5_RAW_DIR = os.path.join(os.path.dirname(__file__), "tools", "raw", "case5")

SHEETS = [
    ("barriga_healthy_poses_raw.png",
     ["barriga_sorpresa", "barriga_reclamo", "barriga_confundido", "barriga_aliviado"]),
    ("berrondo_sprites_raw.png",
     ["berrondo_idle", "berrondo_definicion", "berrondo_sweat", "berrondo_panic"]),
    ("nicanor_sprites_raw.png",
     ["nicanor_idle", "nicanor_escoba"]),
    ("genoveva_sprites_raw.png",
     ["genoveva_idle", "genoveva_reglamento", "genoveva_sweat", "genoveva_shock"]),
    ("secretario_sprites_raw.png",
     ["secretario_leyendo", "secretario_leyendo_senala", "secretario_leyendo_pagina", "secretario_leyendo_mira"]),
]

def output_stem(filename: str) -> str:
    return os.path.splitext(os.path.basename(filename))[0]


BGS = [
    ("bg_archivo_vestibulo.jpg", "bg_archivo_vestibulo.webp"),
    ("bg_archivo_pasillo7.jpg", "bg_archivo_pasillo7.webp"),
    ("bg_archivo_pasillo7_d4.jpg", "bg_archivo_pasillo7_d4.webp"),
    ("bg_correspondencia.jpg", "bg_correspondencia.webp"),
    ("bg_despacho_berrondo.jpg", "bg_despacho_berrondo.webp"),
    ("bg_bodega_masa.jpg", "bg_bodega_masa.webp"),
    ("bg_fiscalia.jpg", "bg_fiscalia.webp"),
    ("bg_penal_efectos.jpg", "bg_penal_efectos.webp"),
    ("bg_archivo_caldera.jpg", "bg_archivo_caldera.webp"),
]

EXAMINE = [
    ("examine_esquina_tarjeta.png", "examine_esquina_tarjeta.webp"),
    ("examine_libro_visitas.jpg", "examine_libro_visitas.webp"),
    ("examine_libro_peritos.jpg", "examine_libro_peritos.webp"),
    ("examine_plano_archivo.jpg", "examine_plano_archivo.webp"),
    ("examine_nota_renta.jpg", "examine_nota_renta.webp"),
    ("examine_acuse.jpg", "examine_acuse.webp"),
    ("examine_credencial.jpg", "examine_credencial.webp"),
    ("examine_inventario.jpg", "examine_inventario.webp"),
    ("examine_expediente_serie.jpg", "examine_expediente_serie.webp"),
    ("examine_tomo_caido.jpg", "examine_tomo_caido.webp"),
    ("examine_estante_consulta.jpg", "examine_estante_consulta.webp"),
    ("examine_huacal9.jpg", "examine_huacal9.webp"),
    ("examine_maquina.jpg", "examine_maquina.webp"),
    ("examine_ficha_domicilio.png", "examine_ficha_domicilio.webp"),
    ("examine_termografo.jpg", "examine_termografo.webp"),
    ("examine_efectos.jpg", "examine_efectos.webp"),
]

DIDACTIC = [
    ("plate_dos_accesos.jpg", "plate_dos_accesos.webp"),
    ("plate_foto_pericial.jpg", "plate_foto_pericial.webp"),
    ("plate_masa_concursal.jpg", "plate_masa_concursal.webp"),
    ("plate_anatomia_ficha.jpg", "plate_anatomia_ficha.webp"),
    ("plate_cinco_papeles.jpg", "plate_cinco_papeles.webp"),
    ("plate_huacal_sellos.jpg", "plate_huacal_sellos.webp"),
    ("plate_curva_enfriamiento.jpg", "plate_curva_enfriamiento.webp"),
    ("plate_tomo_trece.jpg", "plate_tomo_trece.webp"),
    ("plate_cuatro_renglones.jpg", "plate_cuatro_renglones.webp"),
    ("plate_cuatro_renglones_en.jpg", "plate_cuatro_renglones_en.webp"),
]

EXAMINE_EN = [
    (f"{output_stem(src)}_en{os.path.splitext(src)[1]}", f"{output_stem(src)}_en.webp")
    for src, _ in EXAMINE
    if output_stem(src) not in ("examine_estante_consulta", "examine_maquina")
]

EV_ICONS = [
    (0, 0, "parte_detencion_c5.webp"), (1, 0, "esquina_tarjeta.webp"),
    (2, 0, "informe_forense_c5.webp"), (3, 0, "tomo_caido.webp"),
    (4, 0, "estante_consulta.webp"), (5, 0, "libro_visitas.webp"),
    (0, 1, "plano_archivo.webp"), (1, 1, "expediente_casimiro.webp"),
    (2, 1, "recibo_renta.webp"), (3, 1, "nota_mecanografiada.webp"),
    (4, 1, "acuse_notificacion.webp"), (5, 1, "credencial_sindico.webp"),
    (0, 2, "inventario_1971.webp"), (1, 2, "libro_peritos.webp"),
    (2, 2, "expediente_serie.webp"), (3, 2, "huacal_9.webp"),
    (4, 2, "fichero_cedulario.webp"), (5, 2, "maquina_escribir.webp"),
    (0, 3, "oficio_diligencia.webp"), (1, 3, "efectos_casimiro.webp"),
    (2, 3, "bitacora_caldera.webp"), (3, 3, "ficha_domicilio.webp"),
]

PROFILE_COLORS = {
    "donramon": (35, 52, 78), "chapulin": (142, 28, 36), "casimiro": (58, 74, 52),
    "supersam": (92, 68, 28), "berrondo": (48, 44, 62), "nicanor": (38, 58, 88),
    "genoveva": (72, 52, 68), "sargento": (44, 62, 44), "barriga": (88, 48, 32),
    "chompiras": (52, 48, 72),
}

BG_SIZE = (1536, 1024)
PLATE_SIZE = (960, 540)
EXTRA_POSES = [
    ("berrondo_breakdown_raw.png", "berrondo_breakdown"),
    ("nicanor_sweat_raw.png", "nicanor_sweat"),
]
FLOOR_BUSTS = [name for _sheet, names in SHEETS for name in names] + [
    name for _src, name in EXTRA_POSES
]


def raw_path(filename: str) -> str:
    return os.path.join(CASE5_RAW_DIR, filename)


def process_character_sheet(sheet_name: str, pose_names: list[str]) -> None:
    sheet_path = raw_path(sheet_name)
    if not os.path.exists(sheet_path):
        print(f"Warning: Sheet not found {sheet_path}")
        return
    with Image.open(sheet_path) as img:
        if sheet_name == "barriga_healthy_poses_raw.png":
            magenta = Image.new("RGBA", img.size, (255, 0, 255, 255))
            magenta.alpha_composite(img.convert("RGBA"))
            img = magenta
        cell_width, cell_height = img.width // 2, img.height // 2
        for idx, name in enumerate(pose_names):
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


def process_full_poses(selected: set[str] | None) -> None:
    for src_name, out_name in EXTRA_POSES:
        if selected is not None and out_name not in selected:
            continue
        path = raw_path(src_name)
        if not os.path.exists(path):
            print(f"Warning: Sheet not found {path}")
            continue
        with Image.open(path) as img:
            cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
            cleaned = clean_edges_vectorized(cleaned, depth=5)
            filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
            anchored = despill_final(anchor_standing_bust(filtered))
            anchored.save(os.path.join(DEST_DIR, f"{out_name}.webp"), "WEBP", quality=85, method=6)
            print(f"  [OK] Processed: {out_name}.webp ({anchored.size})")


def cover_crop(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    """Center cover-crop 4:3 plates to the runtime 3:2 background size."""
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


def export_backgrounds(selected: set[str] | None) -> None:
    export_plates(BGS, BG_SIZE, selected, "background")


def export_plates(
    pairs: list[tuple[str, str]],
    size: tuple[int, int],
    selected: set[str] | None,
    label: str,
) -> None:
    for src_name, dst_name in pairs:
        if selected is not None and output_stem(dst_name) not in selected:
            continue
        src_p = raw_path(src_name)
        if not os.path.exists(src_p):
            print(f"Warning: {label} not found {src_p}")
            continue
        out = cover_crop(Image.open(src_p), size)
        out.save(os.path.join(DEST_DIR, dst_name), "WEBP", quality=85, method=6)
        print(f"  [OK] Saved WebP {label}: {dst_name} {out.size}")


def export_evidence_icons() -> None:
    sheet = raw_path("case5_evidence_icons_raw.png")
    if not os.path.exists(sheet):
        print(f"Warning: Evidence sheet not found {sheet}")
        return
    img = Image.open(sheet)
    cols, rows = 6, 4
    cw, ch = img.width // cols, img.height // rows
    drops = icon_drop_boxes(cw, ch)
    for col, row, name in EV_ICONS:
        cell = img.crop((col * cw, row * ch, (col + 1) * cw, (row + 1) * ch))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=4)
        filtered = extract_primary_components_fast(
            cleaned, min_area_fraction=0.12, drop_boxes=drops
        )
        save_evidence_icon(filtered, name)


def export_address_icons(selected: set[str] | None) -> None:
    """The corner and its parent must retain the composed plate's identity."""
    for name in ("ficha_domicilio", "esquina_tarjeta"):
        if selected is not None and name not in selected:
            continue
        with Image.open(raw_path(f"{name}_derived.png")) as icon:
            icon.save(os.path.join(DEST_DIR, f"{name}.webp"),
                      "WEBP", quality=85, method=6)


def export_profiles(selected: set[str] | None) -> None:
    for profile_id, color in PROFILE_COLORS.items():
        out = f"profile_perfil_{profile_id}.webp"
        if selected is not None and output_stem(out) not in selected:
            continue
        pose = "casimiro_amable" if profile_id == "casimiro" else (
            "pazguato_idle" if profile_id == "sargento" else f"{profile_id}_idle"
        )
        src = os.path.join(DEST_DIR, f"{pose}.webp")
        if not os.path.exists(src):
            print(f"Warning: Profile pose not found {src}")
            continue
        img = Image.open(src).convert("RGBA")
        crop = img.crop((0, 0, img.width, int(img.height * 0.72)))
        bbox = crop.getbbox()
        if not bbox:
            continue
        bust = crop.crop(bbox)
        scale = min(220 / bust.width, 220 / bust.height, 1)
        bust = bust.resize(
            (max(1, int(bust.width * scale)), max(1, int(bust.height * scale))),
            Image.Resampling.LANCZOS,
        )
        canvas = Image.new("RGBA", (256, 256), (*color, 255))
        ox = (256 - bust.width) // 2
        oy = (256 - bust.height) // 2
        canvas.alpha_composite(bust, dest=(ox, oy))
        canvas.save(os.path.join(DEST_DIR, out), "WEBP", quality=85, method=6)
        print(f"  [OK] Saved profile: {out}")


def all_output_stems() -> set[str]:
    names = set(FLOOR_BUSTS)
    names.update(output_stem(pair[1]) for pair in BGS)
    names.update(output_stem(pair[1]) for pair in EXAMINE)
    names.update(output_stem(pair[1]) for pair in EXAMINE_EN)
    names.update(output_stem(pair[1]) for pair in DIDACTIC)
    names.update(output_stem(name) for _, _, name in EV_ICONS)
    names.update(f"profile_perfil_{pid}" for pid in PROFILE_COLORS)
    return names


def parse_selected_assets() -> set[str] | None:
    parser = argparse.ArgumentParser(
        description="Regenerate all Case 5 assets, or only selected output names."
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
        parser.error(f"Unknown Case 5 asset(s): {', '.join(unknown)}")
    return selected


def run_case5(selected: set[str] | None = None) -> None:
    print("=== CASE 5 ASSET PROCESSING ===")
    for sheet, names in SHEETS:
        selected_poses = names if selected is None else [n for n in names if n in selected]
        if selected_poses:
            process_character_sheet(sheet, selected_poses)
    process_full_poses(selected)
    floor_standing_busts(
        FLOOR_BUSTS if selected is None else [n for n in FLOOR_BUSTS if n in selected]
    )
    export_backgrounds(selected)
    export_plates(EXAMINE, PLATE_SIZE, selected, "examine plate")
    export_plates(EXAMINE_EN, PLATE_SIZE, selected, "examine plate EN")
    export_plates(DIDACTIC, PLATE_SIZE, selected, "didactic plate")
    want_icons = selected is None or any(
        output_stem(name) in selected for _, _, name in EV_ICONS
    )
    if want_icons:
        export_evidence_icons()
    export_address_icons(selected)
    export_profiles(selected)
    print("\nCase 5 assets saved.")


if __name__ == "__main__":
    run_case5(parse_selected_assets())
