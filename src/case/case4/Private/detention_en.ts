// @Architecture(descriptionShort="English Case 4 day-1 detention visit with Botija", type="data", icon="layers")
/**
 * Case 4 Day 1 — Detention Center (`detention`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION_EN: InvestigationScene = {
  title: 'Detention Center - Visitor Room',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_nervioso',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, 9:00 AM. Preventive Detention Center.' },
    { speaker: 'DEFENSA', text: 'Good morning, neighbor! Licenciado Monchito himself is here to get you out of this mess.', pose: 'donramon_idle' },
    { speaker: 'BOTIJA', text: 'Don Ramón! Tell me they won\'t ship me to the Marías Islands! I\'m an honest man, I swear on my beloved Chimoltrufia\'s squinty eyes!', pose: 'botija_llorando' },
    { speaker: 'CHAPULIN', text: 'Easy, don\'t lose your temper! ¡Que no panda el cúnico! El Chapulín Colorado rides to the aid of the innocent and helpless!', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: 'Thanks, Chapulín... but at one hundred twenty kilos, I\'m not very helpless. Look at my hands, Don Ramón! The Yankee prosecutor swears I fired a shotgun!', pose: 'botija_nervioso' },
    { speaker: 'DEFENSA', text: '(Hands blacker than a tractor tire... This looks uglier than my sixteen months of rent receipts.)', pose: 'donramon_sweat' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'BOTIJA', text: 'Don\'t stare at me like that, Don Ramón! I didn\'t kill anyone!', pose: 'botija_llorando' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Visitor Glass',
      x: 86, y: 16, w: 12, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Not even a message from the prosecutor. He must be counting coins.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_suite304',
      label: 'Why were you in Suite 304?',
      dialogue: [
        { speaker: 'BOTIJA', text: 'At 10:45 PM I was scraping soot from the boiler flue in the basement until 11:10 PM. Don Cecilio sent me to check the radiator purge valve in 304 because it was hissing scalding steam.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'I went up in my work clothes at 11:12 PM. I opened with my master key and left the door ajar for air... and saw Cuajinais on the rug by the fireplace!', pose: 'botija_llorando' },
        { speaker: 'DEFENSA', text: 'And why did you hide in the laundry basket?', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'Pure panic! At 11:14 PM I heard footsteps in the hall. I thought: "If they catch me here with my pickpocket record, they\'ll pin the body on me."', pose: 'botija_nervioso' }
      ]
    },
    {
      id: 'about_wallet',
      label: 'About Cuajinais\'s wallet',
      unlockedByTalk: 'about_suite304',
      dialogue: [
        { speaker: 'BOTIJA', text: 'At 11:13 PM I saw it on the rug. I picked it up to check the ID... then I heard footsteps! It stayed in my pocket from sheer fright, but I didn\'t touch a single cent!', pose: 'botija_llorando', addEvidence: 'billetera_cuajinais' },
        { speaker: 'DEFENSA', text: '(Two hundred pesos intact... That doesn\'t smell like robbery.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_chain',
      label: 'Did you slide the door chain?',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Never in my life! I opened with my master key and left the door only ajar. If I wanted to barricade myself, I\'d double-lock it and shove a wardrobe in front!', pose: 'botija_nervioso', unlockLocation: 'hotel_lobby' },
        { speaker: 'CHAPULIN', text: 'We need to talk to the hotel manager!', pose: 'chapulin_point' }
      ]
    }
  ]
};
