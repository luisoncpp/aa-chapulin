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

Guarded by `tests/case/Case4Scripts.test.ts` — "never names the ring in a climax present prompt".

See also [[docs/lessons-learned/climax-present-prompt-hud.md]],
[[docs/flows/present-point-flow.md]].
