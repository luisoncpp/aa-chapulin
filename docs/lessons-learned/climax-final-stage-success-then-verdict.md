# Non-Choice Final Climax Stages Play Success Then Verdict

## Context

Case 1 has no `climax.stages`; victory is `climax.verdict`. Multi-stage climaxes with `choices` play the last stage’s `successDialogue` then the choice modal. Case 4’s finale has **two stages and no choices**: bottle + point, then wax-seal ring, then breakdown.

## What was counter-intuitive

`queueClimaxVictory` queued `climax.verdict` immediately on the last present, skipping `stage.successDialogue`. The breakdown never played.

## Effective Pattern

When `climax.stages` is set and the last stage has no `choices`, queue `stage.successDialogue`, then `queueClimaxCelebration(climax.verdict)`. Leave the no-`stages` Case 1 path as verdict-only so the same lines are not played twice.
