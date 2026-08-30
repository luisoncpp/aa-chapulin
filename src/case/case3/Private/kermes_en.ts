// @Architecture(descriptionShort="English Case 3 plaza kermés witness talks", type="data", icon="layers")
/**
 * Case 3 Day 1 — Plaza de la Kermés investigation (English).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_KERMES_EN = {
  title: 'Plaza de la Kermés',
  name: 'Kermés Plaza',
  bg: 'assets/bg_kermes.jpg',
  bgm: 'investigation',
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
      x: 70, y: 8, w: 22, h: 30,
      dialogue: [
        { speaker: 'DEFENSA', text: 'These trumpet speakers repeat everything that goes on air. Two thousand ears, one scream.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_puesto',
      label: 'Florinda\'s Stall',
      x: 15, y: 40, w: 28, h: 35,
      dialogue: [
        { speaker: 'FLORINDA', text: '¡Chusma, chusma! Keep your paws off the candy apples!', pose: 'florinda_angry' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_barriga_plaza',
      label: 'Where was Señor Barriga at 9:40?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'Alive and kicking in this plaza, looking for Quico with the Professor and me!', pose: 'florinda_idle' },
        { speaker: 'QUICO', text: '¡Cállate, cállate, que me desesperas!' },
        { speaker: 'JIRAFALES', text: 'Confirmed. The lost-child notice went out only once: 9:40 PM sharp.', pose: 'jirafales_idle' }
      ]
    },
    {
      id: 'about_grito',
      label: 'About El Grito broadcast',
      dialogue: [
        { speaker: 'JIRAFALES', text: 'I keep a minute-by-minute script. At 11:03 the station cut in with that scream. ¡¡¡TA-TA-TA-TA-TAAAAAA!!!', pose: 'jirafales_angry' },
        { speaker: 'ANICETO', text: 'The whole neighborhood adores this station. Twenty-five years of velvet voice...', pose: 'aniceto_terciopelo' },
        { speaker: 'DEFENSA', text: '(Most beloved man in the barrio. Nobody would look at him twice — including me.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_aniceto',
      label: 'About being tied up',
      dialogue: [
        { speaker: 'ANICETO', text: 'They found me in the storeroom. Silk handkerchief, microphone cable... I nearly suffocated.', pose: 'aniceto_terciopelo' },
        { speaker: 'CHAPULIN', text: '¡Se aprovechan de mi nobleza! I mean — of his!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'We\'ve got what we need for day one. Time for court.', pose: 'donramon_point' }
      ]
    }
  ]
} as InvestigationScene;
