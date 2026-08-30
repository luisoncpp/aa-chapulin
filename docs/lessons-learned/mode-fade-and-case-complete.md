# Mode hops fade through black; endings stay black

`onCovered` must change the plate (background, furniture, speaker sprite, stage frame) before uncover starts. HUD-only or background-only swaps fade back into the old courtroom sprite, then the first dialogue line hard-cuts the new location.

When the case is over there is no next plate. `fadeToBlack` stays covered and `#case-complete-overlay` is the message. Do not leave the last dialogue line as the end screen, and do not uncover after that fade.
