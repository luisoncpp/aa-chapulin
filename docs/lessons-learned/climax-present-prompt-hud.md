# Climax Present Prompts Live on the HUD

## Context
A multi-stage climax can name its questions in the opening judge line, then hide trial controls and open the Court Record. The dialogue queue consumes that line before the first present.

## What was counter-intuitive
Players treat the Acta as an inventory, not as a riddle sheet. After the opening queue finishes, the last visible line is often a pep talk (`¡Que no panda el cúnico!`), so the four-part checklist is gone exactly when a present is required.

## Effective Pattern
Put the current `ClimaxStage.prompt` on a persistent HUD banner and inside the Court Record while `isAwaitingEvidence()`. Hide it during success dialogue and choice modals so the question does not fight the cutscene. Do not rely on the judge's opening recap as the only UI.
