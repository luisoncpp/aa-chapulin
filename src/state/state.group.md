---
id: state
label: Game State
color: "#10b981"
icon: database
facades:
  - index.ts
architectureDoc: docs/architecture/game-state.md
descriptionShort: "Manages runtime progression flags, player inventory, and health"
---

# Game State

Maintains the authoritative runtime state for player progress, location, health penalties, and collected evidence. Exports the singleton `gameState` instance through [[index.ts]]. Coordinates with the investigation and trial controllers to evaluate case readiness and penalty limits.
