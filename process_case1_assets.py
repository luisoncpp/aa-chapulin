# @Architecture(descriptionShort="Case 1 sprite, evidence, plate, and background extraction", type="pipeline", icon="wrench")
"""Extract the regenerated Case 1 raw art into runtime WebP assets."""

import os

from PIL import Image

from process_assets import (
    DEST_DIR,
    clean_edges_vectorized,
    despill_final,
    extract_primary_components_fast,
    remove_bg_magenta_vectorized,
)
from process_case2_assets import anchor_standing_bust, save_evidence_icon


os.makedirs(DEST_DIR, exist_ok=True)
CASE1_RAW_DIR = os.path.join(os.path.dirname(__file__), "tools", "raw", "case1")

ALMA_POSES = [
    "almanegra_vendado", "almanegra_shock", "almanegra_sweat", "almanegra_inconsciente"
]
PROFILE_IDS = [
    "chapulin", "donramon", "supersam", "tripaseca", "florinda", "jirafales", "almanegra"
]
EVIDENCE_ICONS = [
    "parte_detencion_c1", "vitrina_rota", "rejilla_ducto", "ficha_museo",
    "bitacora_ronda", "bolsa_dolares"
]
PLATES = [
    "examine_vitrina_rota", "examine_rejilla_ducto", "examine_bolsa_dolares",
    "examine_foto_crimen"
]
BGS = ["bg_museo_sala2", "bg_patio_carga", "bg_pasillo_espejo", "bg_clinica_cuarto6"]


def raw_path(name: str) -> str:
    return os.path.join(CASE1_RAW_DIR, f"{name}_raw.png")


def save_webp(img: Image.Image, name: str) -> None:
    img.save(os.path.join(DEST_DIR, f"{name}.webp"), "WEBP", quality=85, method=6)


def process_bust_sheet() -> None:
    source = raw_path("almanegra_sprites")
    if not os.path.exists(source):
        print(f"Warning: Sheet not found {source}")
        return
    img = Image.open(source).convert("RGBA")
    cw, ch = img.width // 2, img.height // 2
    for idx, name in enumerate(ALMA_POSES[:3]):
        col, row = idx % 2, idx // 2
        cell = img.crop((col * cw, row * ch, (col + 1) * cw, (row + 1) * ch))
        cleaned = remove_bg_magenta_vectorized(cell, threshold=165.0, despill_depth=4)
        cleaned = clean_edges_vectorized(cleaned, depth=5)
        filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.10)
        save_webp(despill_final(anchor_standing_bust(filtered)), name)


def process_alma_poses() -> None:
    process_bust_sheet()

    source = raw_path("almanegra_inconsciente")
    if not os.path.exists(source):
        return
    img = Image.open(source).convert("RGBA")
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=5)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
    save_webp(despill_final(anchor_standing_bust(filtered)), ALMA_POSES[3])


def process_profile(name: str) -> None:
    source = raw_path(f"profile_perfil_{name}")
    if not os.path.exists(source):
        print(f"Warning: Profile raw not found {source}")
        return
    img = Image.open(source).convert("RGBA")
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=4)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
    bbox = filtered.getbbox()
    if not bbox:
        print(f"Warning: Empty profile raw {source}")
        return
    cropped = filtered.crop(bbox)
    scale = min(220 / cropped.width, 220 / cropped.height, 1)
    size = (max(1, int(cropped.width * scale)), max(1, int(cropped.height * scale)))
    cropped = cropped.resize(size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (256, 256), (29, 43, 68, 255))
    offset = ((256 - cropped.width) // 2, (256 - cropped.height) // 2)
    canvas.alpha_composite(cropped, dest=offset)
    save_webp(despill_final(canvas), f"profile_perfil_{name}")


def process_icon(name: str) -> None:
    source = raw_path(name)
    if not os.path.exists(source):
        print(f"Warning: Evidence raw not found {source}")
        return
    img = Image.open(source).convert("RGBA")
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=4)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
    save_evidence_icon(despill_final(filtered), f"{name}.webp")


def process_plate(name: str) -> None:
    source = raw_path(name)
    if not os.path.exists(source):
        print(f"Warning: Plate raw not found {source}")
        return
    img = Image.open(source).convert("RGB").resize((960, 540), Image.Resampling.LANCZOS)
    save_webp(img, name)


def process_card_plate(name: str, output: str) -> None:
    source = raw_path(name)
    if not os.path.exists(source):
        print(f"Warning: Card raw not found {source}")
        return
    img = Image.open(source).convert("RGBA")
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    cleaned = clean_edges_vectorized(cleaned, depth=4)
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.08)
    bbox = filtered.getbbox()
    if not bbox:
        return
    card = filtered.crop(bbox)
    scale = min(860 / card.width, 490 / card.height)
    card = card.resize((int(card.width * scale), int(card.height * scale)), Image.Resampling.LANCZOS)
    plate = Image.new("RGBA", (960, 540), (35, 43, 55, 255))
    offset = ((960 - card.width) // 2, (540 - card.height) // 2)
    plate.alpha_composite(card, dest=offset)
    save_webp(despill_final(plate), output)


def process_background(name: str) -> None:
    source = raw_path(name)
    if not os.path.exists(source):
        print(f"Warning: Background raw not found {source}")
        return
    save_webp(Image.open(source).convert("RGB"), name)


def normalize_existing_plate(name: str) -> None:
    path = os.path.join(DEST_DIR, f"{name}.webp")
    if not os.path.exists(path) or Image.open(path).size == (960, 540):
        return
    img = Image.open(path).convert("RGB").resize((960, 540), Image.Resampling.LANCZOS)
    save_webp(img, name)


def run_case1() -> None:
    print("=== CASE 1 ASSET PROCESSING ===")
    process_alma_poses()
    for name in PROFILE_IDS:
        process_profile(name)
    for name in EVIDENCE_ICONS:
        process_icon(name)
    for name in PLATES:
        process_plate(name)
    process_card_plate("ficha_museo", "examine_ficha_museo")
    process_card_plate("ficha_museo_en", "examine_ficha_museo_en")
    for name in BGS:
        process_background(name)
    normalize_existing_plate("examine_informe_lesiones")
    print("\nCase 1 assets saved.")


if __name__ == "__main__":
    run_case1()
