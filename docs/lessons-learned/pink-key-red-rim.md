# Pink-red key leaves a red rim

Generated "magenta" sheets are often pink-red (e.g. `berrondo_sprites_raw.png` at ~239, 5, 130). The shared despill subtracts `min(R-G, B-G)`, which only matches the **blue** excess; with B well below R, the red excess survives and dark suits and gray hair get a dark-red outline (RGB ~40, 5, 5). Before blaming the edge depth, sample the raw's corner pixel.

- Do not fix it with `strip_dark_red_fringe` (red → max(G,B)): skin at the contour turns gray.
- What worked ([[key_fringe_recolor.py]]): for red-cast pixels within ~5px of the contour, copy the nearest interior pixel's hue at the pixel's own luminance. Suit rims become dark gray, skin rims stay skin, ink lines stay dark.
- Leaning poses may carry a painted darker-pink cast shadow on the key (106, 26, 58) that survives the threshold; clear key-hued pixels near the floor.
- The Case 5 evidence icon sheet (~247, 2, 142) had the same rim on paper and wood; the pass works at 128px with depth 3. Red content (ribbons, seals, graph lines) survives because its interior is red too.
- Choose `depth` so the interior sample lands past the ink line. On `court_judge_bench` (reddish wood), depth 2 copied the red ink outline onto itself; depth 4 samples the wood and darkens the rim to brown.
- Genoveva's sheet also has gray separator lines between cells. Keying keeps them because they touch the figure, and despill turns them reddish-brown: a line across the floor and up one side. They also inflate the anchor bbox, so removing them (`drop_cell_seams`) slightly rescales `genoveva_idle` and `genoveva_reglamento`.
- The Nicanor raws are also pink-keyed and not yet run through the pass.
