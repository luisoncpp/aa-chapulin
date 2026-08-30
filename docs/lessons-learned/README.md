# Lessons Learned

Knowledge that helps future development: effective strategies, counter-intuitive facts, and patterns worth remembering across the codebase.

## When to Add

- When a strategy that seemed right turned out to be wrong or suboptimal.
- When something counter-intuitive was discovered through experimentation.
- When a workaround for external dependency behavior was needed and the reason isn't obvious from code.
- When a pattern proved effective and worth formalizing.

## How to Add

Create a new file in this directory named after the topic. Then add it to the index below.

The entry should answer: **what is counter-intuitive or effective that I should know before starting similar work?**

Avoid: "bug description + fix". Prefer: "what I learned that applies to future work."

## Index

| File | Topic | Date |
|------|-------|------|
| [`zero-asset-procedural-audio.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/zero-asset-procedural-audio.md) | Procedural Web Audio API sound synthesis and chiptune tracker vs static audio assets. | 2026-08-23 |
| [`chroma-key-sprite-slicing.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/chroma-key-sprite-slicing.md) | Automating AI pixel art sprite extraction via magenta chroma-keying and numpy alpha masking. | 2026-08-23 |
| [`browser-audio-autoplay-unlock.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/browser-audio-autoplay-unlock.md) | Bypassing modern browser AudioContext autoplay policies using interactive splash gates. | 2026-08-23 |
| [`decoupled-character-furniture-sprites.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/decoupled-character-furniture-sprites.md) | Decoupling character sprite art from environment furniture, and staging both from a ratio table instead of per-pose pixel offsets. | 2026-08-23 |
| [`trial-courtroom-speaker-staging.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/trial-courtroom-speaker-staging.md) | Dynamic courtroom camera angle resolution and foreground furniture binding across speaker turns. | 2026-08-24 |
| [`defense-counsel-decoupling.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/defense-counsel-decoupling.md) | Defense counsel role decoupling and isolating planted hands from baked furniture using chroma ratios. | 2026-08-24 |
| [`trial-controls-lifecycle.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/trial-controls-lifecycle.md) | Synchronizing courtroom navigation buttons with active cross-examination statement viewing vs dialogue interludes. | 2026-08-25 |
| [`dialogue-box-sprite-baseline-alignment.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/dialogue-box-sprite-baseline-alignment.md) | Aligning free-standing waist-up sprite baselines with the dialogue box top edge in visual novel scenes. | 2026-08-25 |
| [`instant-camera-cut-staging.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/instant-camera-cut-staging.md) | Snapping stage composition geometry instantly vs CSS transitions causing sliding artifacts during shot changes. | 2026-08-25 |
| [`web-audio-audioparam-immutability.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/web-audio-audioparam-immutability.md) | Avoiding Object.assign hazards on read-only AudioParam getters in Web Audio synthesis. | 2026-08-25 |
| [`investigation-dialogue-completion-lifecycle.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/investigation-dialogue-completion-lifecycle.md) | Gating environment investigation dialogue completion and controls visibility to protect FIFO queue callbacks. | 2026-08-29 |
| [`investigation-hotspot-cover-crop.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/investigation-hotspot-cover-crop.md) | Hotspot percentages track the 960×540 cover crop of a 3:2 background, not the raw JPEG. | 2026-08-29 |
| [`splash-card-stage-height.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/splash-card-stage-height.md) | Title splash stack must fit 540px; flex centering clips both ends when the card is taller than the stage. | 2026-08-29 |
| [`supersam-pose-identity-lock.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/supersam-pose-identity-lock.md) | Extra Super Sam poses default to Chespirito yellow/green unless idle is the identity lock. | 2026-08-29 |
| [`trial-waiting-room-epilogue-staging.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/trial-waiting-room-epilogue-staging.md) | Trial speaker cameras fire on any line without `bg`; waiting-room epilogues must stamp a location plate on every line. | 2026-08-29 |
| [`court-record-description-updates.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/court-record-description-updates.md) | Second `addEvidence` is silent; later facts need `updateEvidence` + `updatedDesc`. | 2026-08-30 |
| [`verdict-celebration-before-location-cut.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/lessons-learned/verdict-celebration-before-location-cut.md) | Confetti belongs on the Not Guilty camera; fade through black before a waiting-room epilogue. | 2026-08-29 |

