# Instant Camera Cut Staging vs CSS Position Transitions

## Context
In visual novels and courtroom adventure games like Ace Attorney, camera angle changes (switching between the Defense Bench, Witness Stand, Prosecution, and Judge) and character speaker transitions are instantaneous visual cuts.

## What Was Learned

### 1. Avoid CSS Position and Dimension Transitions on Character Staging Containers
When character geometry (`bottom`, `height`, `transform`) is controlled via dynamic CSS custom properties (such as `--char-baseline` and `--char-height` in [[src/engine/Private/StageLayout.ts]]), adding CSS `transition: bottom ...` or `transition: height ...` to `#character-container` produces an unintended sliding artifact:
- The character sprite image (`<img>.src`) swaps immediately via JavaScript.
- Because CSS `bottom` is interpolated over the transition duration, the browser renders the incoming character sprite at the previous shot's baseline and slides it vertically into its new position.
- This creates the jarring illusion of characters floating or sliding onto their stands upon every camera cut.

### 2. Snap Composition Instantly
Stage composition frames and camera cuts must snap instantaneously in a single layout pass. CSS transitions should be reserved exclusively for UI feedback elements (button hover effects, tooltip fades, modal overlays) and explicit cinematic special effects (screen flashes, toasts), never for baseline camera cuts or character stand transitions.
