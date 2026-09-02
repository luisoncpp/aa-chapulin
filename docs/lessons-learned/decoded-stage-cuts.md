# Hold the Last Complete Shot Until Bitmaps Decode

## Context

The stage is DOM images and CSS backgrounds, not a canvas. Assigning `img.src` or `background-image` does not swap pixels in the same frame: the previous bitmap (or an empty box over `#game-screen`'s black fill) stays up until the new WebP decodes. Locally that decode is usually cached and invisible. On a cold Netlify CDN it is a pop of the wrong character, a scale jump (Chapatín's 0.85 height applies immediately to Don Ramón's sprite), a black courtroom flash, or slam z-index over a bench that has not arrived.

## What Was Learned

A camera cut is not "set the next URL". It is "keep showing the last *decoded* composition, then paint pose, plate, furniture, and `--char-layer` in one turn." `Image.complete` means the bytes are already in memory and that turn can be synchronous. `Image.decode()` is the wait when they are not. Rapid advance must bump a generation so a slow first decode cannot overwrite a newer line.

Do not fade furniture opacity to paper over the gap. Fading a missing bitmap still desyncs stacking. Prefetch (`warmUrls` at scene/trial start) only shortens the wait; it does not replace the atomic commit.
