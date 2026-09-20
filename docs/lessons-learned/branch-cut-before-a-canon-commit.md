# A branch cut hours before a canon commit looks like a writing defect

## What happened

Case 5's day-3 testimony was unreadable, and the investigation produced three
plausible and wrong diagnoses — dense legal register, a date contradiction between
cases, a missing explanation for the prosecutor's bag — before the actual cause
turned up in `git`.

Commit `140fb2c` on `master` did two things at once: it swapped the crime dates of
Cases 1 and 2 (the series reordered Act 1 = Case 2), and it introduced invariant I35
with the lines that anchor it. The working branch was cut **hours earlier** and never
received it.

Both symptoms — a testimony with a missing premise, and a case whose own scripts
dated the same card 21 August in three places and 28 August in a fourth — came from
that one absence.

## What to do

- Before auditing a narrative incoherence, run `git merge-base HEAD <main>` and read
  what landed on the main branch after the cut. It costs one command.
- Be suspicious when a document and the code it governs disagree about a *fact*
  rather than a *wording*. Wording drifts; facts usually mean someone's tree is old.
- A commit that carries both a world-model change and its script anchors is worth
  splitting, precisely so a partial merge cannot deliver one without the other.

## What the merge did not carry

`140fb2c` touched the Case 1 and Case 2 specs and the Case 1 code, but **not**
`src/case/case5/`. Merging fixed the two source specs and left every Case 5 script,
evidence catalog and plate narration on the old dates. A merge that resolves cleanly
is not the same as a propagation that is complete — check the files the commit never
touched.
