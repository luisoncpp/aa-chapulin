# Investigation Must Not Rehearse Trial Reveals

Case 5's GIRO 1 is the courtroom moment where the judge learns the Archive keeps a
*second* register (`trial_day1_success.ts`: «Su libro, señor juez. El de ellos.» →
«...¿Hay dos libros?»). The day-1 investigation played that exact beat first, with
Nicanor's same two lines and the same Chapulín reaction. By the time the judge
reacted in court, the player already knew, so the twist landed as a recap.

## What to preserve

- A clue the player must **carry into** the trial belongs in the investigation.
- A fact the **court** is supposed to discover belongs only in the trial script.
- The investigation may establish the *premise* the reveal turns on (here: the
  visitors book is signed by visitors only; staff and uniformed police never
  sign) without naming the consequence (a second book exists).

## How to check

Grep the trial's `*_success.ts` reveal lines against the day's investigation
hotspots and talk options. Duplicated wording is the symptom; a duplicated
*question* ("¿Hay dos libros?") is worse than duplicated exposition, because the
question is the reveal.

Guarded by `tests/case/Case5SecondLogbookSurprise.test.ts`, which walks the day-1
scene intros, hotspots and talk options in both languages and rejects any phrasing
that names a second register.

## Related

- Voice note: the visitors book is signed by *visitas / el público*, so the natural
  question is "¿quién era visitante?", never "¿quién era público?" — "público" is
  the category of the book, not a status a person is asked about.
