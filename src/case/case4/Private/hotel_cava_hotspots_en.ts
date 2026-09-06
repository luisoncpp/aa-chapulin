// @Architecture(descriptionShort="English Case 4 wine cellar scenes", type="data", icon="layers")
/** Case 4 Day 3 — Cellar hotspots + scene, English. Same geometry as Spanish. */

import type { Hotspot } from '../../../types/index.js';

export const CAVA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_libro',
    label: 'Cellar Ledger',
    x: 0, y: 63, w: 28, h: 20,
    dialogue: [
      { speaker: 'SARGENTO', text: 'V58-17 out at 21:15, Cecilio authorization, bottle numbering.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'The folio is sealed with the requesting guest’s crest wax.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'It matches the delivery receipt and the guarded bottle. No second bottle of that lot that night.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_botella',
    label: 'Sealed Bottle',
    x: 40, y: 47, w: 12, h: 42,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Opened exemplar collected in 304.', pose: 'pazguato_decidido', addEvidence: 'botella_vino' },
      { speaker: 'DEFENSA', text: '(The Record adds its enlarged views, including the separately kept cork.)', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_cierre',
    label: 'Kept Cork',
    x: 50, y: 83, w: 8, h: 8,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Scaled view: wide corkscrew track and, apart from it, a fine channel running end to end.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'And the outer rim?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'A tiny metal inclusion held near the outer edge.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_lacre',
    label: 'Neck Wax',
    x: 41, y: 45, w: 11, h: 12,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Original seal remains. Under magnification, a spot of remelted wax, not a break.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'I describe what is seen; I name not what made it.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_estanteria',
    label: 'Shelving',
    x: 70, y: 0, w: 30, h: 65,
    dialogue: [
      { speaker: 'CHAPULIN', text: 'At these prices, not even sixteen months of rent covers it!', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Ambience only. No hidden clue in the crates.', pose: 'pazguato_idle' }
    ]
  }
];

/** Hotspot ids shared with the Spanish cava scene. */
// fallow-ignore-next-line unused-export
export const CAVA_HOTSPOTS_EN_TALK_IDS = ['analisis_canal'] as const;
