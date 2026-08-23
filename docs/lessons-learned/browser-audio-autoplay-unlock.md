# Browser AudioContext Autoplay & Unlock Strategies

## Context
Modern web browsers (Chrome, Edge, Firefox, Safari) enforce strict Autoplay Policies that automatically suspend any `AudioContext` created before an explicit user interaction (click, keypress, tap). Attempting to play background music or sound effects on page load fails silently or floods the console with warnings.

## What Was Learned

### 1. The Interactive Title Screen as an Audio Gate
Rather than trying to sneak audio through or attaching listeners to window loads, an explicit **Title / Start Splash Card** ("COMENZAR JUICIO (PLAY)") solves three problems at once:
1. Gives a natural retro game title screen aesthetic.
2. Serves as the required user gesture to initialize and resume `window.AudioContext`.
3. Ensures sound effects (like the opening judicial gavel strike) play with zero latency and 100% reliability.

### 2. Secondary Global User Interaction Listener
Even after the start screen is dismissed, tab switches or device sleep can re-suspend the `AudioContext`. Adding a lightweight global click listener:

```javascript
document.addEventListener('click', () => {
    if (this.soundEngine) {
        this.soundEngine.ensureActive();
    }
});
```

guarantees that any subsequent user action immediately un-suspends the audio pipeline.

### 3. Safe Resume Helper
Calling `ctx.resume()` must check `if (ctx.state === 'suspended')` to avoid unnecessary promise overhead during ongoing active playback.
