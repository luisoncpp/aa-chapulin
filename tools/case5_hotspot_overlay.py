"""Cover-crop Case 5 investigation backgrounds and draw hotspot / point zones."""

from __future__ import annotations

import json
import os
from dataclasses import dataclass

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..")
ASSETS = os.path.join(ROOT, "assets")
OUT = os.path.join(os.path.dirname(__file__), "case5_overlay_out")
STAGE = (960, 540)

COLORS = [
    (255, 64, 64),
    (64, 200, 255),
    (255, 200, 64),
    (128, 255, 128),
    (255, 128, 255),
    (255, 160, 64),
    (160, 160, 255),
]


def cover_crop(img: Image.Image, size: tuple[int, int]) -> Image.Image:
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


def pct_box(x: float, y: float, w: float, h: float) -> tuple[int, int, int, int]:
    sw, sh = STAGE
    return (
        int(x * sw / 100),
        int(y * sh / 100),
        int((x + w) * sw / 100),
        int((y + h) * sh / 100),
    )


def bounds_box(bounds: list[float]) -> tuple[int, int, int, int]:
    return pct_box(bounds[0], bounds[1], bounds[2] - bounds[0], bounds[3] - bounds[1])


def font(size: int = 14) -> ImageFont.ImageFont:
    try:
        return ImageFont.truetype("DejaVuSans.ttf", size)
    except OSError:
        return ImageFont.load_default()


@dataclass
class HotspotSet:
    name: str
    bg: str
    hotspots: list[dict]


@dataclass
class PointSet:
    name: str
    image: str
    zones: list[dict]


HOTSPOT_SETS = [
    HotspotSet("celda_c5", "bg_detention.webp", [
        {"id": "hotspot_cristal", "x": 12, "y": 8, "w": 38, "h": 50},
        {"id": "hotspot_donramon", "x": 50, "y": 40, "w": 24, "h": 32},
    ]),
    HotspotSet("archivo_vestibulo", "bg_archivo_vestibulo.webp", [
        {"id": "hotspot_libro", "x": 58, "y": 26, "w": 26, "h": 24},
        {"id": "hotspot_plano", "x": 0, "y": 0, "w": 22, "h": 36},
        {"id": "hotspot_carrito", "x": 0, "y": 48, "w": 22, "h": 42},
    ]),
    HotspotSet("archivo_pasillo7", "bg_archivo_pasillo7.webp", [
        {"id": "hotspot_cuerpo", "x": 38, "y": 54, "w": 26, "h": 26},
        {"id": "hotspot_tomo", "x": 54, "y": 82, "w": 18, "h": 16},
        {"id": "hotspot_estante", "x": 54, "y": 6, "w": 46, "h": 72},
        {"id": "hotspot_mesa", "x": 0, "y": 4, "w": 34, "h": 58},
    ]),
    HotspotSet("vecindad_c5", "bg_despacho.webp", [
        {"id": "hotspot_puerta", "x": 10, "y": 2, "w": 20, "h": 40},
        {"id": "hotspot_sobre", "x": 62, "y": 40, "w": 24, "h": 22},
    ]),
    HotspotSet("correspondencia", "bg_correspondencia.webp", [
        {"id": "hotspot_libro_acuses", "x": 56, "y": 62, "w": 38, "h": 34},
    ]),
    HotspotSet("despacho_berrondo", "bg_despacho_berrondo.webp", [
        {"id": "hotspot_vitrina", "x": 0, "y": 28, "w": 28, "h": 42},
        {"id": "hotspot_retrato", "x": 0, "y": 4, "w": 16, "h": 28},
    ]),
    HotspotSet("delegacion_c5", "bg_delegacion.webp", [
        {"id": "hotspot_legajos", "x": 84, "y": 50, "w": 16, "h": 26},
    ]),
    HotspotSet("bodega_masa", "bg_bodega_masa.webp", [
        {"id": "hotspot_huacal", "x": 70, "y": 56, "w": 24, "h": 38},
        {"id": "hotspot_cajones", "x": 44, "y": 46, "w": 28, "h": 24},
        {"id": "hotspot_maquina", "x": 56, "y": 70, "w": 22, "h": 18},
    ]),
    HotspotSet("fiscalia_c5", "bg_fiscalia.webp", [
        {"id": "hotspot_bolsa", "x": 72, "y": 52, "w": 22, "h": 34},
    ]),
    HotspotSet("penal_efectos", "bg_penal_efectos.webp", [
        {"id": "hotspot_caja", "x": 8, "y": 42, "w": 34, "h": 40},
    ]),
    HotspotSet("archivo_caldera", "bg_archivo_caldera.webp", [
        {"id": "hotspot_caldera", "x": 16, "y": 2, "w": 48, "h": 78},
        {"id": "hotspot_termografo", "x": 70, "y": 16, "w": 28, "h": 52},
    ]),
]

POINT_SETS = [
    PointSet("POINT_EXPEDIENTE_SERIE", "examine_expediente_serie.webp", [
        {"id": "panel_a", "bounds": [1, 12, 20, 92]},
        {"id": "panel_b", "bounds": [20, 12, 39, 92], "correct": True},
        {"id": "panel_c", "bounds": [39, 12, 58, 92]},
        {"id": "panel_d", "bounds": [58, 12, 78, 92]},
        {"id": "panel_e", "bounds": [78, 12, 99, 92]},
    ]),
    PointSet("CASE5_CLIMAX_STAGE3_POINT", "examine_estante_consulta.webp", [
        {"id": "tomo_i", "bounds": [3, 16, 18, 72]},
        {"id": "cartoncitos", "bounds": [19, 16, 40, 72]},
        {"id": "lomo_11", "bounds": [42, 12, 52, 74], "correct": True},
        {"id": "hueco_13", "bounds": [52, 16, 57, 70]},
        {"id": "zoclo", "bounds": [4, 74, 96, 88]},
    ]),
]


def draw_hotspots(base: Image.Image, hotspots: list[dict], title: str) -> Image.Image:
    img = base.copy()
    draw = ImageDraw.Draw(img)
    draw.text((8, 8), title, fill=(255, 255, 255), font=font(16), stroke_width=2, stroke_fill=(0, 0, 0))
    for i, h in enumerate(hotspots):
        color = COLORS[i % len(COLORS)]
        box = pct_box(h["x"], h["y"], h["w"], h["h"])
        draw.rectangle(box, outline=color, width=3)
        draw.text((box[0] + 2, box[1] + 2), h["id"], fill=color, font=font(12), stroke_width=1, stroke_fill=(0, 0, 0))
    return img


def draw_zones(base: Image.Image, zones: list[dict], title: str) -> Image.Image:
    img = base.copy()
    draw = ImageDraw.Draw(img)
    draw.text((8, 8), title, fill=(255, 255, 255), font=font(16), stroke_width=2, stroke_fill=(0, 0, 0))
    for i, z in enumerate(zones):
        color = (64, 255, 64) if z.get("correct") else COLORS[i % len(COLORS)]
        box = bounds_box(z["bounds"])
        draw.rectangle(box, outline=color, width=4 if z.get("correct") else 2)
        draw.text((box[0] + 2, box[1] + 2), z["id"], fill=color, font=font(12), stroke_width=1, stroke_fill=(0, 0, 0))
    return img


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    for hs in HOTSPOT_SETS:
        path = os.path.join(ASSETS, hs.bg)
        base = cover_crop(Image.open(path), STAGE)
        out = draw_hotspots(base, hs.hotspots, hs.name)
        out.save(os.path.join(OUT, f"{hs.name}.png"))
        print(f"wrote {hs.name}.png")
    for ps in POINT_SETS:
        path = os.path.join(ASSETS, ps.image)
        base = Image.open(path).convert("RGB")
        out = draw_zones(base, ps.zones, ps.name)
        out.save(os.path.join(OUT, f"{ps.name}.png"))
        print(f"wrote {ps.name}.png")


if __name__ == "__main__":
    main()
