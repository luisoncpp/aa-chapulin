// @Architecture(descriptionShort="English Suite 304 hotspot geometry", type="data", icon="layers")
/** Hotspots for Suite 304 — day 1, English. Same geometry as Spanish. */

import type { Hotspot } from '../../../types/index.js';

export const SUITE304_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Body and Side Table',
    x: 29, y: 81, w: 70, h: 19,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Body position in photo, ordinary key, broken glass, open bottle. The cork is not in the room; the inventory notes it with no explanation yet.', pose: 'pazguato_saludo' },
      { speaker: 'SARGENTO', text: 'Take the report and the photo. Hour 23:30 belongs to the photograph.', pose: 'pazguato_saludo', addEvidence: 'informe_policial' },
      { speaker: 'DEFENSA', text: '(The photo pins everything down. We will request the rest.)', pose: 'donramon_idle', addEvidence: 'foto_crimen' }
    ]
  },
  {
    id: 'hotspot_almohada',
    label: 'Pillow',
    x: 34, y: 84, w: 20, h: 15,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Hole, scorched cloth, feathers. Sergeant: I want this compared with the wound and the bullet.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'I will request it in writing. No conclusions in advance.', pose: 'pazguato_saludo' }
    ]
  },
  {
    id: 'hotspot_recibidor',
    label: 'Entry and Bathroom',
    x: 18, y: 4, w: 13, h: 75,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Path line: entry to bathroom without crossing the body zone, partly hidden by the screen.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(From the bathroom the body zone is unseen. The screen hides no secret door.)', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_cierre',
    label: 'Torn Latch',
    x: 5, y: 20, w: 10, h: 34,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Fiber fragment on the plate and a length from the corridor. I will take the piece to the terrace for Maruja to confirm how it was found.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_radiador',
    label: 'Radiator',
    x: 37, y: 40, w: 14, h: 37,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Branch toward 204 and a smell of combustion. Tomorrow we follow the pipes.', pose: 'donramon_idle' },
      { speaker: 'SARGENTO', text: 'Smell diagnoses no author nor exact effect. It only justifies following the branch.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_cesto',
    label: 'Hamper',
    x: 87, y: 53, w: 13, h: 31,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Clothes with work-compatible grime. An uncomfortable hiding place, nothing more.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_cubeta',
    label: 'Bucket',
    x: 67, y: 72, w: 15, h: 21,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Water and a mineral bottle. Ordinary room service.', pose: 'pazguato_idle' }
    ]
  }
];
