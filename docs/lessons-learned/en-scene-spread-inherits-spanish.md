# English scenes that spread a Spanish object inherit its Spanish text

**Date:** 2026-09-05

## What is counter-intuitive

Building an English variant by spreading the Spanish one and overriding "the language field" looks complete and type-checks, but leaves Spanish text reachable in the English build. Two shapes of this existed in Case 4 and neither surfaced in tests, typecheck, or lint:

```ts
// Only promptQuestion is English. zones[].failureDialogue stays Spanish,
// so every wrong click in the English build answers in Spanish.
const PLANO_EN = { ...CASE4_PLANO_POINT_TARGET, promptQuestion: 'How did that sound reach...' };

// Only hotspots are English. intro and talkOptions stay Spanish.
const CASE4_HOTEL_CAVA_EN = { ...CASE4_HOTEL_CAVA, hotspots: CAVA_HOTSPOTS_EN };
```

A third variant is subtler: an `_en` testimony that imports the Spanish `successDialogue` constant. `trial_day2_t2_en.ts` did this, so the entire English day-2 trunk turnabout — the case's second-biggest beat — played in Spanish.

## Why nothing caught it

`PointTargetContradiction`, `InvestigationScene` and `Testimony` carry no language in their types, so every one of these is valid TypeScript. Tests assert structure (zone ids, evidence ids, statement counts), which the spread preserves exactly. Only reading the rendered text in the English build reveals it.

## What to do

- Give each `_en` module its own literal arrays. Spread a Spanish object only for fields that are language-neutral by nature (`bounds`, `isCorrect`, `targetEvidenceId`, `imageAsset`), and restate every field that contains prose.
- When you spread a point target, restate `zones` in full — overriding `promptQuestion` alone is the trap.
- Annotate the English constant with its type (`const X_EN: PointTargetContradiction = {...}`) so a restated `zones` array is checked against `PoseName` and `DialogueLine` instead of widening to `string`.
- Grep for accented characters in `*_en.ts` as a cheap smoke test for leaked Spanish.

Related: [[docs/lessons-learned/location-cast-rotation.md]].
