# Evidence descriptions must carry the numbers the contradiction turns on

The Acta description is the only place the player can read a document. If the
fact that makes an item contradictory is not written there, the present is a
guess even for a player who reasoned correctly.

Two failure shapes, both seen in Case 5 day 1:

- **Annexed evidence.** `parte_detencion` carried "Anexo: hoja de relevo de
  custodia del Archivo, con las firmas de entrada y salida" and was the answer
  to the fifteen-minute gap. An arrest report and a custody sheet are different
  documents from different institutions; bundling them made the Acta card
  unreadable as an object. Split them into two `EvidenceId`s instead of
  lengthening one `desc`.
- **Qualitative paraphrase of a quantitative fact.** "Con las firmas de entrada
  y salida" names that hours exist without stating them. The contradiction was
  17:00 out / 17:15 in; neither number was in the Acta. Write the values.

Rule of thumb: read each contradiction's target `desc` alone, with no script
context. If it does not state the fact that defeats the statement, the present
is unfair regardless of how well the trial dialogue explains it afterwards.

Splitting an item reaches further than the catalog: the granting `addEvidence`
line, `progress.ts` day lists (inventory-only `checkTrialReadiness` gating),
the `contradiction.evidence` array, the success dialogue's own wording, and the
ES/EN parity tests all move together. An icon asset is also owed; reuse another
case's file as a marked placeholder rather than sharing an icon inside the same
Acta, where two identical cards are a worse bug than a wrong drawing.
