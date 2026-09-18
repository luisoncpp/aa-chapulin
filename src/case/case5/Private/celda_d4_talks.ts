// @Architecture(descriptionShort="Case 5 day 4 midnight cell talk options and caldera unlock", type="data", icon="layers")
/**
 * Caso 5, Día 4 — diálogos de la celda de madrugada (`celda_c5_d4`). Spec §16.1.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_CELDA_D4_TALKS: TalkOption[] = [
  {
    id: 'pasillo_caliente',
    label: 'El pasillo estaba caliente',
    dialogue: [
      { speaker: 'DEFENSA', text: 'Don Ramón, cuando usted subió el sábado, ¿hacía calor allá arriba?', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Un bochorno espantoso. Me quité el saco y me lo volví a poner porque no era lugar.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '¿Y el señor Lengua?', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'Sudaba. Se limpiaba la frente con el pañuelo cada dos frases. Yo pensé que eran los nervios.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '¿Y el conserje?', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'El conserje me dijo en la puerta que llevaban cuatro días con la caldera al máximo por un tubo reventado.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'Don Ramón.', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'El legista calculó la hora de la muerte con la temperatura del cuerpo.', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: '...Sí.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'Y calculó suponiendo un cuarto normal.', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: '...Sí.', pose: 'donramon_shock' },
      { speaker: 'DEFENSA', text: 'En un cuarto caliente el cuerpo se enfría más despacio. Y si se enfría más despacio...', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: '...la muerte fue antes de lo que dice el papel.', pose: 'donramon_shock' },
      { speaker: 'DEFENSA', text: 'Antes.', pose: 'chapulin_idle' },
      { speaker: 'NARRADOR', text: 'Los dos se quedan callados.', bgm: 'suspense' },
      { speaker: 'DON RAMÓN', text: 'Joven.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Si esa ventana se mueve para atrás, me alcanza a mí.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '...Sí.', pose: 'chapulin_panic' },
      { speaker: 'DON RAMÓN', text: 'Yo estuve doce minutos a solas con ese hombre, sin que nadie viera la mesa.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Si usted mueve esa ventana, señor juez tiene por primera vez en cuatro días una hora en la que yo estaba adentro.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '(Y por eso vine a las cinco cuarenta de la mañana. Porque esto no lo puedo decidir yo.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'presentar_o_no',
    label: '¿Lo presento o no lo presento?',
    unlockedByTalk: 'pasillo_caliente',
    dialogue: [
      { speaker: 'DEFENSA', text: 'Don Ramón, usted es el abogado. Dígame qué hago.', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'Yo soy el acusado, joven. Los acusados no deciden estas cosas.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '¡Usted decidió las de cuatro juicios seguidos!', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Ésos no eran míos.', pose: 'donramon_sweat' },
      { speaker: 'NARRADOR', text: 'Don Ramón se queda mirando la pared un rato largo.' },
      { speaker: 'DON RAMÓN', text: 'Chapulín.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'A mí me metieron aquí con un papelito que alguien le puso en la mano a un muerto.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Si yo salgo de aquí porque un perito midió mal la temperatura de un cuarto, salgo igual de sucio que como entré.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Preséntelo.', pose: 'donramon_shock' },
      { speaker: 'DEFENSA', text: '¡Pero es que lo mete a usted en la ventana!', pose: 'chapulin_panic' },
      { speaker: 'DON RAMÓN', text: 'Me mete a mí y lo mete a él.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Y yo tengo un abogado.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '......', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'Ándele, joven. Y péinese las antenitas, que va a salir en el periódico.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '¡Que no panda el cúnico, Don Ramón!', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Ya pandó, joven. Ya pandó hace cuatro días.', pose: 'donramon_sweat', unlockLocation: 'archivo_caldera' }
    ]
  }
];
