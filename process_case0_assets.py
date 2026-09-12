# @Architecture(descriptionShort="Case 0 generated asset extraction", type="pipeline", icon="wrench")
"""Deterministically process the generated Case 0 sheets into production WebP assets."""

import argparse
import os
from pathlib import Path

from PIL import Image

from process_assets import (
    DEST_DIR,
    clean_edges_vectorized,
    despill_final,
    extract_primary_components_fast,
    remove_bg_magenta_vectorized,
)
from process_case2_assets import anchor_standing_bust, save_evidence_icon

RAW_DIR = Path(__file__).parent / "tools" / "raw" / "case0"
POSE_SHEETS = {
    "toribio_sheet_raw.png": ["toribio_idle", "toribio_nervioso", "toribio_llorando", "toribio_aliviado"],
    "casimiro_sheet_raw.png": ["casimiro_amable", "casimiro_catalogo", "casimiro_sweat", "casimiro_panic"],
}
FULL_POSES = {"casimiro_breakdown_raw.png": "casimiro_breakdown"}
ICON_NAMES = [
    "parte_detencion", "informe_lesiones", "recibo_hielo", "foto_patio",
    "plancha_carbon", "lata_ahorros", "maletin_cobranza", "tarjeta_enciclopedias",
]
PLATE_NAMES = [
  "examine_recibo_hielo", "examine_foto_patio", "examine_plancha",
  "examine_lata", "examine_informe_lesiones", "examine_maletin_cobranza",
  "point_foto_patio", "point_plancha",
]
SINGLE_PLATE_SOURCES = {
    "examine_lata_raw.png": ("examine_lata", (960, 540)),
    "examine_maletin_cobranza_raw.png": ("examine_maletin_cobranza", (960, 540)),
    # Overrides the contact-sheet cell: that cell drew the charcoal iron, which is
    # the answer to climax stage 1. foto_nazario still derives from the sheet.
    "examine_informe_lesiones_raw.png": ("examine_informe_lesiones", (960, 540)),
    "waiting_room_newspaper_raw.png": ("bg_waiting_room_case0", (1536, 1024)),
}
SINGLE_ICON_SOURCES = {"maletin_cobranza_icon_raw.png": "maletin_cobranza"}
SAVINGS_CLUE_CONTRACT = "single soot/grease mark; no fingerprint or ridge pattern"


def selected_outputs() -> set[str] | None:
    parser = argparse.ArgumentParser()
    parser.add_argument("assets", nargs="*")
    parser.add_argument("--only", nargs="+", dest="only")
    args = parser.parse_args()
    requested = (args.assets or []) + (args.only or [])
    if not requested:
        return None
    selected = {Path(item).stem for group in requested for item in group.split(",") if item}
    known = {name for names in POSE_SHEETS.values() for name in names} | set(FULL_POSES.values()) | set(ICON_NAMES) | set(PLATE_NAMES) | {name for name, _ in SINGLE_PLATE_SOURCES.values()}
    unknown = sorted(selected - known)
    if unknown:
        parser.error(f"Unknown Case 0 asset(s): {', '.join(unknown)}")
    return selected


def process_pose(image: Image.Image, name: str) -> None:
    cleaned = remove_bg_magenta_vectorized(image, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=5)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
    # Despilling can erase the lowest semi-transparent hem pixels. Anchor after it so the
    # saved WebP, not just the intermediate image, meets the dialogue border.
    final = anchor_standing_bust(despill_final(filtered))
    final.save(Path(DEST_DIR) / f"{name}.webp", "WEBP", quality=85, method=6)
    print(f"[OK] {name}.webp {final.size}")


def process_poses(selected: set[str] | None) -> None:
    for filename, names in POSE_SHEETS.items():
        path = RAW_DIR / filename
        with Image.open(path) as sheet:
            cell_w, cell_h = sheet.width // 2, sheet.height // 2
            for index, name in enumerate(names):
                if selected is not None and name not in selected:
                    continue
                row, col = divmod(index, 2)
                process_pose(sheet.crop((col * cell_w, row * cell_h, (col + 1) * cell_w, (row + 1) * cell_h)), name)
    for filename, name in FULL_POSES.items():
        if selected is None or name in selected:
            with Image.open(RAW_DIR / filename) as image:
                process_pose(image, name)


def process_icons(selected: set[str] | None) -> None:
    path = RAW_DIR / "evidence_icons_raw.png"
    with Image.open(path) as sheet:
        cell_w, cell_h = sheet.width // 4, sheet.height // 2
        for index, name in enumerate(ICON_NAMES):
            if name in SINGLE_ICON_SOURCES.values():
                continue
            if selected is not None and name not in selected:
                continue
            row, col = divmod(index, 4)
            cell = sheet.crop((col * cell_w, row * cell_h, (col + 1) * cell_w, (row + 1) * cell_h))
            cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
            cleaned = clean_edges_vectorized(cleaned, depth=4)
            filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
            save_evidence_icon(filtered, f"{name}.webp")
            print(f"[OK] {name}.webp")


def process_single_icons(selected: set[str] | None) -> None:
    for filename, name in SINGLE_ICON_SOURCES.items():
        if selected is not None and name not in selected:
            continue
        with Image.open(RAW_DIR / filename) as image:
            save_evidence_icon(image.convert("RGBA"), f"{name}.webp")
        print(f"[OK] {name}.webp")


def cover_crop(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    target_w, target_h = size
    source = image.convert("RGB")
    scale = max(target_w / source.width, target_h / source.height)
    resized = source.resize((round(source.width * scale), round(source.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def process_plates(selected: set[str] | None) -> None:
    path = RAW_DIR / "examine_contact_sheet_raw.png"
    with Image.open(path) as sheet:
        cell_w, cell_h = sheet.width // 3, sheet.height // 2
        # Contact-sheet order: receipt, courtyard, iron / tin, injury, old briefcase.
        source_cells = [
            (0, 0), (1, 0), (2, 0), (0, 1), (1, 1),
        ]
        names = [
            "examine_recibo_hielo", "examine_foto_patio", "examine_plancha",
            "examine_lata", "examine_informe_lesiones",
        ]
        rendered: dict[str, Image.Image] = {}
        for name, (col, row) in zip(names, source_cells):
            rendered[name] = cover_crop(sheet.crop((col * cell_w, row * cell_h, (col + 1) * cell_w, (row + 1) * cell_h)), (960, 540))
            if selected is None or name in selected:
                rendered[name].save(Path(DEST_DIR) / f"{name}.webp", "WEBP", quality=85, method=6)
                print(f"[OK] {name}.webp (960, 540)")
        for point_name, source_name in [("point_foto_patio", "examine_foto_patio"), ("point_plancha", "examine_plancha")]:
            if selected is None or point_name in selected:
                rendered[source_name].save(Path(DEST_DIR) / f"{point_name}.webp", "WEBP", quality=85, method=6)
                print(f"[OK] {point_name}.webp (960, 540)")
        if selected is None or "foto_nazario" in selected:
            photo = rendered["examine_informe_lesiones"].crop((80, 90, 360, 300))
            photo.save(Path(DEST_DIR) / "foto_nazario.webp", "WEBP", quality=85, method=6)
            print("[OK] foto_nazario.webp")


def process_single_plates(selected: set[str] | None) -> None:
    for filename, (name, size) in SINGLE_PLATE_SOURCES.items():
        if selected is not None and name not in selected:
            continue
        with Image.open(RAW_DIR / filename) as image:
            rendered = cover_crop(image, size)
            rendered.save(Path(DEST_DIR) / f"{name}.webp", "WEBP", quality=85, method=6)
        print(f"[OK] {name}.webp ({size[0]}, {size[1]})")


def main() -> None:
    selected = selected_outputs()
    process_poses(selected)
    process_plates(selected)
    process_single_plates(selected)
    process_icons(selected)
    process_single_icons(selected)


if __name__ == "__main__":
    main()
