// @Architecture(descriptionShort="English Case 4 day-2 basement boiler room", type="data", icon="layers")
/** Case 4 Day 2 — Basement (`hotel_sotano`), 09:00, English. */

import type { InvestigationScene } from '../../../types/index.js';
import { SOTANO_HOTSPOTS_EN } from './hotel_sotano_hotspots_en.js';

export const CASE4_HOTEL_SOTANO_EN: InvestigationScene = {
  title: 'Basement - Boiler Room',
  name: 'Basement',
  bg: 'assets/bg_hotel_sotano.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 9:00. Boiler room of the Gran Hotel.' },
    { speaker: 'SARGENTO', text: 'The gun comparison came back, counselor. The bullet is indeed from the revolver that was in the room.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Good. We know what made the hole. We still need what made the noise.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'The prisoner\'s hands came back too. What he had on them was boiler soot, from plain work. It is not what we assumed when we arrested him.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: 'So they arrested him for being dirty!', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'We arrested him for being inside, Chapulín. Him being dirty only helped us talk ourselves into it.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Sergeant, write that sentence into your report. That is where it counts.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'And the pillow comparison plus the revolver registry are already in the report.', pose: 'pazguato_saludo', updateEvidence: 'informe_policial' },
    { speaker: 'CHAPULIN', text: 'And that pipe going all the way up there?', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'That one you can follow on the plan. The hotel has already cleared us to inspect the branch running under 304.', pose: 'pazguato_idle' }
  ],
  hotspots: SOTANO_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'muestras_manos',
      label: 'The hand samples',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Samples consistent with soot and boiler work; they do not support the initial gunshot-residue charge.', pose: 'pazguato_saludo', addEvidence: 'residuos_manos' }
      ]
    },
    {
      id: 'seguir_ramal',
      label: 'Follow the branch',
      condition: (flags) => Boolean(flags.examined_hotspot_conducto) && Boolean(flags.examined_hotspot_inventario),
      dialogue: [
        { speaker: 'SARGENTO', text: 'The branch leads to 204. We inspect it authorized and supervised.', pose: 'pazguato_decidido', unlockLocation: 'hotel_suite204' }
      ]
    }
  ]
};
