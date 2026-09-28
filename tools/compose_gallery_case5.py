"""Compose the seven Case 5 gallery plates from the approved courtroom.

Usage: python -m tools.compose_gallery_case5 [reason] [plate ...]
With a reason, each existing plate is backed up to
tools/masters/<plate>_before_<reason>_<date>.webp before it is replaced.
With `preview:<dir>` as the reason, plates are written to <dir> only.
"""

import sys
from pathlib import Path

from tools.compose_gallery_case5_common import (
    BERRONDO, BERRONDO_WITNESS, SAM, SAM_WITNESS, SECRETARY,
    prosecution, save, start, table_bag, witness,
)


def sam_berrondo(canvas, clean):
    # Berrondo stands to Sam's screen right (nearer the camera).
    prosecution(canvas, clean, (SAM, 1072, 1.88), (BERRONDO, 1142, 1.83))


def sam_berrondo_secretary(canvas, clean):
    # Secretary, Sam, Berrondo from screen left to right, all at the desk.
    prosecution(canvas, clean, (SECRETARY, 1026, 1.76), (SAM, 1100, 1.88),
                (BERRONDO, 1151, 1.83))


def berrondo_witness_sam(canvas, clean):
    prosecution(canvas, clean, (SAM, 1108, 1.88))
    witness(canvas, clean, BERRONDO_WITNESS, 1.83)


def sam_witness_berrondo(canvas, clean):
    # The secretary is already acting prosecutor; same spot as in
    # secretary_berrondo_witness, with Berrondo moved to his screen left.
    prosecution(canvas, clean, (BERRONDO, 1050, 1.83), (SECRETARY, 1120, 1.76))
    table_bag(canvas)
    witness(canvas, clean, SAM_WITNESS, 1.88)


def secretary_berrondo_witness(canvas, clean):
    prosecution(canvas, clean, (SECRETARY, 1120, 1.76))
    table_bag(canvas)
    witness(canvas, clean, BERRONDO_WITNESS, 1.83)


def secretary_berrondo_accused(canvas, clean):
    prosecution(canvas, clean, (BERRONDO, 1060, 1.83), (SECRETARY, 1136, 1.76))


def empty_bag(canvas, clean):
    # Nobody is left at the desks: undo the approved defense copy.
    canvas.paste(clean, (0, 0))
    table_bag(canvas)


PLATES = {f.__name__: f for f in (
    sam_berrondo, sam_berrondo_secretary, berrondo_witness_sam,
    sam_witness_berrondo, secretary_berrondo_witness,
    secretary_berrondo_accused, empty_bag,
)}


def main(reason: str, names: list[str]) -> None:
    for name in names or PLATES:
        canvas, clean = start()
        PLATES[name](canvas, clean)
        plate = f"bg_gallery_case5_{name}"
        if reason.startswith("preview:"):
            out = Path(reason[len("preview:"):]) / f"{plate}.png"
            canvas.convert("RGB").save(out)
            print(out)
            continue
        save(canvas, plate, reason)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "preview:.", sys.argv[2:])
