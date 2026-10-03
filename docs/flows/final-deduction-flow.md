# Final deduction flow

## Case 3 trial

1. The player reaches the fourth climax present and submits one of the accepted exhibits after its required update.
2. The game queues the existing stage-four success dialogue. Aniceto denies the voice, Super Sam agrees that the case is only paperwork without it, and the judge asks whether the defense can prove whose voice it is.
3. [[src/engine/Private/TrialClimaxPresent.ts]] starts the sequence authored in [[src/case/case3/Private/final_deduction.ts]]. [[src/engine/Private/TrialDeduction.ts]] stages Don Ramón in the ordinary court scene and mounts the option scene over the game screen. The entry is silent and clears queued music so unlocking audio or completing its text cannot start the deduction theme.
4. The entry dialogue advances through the game's normal typewriter and arrow while only the court is visible. After the entry, the court zooms to Don Ramón's forehead; the thought scene fades in only at the end of that zoom. When the entrance completes, `deduccion_final` starts with the first premise. The tunnel renders across the entire court, including behind the dialogue box. The premises, questions, rejected hypotheses, and connections use the game's dialogue box and enter its message history. Question options appear together with their click targets after the question is advanced.
5. A wrong option enters `rejected`; its Three.js planes and click targets disappear while the explanation is read. No health changes. Advancing reopens the same question. A correct click stores one accepted ID, animates its path, then reads the connection.
6. After an accepted connection, the authored memory's record name and fact appear over the tunnel. They disappear for questions and rejected answers. The conclusion stops the music and replaces the tunnel, HUD, and dialogue plate with a pale full-screen title. Clicking the title or pressing Enter or Space returns to court. The game disposes the thought scene, returns to `suspense`, queues the original public response to the judge, then plays the original sketch trap, Aniceto's correction, confession, verdict, and epilogue.

The existing Acta remains available as a consultation window. Language changes rerender the current thought in the other language. Saving includes the deduction snapshot in the existing trial save; loading restores it against the active Case 3 sequence and cancels old animations. Loading another case disposes the scene.

For a direct review, load `?case=3&trial=3&deduction`. The launcher prepares the day-three trial state and opens the final deduction.

## Case 5 final testimony

1. On day four, present `libro_peritos` against Genoveva's statement about entry and exit times. The existing public exchange establishes that returning a badge does not prove departure.
2. `ContradictionFollowUp.deduction` opens Chapulín's private reasoning. Five questions connect the planted card corner, the advance notice and receipt, the preparation hypothesis, the subscriber index, and Genoveva's voucher folder. Wrong answers explain and repeat without changing health.
3. The conclusion reads `GENOVEVA TIENE LA EVIDENCIA`. It identifies the source to request, without revealing the voucher's contents or the matching card reserved for climax stage four.
4. Return to court queues `ContradictionFollowUp.successDialogue`. Genoveva reads the November twenty-ninth consultation voucher, the secretary receives her folder, and the judge orders the accusation. The ordinary five-stage climax then starts.

Direct review: `?case=5&trial=4&deduction`. A save inside this sequence restores the same questions and returns to this public exchange.

## Standalone demo

`npm run demo:deduction` builds TypeScript, copies Three.js browser modules, and serves the fictional workshop-clock sequence at `http://127.0.0.1:4173/deduccion-final-demo.html`. The demo retains its own utility menu and eight isolated demo saves. It exercises the same session model, Three.js planes, forehead entrance, error feedback, and 2D fallback without starting a case.
