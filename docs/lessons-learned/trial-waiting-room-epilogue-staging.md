# Trial speaker cameras win unless every line sets a location plate

Trial mode maps speakers to courtroom angles (`bg_defense`, `bg_courtroom`, `bg_witness`, `bg_judge`) whenever `line.bg` is omitted. Furniture follows those filenames (bench / podium).

A scripted scene that is *about* the waiting room still looks like the trial if those lines live in `climax.verdict` with no `bg`. The first thanks-you line from CHOMPIRAS or FLORINDA becomes the witness stand.

Stamp `bg` and `furniture: 'none'` on **every** epilogue line, not only the first. A later line without `bg` re-enters the speaker camera table and overwrites the lobby. [[src/engine/Private/TrialClimax.ts]] does that stamp after `verdict` so the case script can list the lobby once on `climax.epilogue`.

Case 0 has a separate `bg_waiting_room_case0.webp` because its epilogue requires an open newspaper on the left bench. Keep the shared `bg_waiting_room.webp` unchanged for Cases 2–4; a prop-specific epilogue requirement belongs in a case-owned background variant, not in the shared waiting-room plate.
