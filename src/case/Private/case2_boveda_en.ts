// @Architecture(descriptionShort="English Case 2 vault crime scene hotspots and banter", type="data", icon="layers")
/**
 * Case 2 Day 1 — Underground vault crime scene (English).
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_BOVEDA_EN: InvestigationScene = {
  title: 'Grand Treasure Vault - Crime Scene',
  name: 'Underground Vault',
  bg: 'assets/bg_boveda.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'August 29, 11:30 AM. Hacienda Underground Vault.' },
    { speaker: 'FLORINDA', text: 'This is inconceivable! A lowlife thief prowling the hotel neighborhood! Thank goodness prosecutor Super Sam arrested him at once!', pose: 'florinda_angry' },
    { speaker: 'PETERETE', text: 'Calm yourself, distinguished lady. As security chief I have an irrefutable report. The criminal acted alone at 10:00 PM.', pose: 'peterete_smug' },
    { speaker: 'DEFENSA', text: 'Excuse me, said Monchito! The defense is here to inspect the crime scene.', pose: 'donramon_idle' },
    { speaker: 'PETERETE', text: "Go ahead, 'attorney'. I doubt your intellect will find anything the prosecution missed.", pose: 'peterete_smug' }
  ],
  hotspots: [
    {
      id: 'hotspot_caja',
      label: 'Open Safe',
      x: 16, y: 16, w: 36, h: 58,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Look at this... a armored safe with a master-key lock, and not a single crowbar mark.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'informe_boveda' }
      ]
    },
    {
      id: 'hotspot_reloj',
      label: 'Pendulum Clock',
      x: 54, y: 8, w: 12, h: 44,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Look at that clock! It fell asleep early! It reads 9:15 PM and it is not moving.', pose: 'chapulin_idle', addEvidence: 'reloj_pendulo' },
        { speaker: 'PETERETE', text: 'Nonsense. That clock is a decorative antique that has not worked since the last century.', pose: 'peterete_smug', unlockLocation: 'restaurante' }
      ]
    },
    {
      id: 'hotspot_rejilla',
      label: 'Air Vent Grille',
      x: 70, y: 30, w: 16, h: 28,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Mmm! It smells like rose perfume and linden tea... just like Doña Clotilde\'s brew when she gets a fright!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'I will take a sample with this handkerchief.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'aroma_dulce' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_alarm',
      label: 'Who discovered the defendant?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'The alarm rang at 10:00 PM! Mr. Peterete and I went down and saw that rabble with the crowbar.', pose: 'florinda_angry' },
        { speaker: 'PETERETE', text: 'Caught red-handed. Case closed, counselor.', pose: 'peterete_smug' }
      ]
    }
  ]
};
