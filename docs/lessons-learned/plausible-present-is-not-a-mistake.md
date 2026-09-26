# A plausible present is the player reasoning, not failing

Before the cross-examination of a testimony ships, ask of **every** statement: which item in the Acta would a player who has understood the case reach for here? If that item is not the accepted contradiction, the current engine charges a point for being right one beat early.

Case 5 day-3 Testimony 6 had two of them at once:

- «El huacal nueve lo destapo **los jueves**» — the player has held the crate-lid photograph since the warehouse inspection and has heard Berrondo date the top seal on a Saturday. Nine lines later the script argues exactly that. Presenting it there used to cost health.
- «Adentro no hay más que libros viejos» — the player pulled a typewriter out of that crate the day before. It literally refutes the statement; the accepted proof was the 1971 inventory.

Both were the player being *right*, and both were punished.

## What to do instead

Three tools, cheapest first:

1. **Widen the accept list.** `ContradictionRule.evidence` is an array; if two items prove the same claim equally well, take both. Several Case 2 and Case 3 rules already do.
2. **Deflect** (`Statement.deflect`). For "right idea, wrong moment": the court answers, points at what is still missing without naming it, costs nothing, and returns to the same statement. Use it when accepting the item would skip a beat the case needs.
3. **Withhold the item.** If the temptation exists only because the player already holds the exhibit, moving its `addEvidence` later removes the trap entirely — but it also removes the chance to examine and notice, so prefer it only when the court can plausibly admit the exhibit on screen at the later moment.

Reserve the penalty for presents that are actually *wrong*, not merely early.

## Climax stages

The same distinction applies to `ClimaxStage.deflects`. Use it when an exhibit belongs to the chain of reasoning and incriminates someone, but cannot answer the stage's current question. Its dialogue should state what the exhibit establishes and what it still does not prove; the stage remains pending without a penalty.

## The trap in the test harness

Each case day has its own line collector (`trialDialogue`, `allTrialLines`, `testimonyLines`), and they all read:

```ts
lines.push(...(stmt.pressText ?? []));
const rule = stmt.contradiction;
if (!rule) continue;
```

A `deflect` on a statement **without** a contradiction is skipped by that `continue`, so its lines silently escape every pose, BGM, vocabulary and Spanish-leak sweep. Collect `stmt.deflect?.dialogue` *above* the `continue`. `DialogueMarkdownFree.test.ts` is the exception: it walks the whole object graph and sees everything.

## Related

- [[docs/lessons-learned/climax-stage-prompt-spoils-answer.md]] — a deflection orients without naming the evidence, for the same reason.
- [[docs/flows/trial-cross-examination-flow.md]] — the three present outcomes in order.
