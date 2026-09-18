// @Architecture(descriptionShort="Case 5 day-3 Super Sam contradiction successes", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — T7 (Super Sam) contradiction and followUp successes (spec §15.3).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_D3_T2_OFICIO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, el oficio 4471 lo firmó el propio fiscal el veintiséis de noviembre.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y al calce lleva la lista de distribución, impresa por la máquina de su propia oficina.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Con copia para: la Actuaría adscrita. La Dirección del Archivo. Y...»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«...la Sindicatura de la quiebra ciento catorce diagonal mil novecientos setenta y uno.»', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'La galería se levanta.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'SUPER SAM', text: '...¿Qué?', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '¡ORDEN!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Your Honor, yo no... eso lo pone la secretaría, eso lo pone la máquina...', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Lo pone la ley, señor fiscal. Un bien de una masa concursal no se toca sin notificar al síndico.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Su oficio hizo lo correcto. Y al hacer lo correcto le dijo a alguien el día, la hora, el lugar...', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '...y el nombre del hombre que iba a estar sentado ahí.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '...Six hundred.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '¿Cómo dice?', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'Que firmo seiscientos oficios al mes, Your Honor, y que no he leído el calce de ninguno en once años.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Que se asiente.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_supersam' },
  { speaker: 'JUEZ', text: 'Y que se asiente también que este tribunal no tiene todavía nada contra nadie, porque recibir una notificación legal no es un delito.', pose: 'judge_neutral', updateProfile: 'perfil_casimiro' },
  { speaker: 'DEFENSA', text: '(Ya lo sé, señor juez. Llevo tres días sabiéndolo.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Defensa, ¿le queda algo del señor fiscal?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Una cosa, señor juez. Y es la que menos ganas tengo de preguntar.', pose: 'chapulin_idle' }
];

export const CASE5_D3_T2_EXPEDIENTE_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Panel B, señor juez. La ficha que apareció en el patio de carga del museo el veintiocho de agosto. Seis renglones.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Léalos.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '«Uno. Chapa puerta de carga: vencida desde marzo. Se empuja.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Dos. Rejilla sala dos: dieciocho por veinticuatro. Malla floja en la esquina inferior. Da al patio.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Tres. Velador: veinte cuarenta y cinco bodega de proa; veintiuna cero cero bodega de popa. Copiado de su libreta; cuelga de un clavo en la caseta.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Cuatro. Pastillas de chiquitolina: farmacia de Insurgentes, mostrador de atrás.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Cinco. Rollo de cámara: se cambia los lunes. El martes queda un cuadro.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y seis.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '«Servicio de cierre incluido. Cinco minutos.»', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Super Sam se queda mirando ese renglón.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: '...¿Cinco minutos?', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Usted cerró ese caso en cinco minutos, señor fiscal. Lo dijo usted mismo, en esta sala, en agosto.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Five.» Con la mano levantada.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: '......', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Señor fiscal, usted creyó que le habían dado un sobre.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y lo que le dieron fue el renglón seis de un catálogo.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'SUPER SAM', text: '¡YO NO SOY UN RENGLÓN!', pose: 'supersam_breakdown', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'El fiscal se dobla sobre el barandal del estrado.', sfx: 'realization' },
  { speaker: 'SUPER SAM', text: '¡Yo soy un hombre que cobra! ¡Cobrar no es ser un producto!', pose: 'supersam_breakdown' },
  { speaker: 'DEFENSA', text: 'Con precio y con duración, señor fiscal. Cinco minutos.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'A eso, en su tierra, le llaman una tarifa.', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'Silencio largo.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: '...Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'SUPER SAM', text: 'La fiscalía —yo— solicito ser separado de este asunto y puesto a disposición de la Contraloría.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'Se le tiene por separado. El secretario de acuerdos continuará en representación social.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Y esta corte le dice una cosa, señor Sullivan, porque no se la va a decir nadie más.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Lo que usted hizo hoy no lo absuelve. Pero no lo hizo por barato.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: '...Thank you, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '(Y ahora sí. Ahora ya nada más queda el señor de la leontina.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Licenciado Berrondo. Esta corte le ordena declarar, y le advierte que ya no lo hace como coadyuvante.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: 'Con mucho gusto, señor juez. Y le agradezco que me lo ordene: así no parece que huyo.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Declare usted.', sfx: 'gavel', pose: 'judge_gavel' }
];
