// @Architecture(descriptionShort="English Case 3 day-1 detention visit with Chapatín", type="data", icon="layers")
/**
 * Case 3 Day 1 — Detention Center (`detention`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DETENTION_EN: InvestigationScene = {
  title: 'Detention Center - Visitor Room',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'chapatin_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'September 16, 9:00 AM. City Detention Center.' },
    { speaker: 'DEFENSA', text: 'Good morning, Doctor. I\'m Licenciado Monchito, your defense attorney.', pose: 'donramon_idle' },
    { speaker: 'CHAPATIN', text: 'I didn\'t ask for a lawyer! Lawyers are like X-rays: expensive and nobody understands them!', pose: 'chapatin_enojado' },
    { speaker: 'CHAPULIN', text: 'Easy, little doctor! ¡Que no panda el cúnico! We\'re here to help.', pose: 'chapulin_idle' },
    { speaker: 'CHAPATIN', text: 'And who are you, the one in the costume?!', pose: 'chapatin_bolsa', sfx: 'chipote' },
    { speaker: 'NARRADOR', text: '(The doctor lands a paper-bag wallop right on Chapulín\'s antenna.)' },
    { speaker: 'CHAPULIN', text: 'Ow! ¡Se aprovechan de mi nobleza!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: '(Eighty years, two kilos of foul mood, and a paper bag. This client will cost more than the rent.)', pose: 'donramon_sweat' }
  ],
  hotspots: [
    {
      id: 'chapatin_spot',
      label: 'Doctor Chapatín',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'CHAPATIN', text: 'What are you staring at? Never seen an innocent doctor before?', pose: 'chapatin_enojado' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Visitor Phone',
      x: 86, y: 16, w: 12, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Not even a message from the prosecutor. He must be counting coins.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_cabina',
      label: 'What happened in the booth last night?',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'I heard the scream on the plaza speakers. I ran upstairs — well, "ran" at my age, which is none of your business — and found him on the floor. I checked his pulse and started first aid. Then that gendarme cuffed me for saving a man\'s life.', pose: 'chapatin_enojado' },
        { speaker: 'DEFENSA', text: 'Did you move the trophy?', pose: 'donramon_idle' },
        { speaker: 'CHAPATIN', text: 'I cleared it so I could kneel! Or did you want me balancing on it for chest compressions?!', pose: 'chapatin_bolsa' }
      ]
    },
    {
      id: 'about_alibi',
      label: 'Where were you between 10:40 and 11:03?',
      unlockedByTalk: 'about_cabina',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'None of your business.', pose: 'chapatin_enojado' },
        { speaker: 'DEFENSA', text: 'Doctor, with all respect, that\'s exactly what will send you to prison for twenty years.', pose: 'donramon_point' },
        { speaker: 'CHAPATIN', text: 'Then I\'ll go twenty years. A doctor who talks is not a doctor — he\'s a gossip.', pose: 'chapatin_idle' },
        { speaker: 'CHAPULIN', text: '(Monchito... he\'s covering for someone.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(And that someone is his patient. Note it, Chapulín: the alibi exists, but it\'s under professional secrecy.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'about_barriga_fight',
      label: 'About your fight with Señor Barriga',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'He wanted to raise the clinic rent forty percent. I yelled. He yelled. We yelled. We\'ve done that for eleven years and nobody died... until last night.', pose: 'chapatin_enojado', unlockLocation: 'cabina_radio' }
      ]
    }
  ]
};
