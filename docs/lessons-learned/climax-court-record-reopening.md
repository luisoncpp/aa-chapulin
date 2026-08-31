# Climax Court Record Reopening

## Context
During trial climax confrontations, trial controls (`#trial-controls`) are hidden to present dramatic, uninterrupted narrative dialogue that concludes by opening the Court Record in presentation mode (`isTrialPresent: true`).

## What was counter-intuitive
Closing the Court Record modal dismissed the prompt while the dialogue FIFO queue had already consumed all lines (`queue.length === 0`, `onQueueFinish === null`). Because the modal was dismissible and navigation controls were intentionally hidden, standard advance clicks did nothing, while opening the Court Record from the top HUD briefcase opened it with `isTrialPresent: false` (read-only inspection), creating a soft-lock state.

## Effective Pattern
1. **Status from Dialogue Advance**: `DialogueFlow.handleAdvance()` returns `boolean` indicating whether an active dialogue action (typewriter skip, queue dequeue, or callback) occurred.
2. **Idle Reopen Fallback**: When `handleAdvance()` returns `false` while `trial.isAwaitingEvidence()` is true, `GameEngine` reopens the Court Record in presentation mode (`isTrialPresent: true`) if the modal is currently hidden. `isAwaitingEvidence()` is false after the last correct present or last correct choice (`climaxResolved`), so idle clicks during verdict, confetti, or the waiting-room fade must not reopen the Acta.
3. **Contextual HUD Present Capability**: When in a climax evidence presentation state (`trial.isAwaitingEvidence()`), opening the Court Record via the top HUD briefcase (`#btn-court-record`) also automatically sets `isTrialPresent: true`.
