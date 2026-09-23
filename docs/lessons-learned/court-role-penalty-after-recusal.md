# Penalty prosecutor is a script role, not Super Sam

## Context
Wrong-present penalty dialogue always queued Super Sam pointing plus Don Ramón at the defense bench. Case 5 day 3 recuses Super Sam (SECRETARIO takes representación social) and puts Chapulín on `DEFENSA`. Berrondo on the stand had no idle inference, so a leftover `supersam_*` sprite could still read as “the other lawyer”.

## What Was Learned

### 1. Courtroom roles change at the scripted handoff
A penalty can happen before or after a recusal inside a testimony. Keep Super Sam as the default prosecutor and change the role when the Judge accepts his recusal. In Case 5, the day-3 opening and testimonies 6–7 begin with Sam; after the ruling, the clerk speaks through the rest of testimony 7, testimony 8, and all of day 4.

### 2. Voice-only bench speakers must not borrow a sprite
`SECRETARIO` uses the prosecution camera but infers pose `null`. Staging hides the character. Mapping him as an unknown speaker would send him to the witness stand; defaulting his pose to `supersam_point` would put Super Sam’s body under the secretary’s nameplate.

### 3. `berrondo_idle` is the identity lock
Berrondo omitted-pose lines must infer `berrondo_idle` (black three-piece, leontina, tome). Extra poses (`definicion`, `sweat`, `catalogo`, `panic`, `breakdown`) are a closed list. Do not invent a second idle. Defense idle in VisualEffects stays Don Ramón; Case 5 stamps `chapulin_*` on DEFENSA lines, and penalty protesto/panic read `defensePointPose` / `defensePanicPose` from `CaseScript`.
