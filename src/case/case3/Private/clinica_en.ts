// @Architecture(descriptionShort="English Case 3 clinic scene with Ñoño and the pocket notebook", type="data", icon="layers")
/**
 * Case 3 Day 2 — Doctor Chapatín's clinic (`clinica_chapatin`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_CLINICA_EN: InvestigationScene = {
  title: 'Doctor Chapatín\'s Clinic',
  name: 'Chapatín Clinic',
  bg: 'assets/bg_clinica.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 17, 12:00 PM. Doctor Chapatín\'s clinic — closest to the building, so they brought the victim here.' },
    { speaker: 'NONO', text: 'My daddy\'s still asleep... They say maybe he wakes up, and maybe he doesn\'t.', pose: 'nono_nervioso' },
    { speaker: 'DEFENSA', text: 'Young Ñoño, were you at the console all night?', pose: 'donramon_idle' },
    { speaker: 'NONO', text: 'Yes! The whole night! Every second! I didn\'t move an inch!', pose: 'nono_nervioso' },
    { speaker: 'CHAPULIN', text: '(Monchito, that boy said "every second" and even his cheeks started sweating.)', pose: 'chapulin_idle' },
    { speaker: 'FLORINDA', text: 'Poor child. He\'s been sitting here since the night before last without a bite. Rabble or not, no boy should see his father like that.', pose: 'florinda_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libreta',
      label: 'Pocket Notebook',
      x: 10, y: 68, w: 28, h: 24,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Ten-fifty at night! And it\'s written with a fairground pencil, not at a desk!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'He wrote it standing up, in the alley. And he charged nothing. That\'s why the old man prefers prison: he\'s not covering an accomplice — he\'s covering a patient.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'receta_nono' },
        { speaker: 'NONO', text: 'I took it out of his jacket myself! If Daddy finds out about my heart he\'ll die of fright!', pose: 'nono_llorando' },
        { speaker: 'DEFENSA', text: 'Your father\'s in a coma, kid. He won\'t die of fright. My client will die of an unjust verdict.', pose: 'donramon_idle', unlockLocation: 'delegacion' }
      ]
    },
    {
      id: 'hotspot_camilla',
      label: 'Patient Cot',
      x: 68, y: 48, w: 32, h: 42,
      dialogue: [
        { speaker: 'FLORINDA', text: 'Poor Señor Barriga... And to think last night he was still helping us look for Quico.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Still in a coma. Every hour counts.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_nono_console',
      label: 'About the console that night',
      dialogue: [
        { speaker: 'NONO', text: 'I... I didn\'t move. Really. Well, almost. Don\'t say I said almost!', pose: 'nono_nervioso' },
        { speaker: 'CHAPULIN', text: 'My vinyl antennae are vibrating nasty!', pose: 'chapulin_panic' }
      ]
    }
  ]
};
