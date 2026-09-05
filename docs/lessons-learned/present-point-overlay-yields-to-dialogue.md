# Present & Point Overlay Must Yield to Dialogue

## Context

A miss on `#present-point-overlay` plays `failureDialogue`, then the overlay must come back. The overlay is a `.game-modal`.

## What was counter-intuitive

Leaving the overlay visible during fail lines looks like “the player is still pointing.” An open `.game-modal` owns the keyboard, so Space/Enter never advances those lines and the miss path hangs.

## Effective Pattern

Hide the overlay, apply the penalty, queue the zone’s `failureDialogue`, and **reopen** the same overlay in the dialogue `onComplete`. Health 0 uses the shared guilty + `restartAfterGameOver()` path instead of reopening. Correct clicks also hide first, then play parent `successDialogue`.
