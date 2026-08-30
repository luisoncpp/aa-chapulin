// @Architecture(descriptionShort="English Case 3 plaza kermés with Aniceto proverb plant", type="data", icon="layers")
/**
 * Case 3 Day 1 — Plaza de la Kermés (`plaza_kermes`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_KERMES_EN: InvestigationScene = {
  title: 'Plaza de la Kermés',
  name: 'Plaza de la Kermés',
  bg: 'assets/bg_kermes.jpg',
  bgm: 'kermes',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 16, 3:00 PM. Plaza de la Kermés, colored paper still hanging.' },
    { speaker: 'FLORINDA', text: 'You again! Who are you defending now — the rabble or the landlords?', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: 'An eighty-year-old doctor, Doña Florinda.', pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: '...Seventy-nine. I asked once and he nearly killed me with the bag.', pose: 'florinda_idle' },
    { speaker: 'JIRAFALES', text: 'I gave El Grito at eleven sharp, Counselor. At eleven-oh-three the station speakers blasted that horrifying scream. TWO THOUSAND of us heard it.', pose: 'jirafales_smoking' },
    { speaker: 'ANICETO', text: 'Muy buenas tardes tengan todos ustedes... Aniceto Rebollar, twenty-five years serving this neighborhood. Forgive me if I still speak softly: last night I was gagged for three quarters of an hour.', pose: 'aniceto_terciopelo' },
    { speaker: 'CHAPULIN', text: 'Poor gentleman! But don\'t worry — perro que ladra... no muerde, porque no puede hacer las dos cosas al mismo tiempo.', pose: 'chapulin_idle' },
    { speaker: 'ANICETO', text: 'Allow me, young man: it\'s "perro que ladra no muerde." Diction first. Twenty-five years correcting microphones — it\'s a disease by now.', pose: 'aniceto_thinking' },
    { speaker: 'DEFENSA', text: '(This man corrects even a superhero. What a mania.)', pose: 'donramon_sweat' }
  ],
  hotspots: [
    {
      id: 'hotspot_bocinas',
      label: 'Plaza Speakers',
      x: 70, y: 12, w: 22, h: 36,
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Those speakers repeat EVERYTHING that goes on air from XEVC. No filter, no mercy.', pose: 'jirafales_idle' }
      ]
    },
    {
      id: 'hotspot_kiosco',
      label: 'Plaza Kiosk',
      x: 30, y: 20, w: 28, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Still smells of fireworks and fritters. The whole barrio heard the scream from here.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_barriga_plaza',
      label: 'Did you see Señor Barriga last night?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'Of course we did! At 9:40 he was still alive in this plaza, helping us look for Quico.', pose: 'florinda_idle' },
        { speaker: 'QUICO', text: '¡Cállate, cállate, que me desesperas!' },
        { speaker: 'NARRADOR', text: '(Quico\'s voice arrives from offscreen, behind a stall.)' },
        { speaker: 'JIRAFALES', text: 'Señor Barriga helped with the notice over the speakers. Big cheeks, I said. And I was not wrong!', pose: 'jirafales_smoking' }
      ]
    },
    {
      id: 'about_aniceto',
      label: 'About Don Aniceto',
      dialogue: [
        { speaker: 'FLORINDA', text: 'He\'s the most beloved man in the barrio. Twenty-five years of golden voice. Don\'t you dare suspect him!', pose: 'florinda_angry' },
        { speaker: 'ANICETO', text: 'You\'re very kind, Doña Florinda. I only want them to catch whoever left me tied up like a long-play record.', pose: 'aniceto_terciopelo' },
        { speaker: 'DEFENSA', text: '(Nobody looks at this gentleman twice. Noted... just in case.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
