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
    { speaker: 'NARRADOR', text: 'August 30th, 11:00 AM. An interior museum corridor. The loading access is off to one side; ahead, a Venetian mirror closes the straight run.', bg: 'assets/bg_pasillo_espejo.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'FLORINDA', text: 'You two again.', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: "Us again, ma'am. We come with the judge's order.", pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: '...Come in. But do not touch the mirror, it is from 1770 and it cost me three years of budget.', pose: 'florinda_idle' },
    { speaker: 'CHAPULIN', text: 'What an enormous mirror! It looks like the corridor keeps going!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '(From where the camera is, it does.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_camara',
      label: 'Security camera',
      x: 76, y: 1, w: 13, h: 16,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A metal box bolted high beside the access, shifted to one side and aimed at the mirror.' },
        { speaker: 'DEFENSA', text: 'Is this the camera that took the photograph?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'That one. It fires by itself when something moves. It cost a fortune and it is useless.', pose: 'florinda_idle' },
        { speaker: 'FLORINDA', text: 'Besides, it only covers one strip of the corridor. If you do not cross that lamp light, it would not photograph an elephant.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Tripaseca could leave along the wall and outside the frame. Whoever crossed that strip spent the last frame.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(It is bolted facing the mirror. The photo is not a direct view of the corridor.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'And why would anyone install a camera that looks at a mirror?', pose: 'chapulin_panic' },
        { speaker: 'FLORINDA', text: "Because the man who installed it was the treasurer's nephew and he could not even change a light bulb!", pose: 'florinda_angry' }
      ]
    },
    {
      id: 'hotspot_foto',
      label: 'Developing envelope',
      x: 70, y: 75, w: 22, h: 21,
      dialogue: [
        { speaker: 'NARRADOR', text: 'On the little table, beside the roll log, there is a sealed envelope from the laboratory.' },
        { speaker: 'DEFENSA', text: 'The famous photo should be in here. Before I open it, I want to know why they developed only one frame.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Because only one was left, counselor. The explanation is nailed up beside the camera.', pose: 'florinda_idle' }
      ]
    },
    {
      id: 'hotspot_bitacora_rollo',
      label: 'Roll log',
      x: 88, y: 16, w: 11, h: 48,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Nailed up beside the camera, a sheet with dates and checkmarks.' },
        { speaker: 'DEFENSA', text: '"Film change: Mondays." And the last change was Monday the 27th.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Mondays, because Sundays are busier and the film runs out faster.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Monday the 27th. By Tuesday the 28th one frame was left. One.)', pose: 'donramon_shock' },
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
      id: 'hotspot_acceso_carga',
      label: 'Door to the gallery',
      x: 36, y: 13, w: 13, h: 50,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A door off to one side. It does not close the run: you have to turn after coming in to see the mirror.' },
        { speaker: 'DEFENSA', text: 'Does this one lead to the yard?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'To the gallery. The galleries leave this corridor before you reach the glass.', pose: 'florinda_idle' },
        { speaker: 'CHAPULIN', text: 'That is why the door is not in the photo!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '(Nor the yard. The frame is the reflection of this run, not a view of the street.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_muro_ciego',
      label: 'Wall under the camera',
      x: 72, y: 22, w: 17, h: 53,
      dialogue: [
        { speaker: 'NARRADOR', text: 'The bench runs along the wall, under the camera, outside the strip the lamp lights.' },
        { speaker: 'DEFENSA', text: 'Does that camera see this?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'If you do not cross the light, it would not photograph an elephant. That is why I say it is useless.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Hug this wall and you leave without spending the last frame.)', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'hotspot_espejo',
      label: 'Venetian mirror',
      condition: (flags) =>
        Boolean(flags.examined_hotspot_camara) &&
        Boolean(flags.examined_hotspot_foto) &&
        Boolean(flags.examined_hotspot_bitacora_rollo),
      x: 49, y: 23, w: 21, h: 34,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Three metres of antique glass in a carved frame. It stands at the end of the straight run, like another corridor.' },
        { speaker: 'DEFENSA', text: 'Doña Florinda, what can you see in this mirror from where the camera is?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'The galleries leave this run, before the mirror. The thing at the back is the glass.', pose: 'florinda_idle' },
        { speaker: 'CHAPULIN', text: 'But it looks like the corridor keeps going!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'From where the camera is, it does.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: 'Then whoever looks at the photo can mistake the reflected space for a real corridor.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'The loading door is off to one side, counselor. You have to turn after coming in to reach this run.', pose: 'florinda_idle' },
        { speaker: 'NARRADOR', text: 'Doña Florinda hands over a plan of the corridor, the one from when they installed the camera.', addEvidence: 'plano_pasillo' },
        { speaker: 'DEFENSA', text: '(Door and yard outside the frame. What the camera preserves is the reflection.)', pose: 'donramon_point', unlockLocation: 'clinica_d2' }
      ]
    }
  ],
  talkOptions: []
};
