# @Architecture(descriptionShort="Case 1 corridor plan plate and photo crop helpers", type="pipeline", icon="wrench")
"""Cover-crop Case 1 plates and draw the service-corridor plan without spoilers."""

from __future__ import annotations

import os

from PIL import Image, ImageDraw, ImageFont


DEST_DIR = os.path.join(os.path.dirname(__file__), "..", "assets")
INK = (48, 42, 36)
PAPER = (236, 226, 204)
HALL = (246, 241, 220)
GLASS = (164, 219, 230)
YARD = (214, 222, 208)


def cover_crop(img: Image.Image, size: tuple[int, int], top_ratio: float = 0.5) -> Image.Image:
    tw, th = size
    rgb = img.convert("RGB")
    w, h = rgb.size
    scale = max(tw / w, th / h)
    nw = max(1, int(w * scale + 0.5))
    nh = max(1, int(h * scale + 0.5))
    resized = rgb.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    slack = nh - th
    top = int(slack * top_ratio)
    top = max(0, min(slack, top))
    return resized.crop((left, top, left + tw, top + th))


def font(size: int) -> ImageFont.ImageFont:
    try:
        return ImageFont.truetype("arial.ttf", size)
    except OSError:
        return ImageFont.load_default()


def stamp_timestamp(img: Image.Image) -> Image.Image:
    draw = ImageDraw.Draw(img)
    text = "21:00"
    box = draw.textbbox((0, 0), text, font=font(22))
    x = img.width - (box[2] - box[0]) - 18
    y = img.height - (box[3] - box[1]) - 14
    draw.text((x + 1, y + 1), text, fill=(20, 20, 20), font=font(22))
    draw.text((x, y), text, fill=(232, 232, 232), font=font(22))
    return img


def _draw_plan(draw: ImageDraw.ImageDraw, origin: tuple[int, int], scale: float) -> None:
    ox, oy = origin
    def box(rect: tuple[int, int, int, int], fill: tuple[int, int, int]) -> None:
        x1, y1, x2, y2 = rect
        draw.rectangle(
            (ox + int(x1 * scale), oy + int(y1 * scale), ox + int(x2 * scale), oy + int(y2 * scale)),
            fill=fill,
            outline=INK,
            width=max(2, int(3 * scale)),
        )

    def label(xy: tuple[int, int], text: str, size: int) -> None:
        draw.text((ox + int(xy[0] * scale), oy + int(xy[1] * scale)), text, fill=INK, font=font(max(10, int(size * scale))))

    box((120, 20, 310, 110), YARD)
    box((170, 110, 250, 160), HALL)
    box((40, 160, 620, 310), HALL)
    box((620, 160, 680, 310), GLASS)
    box((360, 20, 500, 160), HALL)
    cx, cy, r = 90, 275, 14
    draw.ellipse(
        (ox + int((cx - r) * scale), oy + int((cy - r) * scale), ox + int((cx + r) * scale), oy + int((cy + r) * scale)),
        fill=INK,
    )
    label((128, 48), "PATIO", 18)
    label((168, 122), "PUERTA", 13)
    label((70, 292), "CAMARA", 13)
    label((520, 218), "ESPEJO", 14)
    label((380, 70), "SALAS", 18)


def render_plano_pasillo() -> None:
    img = Image.new("RGB", (960, 540), (35, 43, 55))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((40, 24, 920, 516), radius=14, fill=PAPER, outline=(92, 78, 55), width=3)
    draw.text((64, 40), "MUSEO DE LAS CURIOSIDADES", fill=INK, font=font(22))
    draw.text((64, 70), "Pasillo de servicio", fill=INK, font=font(16))
    _draw_plan(draw, (130, 120), 1.0)
    img.save(os.path.join(DEST_DIR, "examine_plano_pasillo.webp"), "WEBP", quality=85, method=6)
    icon = Image.new("RGB", (256, 256), (34, 41, 52))
    paper = Image.new("RGB", (236, 236), PAPER)
    pdraw = ImageDraw.Draw(paper)
    _draw_plan(pdraw, (8, 36), 0.32)
    icon.paste(paper, (10, 10))
    icon.save(os.path.join(DEST_DIR, "plano_pasillo.webp"), "WEBP", quality=85, method=6)


if __name__ == "__main__":
    render_plano_pasillo()
