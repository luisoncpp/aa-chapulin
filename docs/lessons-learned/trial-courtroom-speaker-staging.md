# Trial Courtroom Speaker Camera Angle and Staging Resolution

## Context
Courtroom trials in visual novels like Ace Attorney involve rapid dialogue back-and-forth between multiple courtroom stands: the Defense Bench, Prosecution Bench, Judge's Bench, and Witness Stand.

## What Was Learned

### 1. Decouple Narrative Scripts from Repetitive Camera Angle Annotations
Requiring scriptwriters to annotate every single dialogue line, statement press, contradiction, and objection with its corresponding `bg` tag (`bg_defense.jpg`, `bg_courtroom.jpg`, `bg_judge.jpg`, `bg_witness.jpg`) creates fragile data prone to subtle desynchronization bugs. When a cross-examination line or objection omits `bg`, stale background state leaks across speaker turns, rendering prosecutors or judges on the witness stand.

### 2. Centralized Speaker-to-Courtroom Camera Mapping
Resolving canonical courtroom camera angles dynamically based on the active speaker:
- `DEFENSA` / `DON RAMON` / `CHAPULIN` -> `bg_defense.jpg`
- `SUPER SAM` -> `bg_courtroom.jpg` (prosecutor bench)
- `JUEZ` -> `bg_judge.jpg` (judge bench)
- Witness / `TRIPASECA` -> `bg_witness.jpg` (witness stand)

Explicit `line.bg` continues to override when a scene requires a specific cutaway or wide courtroom shot.

### 3. Bind Background and Foreground Furniture Resolution in a Single Step
Furniture inference (e.g. `podium` vs `bench` vs `none`) cannot rely on previous DOM background state when background switching is asynchronous or separated from staging. Staging must first resolve the target camera angle, then resolve the matching foreground furniture and stage frame against that resolved angle:
- Witness background -> `podium`
- Defense background with active character pose -> `bench`
- Prosecution and Judge backgrounds -> `none` (furniture is part of their perspective background artwork)
- Non-trial investigation scenes -> `none`
