# A global keydown handler keeps firing behind open modals

The engine binds Space/Enter on `document` to advance dialogue. Modals in this project are just
`.game-modal` divs toggling `.hidden` — they never take focus and never stop propagation for keys,
only for clicks. So for every modal the game already had (Acta, Hablar, Desplazarse, climax
choice), pressing Space while it was open advanced the scene *behind* it. Nobody noticed because
those modals are mouse-driven and short-lived.

The moment a modal is meant to be read or scrolled with the keyboard — the message history — the
bug becomes obvious and desyncs what the player is reading from what the game is showing.

**What to remember:** a modal here is a visual overlay, not an input layer. Any new global
keyboard binding must check `isAnyModalOpen()` ([[src/engine/Private/HistoryModal.ts]]) first.
Adding `e.stopPropagation()` to the modal's own handlers does not help: the modal has no keyboard
handler for the event to propagate through, and `document` is where the listener lives.

The same asymmetry applies in reverse — click handlers *do* need `e.stopPropagation()`, because
`#dialogue-box` and `document` both listen for clicks.
