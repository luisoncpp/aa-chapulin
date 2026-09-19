# Prompts and Acta copy are a different register from dialogue

A period courtroom case invites archaic legalese, and a character who talks that way is good writing. The mistake is letting that register leak out of dialogue.

**Three surfaces are not dialogue, even though they live in the same script files:**

1. `prompt` / `promptQuestion` / `ChoicePrompt.question` / `ChoiceOption.label` — the game is *asking the player* something. The player must parse it under penalty pressure.
2. Evidence and profile catalog copy (`name`, `desc`, `updates[]`, `detailedView.caption`) — reference material the player rereads while deciding what to present.
3. Anything describing artwork. Prose that out-specifies the plate ("blood on the *edge of* the spine" when the plate paints the spine flat) reads as a bug in the art.

Word choice on those three surfaces is UI text. A word nobody has to look up beats a word that characterizes, because nothing there has a character.

**Consequence for Case 5:** *occiso*, *foja*, *legista* and *Ha lugar* are banned on all three surfaces; the dialogue keeps *occiso* exactly twice, both in Berrondo's mouth, where the register *is* the joke. See `tests/case/Case5Vocabulary.test.ts` — it walks every day's prompts plus both catalogs in both languages, and pins the survivor count in the sources so a future pass cannot quietly grow it back.

**The cheap generalization:** when a case introduces a period voice, decide the banned-word list at spec time and write the structural test with it. Catching it by playtest means a rewrite pass across ES and EN scripts, both catalogs, the spec, and any test that pinned the old string.
