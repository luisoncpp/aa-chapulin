# Climax Penalty Must Restart On Game Over

## Context
Wrong evidence during cross-examination calls `takePenalty()`, then reads `gameState.gameOver` to queue the guilty lines and restart the trial. Climax presents and climax choices also call `takePenalty()`, but they used to stay on the same prompt (toast + Court Record, or fail dialogue + choice modal).

## What was counter-intuitive
`gameOver === true` is only a flag. Nothing global watches it. If a penalty path does not queue the CULPABLE lines and call the trial restart, health can sit at 0 with no verdict and no retry.

## Effective Pattern
Every penalty site must branch after `applyPenaltyEffects`: continue the current prompt when health remains, otherwise reuse the shared guilty dialogue + `restartAfterGameOver()` path. `queuePenaltyOrRestart` in [[src/engine/Private/TrialPenalty.ts]] is that branch.
