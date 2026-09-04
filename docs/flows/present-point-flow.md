# Present & Point Flow

Operational guide for trial contradictions (and climax stages) that require clicking a zone on the presented evidence plate.

## 1. Trigger

Player presents the matching evidence during cross-examination, a `followUp` present, or climax **and** the matched rule/stage defines `pointTarget`.

## 2. Entry Point

- [[src/engine/Private/TrialPresent.ts]] / [[src/engine/Private/TrialClimaxPresent.ts]] after a valid present when `pointTarget` is set.
- Overlay logic: [[src/engine/Private/PresentPoint.ts]]. Types: `PointTargetContradiction` in [[src/types/Private/script.ts]].

## 3. Step-by-Step Sequence

1. Matching evidence is accepted; the Acta closes. Parent `successDialogue` is **not** queued yet.
2. `#present-point-overlay` opens with `promptQuestion` on `#present-point-prompt`.
3. `#present-point-image` loads `pointTarget.imageAsset`, else `detailedView.imageAsset`, else `assets/examine_<id>.webp`.
4. Player clicks `#present-point-stage`. The click is converted to percent of the **640×360 stage** (same box as overlay CSS). `zones[].bounds` are `[minX, minY, maxX, maxY]` percent. A catch-all incorrect zone must not steal a correct hotspot: correct zones are tested first.
5. **Miss:** hide the overlay, `takePenalty()`, play that zone's `failureDialogue` (or the first incorrect zone's lines if the click hit empty space). After those lines, **reopen** the overlay. Health 0 queues guilty lines and restarts the trial.
6. **Hit (`isCorrect`):** hide the overlay, `realization` SFX, then queue the **parent** `successDialogue` (`contradiction` / `followUp` / climax `stage`). Cut-ins live in that dialogue, not in the overlay.
7. Optional `followUp` then reopens the Acta. Climax continues its stage flow (next present, choices, or `successDialogue` then `verdict`).

## 4. State Read / Write

| Read | Write |
|------|-------|
| `pointTarget` from active rule, follow-up, or climax stage | `health` via `takePenalty` on miss |
| Evidence catalog for image fallback | Trial present pending flags in `TrialPresent` |
| Click position vs 640×360 stage | `gameOver` / trial restart at 0 health |

## 5. Side Effects

- Overlay is a `.game-modal`, so it must hide during fail dialogue or Space/Enter cannot advance.
- Authors place bounds on the visible plate ([[docs/lessons-learned/present-point-cover-crop.md]]).

## 6. Related Modules

[[src/engine/Private/PresentPoint.ts]], [[src/engine/Private/TrialPresent.ts]], [[src/engine/Private/TrialClimaxPresent.ts]], [[docs/architecture/case-scripting.md#Case 4 script fields (beyond Case 3)]]
