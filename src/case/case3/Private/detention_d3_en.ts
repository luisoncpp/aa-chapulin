// @Architecture(descriptionShort="English Case 3 day-3 detention visit yielding the forensic opinion", type="data", icon="layers")
/**
 * Case 3 Day 3 — Detention Center (`detention_d3`) English.
 * Runs BEFORE the precinct: only source of the forensic opinion quoted during
 * GIRO 2, and it hands over no physical evidence (spec §6.4).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DETENTION_D3_EN: InvestigationScene = {
  title: 'Detention Center — Third Day',
  name: 'Detention Center',
  bg: 'assets/bg_detention.jpg',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 18, 10:00 AM. Detention Center. Third day, the same concrete bench.' },
    { speaker: 'DEFENSA', text: 'Doctor, your patient woke up. Señor Barriga opened his eyes this morning.', pose: 'donramon_idle' },
    { speaker: 'CHAPATIN', text: '...Hmm. About time, with what I charge per bed.', pose: 'chapatin_conmovido' },
    { speaker: 'NARRADOR', text: '(He wipes his eyes with the paper bag and swears it is the dust.)' },
    { speaker: 'DEFENSA', text: 'Doctor, I need your professional opinion. A man tied up for twenty minutes, struggling...', pose: 'donramon_point' },
    { speaker: 'CHAPATIN', text: '...would have wrists raw. Knees scraped. Throat shredded from screaming. I examined that gentleman that very night, young man: not a trace of a scrape. Not one.', pose: 'chapatin_enojado' },
    { speaker: 'DEFENSA', text: 'Then why didn\'t you say so before?', pose: 'donramon_shock' },
    { speaker: 'CHAPATIN', text: 'Because nobody asked me! Everyone was too busy cuffing me!', pose: 'chapatin_idle' },
    { speaker: 'CHAPULIN', text: 'Monchito! Now we\'ve got something!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'We\'ve got the how, Chapulín. We still need WHO. And for that I need the sergeant\'s night in the garbage to have been worth something.', pose: 'donramon_idle', unlockLocation: 'delegacion_d3' }
  ],
  hotspots: [
    {
      id: 'chapatin_spot',
      label: 'Doctor Chapatín',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'CHAPATIN', text: 'Don\'t waste my time. Go win that trial, young man.', pose: 'chapatin_conmovido' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_wrists',
      label: 'About Aniceto\'s wrists',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'I\'ll repeat it: not a scrape. Whoever lets himself be tied like that... is either a victim, or an actor. And I didn\'t see theater that night. I saw a clean body.', pose: 'chapatin_enojado' },
        { speaker: 'DEFENSA', text: '(Actor. The word I needed.)', pose: 'donramon_point' }
      ]
    },
    {
      id: 'about_trial',
      label: 'We\'re ready for trial',
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Síganme los buenos!', pose: 'chapulin_idle' },
        { speaker: 'CHAPATIN', text: 'And don\'t overcharge me. I already paid with three days in a cell.', pose: 'chapatin_idle' },
        { speaker: 'DEFENSA', text: 'Doctor... this time we get you out.', pose: 'donramon_idle' }
      ]
    }
  ]
};
