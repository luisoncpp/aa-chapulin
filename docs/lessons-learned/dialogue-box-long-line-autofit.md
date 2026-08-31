# Dialogue Box Long Lines Auto-Fit

`#dialogue-box` is a fixed 120px plate and the controls bar sits directly above it (`bottom: 138px`), so the box cannot grow upward for a long line. At 24px/1.35 only ~3 lines fit; Case 3's longer testimony and defense lines were clipped mid-sentence.

**What to preserve:** long lines are handled by stepping the font down, not by growing or scrolling the box. `fitDialogueFontSize` ([[src/engine/Private/DialogueTextFit.ts]]) measures `scrollHeight` vs `clientHeight` at each step and is called from `Typewriter.start` before typing, so the size is decided from the *full* text, not the partially typed prefix.

**Why a CSS custom property:** the size is written as `--dialogue-font-size` on the element, not as an inline `font-size`. An inline `font-size` would beat `#dialogue-box.examine-mode #dialogue-text { font-size: 17px }` and break the examine plate; the examine rule sets a literal size and therefore ignores the variable.

`#dialogue-text` needs `height: 100%` for the measurement to mean anything — without it the element grows and `scrollHeight === clientHeight` always.
