# Pause the point overlay before opening the Acta

`#present-point-overlay` comes after `#court-record-modal` in the DOM, and both use the same modal layer. Leaving the point overlay visible therefore puts it above the Acta even when the Acta opens.

Treat an Acta lookup during Present & Point as a pause. Hide the point overlay, keep its active target in memory, open the Acta in consult-only mode, and restore the same target when the Acta closes. Trial presentation gating must check whether a point target is active, not whether its overlay is currently visible, or the temporarily hidden overlay can make Presentar appear.
