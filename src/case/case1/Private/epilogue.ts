// @Architecture(descriptionShort="Case 1 waiting-room epilogue after the verdict", type="data", icon="layers")
/**
 * Caso 1 — Epílogo, sala de espera (§14). Cada línea estampa `bg` +
 * `furniture: 'none'` ([[docs/lessons-learned/trial-waiting-room-epilogue-staging.md]]).
 */

import type { ClimaxEpilogue, DialogueLine } from '../../../types/index.js';

const BG = 'assets/bg_waiting_room.webp';

const LINES: DialogueLine[] = [
  { speaker: 'NARRADOR', text: '23 de agosto, 18:40. Sala de espera del tribunal.', bgm: 'epilogue' },
  { speaker: 'FLORINDA', text: 'Ya está en su vitrina otra vez. Le van a poner cristal doble y una rejilla nueva.', pose: 'florinda_idle' },
  { speaker: 'DEFENSA', text: '¿Y la chapa de la puerta de carga?', pose: 'donramon_idle' },
  { speaker: 'FLORINDA', text: '...Mañana viene el cerrajero. Mañana.', pose: 'florinda_idle' },
  { speaker: 'DEFENSA', text: 'Doña Florinda, "mañana" lleva cinco meses.', pose: 'donramon_sweat' },
  { speaker: 'FLORINDA', text: '¡Chusma, chus...! ...Ay. Ya ni modo. Mañana viene el cerrajero.', pose: 'florinda_angry' },
  { speaker: 'ALMA NEGRA', text: 'Licenciado.', pose: 'almanegra_vendado' },
  { speaker: 'DEFENSA', text: 'Don Alma Negra.', pose: 'donramon_idle' },
  { speaker: 'ALMA NEGRA', text: 'Quemé la libreta.', pose: 'almanegra_vendado' },
  { speaker: 'DEFENSA', text: '¿Toda?', pose: 'donramon_shock' },
  { speaker: 'ALMA NEGRA', text: 'Toda. Cuarenta años de guardias, al bote de la basura. De hoy en adelante la ronda me la voy inventando cada noche.', pose: 'almanegra_vendado' },
  { speaker: 'CHAPULIN', text: '¿Y si se le olvida?', pose: 'chapulin_idle' },
  { speaker: 'ALMA NEGRA', text: 'Pues que se le olvide también al que me quiera sorprender, grumete.', pose: 'almanegra_vendado' },
  { speaker: 'NARRADOR', text: 'Por el pasillo cruza Super Sam, con el portafolios en una mano y la bolsa de lona nueva apretada contra el pecho, no al hombro.', sfx: 'whoosh' },
  { speaker: 'SUPER SAM', text: 'Counselor.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'Señor fiscal.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'Ganó usted. Ocho horas de audiencia. Eight hours. Sabe cuánto cuesta eso.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'Me lo imagino.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '...No. No se lo imagina.', pose: 'supersam_sweat' },
  { speaker: 'NARRADOR', text: 'El fiscal sigue de largo sin voltear.', sfx: 'whoosh' },
  { speaker: 'CHAPULIN', text: 'Licenciado, ¿usted le entendió?', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'No, joven. Y por hoy no le quiero entender.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Pues entonces a celebrar! ¿Cuánto le pagaron por defenderme?', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Nada. Usted es de oficio.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: '¡¿Nada?! ¡¿Y su renta?!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'Catorce meses. Los mismos catorce que traía el lunes.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'No se aflija, Don Ramón. En casa del herrero... no entran moscas.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '...Chapulín, yo ni herrero soy, ni tengo casa. Tengo casero.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: '¡Peor tantito! ¡Pero que no panda el cúnico!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '(Catorce meses de renta, cero pesos de honorarios, y un fiscal que salió abrazando una bolsa nueva como si la anterior nunca hubiera existido.)', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: '(Y una tarjeta de veinte centavos, en un expediente, que nadie va a volver a leer.)', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Ándele, joven. Lo invito a unas garnachas.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡¿Con qué dinero?!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'Con el suyo. ¡Síganme los buenos!', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Chanfle!', pose: 'chapulin_panic' }
];

export const CASE1_EPILOGUE: ClimaxEpilogue = {
  bg: BG,
  dialogue: LINES.map(/*stampWaitingRoom*/ (line) => ({ ...line, bg: BG, furniture: 'none' as const }))
};
