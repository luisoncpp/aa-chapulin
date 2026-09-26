# Dialogue text is not markdown

The dialogue box and the Court Record print the strings exactly as written. There is no markdown
renderer anywhere in the engine, and there should not be one: the typewriter measures and reveals
characters one by one, so any inline formatting pass would have to re-enter that loop.

Consequence: `*Coadyuvante*`, `**negrita**`, `_cursiva_` and backticks reach the player as literal
punctuation. Case specs are markdown files, so emphasis written in a spec is silently correct there
and silently wrong once copied into a script or a catalog entry.

## Invariant

Emphasis in visible text is carried by the words and by the project's quote conventions:

- Spanish: `«...»`
- English: `"..."`

Guarded by `tests/case/DialogueMarkdownFree.test.ts`, which walks every case script, evidence
catalog and profile catalog in both languages and rejects markdown markers in the rendered keys
(`text`, `label`, `title`, `witness`, `prompt`, `question`, `name`, `desc`, `updatedDesc`,
`caption`). When a new visible field is added to the types, add its key there too.
