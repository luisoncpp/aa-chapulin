# Slam poses are furniture-contact silhouettes

## Context
`*_slam` sprites are drawn with palms planted and a waist notch so `court_bench.png` can cover the gap. Investigation uses the `plain` stage frame and no furniture.

## What was learned
Tagging `donramon_slam` on a restaurant or postal line still paints that desk-contact silhouette in empty air. Standing intensity needs a separate pose (`donramon_shock`: upright, hands raised). Keep slam for trial benches. `resolveEffectivePose` remaps leftover `donramon_slam` tags when mode is not `TRIAL`, so a copied trial line cannot silently restage the slam on a location plate.
