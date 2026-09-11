# Case 0 Script Visual Contract

## Context

Case 0 is a courtroom-only tutorial with a longer opening, three testimony rounds, Present & Point retries, and a waiting-room epilogue. Its lines are rendered by the same generic trial pipeline as the older cases.

## What was counter-intuitive

The renderer hides the sprite for a speaker without a pose, and an unknown trial speaker also defaults to the witness camera. That makes a harmless instruction line appear as an empty witness stand, while judge, defendant, or epilogue lines can leave nobody visible. A short point-failure line also feels like a broken retry because it gives no coaching before reopening the overlay.

## Effective Pattern

Give every visible Case 0 speaker line an explicit pose; reserve `NARRADOR` and the localized examine-mode labels for sprite-free instructions. Treat instruction labels as camera-neutral. When a rule requires the player to inspect evidence, record that action in `flags` and gate the later present with `requiresExamine` without charging a penalty. Keep the full coaching response in each wrong point zone so every miss has the same retry contract in both languages.

Tutorial copy must follow the actual HUD and callbacks: `openingPresent` opens the Acta automatically after the opening dialogue, while `📜 Presentar` opens it during cross-examination and `¡Presentar Prueba!` submits the selected item. The yellow badge/heart belongs to the Acta button; the penalty meter uses five green `!` marks.

Keep tutorial prompts before the action they teach. A Present & Point target opens before its `successDialogue`; therefore the target's `promptQuestion` must say how to point, and the success dialogue must only describe the result. For Case 0's required photo inspection, name the courtyard photo and say to use `EXAMINAR DETALLE` before presenting it; teaching the optional receipt instead leaves the required action ambiguous.

Ensure dynamic BGM escalation across testimonies (`cross_exam_moderato` -> `cross_exam_allegro` -> `cross_exam_presto`) and stamp contradiction and climax breakthrough lines with explicit `bgm: 'objection'` or `bgm: 'pursuit'` cues so dramatic turnaround shouts do not leave the cross-examination loop playing statically.
