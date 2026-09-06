# Climax BGM: the first dialogue line wins

`startClimaxPhase` / `restoreClimaxSession` call `midiComposer.playTrack('suspense')`
([[src/engine/Private/TrialClimax.ts]], [[src/engine/Private/TrialChoice.ts]]) — but that
happens *before* the climax dialogue is queued. `DialogueFlow` then honours any `bgm` on the
first line, so a stray `bgm: 'trial'` there silently replaces the showdown theme for the whole
build-up. Nothing errors; the scene just plays the neutral "court is in session" cue while
tension is supposed to rise.

## What to preserve

- A climax `dialogue[0]` should either omit `bgm` or state `suspense` explicitly. Prefer
  explicit: the restore-from-save path re-queues the same array and reads the same field.
- Escalation is scripted per line, not by the engine. Case 4 is `suspense` → `pursuit` on
  Don Ramón's turnaround line ([[src/case/case4/Private/climax.ts]]).
- The engine never checks which track is playing, so this class of mismatch is invisible to
  runtime assertions. Guard it in the case-script tests instead
  (`tests/case/Case4Trial.test.ts`), and keep ES/EN in lockstep.

Related: [[docs/lessons-learned/climax-present-prompt-hud.md]],
[[docs/lessons-learned/climax-final-stage-success-then-verdict.md]]
