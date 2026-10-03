# Final deduction

The mechanic runs in the fictional standalone demo, after the final present in Case 3, and after the last testimony contradiction in Case 4 (day 3) and Case 5. Review shortcuts are `?case=3&trial=3&deduction`, `?case=4&trial=3&deduction` and `?case=5&trial=4&deduction`.

## Ownership

[[src/deduction/index.ts]] exposes the bilingual sequence contract, the pure `DeductionSession`, validation, the standalone mount, and `GameDeductionView`. [[src/deduction/Private/Session.ts]] owns accepted hypotheses, focus, language, and history. It does not touch health, evidence, profiles, or case flags.

[[src/case/case3/Private/final_deduction.ts]] authors the two Case 3 connections in Spanish and English. The final climax stage retains its authored success dialogue, then [[src/engine/Private/TrialDeduction.ts]] opens the private sequence. It sends each thought through the game's `DialogueFlow`, so the normal dialogue plate, typewriter, advance arrow, speaker staging, and message history remain in use. `GameDeductionView` mounts the Three.js choice scene inside the game screen and aligns semantic HTML hit targets with the visible planes.

The court's Acta, message history, language toggle, audio toggle, and save slots remain the game's existing controls. Wrong answers show one explanation at a time and do not affect health. Accepted ideas animate into a connection before the next prompt. On return, [[src/engine/Private/TrialController.ts]] queues `deductionOpening`, then the existing verdict/trap sequence and epilogue.

## Motion and rendering

Case 5 authors five bilingual questions in [[src/case/case5/Private/final_deduction.ts]]. `ContradictionFollowUp.deduction` replaces its former present chain. [[src/engine/Private/TrialDeductionRoute.ts]] resolves the saved sequence identity within the active trial day and preserves its testimony origin. Returning queues the follow-up's public `successDialogue`, then advances the trial normally. Genoveva supplies the voucher before the five-stage accusation opens; the deduction never skips to the verdict. Case 4 uses the same follow-up route on D3-T2 ([[src/case/case4/Private/final_deduction.ts]]); returning leads straight into the climax. The scene stages the sequence's defender, Chapulín in Case 5 and Don Ramón in Cases 3 and 4.

[[src/deduction/Private/ThoughtEntrance.ts]] can target either the demo stage or the live game. Case 3 frames the existing court scene, switches staging to Don Ramón, and zooms to the configured forehead anchor before showing the private thought scene. The animation pauses for modals and hidden tabs and is canceled when a save is restored or the trial changes. Reduced motion skips the zoom.

Three.js renders the light field, paths, and textured option planes. Both HTML entry points resolve it through a local import map; the build copies its browser modules into `dist/vendor`. HTML targets follow the same centered `choiceLayout`, support keyboard focus, and let one click select a choice. WebGL failure uses the existing 2D projection with visible answer labels while preserving the session. Reduced motion turns off camera travel and ambient animation.

## Persistence and teardown

The in-game `DeductionSnapshot` is an optional field on the existing trial snapshot. The main save slots store sequence identity, phase, step, accepted IDs, selection, focus, language, and history. Restoring validates the snapshot against the active case sequence; an in-flight travel normalizes to its connection. Older saves without a deduction field remain valid.

The game uses its existing `MidiMusicComposer` and `SoundEngine`; no second audio context or separate case save is created. Entry clears queued music and remains silent through the forehead zoom. `deduccion_final` begins once the entrance completes, stays continuous through subsequent thoughts, and starts immediately when restoring a thought after entry. The pale conclusion title clears the music again; returning restores `suspense` before the existing objection and victory cues. Restoring a conclusion keeps the music stopped and does not repeat its realization cue. Connection memories are drawn from the sequence's existing record names and facts over the tunnel. Loading, changing cases, or leaving trial disposes renderers, listeners, animation callbacks, and timers.

The demo still keeps its own fictional sequence and isolated demo save key. Requirements: [[docs/specs/deduccion-final.md]]. Case-specific script contract: [[docs/specs/case-3-la-noche-del-grito.md]].
