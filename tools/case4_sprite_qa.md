# Case 4 character sprite QA

Checked 2026-09-04 against [[docs/lessons-learned/dialogue-box-sprite-baseline-alignment.md]], [[docs/lessons-learned/chroma-key-sprite-slicing.md]], [[docs/lessons-learned/chimoltrufia-not-florinda-identity.md]], and identity refs `chimoltrufia_idle`, `chompiras_idle`, `pazguato_idle`, `donramon_idle`.

Pixel gates on every processed 512² WebP: opaque hem at y=505 (5px above canvas floor), 0 unkeyed magenta, 0 purple fringe, no furniture/speech-bubble leftovers. `plain` staging (hem on the dialogue-box gold line) matches Don Ramón / Chimoltrufia. Style sits in the same Ace Attorney cel + Chespirito band. No regenerations.

## Botija — pass

Obese, full black beard, tiny sky-blue flat cap, all-black plumber clothes, wrench at the belt. Shirt riding up is canonical. White sneakers not in frame (waist-up).

| Pose | Result |
|------|--------|
| `botija_idle` | pass |
| `botija_nervioso` | pass |
| `botija_llorando` | pass |
| `botija_aliviado` | pass |

## Cecilio — pass

Pearl-grey three-piece, round gold bottle-bottom glasses, same person across the sheet. `cecilio_ciego` still wears the glasses (squint / gesture, not a wipe-off).

| Pose | Result |
|------|--------|
| `cecilio_idle` | pass |
| `cecilio_ciego` | pass |
| `cecilio_escandalo` | pass |
| `cecilio_shock` | pass |

## Maruja — pass

Huge copper-red teased hair, emerald gown, cream stole, gold hoops. No Florinda rollers. `maruja_shock` is a narrower raised-arms silhouette on the same floor; still the same woman.

| Pose | Result |
|------|--------|
| `maruja_idle` | pass |
| `maruja_coqueta` | pass |
| `maruja_abanico` | pass |
| `maruja_nerviosa` | pass |
| `maruja_shock` | pass |

## Rufino — pass

Black tailcoat, ivory vest, white bow tie, waxed mustache, gold monocle + signet ring. Panic drops the lens off the eye (cord remains); breakdown still the same man, monocle in hand.

| Pose | Result |
|------|--------|
| `rufino_smug` | pass |
| `rufino_monocle` | pass |
| `rufino_sweat` | pass |
| `rufino_panic` | pass |
| `rufino_breakdown` | pass |
