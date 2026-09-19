# Court Record adds vs description updates

A second `addEvidence` on an item already in inventory is a silent no-op: no toast, no new facts. Later investigation beats (timestamp on the antennae, paint on the crowbar) must use `updateEvidence` plus catalog `updatedDesc`. The toast matches location unlocks: realization SFX and `#game-notification`. If the player hits the update line first, treat it as an add (add toast, revised text immediately) so they are not blocked on visit order.

## The two fields have opposite semantics

Every `updates[]` entry in the shipped catalogs (cases 0, 1, 3, 4, 5) is written as an addendum — "Anexo:", "Ampliación:", "Rectificación del legista:" — because the author assumed the Acta keeps growing. The engine originally *replaced* the text with the addendum alone, so an updated forensic report showed only the supplement and the original facts (time of death, estimated window) vanished from the Court Record while the trial still argued about them.

`resolveEvidenceDescription` ([[src/state/Private/EvidenceProgress.ts]]) now renders `desc` plus every revealed `updates[]` entry, blank-line separated, and `#evidence-description` uses `white-space: pre-line`. Legacy `updatedDesc` (Case 2 only) is a full rewrite and still replaces.

**Rule when writing a catalog:** `updates[]` = what the player just learned, nothing repeated; `updatedDesc` = the complete replacement paragraph. Do not mix them on one item. And a correction that contradicts the original (a corrected time window) must say so in its own words — both texts are on screen at once.
