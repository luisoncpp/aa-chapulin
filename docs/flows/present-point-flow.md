# Present & Point Flow

Operational guide for Case 4 trial contradictions that require clicking a zone on the presented evidence plate.

## 1. Trigger

Player presents the correct evidence during cross-examination or climax **and** the active rule or stage defines `pointTarget` (e.g. `foto_crimen` melted-ice bucket, `plano_hotel` steam pipe, `botella_vino` wax seal).

## 2. Entry Point

- `TrialController` / `TrialClimax` after a valid present when `pointTarget` is set on the matched `ContradictionRule` or `ClimaxStage`.
- Types: `PointTargetContradiction` in [[src/types/Private/script.ts]].

## 3. Step-by-Step Sequence

1. Correct evidence id matches `pointTarget.targetEvidenceId`; penalty path is skipped for the present itself.
2. Court Record closes; `#present-point-overlay` opens with `promptQuestion` on `#present-point-prompt`.
3. `#present-point-image` loads the evidence `detailedView.imageAsset` (same plate as Acta examine).
4. Invisible hit targets are laid from `zones[].bounds` as `[minX, minY, maxX, maxY]` percentages of the **contained** image box (not the raw JPEG — see [[docs/lessons-learned/present-point-cover-crop.md]]).
5. **Wrong zone:** `gameState.takePenalty()`, `damage` SFX, `failureDialogue` for that zone (or generic judicial scolding), overlay stays open.
6. **Correct zone (`isCorrect: true`):** `realization` SFX, `objection` + `¡TOMA ESO!` cut-in, `successDialogue` queued, overlay closes.
7. Optional `followUp` on the parent contradiction runs next; dialogue lines may set `updateEvidence` (e.g. `foto_crimen` melted-ice stage).

## 4. State Read / Write

| Read | Write |
|------|-------|
| `pointTarget` from active statement rule or climax stage | `health` via `takePenalty` on miss |
| `detailedView.imageAsset` from catalog | `evidenceUpdateStage` via `updateEvidence` in success dialogue |
| Current `gameState.language` for localized failure lines | Trial presentation mode flags in `TrialController` |

## 5. Side Effects

- Penalty on wrong zone (same 5-heart pool as a bad present).
- Does not add evidence; only advances description stages already in inventory.
- After success, normal dialogue queue resumes (press / next statement / next climax stage).

## 6. Related Modules

[[src/engine/Private/TrialController.ts]], [[src/engine/Private/TrialClimax.ts]], [[src/state/Private/EvidenceCatalogCase4.ts]], [[docs/architecture/case-scripting.md#Case 4 script fields (beyond Case 3)]]
