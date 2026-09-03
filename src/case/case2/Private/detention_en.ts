// @Architecture(descriptionShort="English Case 2 detention visit with Chómpiras talk trees", type="data", icon="layers")
/**
 * Case 2 Day 1 — Detention Center investigation scene (English).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE2_DETENTION_EN: InvestigationScene = {
  title: 'Detention Center - Visitor Room',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'August 29, 10:00 AM. City Detention Center.' },
    { speaker: 'DEFENSA', text: 'Well, here we are. According to the police, the suspect is a dangerous international bandit...', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'Calm down, Monchito! Don\'t panic! My vinyl antennae say the accused is harmless... or very absent-minded.', pose: 'chapulin_idle' },
    { speaker: 'CHOMPIRAS', text: 'Waaah! I didn\'t do it, boss! I didn\'t steal any chanfle! The only thing I ever stole was two sweet rolls, and I returned them with bites taken out!', pose: 'chompiras_crying' },
    { speaker: 'DEFENSA', text: '(What a criminal mastermind... he looks like me when the landlord shows up.)', pose: 'donramon_sweat' },
    { speaker: 'DEFENSA', text: 'Easy, kid. I\'m Licenciado Monchito, your defense attorney, and I brought El Chapulín Colorado.', pose: 'donramon_point', addEvidence: 'chanfle_oro' },
    { speaker: 'CHOMPIRAS', text: 'El Chapulín Colorado! They didn\'t count on my cunning! I mean... on his!', pose: 'chompiras_relieved' }
  ],
  hotspots: [
    {
      id: 'chompiras_spot',
      label: 'El Chómpiras',
      x: 22, y: 16, w: 36, h: 50,
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Boss, I was only shining boots! I swear on this empty tin Mr. Peterete gave me!', pose: 'chompiras_nervous' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Visitor Phone',
      x: 86, y: 16, w: 13, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'The visitor handset. Super Sam already left a message: "Time is money. Plead guilty."', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_vault',
      label: 'What were you doing inside the vault?',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'See, Mr. Peterete said he\'d pay me 50 pesos to shine some silver boots in the basement. He gave me my empty polish tin and locked me in so nobody would distract me.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: 'And the crowbar in your hands?', pose: 'donramon_idle' },
        { speaker: 'CHOMPIRAS', text: 'That crowbar! I didn\'t bring it... I passed out from a rosy smoke from the vent, and when the alarm woke me I already had it in my hands.', pose: 'chompiras_crying', addEvidence: 'palanca_rota' },
        { speaker: 'CHAPULIN', text: 'That confirms they planted it while you were asleep!', pose: 'chapulin_point' }
      ]
    },
    {
      id: 'about_peterete',
      label: 'About Mr. Peterete',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'He\'s a very fancy gentleman. Says he\'s the hacienda security chief and appraiser. Nice hat. Always keeps me from falling into bad habits.', pose: 'chompiras_idle' },
        { speaker: 'CHAPULIN', text: 'Suspicious kindness! My moves are coldly calculated!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Tell me something, kid... If he\'s the security chief, isn\'t he the one responsible for guarding the Golden Chanfle? And was he the one who locked you in at the crime scene?', pose: 'donramon_idle' },
        { speaker: 'CHOMPIRAS', text: 'Well yes, boss. He even said: "Stay here nice and quiet, because if anything disappears, you\'ll be the perfect scapegoat." What a jokester!', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(That\'s no joke! This Peterete planned it all to frame the poor devil. He\'s our number one suspect!)', pose: 'donramon_point', unlockLocation: 'boveda' }
      ]
    }
  ]
};
