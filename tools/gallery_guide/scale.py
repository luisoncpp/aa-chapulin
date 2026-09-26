"""Body and furniture measurements, derived from the close-up stage frames.

Source: STAGE_FRAMES in src/engine/Private/StageLayout.ts. Every close-up stages a
512px bust at 0.62 of stage height, so all characters share one drawing scale.

- bench-stand: sprite bottom at 0.34, desk top at 0.457. The bust ink (~0.60 of
  stage) spans head top to hip; 0.49 of stage shows above the desk.
  With a 1.70 m adult and a 0.95 m counter, 0.75 m shows above the desk, so the
  sprite ink is ~0.92 m of body: the top 54% of a standing adult.
- judge-stand: lip at 0.38, sprite bottom at 0.34, so the lip sits only ~0.06 m
  above the bottom of the judge's bust. Everything from head to belly shows.
- bg_judge.webp: the chair back is as wide as the judge's shoulders and its crest
  sits at head height; the scale medallion is about one chair wide.

Change a number here only together with StageLayout.ts, or the wide shot and the
close-ups stop agreeing on how big a person is.
"""

PERSON_HEIGHT = 1.70
BUST_FRACTION = 0.54
BUST_HEIGHT = PERSON_HEIGHT * BUST_FRACTION
SEATED_HEAD = 1.30
COUNTER_HEIGHT = 0.95

# Free parameter: no close-up shows the dais. 1.5 m lifts the judge's head above the
# gallery parapet line, so a side framing can show him without showing counsel.
JUDGE_DAIS = 1.50
JUDGE_HEAD = JUDGE_DAIS + SEATED_HEAD
JUDGE_LIP = JUDGE_HEAD - BUST_HEIGHT + 0.06
JUDGE_SHOULDERS = 0.55
JUDGE_CHAIR_CREST = JUDGE_HEAD - 0.08
JUDGE_BENCH_WIDTH = 7 * JUDGE_SHOULDERS

SIDE_PANEL_TOP = 2.20
GALLERY_ROW_RISE = 0.45
GALLERY_ROW_DEPTH = 0.90
GALLERY_ROWS = 3
