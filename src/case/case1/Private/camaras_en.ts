// @Architecture(descriptionShort="English Case 1 day 2 mirror corridor and camera room", type="data", icon="layers")
/**
 * Case 1, Day 2 — Mirror corridor and camera room (`cuarto_camaras`). Spec §11.2.
 * The mirror is discovered here; what it changes is discovered in court.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_CAMARAS_EN: InvestigationScene = {
  title: 'Mirror Corridor - Camera Room',
  name: 'Mirror Corridor',
  bg: 'assets/bg_pasillo_espejo.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'florinda_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'August 23rd, 11:00 AM. The corridor joining the lobby to the loading door. On the long wall, a three-metre Venetian mirror.', bg: 'assets/bg_pasillo_espejo.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'FLORINDA', text: 'You two again.', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: "Us again, ma'am. We come with the judge's order.", pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: '...Come in. But do not touch the mirror, it is from 1770 and it cost me three years of budget.', pose: 'florinda_idle' },
    { speaker: 'CHAPULIN', text: 'What an enormous mirror! You can see the whole corridor!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '(You can see the whole corridor. Yes. You can see the whole corridor.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_camara',
      label: 'Security camera',
      x: 4, y: 3, w: 13, h: 20,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A metal box bolted high on the lobby wall, aimed down the corridor.' },
        { speaker: 'DEFENSA', text: 'Is this the camera that took the photograph?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'That one. It fires by itself when something moves. It cost a fortune and it is useless.', pose: 'florinda_idle' },
        { speaker: 'FLORINDA', text: 'Besides, it only catches what crosses the light at the far end. In the dark, in this corridor, it would not photograph an elephant.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(So what sets that camera off is whatever moves against the loading door. As far as it is concerned, nothing else exists.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(It is bolted facing this way... which is to say, facing the mirror.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'And why would anyone install a camera that looks at a mirror?', pose: 'chapulin_panic' },
        { speaker: 'FLORINDA', text: "Because the man who installed it was the treasurer's nephew and he could not even change a light bulb!", pose: 'florinda_angry' }
      ]
    },
    {
      id: 'hotspot_foto',
      label: 'Developing envelope',
      x: 4, y: 66, w: 20, h: 22,
      dialogue: [
        { speaker: 'NARRADOR', text: 'On the little table, beside the roll log, there is a sealed envelope from the laboratory.' },
        { speaker: 'DEFENSA', text: 'The famous photo should be in here. Before I open it, I want to know why they developed only one frame.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Because only one was left, counselor. The explanation is nailed up beside the camera.', pose: 'florinda_idle' }
      ]
    },
    {
      id: 'hotspot_bitacora_rollo',
      label: 'Roll log',
      x: 0, y: 23, w: 15, h: 28,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Nailed up beside the camera, a sheet with dates and checkmarks.' },
        { speaker: 'DEFENSA', text: '"Film change: Mondays." And the last change was Monday the 20th.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Mondays, because Sundays are busier and the film runs out faster.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Monday the 20th. By Tuesday the 21st one frame was left. One.)', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: 'And does anyone else know that?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'It is nailed to the corridor wall, counselor. Anyone who stops to read it knows.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(One more thing in plain sight of anyone who paid for a ticket.)', pose: 'donramon_sweat' },
        { speaker: 'NARRADOR', text: 'Doña Florinda opens the laboratory envelope and hands over the single developed, enlarged frame.', addEvidence: 'foto_crimen' },
        { speaker: 'DEFENSA', text: 'Printed time: nine on the dot. A running figure. Red.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'That is me!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Do not be so quick to recognise yourself, young man; we still do not know which way you are going in that photo.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'And one more thing before I put it away: this photo exists because that roll had one frame left.', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'The one left over from Monday.', pose: 'florinda_idle', updateEvidence: 'foto_crimen' }
      ]
    },
    {
      id: 'hotspot_espejo',
      label: 'Venetian mirror',
      condition: (flags) =>
        Boolean(flags.examined_hotspot_camara) &&
        Boolean(flags.examined_hotspot_foto) &&
        Boolean(flags.examined_hotspot_bitacora_rollo),
      x: 72, y: 0, w: 28, h: 90,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Three metres of antique glass in a carved frame. It reflects the entire corridor, end to end.' },
        { speaker: 'DEFENSA', text: 'Doña Florinda, what can you see in this mirror from where the camera is?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'The corridor, of course. From the lobby to the loading door.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'Can you see the loading door in the mirror?', pose: 'donramon_shock' },
        { speaker: 'FLORINDA', text: 'The whole of it. That is what annoys me: you can see the mess in the yard from the pretty entrance.', pose: 'florinda_angry' },
        { speaker: 'CHAPULIN', text: 'Counselor! If the camera sees the mirror, and the mirror sees the loading door...!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '...then that camera never photographed the lobby.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: '(And everything in that photo is backwards.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Backwards! Like when you comb your hair in the mirror and part it on the wrong side!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Exactly like that, young man. Save it for the trial.', pose: 'donramon_point', unlockLocation: 'clinica_d2' }
      ]
    }
  ],
  talkOptions: []
};
