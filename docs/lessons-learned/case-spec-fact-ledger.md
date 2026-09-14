# Review passes on a case spec don't converge; a fact ledger does

**Date:** 2026-09-13 · Case 1 rewrite (~2,300 lines, eight review passes)

## What is counter-intuitive

Eight adversarial review passes ran over the Case 1 spec. Passes 5, 6, 7 and 8 **each** found new player-visible defects, and pass 8's was the worst of all. The obvious reading — "the spec is a mess" — was wrong. Checking the drafts afterwards showed almost every defect had been present since the first version and had survived every earlier pass untouched.

**The yield of a review pass tracks the lens you gave it, not the quality of the document.** Pass 4 was asked about counts and cross-references and found counts and cross-references. Pass 6 was asked to build a floor plan and hunt unfair penalties, and found four spatial and fairness bugs that had sat there through three prior reviews. Pass 8 was the first told to open the actual source files, and immediately found a claim in the spec that would have deleted every player's save file.

So "run another audit" is not a convergence strategy. Two things that are:

1. **Rotate the lens deliberately and write down which ones have run.** Ours, in order: counts and cross-references → dates and timeline → physical/spatial coherence → mechanical fairness → the fact ledger and its invariants → progression, engine contract and solvability. Repeating a lens is nearly free of yield; a new lens is where the findings are.
2. **Give at least one pass the codebase, not just the spec.** The narrative survived three consecutive passes. The spec's *claims about the code* did not.

## The two axes prose will not carry for you

Most defects were not story errors. They were a fact restated in two places that drifted apart — and they clustered on two axes that a sentence can be locally plausible while getting wrong:

- **Attribution.** Case 1's premise is that the plan was *bought*, so whoever knew a thing is not whoever did it. Three agents stood in that room and the spec silently merged two of them: the climax used tape-measure marks left by the card's author to place the culprit at the scene — an argument the case's own second turnabout had already refuted thirty lines earlier.
- **Scale.** The culprit is mouse-sized for fifteen minutes of the crime. The spec had him leave a full-size fabric thread while shrunk. Six passes missed it, because nothing in a sentence forces you to carry a size through it.

If a case has either property — a knowledge/action split, or anyone changing size, disguise or state mid-crime — those become **columns**, not prose.

## What actually worked: write the ledger first

Late in the process we added §23 of [[docs/specs/case-1-turnabout-red-grasshopper.md]]: one table, one row per physical trace, with columns for *who left it · when · at what size · orientation · where it's found · where it's argued · what it proves*, plus a minimal floor plan naming only the directional facts the arguments depend on.

It paid for itself on its first audit — and it was cheaper to check than the prose, because attribution and scale errors became a column scan instead of re-simulating the crime from a script. **Build it before writing the script, not after.** Writing it second meant reconciling it with 2,000 lines that already disagreed with each other.

Two rules that come with it:

- **Name one view the source of truth and mark the rest derived.** A case spec restates the same facts across six or more views — timeline, evidence table, script, discard table, clue audit, style guide, asset briefs. Hand-maintained summary views *will* drift. Ours now say "vista derivada" and state that on conflict the view gets corrected, never the ledger. Better still, derive them in tests instead of prose.
- **Turn each defect you find into an invariant, and state it as a test over the whole document.** §23.D holds seven. They are worth more than the individual fixes: the pass that came after them used them as a checklist and caught a fresh instance of one.

## Fairness bugs live where flavour meets logic

Wrong-answer content — Present & Point decoy zones, climax fail lines — gets written in a different sitting from the arguments it must not contradict, and the two never get read together. Both of ours were broken:

- A decoy zone on the vitrine plate was the outward-bent frame, which the success speech cites two lines later as proof. The player lost a health point for being right.
- The climax's only fail line asserted a fact about the person named. Rewritten once, it was still false for a different profile — **two wrong fixes in a row**, which is the sign that a rule is needed rather than better care.

The two rules, now invariants I4 and I5:

- A wrong zone may not be **a valid answer to the question actually asked**. It *may* be an object cited later, provided its failure line acknowledges it matters instead of denying it.
- A fail line must be true for **every** wrong answer available, not just the likeliest one. Prefer lines about the burden of proof ("the court did not ask who you suspect, but who your evidence names") over lines asserting facts about a person.

## Related

- [[docs/specs/case-1-turnabout-red-grasshopper.md]] §23 — the ledger, the floor plan and the seven invariants
- [[docs/lessons-learned/conditional-acta-tab-bar.md]] — the implementation-side twin: a schema substitution and a save-version bump reach back into shipped cases
- [[docs/lessons-learned/climax-stage-prompt-spoils-answer.md]] — a prompt that names a decoy already in the Acta is the same class of unfairness
- [[docs/lessons-learned/spec-snapshot-drift.md]] — the other way a spec and its reviewer fall out of sync
