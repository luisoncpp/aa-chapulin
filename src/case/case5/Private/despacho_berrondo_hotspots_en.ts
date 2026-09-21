// @Architecture(descriptionShort="English Case 5 day 2 Berrondo office hotspots", type="data", icon="layers")
/**
 * Case 5, Day 2 — Berrondo office hotspots. Spec §12.3.
 * Same geometry as Spanish; English labels and dialogue only.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_BERRONDO_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_vitrina',
    label: 'Syndicate Display Case',
    x: 0, y: 28, w: 28, h: 42,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A mahogany display case with three dossiers exhibited like trophies, and a frame holding a credential.' },
      { speaker: 'DEFENSA', text: '"Fulgencio Berrondo. Trustee. Bankruptcy 114/1971."', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Enciclopedias El Saber Universal, S.A. My first trusteeship and the last one I still have open.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Eleven years open?', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Eleven years, almost nine months. Some creditors died waiting and heirs never showed up.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'A bankruptcy does not close when you want, counselor. It closes when there is nobody left to owe.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And that credential still works for something?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'It works for everything. Here, take a certified copy; I have had one ready for years because people ask for it often.', pose: 'berrondo_idle', addEvidence: 'credencial_sindico' },
      { speaker: 'DEFENSA', text: '(He gave it to me. He gave it to me without my asking.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'hotspot_retrato',
    label: 'Publisher Portrait',
    x: 0, y: 4, w: 16, h: 28,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A framed photograph: fifty men in suits before a building, with a banner reading "EL SABER UNIVERSAL · 1969".' },
      { speaker: 'DEFENSA', text: 'Is this the company?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'One hundred ten distributors, counselor. Fifty are here. The rest were on the street; that was their job.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And which one are you?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'I am not in it. I arrived in seventy-one, when there was nobody left to photograph.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Fifty faces. Is Mr. Lengua in here?)', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'If you are looking for the deceased, do not waste your time. I could not find him either and I tried for two hours last night.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'One hundred ten men, counselor, and to me they were not men: they were a line on the liabilities.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(And he says it without his voice shaking. Like someone saying it rained.)', pose: 'chapulin_idle' }
    ]
  }
];
