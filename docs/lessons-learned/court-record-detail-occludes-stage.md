# Court Record detail must own the stage visibility

The evidence detail modal is layered over the active courtroom shot, but the stage character remains mounted underneath it. A large bust can therefore paint over the detail plate unless opening `detailedView` hides the character. Save the previous hidden/visible state and restore it on close, because investigation examine mode may already have the character hidden.
