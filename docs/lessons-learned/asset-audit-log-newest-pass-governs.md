# In an asset fact sheet, the last audit pass governs

## What happened

An asset sheet was cited as evidence that `examine_expediente_serie.webp` still had
its B/C dates inverted and needed regenerating. The image on disk was correct. The
quoted defect came from the sheet's **first** audit pass; three later passes had
already retired it, and the final one (`Espanto-lock`) reads **CUMPLE** with an
explicit *"no regenerar el tablero entero"*.

The cost was a phantom work item reported to the user as pending.

## The shape of these sheets

A sheet under `docs/specs/case5-assets/` accumulates one `## Hallazgos de auditoría`
block per regeneration, in chronological order. Each block's **Correcciones de
auditoría** section strikes through (`~~...~~`) the earlier defects that pass
resolved. Older blocks are kept as trace, not as a backlog.

Over twenty Case 5 sheets have more than one block; `bg_archivo_pasillo7.md` has
eight.

## What to do

- Read the **last** block first. Its `Veredicto` is the current state of the asset.
- Before citing any defect, search later blocks for it — a `~~strikethrough~~` or a
  "se reitera" line tells you whether it survived.
- `grep -c "^## Hallazgos de auditoría"` on a sheet tells you how many passes exist
  before you start quoting line numbers from the top of the file.
- A defect that a later pass downgraded (MAYOR → MENOR) is not the same finding any
  more; quote the downgraded wording.
- Line references inside old blocks rot as the sheet grows. Verify a cited
  `file.ts:NN` before repeating it.

The general form: **an append-only log is not a to-do list.** The same trap applies
to the lens log in `docs/specs/case-*.md`, where early lenses record decisions that
later lenses revoke — the Case 5 spec has a lens 19 finding explicitly overturned by
lens 22.
