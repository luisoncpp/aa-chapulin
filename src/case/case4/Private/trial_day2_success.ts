// @Architecture(descriptionShort="Case 4 day-2 contradiction success and point targets", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — D2-T1 two routes + D2-T2 trunk inference (spec §10).
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

export const CASE4_PLANO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'plano_hotel',
  promptQuestion: '¿Cómo llegó ese sonido hasta la habitación señalada por la testigo?',
  imageAsset: 'assets/examine_plano.webp',
  zones: [
    { id: 'ramal_204_304', bounds: [35, 14, 53, 85], isCorrect: true, failureDialogue: [] },
    { id: 'plano_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'DEFENSA', pose: 'donramon_panic', text: '¡Por este sector del edificio es por donde viajó el estruendo... creo!' },
      { speaker: 'JUEZ', pose: 'judge_shock', text: '¡Pero Licenciado, ese sector no tiene conexión directa con la Suite 304!', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Pura desorientación arquitectónica!' }
    ] }
  ]
};

export const CASE4_REGISTRO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'registro_montacargas',
  promptQuestion: '¿Qué trayecto obliga a investigar una descarga antes de llegar al almacén?',
  imageAsset: 'assets/examine_registro.webp',
  zones: [
    { id: 'fila_B17_descarga', bounds: [4, 40, 96, 57], isCorrect: true, failureDialogue: [] },
    { id: 'registro_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Esa fila es un envío ordinario. Señale el trayecto que obliga a investigar una descarga.', sfx: 'damage' }
    ] }
  ]
};

/** Ruta A, primera presentación (plano): abre el ramal y pide el objeto sin proyectil. */
export const CASE4_D2_T1_PLANO_HALF: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! Mire el plano, señor juez: la 204 y la 304 comparten el mismo ramal.', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'MARUJA', text: 'Yo de tuberías no sé nada. Yo sé lo que sentí.', pose: 'maruja_nerviosa' },
  { speaker: 'SUPER SAM', text: 'Un tubo no dispara, counselor. Los tubos no tienen dedo.', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'La objeción tiene sentido, pero un plano no hace ruido. Acredíteme que allí se produjo un efecto sin proyectil.', pose: 'judge_thinking' }
];

/** Ruta B, primera presentación (casquillo): fija el fogueo y pide el trayecto del sonido. */
export const CASE4_D2_T1_CASQUILLO_HALF: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! Ese casquillo es de fogueo: hace estruendo y no deja bala.', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'MARUJA', text: '¿Fogueo? Pues sonó bien de verdad.', pose: 'maruja_nerviosa' },
  { speaker: 'SUPER SAM', text: '¡Un casquillo suelto no dice en qué cuarto se accionó! ¡Pudo estar en cualquier lado!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Concuerdo. Muéstreme cómo llegó ese sonido hasta la habitación que señaló la testigo.', pose: 'judge_thinking' }
];

/** Payoff compartido: se reproduce solo al cerrar la ruta (spec §10.2). */
export const CASE4_D2_T1_RUTA_A_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Usted sintió el estruendo en esa pared, señorita, pero la cosa que lo hizo no estaba en la 304!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'MARUJA', text: '¿Cómo que no? Yo lo sentí aquí, en el brazo.', pose: 'maruja_nerviosa' },
  { speaker: 'DEFENSA', text: 'Lo sintió en el radiador. Y ese radiador viene de un piso más abajo.', pose: 'donramon_point' },
  { speaker: 'MARUJA', text: '...¿Un piso más abajo?', pose: 'maruja_nerviosa' },
  { speaker: 'SARGENTO', text: 'En la 204, señorita. El aparato no dispara bala: hace ruido, y trae retardo. El ensayo está registrado y firmado.', pose: 'pazguato_saludo' },
  { speaker: 'CHAPULIN', text: '¡Las tuberías son bien chismosas, señor juez! ¡Lo que se dice abajo se oye arriba!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¡Entonces no hacía falta ningún tirador dentro de la 304 a esa hora!', pose: 'judge_shock' },
  { speaker: 'JUEZ', text: 'Aunque eso tampoco descarta que alguien interviniera mucho antes.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'Fine. Eso explica el ruido. ¡Pero el ruido no envenenó a nadie! ¡Todavía nadie me dice quién le puso algo a ese vino!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Tiene razón. Y por eso tampoco puede decirme que el único que pudo tocarlo fue el que lo cargó. Señorita: usted dejó al huésped de la 204 a solas con esa botella.', pose: 'donramon_idle' },
  { speaker: 'MARUJA', text: '...Sí. Ese ratito yo no lo vi.', pose: 'maruja_nerviosa' },
  { speaker: 'DEFENSA', text: 'Nadie lo vio. Y ahí es justo donde la fiscalía dejó de contar.', pose: 'donramon_point' }
];

export const CASE4_D2_T1_RUTA_B_SUCCESS: DialogueLine[] = CASE4_D2_T1_RUTA_A_SUCCESS;

// fallow-ignore-next-line unused-export
export const CASE4_D2_T1_RESIDUOS_SUCCESS: DialogueLine[] = CASE4_D2_T1_RUTA_A_SUCCESS;

// fallow-ignore-next-line unused-export
export const CASE4_D2_T1_FORENSE_SUCCESS: DialogueLine[] = CASE4_D2_T1_RUTA_A_SUCCESS;

export const CASE4_D2_T2_REGISTRO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_un_momento', speaker: 'DEFENSA', text: '¡UN MOMENTO! ¡El mismo baúl aparece pesado dos veces... y no pesa lo mismo!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'CHOMPIRAS', text: 'A ver... cien kilos al subir al tercer piso. Veinte cuando llegó a la azotea.', pose: 'chompiras_nervous' },
  { speaker: 'CHAPULIN', text: '¡Ochenta kilos de diferencia! ¡Es como si al baúl le hubiera dado hambre al revés!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'En la planta 3 le sacaron ochenta kilos a ese baúl, señor juez.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Eighty kilos of anything, counselor. Toallas. Botellas. Ladrillos. ¡Usted no le puede poner nombre a un peso!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Ahí le doy la razón. Un peso no tiene nombre... hasta que uno le encuentra la ropa.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Presente entonces ese vínculo, licenciado.', pose: 'judge_thinking' }
];

/** Spec §10.3 cierre: sigue al turnabout y precede al aplazamiento del día 2. */
const CASE4_D2_T2_AFTERMATH: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Queda claro que la escena de la 304 se preparó después del traslado.', pose: 'judge_thinking' },
  { speaker: 'RUFINO', text: '¡Pero yo no lo envenené! ¡La botella la trajo ese hombre! Cuando comprendí lo que estaba pasando pensé que me culparían a mí... ¡a mí, que tengo escudo!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: 'Y el escudo no le sirvió de nada, ¿verdad? Bienvenido al resto del mundo.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'Your Honor, el testigo acaba de confesar que escondió un cadáver. Eso me descuadra toda la hoja de cálculo. La fiscalía investigará también su intervención.', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Y la defensa va a seguir esa botella paso por paso: desde que salió de la cava hasta que alguien la destapó.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Ordénese el registro de la Suite 204 y la custodia de los objetos relacionados. El señor Rufián queda a disposición de este tribunal.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SARGENTO', text: 'A la orden. Registro por separado sus efectos personales y las muestras del vino. Cada cosa en su bolsa y con su número.', pose: 'pazguato_decidido' },
  { speaker: 'CHAPULIN', text: '¡Que no panda el cúnico, Botija! ¡Ya nomás falta una noche!', pose: 'chapulin_point' },
  { speaker: 'BOTIJA', text: 'Es la tercera vez que me dicen eso. Pero es la primera vez que les creo.', pose: 'botija_aliviado' }
];

export const CASE4_D2_T2_BAUL_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO! Este retal estaba enganchado en el forro del baúl. ¡Y sus bordes embonan con el desgarrón del traje del señor Gómez!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'La comparación está documentada, señor juez. Las dos fotografías, a la misma escala.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: '¡El hombre pudo guardar su ropa ahí adentro! ¡La gente viaja con ropa!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Sí. Y casi siempre puesta. Contémoslo despacio: una víctima que ya estaba muerta antes de las diez, un baúl que sube a las 22:20, la tela de su traje enganchada adentro, y ochenta kilos que se esfuman en el tercer piso...', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Y el tercer piso es donde apareció el muerto!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'La defensa sostiene que el B-17 subió con el cadáver adentro. Y le pido al señor que lo recibió que nos diga qué le sacó.', cutin: 'objection_toma_eso', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Señor Rufián, su recepción y la apertura posterior están documentadas. Responda a este tribunal.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'RUFINO', text: 'Yo... yo no quería que el nombre de este hotel se viera envuelto en semejante...', pose: 'rufino_panic' },
  { speaker: 'SUPER SAM', text: '¿En semejante QUÉ?', pose: 'supersam_point' },
  { speaker: 'RUFINO', text: '¡Lo encontré muerto en mi habitación! Me asusté. Lo metí en el baúl y pedí que lo subieran.', pose: 'rufino_sweat' },
  { speaker: 'NARRADOR', text: 'Un murmullo recorre la galería. El monóculo del conde tiembla, pero no llega a caerse.', bgm: 'suspense' },
  { speaker: 'BOTIJA', text: '...¿Yo lo subí? ¿Yo mandé ese baúl?', pose: 'botija_nervioso' },
  { speaker: 'RUFINO', text: 'Usted movió un baúl, buen hombre. No tenía por qué saber lo demás.', pose: 'rufino_sweat' },
  { speaker: 'BOTIJA', text: 'Don Ramón, yo revisé que la faja fuera enterita. Con estas manos.', pose: 'botija_llorando' },
  { speaker: 'DEFENSA', text: 'Y firmaste el recibo, y avisaste que llegó completo. Botija: tu encargo era de verdad. Lo único falso era lo que iba adentro.', cutin: 'objection_toma_eso', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_idle' },
  ...CASE4_D2_T2_AFTERMATH
];

// fallow-ignore-next-line unused-export
export const CASE4_D2_T2_PLANO_SUCCESS: DialogueLine[] = CASE4_D2_T1_RUTA_A_SUCCESS;
