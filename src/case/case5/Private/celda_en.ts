// @Architecture(descriptionShort="English Case 5 day 1 detention cell investigation scene", type="data", icon="layers")
/**
 * Case 5, Day 1 — Detention Center cell (`celda_c5`), English. Spec §10.1.
 * Chapulin speaks as DEFENSA; Don Ramon is the accused.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_CELDA_TALKS_EN } from './celda_talks_en.js';

export const CASE5_CELDA_EN: InvestigationScene = {
  title: 'Detention Center - Cell',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'donramon_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 6, 8:40 AM. City Detention Center.', bg: 'assets/bg_detention.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'DON RAMON', text: '...Good morning, kid.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'Don Ramon! Do not panic the cunic! I came as soon as they told me!', pose: 'chapulin_point', sfx: 'whoosh' },
    { speaker: 'DON RAMON', text: 'You were eleven hours late.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'They only told me eleven hours ago.', pose: 'chapulin_idle' },
    { speaker: 'DON RAMON', text: 'Ah. Then you are improving.', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: 'Don Ramon sits on the other side of the glass. Same old jacket, no hat.' },
    { speaker: 'DON RAMON', text: 'They charge me with aggravated homicide, Chapulin. Mr. Casimiro Lengua.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'The encyclopedia man?! But you put him away in July!', pose: 'chapulin_panic' },
    { speaker: 'DON RAMON', text: 'That is why, kid. That is why.', pose: 'donramon_sweat' },
    { speaker: 'DON RAMON', text: 'And the prosecutor says I had motive, opportunity, and a card with my address in the dead man\'s hand.', pose: 'donramon_sweat' },
    { speaker: 'DON RAMON', text: 'I have defended five people in my life. An ice-cream vendor, a cricket, a thief, a doctor, and a plumber.', pose: 'donramon_idle' },
    { speaker: 'DON RAMON', text: 'And now...', pose: 'donramon_shock' },
    { speaker: 'DON RAMON', text: 'And now who can defend me?', pose: 'donramon_shock' },
    { speaker: 'DEFENSA', text: 'MEEEE!', pose: 'chapulin_idle', sfx: 'whoosh' },
    { speaker: 'NARRADOR', text: 'Silence. Don Ramon does not laugh.' },
    { speaker: 'DON RAMON', text: 'I know, kid. I know it is you.', pose: 'donramon_idle' },
    { speaker: 'DON RAMON', text: 'I used to be the one saying that line on the other side of the glass.', pose: 'donramon_sweat' },
    { speaker: 'DEFENSA', text: '(Chanfle.)', pose: 'chapulin_idle' },
    { speaker: 'DON RAMON', text: 'Here.', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: 'A lawyer badge slides through the glass slot, dented on one side.', sfx: 'click' },
    { speaker: 'DON RAMON', text: 'A little dented, but it shines up nice. Without it they will not let you past the gate.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'Don Ramon, I am not a licensed lawyer.', pose: 'chapulin_panic' },
    { speaker: 'DON RAMON', text: 'Neither am I, kid, and I have had five trials.', pose: 'donramon_idle', addEvidence: 'insignia_abogado' },
    {
      speaker: 'DEFENSA',
      text: '(Three cards in the Character Record. My client, me, and the poor man who cannot testify anymore.)',
      pose: 'chapulin_idle',
      addProfile: 'perfil_donramon'
    },
    { speaker: 'DEFENSA', text: '(I go in there too.)', pose: 'chapulin_idle', addProfile: 'perfil_chapulin' },
    { speaker: 'DEFENSA', text: '(And Mr. Lengua, poor man.)', pose: 'chapulin_point', addProfile: 'perfil_casimiro' }
  ],
  hotspots: [
    {
      id: 'hotspot_cristal',
      label: 'Visitor Glass',
      x: 8, y: 8, w: 58, h: 58,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Scratched glass, a dead speaker, and a no-smoking sign with a burn mark on top.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'hotspot_donramon',
      label: 'Don Ramon',
      x: 52, y: 38, w: 22, h: 28,
      dialogue: [
        { speaker: 'DON RAMON', text: 'Do not look at me like that, kid. I am thinking too.', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: CASE5_CELDA_TALKS_EN
};
