# Climax stage `prompt` is asked BEFORE the present

A `ClimaxStage` carries two questions and they fire at opposite ends of the same beat:

- `stage.prompt` — painted on the HUD (`#climax-present-prompt`) while the Acta is open and the
  player is still choosing which evidence to present. The player has not seen the answer yet.
- `stage.pointTarget.promptQuestion` — painted on the Present & Point plate, i.e. only after the
  correct evidence has already landed.

So `prompt` must be phrased in terms of the *question* the court is asking, never in terms of the
piece that answers it. Case 4 stage 2 asked "¿Qué parte del anillo corresponde al fragmento
retenido en el canal?" as the present question, which named Rufino's ring several minutes before
`CASE4_CLIMAX_STAGE2_SUCCESS` reveals it ("...Un anillo."). The same sentence is fine — and stayed —
as the `pointTarget` question.

Rule of thumb: if a word in `stage.prompt` also appears in the Court Record *name* of
`stage.presentTarget`, the prompt is handing the player the answer. An exception is legitimate only
when the preceding climax dialogue already put that object on the table (Case 4 stage 1 names the
V58-17 bottle right after the defense says the answer came inside a cork).

## The same leak happens through plates and captions

The prompt is only one door. Any Court Record surface the player can already open leaks the answer
just as well — and a `detailedView` plate leaks it *harder*, because artwork is unambiguous where
prose can stay vague.

Case 0 shipped `examine_informe_lesiones.webp` with a full profile drawing of the charcoal iron in
one of its four panels, and an es/en caption that named it ("la silueta compatible con una plancha
de carbón"). `informe_lesiones` is one of the seven pieces in the Acta at the opening, with
`detailedView` live, so the court's own forensic report illustrated the murder weapon roughly
thirty minutes before climax stage 1 asked the player which object in house 4 explains the injury.
The Judge was asking a question his own exhibit answered.

A forensic exhibit may carry the *traits* that support the deduction — flat base, straight edge,
rounded corners, ≈6 kg — and must stop short of the object. `detailedView` has no per-stage
staging: one plate serves every evidence stage, so the plate has to be safe at the earliest moment
the player can open it, not just at the end.

Check all four surfaces of an item that gates a climax stage: `name`, `desc`, every entry in
`updates[]`, and `detailedView.caption` — plus the pixels of the plate itself.

Guarded by `tests/case/Case4Scripts.test.ts` — "never names the ring in a climax present prompt" —
and `tests/case/Case0InjuryReportDiscretion.test.ts` for the text surfaces of the injury report.

See also [[docs/lessons-learned/climax-present-prompt-hud.md]],
[[docs/flows/present-point-flow.md]].
