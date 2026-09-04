// @Architecture(descriptionShort="English Case 4 day-2 basement boiler room", type="data", icon="layers")
/**
 * Case 4 Day 2 — Basement Boiler Room (`hotel_sotano`) English.
 */

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
    { speaker: 'NARRADOR', text: 'October 26, 9:30 AM. Boiler room in the hotel basement.' },
    { speaker: 'SARGENTO', text: 'Counsel! I slipped away while Super Sam audited the cafeteria receipts.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: 'What did the lab say about Botija\'s hands?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'See the chemist\'s report! I carried the swabs in my lunch bag.', pose: 'pazguato_saludo', addEvidence: 'residuos_manos' },
    { speaker: 'DEFENSA', text: 'And what does it say?', pose: 'donramon_point' },
    { speaker: 'SARGENTO', text: 'Ninety-eight percent mineral coal soot and boiler sulfur. Zero percent gunpowder or ballistic nitrates.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! That\'s honest boiler work, not a shotgun!', pose: 'chapulin_point' }
  ],
  hotspots: SOTANO_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_revolver',
      label: 'About the revolver in the ashes',
      unlockedByHotspot: 'hotspot_caldera',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Smell of old gunpowder and a fired round. Someone threw it down the chimney flue from Suite 304.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: '(Post-mortem shot through the pillow... but the coroner will say that.)', pose: 'donramon_idle', unlockLocation: 'hotel_suite204' }
      ]
    }
  ]
};
