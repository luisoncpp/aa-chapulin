# Day-End Cues Belong to the Engine, Not the Script

**What happened:** Case 5 closed each investigation day with a `NARRADOR` line that announced the courthouse bell (`sfx: 'bell'`). The line sat inside one hotspot or talk topic, so it played when that particular beat was read — which is not when the day actually ends. A player who examines the sealing hotspot early, or who still has other evidence to collect, hears the day close while the investigation continues; a player who reaches readiness through another route never hears it at all.

**What to remember:** a cue that means "this phase is over" must be bound to the state transition that ends the phase, not written into dialogue. Here the transition is `updateTrialButtonProgress()` flipping `#btn-inv-trial` from locked to ready ([[src/engine/Private/InvestigationTrialButton.ts]]); it plays the bell only on that edge, never on the repeated progress checks that follow, so the sound stays a single event.

**Corollaries:**
- Scripted ambience is fine when it describes the scene the player is standing in. It is wrong when it asserts progress the script cannot observe.
- Guard the rule with a script-level test (no `sfx: 'bell'` anywhere in the case's investigation dialogue), not only with an engine test — otherwise the next writing pass reintroduces the line.
- Engine-fired SFX widen what the audio fakes must support: `FakeAudioParam` needed `exponentialRampToValueAtTime` before `playBell` could run inside controller tests.
