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
from process_case2_assets import anchor_standing_bust
from process_case3_assets import floor_standing_busts

os.makedirs(DEST_DIR, exist_ok=True)
CASE5_RAW_DIR = os.path.join(os.path.dirname(__file__), "tools", "raw", "case5")

SHEETS = [
    ("berrondo_sprites_raw.png",
     ["berrondo_idle", "berrondo_definicion", "berrondo_sweat", "berrondo_panic"]),
    ("nicanor_sprites_raw.png",
     ["nicanor_idle", "nicanor_escoba", "nicanor_sweat"]),
    ("genoveva_sprites_raw.png",
     ["genoveva_idle", "genoveva_reglamento", "genoveva_sweat", "genoveva_shock"]),
]

BGS = [
    ("bg_archivo_vestibulo.jpg", "bg_archivo_vestibulo.webp"),
    ("bg_archivo_pasillo7.jpg", "bg_archivo_pasillo7.webp"),
    ("bg_correspondencia.jpg", "bg_correspondencia.webp"),
    ("bg_despacho_berrondo.jpg", "bg_despacho_berrondo.webp"),
    ("bg_bodega_masa.jpg", "bg_bodega_masa.webp"),
    ("bg_fiscalia.jpg", "bg_fiscalia.webp"),
    ("bg_penal_efectos.jpg", "bg_penal_efectos.webp"),
    ("bg_archivo_caldera.jpg", "bg_archivo_caldera.webp"),
]

BG_SIZE = (1536, 1024)
FLOOR_BUSTS = [name for _sheet, names in SHEETS for name in names] + ["berrondo_breakdown"]


def raw_path(filename: str) -> str:
    return os.path.join(CASE5_RAW_DIR, filename)


def output_stem(filename: str) -> str:
    return os.path.splitext(os.path.basename(filename))[0]


def process_character_sheet(sheet_name: str, pose_names: list[str]) -> None:
    sheet_path = raw_path(sheet_name)
    if not os.path.exists(sheet_path):
        print(f"Warning: Sheet not found {sheet_path}")
        return
    with Image.open(sheet_path) as img:
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


def process_breakdown() -> None:
    path = raw_path("berrondo_breakdown_raw.png")
    if not os.path.exists(path):
        print(f"Warning: Sheet not found {path}")
        return
    with Image.open(path) as img:
        cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=5)
        filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
        anchored = despill_final(anchor_standing_bust(filtered))
        anchored.save(os.path.join(DEST_DIR, "berrondo_breakdown.webp"), "WEBP", quality=85, method=6)
        print(f"  [OK] Processed: berrondo_breakdown.webp ({anchored.size})")


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
    for src_name, dst_name in BGS:
        if selected is not None and output_stem(dst_name) not in selected:
            continue
        src_p = raw_path(src_name)
        if not os.path.exists(src_p):
            print(f"Warning: Background not found {src_p}")
            continue
        out = cover_crop(Image.open(src_p), BG_SIZE)
        out.save(os.path.join(DEST_DIR, dst_name), "WEBP", quality=85, method=6)
        print(f"  [OK] Saved WebP background: {dst_name} {out.size}")


def all_output_stems() -> set[str]:
    names = set(FLOOR_BUSTS)
    names.update(output_stem(pair[1]) for pair in BGS)
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
    if selected is None or "berrondo_breakdown" in selected:
        process_breakdown()
    floor_standing_busts(
        FLOOR_BUSTS if selected is None else [n for n in FLOOR_BUSTS if n in selected]
    )
    export_backgrounds(selected)
    print("\nCase 5 assets saved.")


if __name__ == "__main__":
    run_case5(parse_selected_assets())
