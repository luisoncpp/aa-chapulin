# Last Climax Success Looks Like Awaiting Evidence

## Context
`isAwaitingEvidence()` used to mean `phase === 'CLIMAX' && climaxChoiceIdx == null`. That is also the snapshot after the last correct choice (or a Case 1 present with no choices): the controller returns `choiceIdx: null` so the next choice modal does not open.

## What was counter-intuitive
The idle Court Record reopen in `GameEngine.handleAdvance()` cannot tell "need a present" from "verdict/epilogue, queue empty." The last Case 3 stage prompt is still `¿POR QUÉ?`. A click during confetti or the fade into the waiting room reopens the Acta with Presentar.

## Effective Pattern
Keep a `climaxResolved` flag set when victory dialogue is queued. Awaiting evidence requires that flag to be false. Do not treat a null `climaxChoiceIdx` as a present prompt after the case is already won.
