---
id: engine
label: Game Engine
color: "#3b82f6"
icon: layout
facades:
  - index.ts
architectureDoc: docs/architecture/game-engine.md
descriptionShort: "Coordinates DOM rendering, dialogue queue, modals, and screen effects"
---

# Game Engine

Serves as the central presentation and interaction coordinator for the game screen. Exposes `createGameEngine` and the main `GameEngine` class via [[index.ts]] to orchestrate DOM elements, typewriter text streams, visual effects, and scene controllers. Encapsulates dedicated controllers for investigation hotspots, courtroom cross-examinations, and modal dialogs, plus a declarative stage-composition table ([[Private/StageLayout.ts]]) that owns character and furniture geometry as stage-relative ratios.
