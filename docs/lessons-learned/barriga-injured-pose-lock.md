# Injured Barriga poses must lock vendado, not idle

## Context
Case 3 needs a standing lock (`barriga_idle`) and a wheelchair family (`barriga_vendado`, `barriga_shock`, `barriga_enojado`) that shares one crop, bandage only, face changing.

## What was learned
A 2×2 whose first cell is healthy standing Barriga will keep fedora, briefcase, and a standing waist-up crop on the extra cells. Pose names then lie.

Generate shock and enojado from a **second** sheet whose identity lock is `barriga_vendado` (bandage + wheelchair, no hat). Extract those cells after idle/vendado. Keep a white-gauze pixel gate so a pipeline rerun cannot silently restore the fedora busts. Script tests may allow the three injured pose keys; they must still forbid `barriga_idle` after he wakes.
