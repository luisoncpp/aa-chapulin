# Extra Super Sam poses need an idle identity lock

## Context
Case 1 Super Sam is navy bodysuit, white `$`, gold SS belt, red trunks, US flag cape. Chespirito Super Sam is yellow/green with dollar-sign cape. Image models know the TV design better than this game's.

## What was learned
A new pose sheet (sweat, panic, etc.) generated without the idle sprite as the identity reference will snap to yellow/green even if the prompt names navy and flag colors. Lock idle in the generation pass, extract only the new cell, and keep pixel gates on navy/red vs yellow/green so a re-run of [[process_case2_assets.py]] cannot silently swap the prosecutor's suit.

Case 1 day 1 is also a continuity exception: Super Sam must not show the money bag during that trial, because the script calls out its absence. Use the separate `supersam_case1_slam` asset for day-1 desk slams; day 2 deliberately returns to the normal bag-bearing poses when Don Ramón notes the bag is back and brand new.
