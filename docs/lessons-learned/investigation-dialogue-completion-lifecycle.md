# Investigation Dialogue Completion & Navigation Lifecycle

## Context & Problem
During crime scene exploration, examining an environment hotspot triggers narrative dialogue that awards evidence, introduces critical testimony clues, or triggers progress flags.

If the main investigation navigation (`#investigation-controls`: "🔍 Examinar", "💬 Hablar", "🏃 Moverse", "⚖️ Ir a Juicio") is revealed immediately upon clicking a hotspot, the player can click "Hablar" or "Examinar" mid-dialogue. Because the dialogue queue is FIFO and single-channel, opening a new menu topic overwrites the active queue and discards the uncompleted `onComplete` callback, preventing evidence grants and progression flags from ever firing.

## What Was Learned
1. **Completion-Gated Navigation Locking**: First-time hotspot investigations are critical progression gates. During first-time investigation dialogue, navigation controls must remain hidden and secondary menu triggers (`openTalkMenu`, `startExamineMode`, `openMoveMenu`) must be blocked until the dialogue queue exhausts and the `onComplete` callback marks the hotspot examined.
2. **Repeated Dialogue Fast-Bypass**: Once a hotspot has been marked as examined in `gameState.flags`, re-examining it constitutes a repeated dialogue. In repeated dialogues, navigation controls remain interactive so that the player is not forced to sit through already-read lore before choosing another action.
3. **Canonical Completion Hook**: Marking a hotspot examined must occur inside the `onComplete` callback of the dialogue queue, not on the initial click. This guarantees that all lines, clue grants, and SFX have been experienced before the game state recognizes the inspection as completed.
