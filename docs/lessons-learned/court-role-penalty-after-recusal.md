# Penalty prosecutor is a script role, not Super Sam

## Context
Wrong-present penalty dialogue always queued Super Sam pointing plus Don Ramón at the defense bench. Case 5 day 3 recuses Super Sam (SECRETARIO takes representación social) and puts Chapulín on `DEFENSA`. Berrondo on the stand had no idle inference, so a leftover `supersam_*` sprite could still read as “the other lawyer”.

## What Was Learned

### 1. Hardcoded courtroom jobs leak across recusal
A penalty is not a cutscene you can restage later. If the engine always paints Super Sam, every miss after recusal undoes the plot. Prosecution speaker and pose belong on `Testimony` (and the trial day) so T3 can be SECRETARIO with no pose while T1–T2 stay Super Sam.

### 2. Voice-only bench speakers must not borrow a sprite
`SECRETARIO` uses the prosecution camera but infers pose `null`. Staging hides the character. Mapping him as an unknown speaker would send him to the witness stand; defaulting his pose to `supersam_point` would put Super Sam’s body under the secretary’s nameplate.

### 3. `berrondo_idle` is the identity lock
Berrondo omitted-pose lines must infer `berrondo_idle` (black three-piece, leontina, tome). Extra poses (`definicion`, `sweat`, `catalogo`, `panic`, `breakdown`) are a closed list. Do not invent a second idle. Defense idle in VisualEffects stays Don Ramón; Case 5 stamps `chapulin_*` on DEFENSA lines, and penalty protesto/panic read `defensePointPose` / `defensePanicPose` from `CaseScript`.
