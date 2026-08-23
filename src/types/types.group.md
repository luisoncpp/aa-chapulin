---
id: types
label: Domain Types
color: "#8b5cf6"
icon: cube
facades:
  - index.ts
descriptionShort: "Defines shared domain contracts, audio schemas, and case types"
---

# Domain Types

Encapsulates TypeScript contracts and data structures for all game subsystems. Exports public schemas for Web Audio synthesis, Court Record evidence, game state flags, and narrative case dialogue via [[index.ts]]. Its internal definitions in `Private/` ensure type safety across the engine without introducing runtime overhead.
