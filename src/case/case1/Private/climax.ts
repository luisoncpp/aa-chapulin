// @Architecture(descriptionShort="Case 1 climax final stage, verdict and waiting-room epilogue", type="data", icon="layers")
/**
 * Caso 1 — Clímax etapa 4 (§13.4), veredicto (§13.5) y epílogo (§14).
 * La primera línea fija `bgm` explícitamente porque sobrescribe el `suspense`
 * del motor ([[docs/lessons-learned/climax-bgm-line-override.md]]).
 */

import type { ClimaxDefinition, DialogueLine } from '../../../types/index.js';
import { CASE1_CLIMAX_STAGES } from './climax_stages.js';
import { CASE1_EPILOGUE } from './epilogue.js';

const STAGE_4_FAIL: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado, esa prueba no explica de dónde salieron los cuatro datos.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La corte quiere el objeto donde esos datos están escritos. Búsquelo en el Acta.' }
];

const STAGE_4_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'De la guantera de la camioneta del patio, señor juez.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Una tarjeta. A máquina. Seis renglones.', pose: 'donramon_point' },
  { speaker: 'TRIPASECA', text: '¡NO!', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'Léala completa, licenciado. Renglón por renglón.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: 'Tarjeta de cartulina, mecanografiada, del tamaño de una ficha de biblioteca.' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: '"Uno. Chapa puerta de carga: vencida desde marzo. Se empuja."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: '"Dos. Rejilla sala 2: 18 × 24. Malla floja en la esquina inferior. Da al patio."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: '"Tres. Velador: 20:45 bodega de proa. 21:00 bodega de popa. Copiado de su libreta; cuelga de un clavo en la caseta."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: '"Cuatro. Pastillas de chiquitolina: farmacia de Insurgentes, mostrador de atrás."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: '"Cinco. Rollo de cámara: se cambia los lunes. El martes queda un cuadro."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: '"Seis. Servicio de cierre incluido. 5 min."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: 'Al reverso, un membrete impreso: "Enciclopedias El Saber Universal, S. A."' },
  { bg: 'assets/examine_ficha_museo.webp', furniture: 'none', speaker: 'DEFENSA', text: 'La máquina con la que se escribió tiene un defecto: todas las eses caen media línea por debajo del renglón.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: '...Repita el renglón tres.', pose: 'judge_shock' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: '"Veinte cuarenta y cinco: bodega de proa. Veintiuna cero cero: bodega de popa."', pose: 'donramon_point' },
  { bg: 'assets/bg_witness.webp', speaker: 'ALMA NEGRA', text: '¡Por mil demonios! ¡Ésas son MIS palabras!', pose: 'almanegra_shock' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: 'Palabra por palabra, don Alma Negra. Incluidas "bodega de proa" y "bodega de popa".', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Señor juez: no hay una sola persona en esta ciudad que le diga "bodega de proa" a la sala uno de un museo. Sólo él.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Quien escribió esta tarjeta tuvo la libreta de este hombre en las manos, con calma, y la copió.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'JUEZ', text: 'Ahora los renglones uno, dos y cinco.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'La chapa vencida desde marzo. La rejilla de dieciocho por veinticuatro. El rollo que se cambia los lunes.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡Esos tres, más esta ronda, son exactamente los cuatro datos que la defensa fue sacando en dos días!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Los cuatro, señor juez. Ni uno de más.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Este juicio se pasó dos días descubriendo, uno por uno, los cuatro datos que alguien ya traía escritos en una tarjeta de veinte centavos.', pose: 'donramon_idle' },
  { speaker: 'NARRADOR', text: 'El escándalo de la galería tarda medio minuto en bajar.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'JUEZ', text: 'Licenciado... el renglón cuatro nombra una farmacia.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Ése no lo demostró esta defensa, señor juez. Lo dice la tarjeta. Si alguien vendió esas pastillas, que lo vea el ministerio público.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Señor Tripaseca. Esta corte le pregunta por última vez. ¿Quién escribió esa tarjeta?', pose: 'judge_neutral' },
  { speaker: 'TRIPASECA', text: '......', pose: 'tripaseca_sweat' },
  { speaker: 'DEFENSA', text: 'Señor Tripaseca, usted me cae mal, pero le voy a decir una cosa de comerciante a hijo de vecino.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Usted no estudió ese museo. Usted no estudió nada en su vida.', pose: 'donramon_point' },
  { speaker: 'TRIPASECA', text: '¡CLARO QUE NO!', pose: 'tripaseca_panic' },
  { speaker: 'NARRADOR', text: 'El testigo se arranca el sombrero y lo muerde.', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: '¡Yo no estudié nada! ¡¿Quién estudia?! ¡ESO SE COMPRA!', pose: 'tripaseca_breakdown' },
  { speaker: 'TRIPASECA', text: '¡Uno paga y le dan el papelito! ¡Las medidas, los horarios, todo! ¡Así se trabaja ahora!', pose: 'tripaseca_breakdown' },
  { speaker: 'JUEZ', text: '¿A QUIÉN le pagó usted?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: '¡Al Tomo Trece!', pose: 'tripaseca_breakdown' },
  { speaker: 'NARRADOR', text: 'Silencio absoluto en la sala.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...¿Al qué?', pose: 'judge_thinking' },
  { speaker: 'TRIPASECA', text: 'Al Tomo Trece.', pose: 'tripaseca_breakdown' },
  { speaker: 'JUEZ', text: '¿Y eso qué es? ¿Una persona? ¿Un lugar?', pose: 'judge_shock' },
  { speaker: 'TRIPASECA', text: '...Yo nomás dejo el dinero y recojo el papelito. Nunca he visto a nadie.', pose: 'tripaseca_breakdown' },
  { speaker: 'DEFENSA', text: 'Señor juez, la defensa solicita que se investigue...', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '¡OBJECTION!', sfx: 'desk_slam', cutin: 'objection_un_momento', pose: 'supersam_slam' },
  { speaker: 'SUPER SAM', text: '¡Your Honor, el acusado en este juicio es el señor de rojo! ¡Quién le vendió una tarjeta a un ratero es irrelevante para el veredicto!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: '...La corte concede la objeción.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '¡Señor juez!', pose: 'donramon_shock' },
  { speaker: 'JUEZ', text: 'Licenciado, el fiscal tiene razón, y eso me molesta más a mí que a usted.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Esta corte resuelve sobre el acusado que tiene enfrente. La tarjeta queda en autos como prueba de un tercero no identificado.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Un tercero no identificado. Y ahí se va a quedar.)', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '(Don Ramón... ese nombre no me gustó nada.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(A mí tampoco, joven. Pero hoy nos toca ganar, no entender.)', pose: 'donramon_sweat' }
];

const CASE1_VERDICT: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Esta corte tiene todo lo que necesita.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'El testigo El Tripaseca queda detenido en esta sala por robo calificado y lesiones graves. Que lo pase la fuerza pública.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: '¡Yo compro barato...! ¡Yo compro barato y vendo lo que se deje...!', pose: 'tripaseca_breakdown' },
  { speaker: 'JUEZ', text: 'Se da vista al ministerio público respecto de la farmacia mencionada en el renglón cuatro, y respecto del origen de la bolsa de lona.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: '...La fiscalía toma nota.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'En cuanto al acusado.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Entró por una puerta abierta, con las manos vacías, a auxiliar a un hombre al que no conocía, y lo detuvieron por llegar tarde.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Esta corte dicta su veredicto.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: '¡INOCENTE!', cutin: 'objection_inocente', sfx: 'gavel', bgm: 'victory', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: '', instant: true, confetti: true },
  { speaker: 'CHAPULIN', text: '¡SÍGANME LOS BUENOS!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¡Con permisito, dijo Monchito!', pose: 'donramon_point' },
  { speaker: 'FLORINDA', text: '...Gracias, licenciado. Gracias.', pose: 'florinda_crying' },
  { speaker: 'ALMA NEGRA', text: '¡Por mil demonios, este barco llegó a puerto!', pose: 'almanegra_shock' }
];

export const CASE1_CLIMAX: ClimaxDefinition = {
  dialogue: [
    { speaker: 'JUEZ', text: 'Esta corte escuchará el alegato final de la defensa.', bgm: 'suspense', pose: 'judge_gavel', sfx: 'gavel' }
  ],
  presentTarget: ['ficha_museo'],
  stages: [
    ...CASE1_CLIMAX_STAGES,
    {
      presentTarget: ['ficha_museo'],
      prompt: '¿De dónde salió todo lo que el ladrón sabía de antemano?',
      failDialogue: STAGE_4_FAIL,
      successDialogue: STAGE_4_SUCCESS
    }
  ],
  verdict: CASE1_VERDICT,
  epilogue: CASE1_EPILOGUE
};
