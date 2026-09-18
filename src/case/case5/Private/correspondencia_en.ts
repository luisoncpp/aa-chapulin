// @Architecture(descriptionShort="English Case 5 day 2 court correspondence scene", type="data", icon="layers")
/**
 * Case 5, Day 2 — Court correspondence office (`correspondencia`). Spec §12.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_CORRESPONDENCIA_TALKS_EN } from './correspondencia_talks_en.js';

export const CASE5_CORRESPONDENCIA_EN: InvestigationScene = {
  title: 'Court Correspondence Office',
  name: 'Correspondence',
  bg: 'assets/bg_correspondencia.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  idlePose: 'chimoltrufia_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 7, 10:00 AM. Correspondence office of the Seventh Court.', bg: 'assets/bg_correspondencia.webp', furniture: 'none', bgm: 'investigation_core' },
    { speaker: 'NARRADOR', text: 'Four thousand official letters a month pass through a seventy-centimeter wooden window.' },
    { speaker: 'CHIMOLTRUFIA', text: 'Oh, what a song! If it is not El Chapulín Colorado!', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: 'Easy does it, miss! I am here on official business.', pose: 'chapulin_point' },
    { speaker: 'CHIMOLTRUFIA', text: 'Well, everything here is official. Well, almost everything. Like I say one thing I say another.', pose: 'chimoltrufia_idle' },
    { speaker: 'DEFENSA', text: 'I need to know who was notified about a procedure scheduled for December fourth.', pose: 'chapulin_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Oh, young man, four thousand papers pass through here a month.', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHIMOLTRUFIA', text: 'I remember all of them.', pose: 'chimoltrufia_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Well, none of them.', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHIMOLTRUFIA', text: 'But that one, yes!', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: '(...I am going to need the book.)', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libro_acuses',
      label: 'Receipt Ledger',
      x: 72, y: 54, w: 18, h: 22,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A cloth-bound ledger with a column of scrawled signatures beside each entry.' },
        { speaker: 'DEFENSA', text: 'November twenty-ninth... November twenty-ninth...', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Here! "Letter 4471. Document-comparison procedure filed by inmate C. Lengua. Judicial Archive, December fourth, 5:00 PM."', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '"Delivered to: Syndicate of bankruptcy 114/1971."', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(It even has Mr. Lengua\'s name. In full.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Syndi... what?', pose: 'chapulin_panic' },
        { speaker: 'CHIMOLTRUFIA', text: 'Syndicate, young man. That is where the trustee works.', pose: 'chimoltrufia_idle' },
        { speaker: 'DEFENSA', text: 'And what is a trustee? A man or a building?', pose: 'chapulin_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'A man. Well, an office. Well, like I say one thing I say another.', pose: 'chimoltrufia_confundida' },
        { speaker: 'DEFENSA', text: '(And here in the margin there is a signature. Someone received that notice and signed for it.)', pose: 'chapulin_idle', addEvidence: 'acuse_notificacion' }
      ]
    }
  ],
  talkOptions: CASE5_CORRESPONDENCIA_TALKS_EN
};
