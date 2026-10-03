# Tutorial control crops

These lossless WebP files are crops of the running game's DOM, captured in a browser at a 960×540 stage. They are not illustrations or mockups. Spanish and English labels come from their respective live interfaces; save/load icons share one image. The total set is under 35 KB.

| Image | Live source | Tutorial |
| --- | --- | --- |
| `present-badge-es.webp`, `present-badge-en.webp` | Case 0 opening Court Record, selected attorney badge card and present button | Select the badge and present it |
| `examine-es.webp`, `examine-en.webp` | Court Record `#btn-evidence-examine` | Examine a detail before presenting |
| `save-load.webp` | HUD `#btn-save-game` and `#btn-load-game` | Save and load |
| `tabs-es.webp`, `tabs-en.webp` | Case 1 Court Record `#court-record-tabs` | Evidence and profiles |

The badge image stacks the selected card and present-button crops with a small dark gap; both controls retain their original pixels. Other images are single crops. No arrows or emphasis marks are added. The examine crop excludes the selected evidence and its description, so the first lesson does not reveal a later answer. The tabs exclude profile names and descriptions.

Recapture these controls in both languages after changing their appearance or labels. Build the game before capturing, wait for fonts and images to load, and crop the controls without the browser frame. Keep localized alternative text in each dialogue line's `tutorialImage`, and inspect the resulting card within the stage for readability.
