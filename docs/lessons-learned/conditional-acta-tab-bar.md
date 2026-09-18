# Acta tabs are for browsing, not active presentation prompts

**Date:** 2026-09-13 · Case 1 rewrite (Acta de Personajes)

## What is counter-intuitive

Adding a second tab to a shared modal is not a Case 1 change. `#court-record-modal` is the same DOM for all five cases, so the cheapest implementation — always render the tab bar, leave the second tab empty for older cases — silently redesigns four shipped episodes. The fix is to make **emptiness the switch**: the bar renders only when `state.profiles.owned.length > 0`, and `getProfileCatalog` returns `{}` for cases that declare no profiles (Cases 0, 2, 3, and 4). Case 5 now declares profiles, so its Acta will show the bar once cards are owned. Guard it with a test that opens the Acta in another case and asserts the bar is absent; a test that only checks Case 1 would pass either way.

The case capability and interaction mode are separate switches: the bar renders only when `state.profiles.owned.length > 0` and the Acta is being browsed. During a present prompt, render the requested list directly and hide the tabs so the question does not compete with an irrelevant inventory choice.

## Two traps the schema sets

1. **A substitute field makes its siblings optional.** `profileTarget` replaces `evidence` / `presentTarget` rather than joining them, so those fields had to become optional — and every site that dereferenced them (`TrialPresent`, `TrialClimaxPresent`) needed a guard. Filling them with empty arrays instead looks harmless and is not: an exhibit presented in a person-shaped slot would be penalised in silence instead of being routed to the profile handler.

2. **A save-schema bump deletes other people's games.** `isValidSave` compared `d.version !== CURRENT_SAVE_VERSION` and `load()` turned `false` into `null`, which the Continue screen reads as "no save". Raising the constant from 1 to 2 without writing a migration would have wiped the saves of Cases 0, 2, 3 and 4 — the four cases that had nothing to do with the feature. Accept a *range* of versions, migrate on load, and pin a literal v1 payload in a test.

## Related

- [[docs/flows/character-record-flow.md]]
- [[docs/lessons-learned/investigation-gating-and-evidence-stages.md]]
