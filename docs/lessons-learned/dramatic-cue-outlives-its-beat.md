# A dramatic cue plays until some other line changes it

`objection` and `pursuit` sound like stingers, so it is easy to assume something stops them. Nothing does.

The composer only switches track when a dialogue line declares `bgm`, and the next engine-initiated `playTrack` after a contradiction is `TrialController.startTestimony` for the *following* testimony. Everything in between — the rest of the success block, the whole follow-up block, the witness being dismissed, the next witness being sworn in, even a session closing — keeps the turnabout loop running. Case 5 day 1 played `objection` across nineteen lines of routine business before the Sergeant's testimony finally replaced it, which reads as a bug ("the objection music won't stop") rather than as scoring.

What to remember:

- **The block that raises the cue owns ending it.** Stamp the active testimony's own `bgm` back on the line where routine court business resumes. `suspense` is the alternative when the beat resolves into a quiet cliff-hanger instead of back into cross-examination.
- **A follow-up block inherits.** `followUp.successDialogue` with no `bgm` silently continues the parent cue, so the inheritance is invisible in the file you are reading. Declare the peak explicitly on the follow-up's own shout line.
- **Re-cueing the same track is free.** `playTrack` compares the resolved `TrackDefinition`, so handing back `cross_exam_moderato` four lines before `startTestimony` cues it again does not restart the sequencer.
- **One exemption.** The last contradiction chain of the last trial day hands over to the climax, whose first dialogue line declares its own cue; a dramatic cue carried across that seam is continuous, not an overhang.
- **The engine cannot infer the end of a beat.** There is no structural boundary between "the reveal" and "the judge moving on" — both are lines in the same array — so this is a scripting contract, checked by a structural test ([[tests/case/Case5TrialCue.test.ts]]), not something to fix in `DialogueFlow`.
- **Pressing is not a new beat.** `Statement.pressText` runs inside the active testimony and must leave its `bgm` unset. A cue there changes the track for the rest of the cross-examination, as Super Sam's day-3 press response demonstrated.

Cases 0–4 still contain blocks with the same shape; they predate the contract and were left alone rather than re-scored in a bug fix.
