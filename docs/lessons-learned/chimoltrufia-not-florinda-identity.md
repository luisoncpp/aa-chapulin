# Chimoltrufia identity is the caricature, not Florinda Meza

## Context
Florinda Meza plays both Doña Florinda and La Chimoltrufia. Image models default to the better-known Florinda look: hair rollers, full teeth, tidy floral housewife.

## What was learned
A prompt that only names “Chimoltrufia” plus “apron / floral dress / earrings” still paints Florinda. The Case 3 spec even listed `tubos en el pelo`, which is Florinda’s silhouette.

Lock identity from caricature markers: messy jagged hair (small messy ponytail, **no rollers**), long thin neck, freckles, **missing front teeth**, lanky build, dark red dress with yellow/orange flowers (never magenta), worn cream apron. Use those reference stills as the visual lock; `chimoltrufia_idle` is the pose lock for later sheets. Doña Florinda stays on `florinda_*`.
