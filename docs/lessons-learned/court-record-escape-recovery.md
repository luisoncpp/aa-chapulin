# Court Record needs a keyboard exit during trials

**Date:** 2026-09-13

## What is counter-intuitive

The modal keyboard guard is correct to block Space/Enter: otherwise reading an Acta could advance the testimony underneath it. That same guard can look like a frozen cross-examination when the player switches to PERSONAS, because the Court Record previously had no Escape path. Keep the guard, but make Escape close the Court Record and preserve nested evidence-examine overlays so the trial resumes at the same statement.

## Related

- [[docs/architecture/game-engine.md]]
- [[docs/flows/character-record-flow.md]]
