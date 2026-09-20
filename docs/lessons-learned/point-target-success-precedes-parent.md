# Point-target success plays *before* the success block that owns it

When a contradiction, follow-up or climax stage declares `pointTarget`, the engine does **not**
queue the parent `successDialogue` on the present. It opens the point overlay immediately, and
only after a correct click does it play:

1. `pointTarget.successDialogue`
2. then the parent `successDialogue`

(`beginRuleSuccess` in [[src/engine/Private/TrialPresent.ts]] passes the parent block as the
`onSuccess` callback of `startPresentPoint`.)

## Why this bites

A writer transcribing a spec reads it top to bottom: the `¡TOMA ESO!` reveal, then the
señalamiento, then the resolution. The natural — and wrong — mapping is reveal → parent
`successDialogue`, resolution → `pointTarget.successDialogue`. That inverts playback: the day
closes with the *opening* lines. Case 5 day 2 shipped that way and the trial ended on
«Que se ponga a la vista de esta corte.» *after* «Se levanta la sesión.»

The mistake is invisible to a reader of the case data, because both arrays are well-formed and
each reads correctly on its own.

## What to preserve

- The block that comes **before** the señalamiento in the spec goes in `pointTarget.successDialogue`.
- The block that comes **after** it goes in the parent `successDialogue`.
- Test helpers that flatten a trial into playback order must use the same order. Two of them
  (`Case5Day2Trial`, `Case5TrialCue`) had the inversion baked in, which is why the cue
  hand-back check passed on a script whose cues were actually inverted.
- Cue overhang is order-sensitive: a `bgm: 'objection'` on the reveal is fine when the
  resolution that follows hands the loop back, and a bug when it plays last.

Related: [[docs/flows/present-point-flow.md]], [[docs/lessons-learned/dramatic-cue-outlives-its-beat.md]],
[[docs/lessons-learned/contradiction-followup-plays-twice.md]]
