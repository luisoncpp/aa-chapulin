// @Architecture(descriptionShort="English rooftop hotspot geometry", type="data", icon="layers")
/** Same geometry as Spanish. */

import type { Hotspot } from '../../../types/index.js';

export const AZOTEA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_etiqueta',
    label: 'B-17 Tag',
    x: 41, y: 63, w: 8, h: 11,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Checked against log and receipt: the same object.', pose: 'donramon_point' }
    ]
  },
  {
    id: 'hotspot_faja',
    label: 'Broken Strap',
    x: 44, y: 54, w: 8, h: 43,
    dialogue: [
      { speaker: 'SARGENTO', text: 'The number matches the signed delivery stub. Its break proves opening after that delivery.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: '(It does not name the contents by itself.)', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_forro',
    label: 'Lining',
    x: 38, y: 86, w: 20, h: 12,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Brown swatch snagged. Let us check the suit photo in the Record: both shapes at comparable scale.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'I will photograph the lining before collecting anything.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Include that swatch.', pose: 'donramon_idle' },
      { speaker: 'CHOMPIRAS', text: 'For a scrap of cloth?', pose: 'chompiras_nervous' },
      { speaker: 'DEFENSA', text: 'First we keep what there is. Then we see what it means.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_compartimiento',
    label: 'Main Compartment',
    x: 38, y: 54, w: 18, h: 9,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Size consistent with the hypothesis we may frame. No secret passages.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_motor',
    label: 'Motor',
    x: 32, y: 8, w: 43, h: 45,
    dialogue: [
      { speaker: 'CHOMPIRAS', text: 'Procedure and no-passenger rule confirmed. No convenient breakdowns.', pose: 'chompiras_idle' }
    ]
  }
];
