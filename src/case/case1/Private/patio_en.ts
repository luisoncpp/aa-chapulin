// @Architecture(descriptionShort="English Case 1 day 2 loading yard with the unplated truck", type="data", icon="layers")
/**
 * Case 1, Day 2 — Loading yard (`patio_carga`). Spec §11.1.
 * `hotspot_barda` unlocks `cuarto_camaras` and requires the glovebox and the bag.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_PATIO_EN: InvestigationScene = {
  title: 'Museum Loading Yard',
  name: 'Loading Yard',
  bg: 'assets/bg_patio_carga.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chapulin_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'August 23rd, 8:30 AM. Loading yard of the Museum of Curiosities. Walled in, with a single door and a truck under a tarp.', bg: 'assets/bg_patio_carga.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'CHAPULIN', text: 'Fresh air! How lovely the world looks when they let you out with two policemen!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Young man, do not get carried away: if I lose you I am left without a client and without a fee.', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: '¡Que no panda el cúnico, licenciado! I never get lost. I only arrive late.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'This is where you came in the other night.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'Right here. I pushed the door and it opened by itself.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(And nobody —nobody— searched this yard in two days. Because the case was closed in five minutes.)', pose: 'donramon_shock' }
  ],
  hotspots: [
    {
      id: 'hotspot_camioneta',
      label: 'Truck under a tarp',
      x: 50, y: 24, w: 44, h: 49,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A stake-bed truck under a waxed tarp. No plates, front or back.' },
        { speaker: 'DEFENSA', text: 'No plates. Not front, not back, no sticker, no legible engine number.', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'So whose is it?', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: "Nobody's, young man. That is the whole point of taking the plates off a truck.", pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(And the arrest report says it plainly: "vehicles on the premises, not logged". Nobody opened it. Nobody touched it.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'And what if we open it ourselves?', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: "With the judge's order in hand, young man. I may be poor, but I am not stupid.", pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_guantera',
      label: 'Truck glovebox',
      condition: (flags) => Boolean(flags.examined_hotspot_camioneta),
      x: 51, y: 35, w: 12, h: 27,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Inside the glovebox: a rag, half a pack of cigarettes and a typewritten card.' },
        { speaker: 'DEFENSA', text: '...A card. Typed.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Six lines. Measurements, schedules and one sentence at the end that I do not understand.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'Read it, counselor!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Not here, young man. I read this in front of the judge or I do not read it at all.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(And it is printed on the back of letterhead. "Enciclopedias El Saber Universal, Sociedad Anónima". Someone is turning old paper over to save money.)', pose: 'donramon_sweat', addEvidence: 'ficha_museo' }
      ]
    },
    {
      id: 'hotspot_bolsa',
      label: 'Canvas bag by the rear tyre',
      x: 86, y: 56, w: 14, h: 26,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Dumped between the tyre and the wall, a thick canvas bag, empty, with a stamped seal.' },
        { speaker: 'DEFENSA', text: "(Prosecutor's seal. \"Time is Money\".)", pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: "¡Chanfle! That is the prosecutor's bag!", pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Empty. Not a bill, not a coin.', pose: 'donramon_idle' },
        { speaker: 'NARRADOR', text: 'Don Ramón turns the bag over and something glints in the seam.', sfx: 'whoosh' },
        { speaker: 'DEFENSA', text: '...One. One silver coin lodged in the seam. And the canvas is sooty on the outside.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: "Soot! Like the soot on the truck's tarp!", pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: "Exactly like the soot on the truck's tarp.", pose: 'donramon_idle', addEvidence: 'bolsa_dolares' }
      ]
    },
    {
      id: 'hotspot_puerta',
      label: 'Loading door',
      x: 3, y: 7, w: 21, h: 61,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A two-leaf metal door. The latch is loose and the bolt does not catch.' },
        { speaker: 'DEFENSA', text: 'Broken since March, the curator said.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(And it was not forced. Not a mark, not a scratch. Because forcing it was unnecessary: you just push.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'I pushed it and it said "come on in"!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'I know, young man. And that is exactly what I do not like: anyone could push it. You, me, and whoever hit the watchman.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_rejilla_exterior',
      label: 'Duct grate, outer face',
      x: 22, y: 74, w: 18, h: 8,
      dialogue: [
        { speaker: 'NARRADOR', text: 'On the yard side, the gallery 2 duct grate, flush with the ground.' },
        { speaker: 'DEFENSA', text: 'The same grate as yesterday, seen from outside. Eighteen by twenty-four.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Screws with the paint intact. But the bottom corner of the mesh is loose, as if someone had bent it up and set it back.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'Counselor, not even a cat could get through there.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'No, young man. Not even a cat.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Not a cat. But a mouse could.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'A mouse?', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Nothing yet, young man. Nothing yet.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_barda',
      label: 'Yard wall',
      condition: (flags) =>
        Boolean(flags.examined_hotspot_guantera) && Boolean(flags.examined_hotspot_bolsa),
      x: 26, y: 16, w: 34, h: 25,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A two-metre brick wall with broken glass cemented along the top... except for a metre and a half of it.' },
        { speaker: 'DEFENSA', text: 'The glass is missing here. And there is a shoe print in the plaster.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: 'A size forty-two!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'How do you know?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Because I wear a thirty-eight and I do not even cover half of it.', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(A forty-two. That is something. But a print with no owner accuses nobody.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Let us go to the camera room, young man. I want to see that famous photograph.', pose: 'donramon_idle', unlockLocation: 'cuarto_camaras' }
      ]
    }
  ],
  talkOptions: []
};
