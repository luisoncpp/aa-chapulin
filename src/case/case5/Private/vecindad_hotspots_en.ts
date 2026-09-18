// @Architecture(descriptionShort="English Case 5 day 2 vecindad Barriga office hotspots", type="data", icon="layers")
/**
 * Case 5, Day 2 — Barriga office hotspots (`vecindad_c5`). Spec §12.1.
 * Same geometry as Spanish; English labels and dialogue only.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_VECINDAD_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_puerta',
    label: 'Office Door',
    x: 10, y: 2, w: 20, h: 40,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A wooden door with a frame swollen from damp and a two-finger gap along the bottom.' },
      { speaker: 'DEFENSA', text: 'An envelope could slide through here without folding.', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Everything has come through that gap: letters, complaints, a chicken.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'A chicken?', pose: 'chapulin_panic' },
      { speaker: 'BARRIGA', text: 'Alive. Do not ask.', pose: 'barriga_enojado' },
      { speaker: 'DEFENSA', text: '(Anyone could have left that envelope without being seen. That helps me not at all... or it helps me with everything.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'hotspot_sobre',
    label: 'Envelope and Contents',
    x: 62, y: 40, w: 24, h: 22,
    dialogue: [
      { speaker: 'NARRADOR', text: 'On the desk, an open manila envelope and, beside it, half a typewritten sheet.' },
      { speaker: 'BARRIGA', text: 'There is everything. The envelope, the little note, and a copy of my receipt. I am not one to throw papers away.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '"Enclosed is payment for seventeen overdue months charged to C. Ramon Valdes, tenant of dwelling 4."', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"Please issue the corresponding receipt and retain it. No reply required."', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: '...Mr. Barriga, do you think Don Ramon writes like this?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Young man, Mr. Ramon sends me notes scribbled on a cake wrapper.', pose: 'barriga_idle' },
      { speaker: 'BARRIGA', text: 'With spelling mistakes.', pose: 'barriga_enojado' },
      { speaker: 'DEFENSA', text: '(Typed. Third person. And with "please issue.")', pose: 'chapulin_idle', addEvidence: 'nota_mecanografiada' },
      { speaker: 'DEFENSA', text: '(And the receipt says "unidentified third party.")', pose: 'chapulin_idle', addEvidence: 'recibo_renta' }
    ]
  }
];
