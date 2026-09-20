# An invariant can be "applied" in the spec and absent from `src/`

## What happened

A player reported that Super Sam's day-3 testimony in Case 5 "made no sense". The
symptom looked like bad prose. It was not.

Invariant **I35** requires the script to say on screen that the bribe money and the
thief's advance left the same office **in two different bags**, and it explicitly
forbids the one-bag reading. The four lines that carry it were added to
`docs/specs/case-5-el-tomo-trece.md` and never to `src/case/case5/Private/`.

Searching all of `src/` for `salieron las dos`, `dos bolsas` and `two bags` returned
zero hits. So the shipped game stated the bag count nowhere, leaving the player with
the only reading the invariant prohibits — under which the prosecutor is paid ten
thousand pesos *and* loses his bag, with no way to tell whether that is the joke or a
mistake.

Meanwhile the spec's residue table and its audit log both recorded the thread as
closed.

## Why the tests did not catch it

`tests/spec/Case5SpecConsistency.test.ts` reads the spec and asserts against the
spec. That validates a document against itself. Every invariant whose anchor is a
line the **player reads** needs a test that opens the shipped script instead.

## What to do

- When an invariant says "X is stated on screen", add a test that reads the file
  under `src/` where the line must live. `tests/spec/Case5SourceAnchors.test.ts` is
  the pattern.
- Treat a residue table as a claim to verify, not as evidence. "Closed" in the spec
  means someone intended to close it.
- Prefer relational assertions to string matches. "No line dated 21 August may talk
  about the museum" survives rewording; `not.toContain('veintiuno de agosto')` breaks
  the moment a different case legitimately owns that date.

See also [[docs/lessons-learned/spec-snapshot-drift.md]] and
[[docs/lessons-learned/spec-audit-lens-log.md]].
