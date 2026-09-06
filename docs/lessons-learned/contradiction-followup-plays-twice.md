# A contradiction with a `followUp` plays two dialogues, not one

## What is counter-intuitive

`ContradictionRule.successDialogue` and `ContradictionRule.followUp.successDialogue` are **both** queued during a single successful route:

1. Correct present (plus point target, if any) → `rule.successDialogue`.
2. `afterContradictionSuccess` immediately reopens the Acta in present mode with `followUp.prompt`.
3. Correct follow-up present → `followUp.successDialogue`, then the testimony advances.

So aliasing the two fields to the same array — the tempting shortcut when a statement has two valid entry orders that converge on one payoff — replays the whole block verbatim. That is what happened in Case 4 D2-T1 (Maruja), where both routes and both stages pointed at `CASE4_D2_T1_RUTA_A_SUCCESS`.

## What to do instead

Split the script by role:

- **First present** → a short route-specific half (4 lines is enough): it establishes only what the presented item proves and ends with the judge or prosecutor demanding the missing piece. This half is what motivates the follow-up prompt.
- **Follow-up present** → the shared payoff block from the spec, written to stand alone so either route can reach it.

The spec usually writes only the payoff block; the halves are engine-level scaffolding you must author. `CASE4_D1_T2_FORENSE_SUCCESS` → `CASE4_D1_T2_ALMOHADA_SUCCESS` and `CASE4_D2_T2_REGISTRO_SUCCESS` → `CASE4_D2_T2_BAUL_SUCCESS` are the correct shape.

Mirror the split in the `_en` module — see [[docs/lessons-learned/en-scene-spread-inherits-spanish.md]].

Guarded by the "never replays a contradiction success dialogue on its own followUp" test in [[tests/case/Case4Trial.test.ts]].

Related: [[docs/flows/trial-cross-examination-flow.md]], [[src/engine/Private/TrialPresent.ts]].
