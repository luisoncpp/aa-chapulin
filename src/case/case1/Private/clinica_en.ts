// @Architecture(descriptionShort="English Case 1 day 1 clinic visit closing the investigation", type="data", icon="layers")
/**
 * Case 1, Day 1 — Municipal clinic (`clinica`). Spec §9.3.
 * `hotspot_expediente` hands over `informe_medico` and queues the day's close.
 * The victim is painted into the background because Examine hides sprites.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_CLINICA_EN: InvestigationScene = {
  title: 'Municipal Clinic - Room 6',
  name: 'Clinic',
  bg: 'assets/bg_clinica_cuarto6.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: null,
  intro: [
    { speaker: 'NARRADOR', text: 'August 22nd, 12:00 PM. Municipal clinic, room 6.', bg: 'assets/bg_clinica_cuarto6.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'NARRADOR', text: 'On the bed lies an enormous man with an eyepatch and a bandaged head. He does not move.' },
    { speaker: 'DEFENSA', text: 'So this is Alma Negra. He looks like they lowered him off a galleon.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '(Six foot three. In boots, more. And I put my client at five foot four on tiptoe.)', pose: 'donramon_shock' }
  ],
  hotspots: [
    {
      id: 'hotspot_expediente',
      label: 'Medical file at the foot of the bed',
      x: 28, y: 72, w: 34, h: 19,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A cardboard folder tied with a ribbon.' },
        { speaker: 'DEFENSA', text: '"Single blow to the occipital region. Heavy, dense object, no edges."', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'No edges. So it was not the edge of anything. Not a bar, not a corner, not a candlestick.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: '"Guarded prognosis. Unfit to testify."', pose: 'donramon_sweat' },
        { speaker: 'DEFENSA', text: '(One single blow. The poor man did not even get to turn around.)', pose: 'donramon_idle', addEvidence: 'informe_medico' },
        { speaker: 'NARRADOR', text: 'The TRIAL button lights up.', sfx: 'realization' },
        { speaker: 'DEFENSA', text: '(Eight pieces of evidence, no alibi, and a client who showed up five minutes late to his own innocence.)', pose: 'donramon_sweat' },
        { speaker: 'DEFENSA', text: "(Off we go, then. Que no panda el cúnico, as the other one says.)", pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_vendaje',
      label: 'Bandage on the back of the head',
      x: 70, y: 24, w: 17, h: 23,
      dialogue: [
        { speaker: 'NARRADOR', text: 'The bandage leaves the edge of the wound visible: a wide depression with no cuts.' },
        { speaker: 'DEFENSA', text: '(Wide and sunken. As if someone had dropped a sack on him.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(With that chipote, the most you get out of a skull is a squeak.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_silla',
      label: 'Chair beside the bed',
      x: 3, y: 33, w: 22, h: 45,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A chair, a rosary and a shopping bag with half-finished knitting.' },
        { speaker: 'DEFENSA', text: 'Doña Florinda spends her afternoons here.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(She yells at half the world and then comes to knit beside her watchman. You never know with people.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: []
};
