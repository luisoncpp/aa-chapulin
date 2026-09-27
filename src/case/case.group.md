---
id: case
label: Case Scripting
color: "#f59e0b"
icon: layers
facades:
  - index.ts
  - loadCaseScript.ts
architectureDoc: docs/architecture/case-scripting.md
descriptionShort: "Encapsulates investigation scenes, testimony statements, and contradictions"
---

# Case Scripting

Contains declarative narrative scripts, crime scene hotspots, talk options, and trial cross-examination data for Turnabout Red Grasshopper. Exports the master `CASE_SCRIPT` data object through [[index.ts]] for tests and tools. The running game loads one case through [[loadCaseScript.ts]]. Organizes investigation encounters, witness testimonies, contradiction rules, and verdict climax sequences across modular files.
