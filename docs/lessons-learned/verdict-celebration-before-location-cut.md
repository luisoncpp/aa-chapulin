# Pin victory FX to the verdict camera, not the last queue in the chain

`queueDialogue(..., onComplete)` is easy to chain as "do the next scene, then celebrate." That puts confetti on whatever location the last queue happens to be.

A Not Guilty is a courtroom event. If an epilogue lives in another room, fire confetti on verdict complete, hold the judge shot, fade through black, then change `bg`. Do not wait for the waiting-room queue to finish, and do not swap `#scene-bg` in the same tick as the verdict callback. [[src/engine/Private/SceneFade.ts]] covers the plate while the lobby loads so the cut is not a hard jump.
