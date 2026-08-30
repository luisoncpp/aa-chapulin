// @Architecture(descriptionShort="English Case 3 clinic visit with Ñoño and Jirafales", type="data", icon="layers")
/**
 * Case 3 Day 2 — Doctor Chapatín's clinic investigation (English).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_CLINICA_EN = {
  title: 'Doctor Chapatín\'s Clinic',
  name: 'Clinic',
  bg: 'assets/bg_clinica.jpg',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 17, 12:00 PM. Doctor Chapatín\'s clinic — closest to the building, so they brought the victim here.' },
    { speaker: 'NONO', text: 'My daddy\'s still asleep... They say maybe he wakes up, and maybe he doesn\'t.', pose: 'nono_nervioso' },
    { speaker: 'DEFENSA', text: 'Young Ñoño, were you at the console all night?', pose: 'donramon_idle' },
    { speaker: 'NONO', text: 'Yes! The whole night! Every second! I didn\'t move an inch!', pose: 'nono_nervioso' },
    { speaker: 'CHAPULIN', text: '(Monchito, that boy said "every second" and even his cheeks started sweating.)', pose: 'chapulin_thinking' },
    { speaker: 'JIRAFALES', text: 'Counselor, take my kermés script. Minute by minute, everything announced over the speakers.', pose: 'jirafales_idle', addEvidence: 'programa_kermes' },
    { speaker: 'DEFENSA', text: 'Minute by minute, Professor?', pose: 'donramon_idle' },
    { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! A master of ceremonies without a rundown is a charlatan with a microphone!', pose: 'jirafales_angry' }
  ],
  hotspots: [
    {
      id: 'hotspot_libreta',
      label: 'Consultation Logbook',
      x: 55, y: 40, w: 25, h: 30,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Ten-fifty at night! The doctor was treating someone while the cart squeaked!', pose: 'chapulin_point', addEvidence: 'receta_nono' },
        { speaker: 'DEFENSA', text: 'And he charged nothing. That\'s why the old man prefers prison: he\'s not covering an accomplice — he\'s covering a patient.', pose: 'donramon_idle' },
        { speaker: 'NONO', text: 'Please don\'t say anything! If Daddy finds out about my heart he\'ll die of fright!', pose: 'nono_llorando' },
        { speaker: 'DEFENSA', text: 'Your father\'s in a coma, kid. He won\'t die of fright. My client will die of an unjust verdict.', pose: 'donramon_point', unlockLocation: 'delegacion' }
      ]
    },
    {
      id: 'hotspot_camilla',
      label: 'Victim\'s Cot',
      x: 15, y: 35, w: 30, h: 40,
      dialogue: [
        { speaker: 'FLORINDA', text: 'The poor landlord... and to think that doctor argued with him before half the building!', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Coma. Bandages. And a secret injection at 10:50. The pieces fit.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_nono',
      label: 'About the console that night',
      dialogue: [
        { speaker: 'NONO', text: 'I swear I ran everything! The Grito, the cutaways, everything!', pose: 'nono_nervioso' },
        { speaker: 'CHAPULIN', text: 'My antennae say there\'s a gap in that story...', pose: 'chapulin_thinking' }
      ]
    }
  ]
} as InvestigationScene;
