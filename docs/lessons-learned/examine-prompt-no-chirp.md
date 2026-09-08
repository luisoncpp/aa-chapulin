# Examine Prompt Is UI, Not Spoken Dialogue

The persistent instruction shown when examine mode starts uses the dialogue surface for layout, but it is not narrative dialogue. Mark it as `instant` so the shared typewriter does not replay character chirps every time the player enters examine mode; ordinary queued dialogue must keep its existing typing and audio behavior.
