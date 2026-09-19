# Climax Penalty Must Restart On Game Over

## Context
Wrong evidence during cross-examination calls `takePenalty()`, then reads `gameState.gameOver` to queue the guilty lines and restart the trial. Climax presents and climax choices also call `takePenalty()`, but they used to stay on the same prompt (toast + Court Record, or fail dialogue + choice modal).

## What was counter-intuitive
`gameOver === true` is only a flag. Nothing global watches it. If a penalty path does not queue the CULPABLE lines and call the trial restart, health can sit at 0 with no verdict and no retry.

## Effective Pattern
Every penalty site must branch after `applyPenaltyEffects`: continue the current prompt when health remains, otherwise reuse the shared guilty dialogue + `restartAfterGameOver()` path. `queuePenaltyOrRestart` in [[src/engine/Private/TrialPenalty.ts]] is that branch.

## The verdict is also a music cue
Queuing the CULPABLE lines is not enough: without a `bgm` on the first guilty line the cross-examination
loop keeps playing through the verdict, so the loss never lands. `gameOverLines` now stamps
`GAME_OVER_BGM` (`game_over`, an alias of the `detention_center` elegy) on that first line, covering the
engine's default lines and every case's own `guiltyDialogue`. Restart restores `trial` through the trial intro.

Related trap: the press hint in `onPresentPenalty` used to fire *instead of* the guilty block when the
penalty that triggered it was the fatal one, so the player was coached and then silently restarted.
Game over now short-circuits the hint.
