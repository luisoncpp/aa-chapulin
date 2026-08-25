# Trial Controls Visibility Lifecycle

## Context & Problem
During courtroom litigation, cross-examination navigation and action buttons (`#trial-controls`: "◀ Anterior", "💥 Presionar", "📜 Presentar", "Siguiente ▶") allow the player to cycle through witness statements and challenge testimony.

A naive approach revealed `#trial-controls` as soon as `startTrial()` was called, leaving the buttons active and visible across dialogue sequences (opening banter, pressing questioning, objection exchanges, penalty warnings, and verdict dilemmas).

## What Was Learned
In Ace Attorney games, cross-examination controls are strictly transient to the statement navigation phase:
1. **Dialogue Phase**: When dialogue queues are actively streaming or awaiting user advancement (including press text, objection responses, penalties, or climaxes), the controls bar must remain hidden to preserve narrative focus and prevent out-of-order input.
2. **Statement Render Hook**: The single canonical point to reveal trial controls is inside `renderCurrentStatement()`. Because all dialogue branches (initial testimony display, press dialogue conclusion, and penalty recovery) funnel back into `renderCurrentStatement()`, binding control visibility there guarantees buttons appear exactly when user interaction is required.
3. **Climax Isolation**: Climax sequences do not use testimony statement looping; they transition directly to presentation mode from the Court Record, meaning trial controls must remain hidden throughout climax resolution.
