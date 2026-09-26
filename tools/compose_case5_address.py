"""Compose both address proofs from one typed card; never retype the crop."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "tools/raw/case5"
SIZE = (1920, 1080)
CARD = (120, 100, 1800, 980)
CUT = (1428, 692, 1800, 980)
GRAY = (147, 147, 147)
INK = (30, 29, 26)
FONT = ImageFont.truetype("C:/Windows/Fonts/courbd.ttf", 34)
ADDRESS_FONT = ImageFont.truetype("C:/Windows/Fonts/courbd.ttf", 38)
HAND = ImageFont.truetype("C:/Windows/Fonts/segoepr.ttf", 58)
FIELDS = {
    "": [
        ["Ingreso declarado: variable.", "Oficio: abogado sin despacho."],
        ["Objetos de valor declarados:", "ninguno."],
        ["Puntualidad de pago:", "catorce meses de atraso."],
        ["Observaciones del vendedor:", "no insistir."],
        ["Estado de la puerta:", "chapa vencida. Se empuja."],
    ],
    "_en": [
        ["Declared income: variable.", "Occupation: lawyer without an office."],
        ["Declared valuables:", "none."],
        ["Payment punctuality:", "fourteen months behind."],
        ["Seller notes:", "do not press."],
        ["Door condition:", "lock expired. Push to enter."],
    ],
}


def type_line(image, text, layout):
    """One full-size glyph per character; lowercase s drops half a 52px line."""
    x, y, font = layout
    advance = font.getlength("M")
    for index, char in enumerate(text):
        glyph = Image.new("RGBA", (80, 100))
        ImageDraw.Draw(glyph).text((15, 10), char, font=font, fill=INK)
        if char == "s":
            glyph = glyph.rotate(0.5, resample=Image.Resampling.BICUBIC)
        image.paste(glyph, (round(x + index * advance) - 15,
                            y - 10 + (26 if char == "s" else 0)), glyph)


def compose_master(suffix):
    blank = Image.open(RAW / "ficha_blank_generated.png").convert("RGB")
    paper = blank.crop((89, 93, 1584, 848)).resize((1680, 880))
    master = Image.new("RGB", SIZE, GRAY)
    master.paste(paper, CARD[:2])
    draw = ImageDraw.Draw(master)
    draw.text((185, 118), "1969", font=HAND, fill=INK)
    draw.text((1580, 118), "VIII", font=HAND, fill=INK)
    for index, field in enumerate(FIELDS[suffix]):
        for row, line in enumerate(field):
            type_line(master, line, (195, 250 + 132 * index + 52 * row, FONT))
    prefix = "Domicilio: ve" if not suffix else "Address: "
    first = prefix + ("cindad de" if not suffix else "city of")
    start = CUT[0] + 3 - ADDRESS_FONT.getlength(prefix)
    type_line(master, first, (start, 711, ADDRESS_FONT))
    lines = ["la calle del" if not suffix else "Calle del", "Espanto 8,",
             "viv. 72." if not suffix else "apt. 72."]
    for index, line in enumerate(lines):
        type_line(master, line, (CUT[0] + 18, 763 + index * 52, ADDRESS_FONT))
    master.save(RAW / f"ficha_master{suffix}.png")
    return master


def fragment_plate(fragment):
    plate = Image.new("RGB", SIZE, GRAY)
    # 2x enlargement: 744 / 1200 = 3.1 / 5; height 576 = 2.4 cm.
    plate.paste(fragment.resize((744, 576)), (588, 110))
    draw = ImageDraw.Draw(plate)
    draw.line((588, 686, 588, 110, 1332, 110), fill=INK, width=3)
    draw.rectangle((330, 795, 1590, 938), fill=INK)
    labels = ImageFont.truetype("C:/Windows/Fonts/courbd.ttf", 46)
    for millimeter in range(51):
        x = 360 + millimeter * 24
        height = 46 if millimeter % 10 == 0 else 30 if millimeter % 5 == 0 else 18
        draw.line((x, 805, x, 805 + height), fill="ivory", width=3)
        if millimeter % 10 == 0:
            draw.text((x - 14, 858), str(millimeter // 10), font=labels, fill="ivory")
    draw.text((1605, 863), "cm", font=labels, fill=INK)
    return plate


def export_icon(image, name):
    image.thumbnail((116, 116), Image.Resampling.LANCZOS)
    icon = Image.new("RGBA", (128, 128))
    icon.paste(image, ((128 - image.width) // 2, (128 - image.height) // 2))
    icon.save(RAW / f"{name}_derived.png")
    icon.save(ROOT / f"assets/{name}.webp", quality=85, method=6)


def export_pair(master, suffix):
    fragment = master.crop(CUT)
    fragment.save(RAW / f"ficha_corner{suffix}.png")
    missing = master.copy()
    edit_path = RAW / "ficha_cut_generated.png"
    if edit_path.exists():
        # Preserve every original paper/text pixel; use generated edit only in void.
        edit = Image.open(edit_path).convert("RGB").resize(SIZE)
        missing.paste(edit.crop(CUT), CUT[:2])
    else:
        ImageDraw.Draw(missing).rectangle(CUT, fill=GRAY)
    ImageDraw.Draw(missing).line((1428, 979, 1428, 692, 1799, 692), fill=INK, width=3)
    for name, plate in [("examine_ficha_domicilio", missing),
                        ("examine_esquina_tarjeta", fragment_plate(fragment))]:
        plate.save(RAW / f"{name}{suffix}.png")
        plate.resize((960, 540), Image.Resampling.LANCZOS).save(
            ROOT / f"assets/{name}{suffix}.webp", quality=85, method=6)
    if not suffix:
        card_icon = master.crop(CARD).convert("RGBA")
        ImageDraw.Draw(card_icon).rectangle((1308, 592, 1680, 880), fill=(0, 0, 0, 0))
        export_icon(card_icon, "ficha_domicilio")
        export_icon(fragment.convert("RGBA"), "esquina_tarjeta")


if __name__ == "__main__":
    for language_suffix in FIELDS:
        export_pair(compose_master(language_suffix), language_suffix)
