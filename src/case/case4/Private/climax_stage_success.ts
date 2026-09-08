// @Architecture(descriptionShort="Case 4 climax stage success and bottle point target", type="data", icon="layers")
/**
 * Case 4 climax — Stage 1 cork channel + Stage 2 ring fracture (spec §13).
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

export const CASE4_CIERRE_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'botella_vino',
  promptQuestion: '¿Qué muestra el cierre de la V58-17 que no pudo hacer un sacacorchos?',
  imageAsset: 'assets/examine_botella.webp',
  zones: [
    { id: 'canal_fino', bounds: [34, 48, 70, 79], isCorrect: true, failureDialogue: [] },
    { id: 'cierre_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Ese rastro corresponde a la apertura ordinaria, licenciado. Busque una vía que el tirabuzón no pudo abrir.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Y búsquela rápido! Time is money!' }
    ] }
  ]
};

export const CASE4_ANILLO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'sello_lacre',
  promptQuestion: '¿Qué parte del anillo corresponde al fragmento retenido en el canal?',
  imageAsset: 'assets/examine_sello.webp',
  zones: [
    { id: 'extremo_truncado', bounds: [50, 37, 80, 88], isCorrect: true, failureDialogue: [] },
    { id: 'anillo_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Esa parte explica cómo funciona la pieza, licenciado. Este tribunal le preguntó qué parte le falta.', sfx: 'damage' }
    ] }
  ]
};

/** Alias kept for existing test imports. */
// fallow-ignore-next-line unused-export
export const CASE4_CLIMAX_BOTTLE_POINT = CASE4_CIERRE_POINT_TARGET;

export const CASE4_CLIMAX_STAGE1_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO! ¡Un canal que atraviesa el corcho de lado a lado! ¡Y el laboratorio encontró el mismo tóxico metido ahí adentro!', sfx: 'desk_slam', bgm: 'pursuit', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¿Está usted diciendo que envenenaron el vino sin abrir la botella?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'A través del cierre, señor juez. Con algo fino y rígido. Después basta un puntito de cera sobre el sello para que nadie vea por dónde entró.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Como cuando uno le pica el jugo a la bolsita sin abrirla!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '...Sorprendentemente claro.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: '¿Y quién me dice que ese agujero no se hizo después, para fabricarme esta historia?', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'La custodia, señor fiscal. Ese corcho salió de la 204 en el bolso de la señorita Maruja antes de que la víctima bebiera.', pose: 'donramon_idle' },
  { speaker: 'MARUJA', text: 'Me lo regaló él mismo. Se lo entregué al Sargento al día siguiente, en cuanto supe de qué botella se trataba.', pose: 'maruja_idle' },
  { speaker: 'SARGENTO', text: 'Desde ese mediodía está en mi archivo. Con hora y dos firmas.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: 'Entonces hubo quince horas dentro de un bolso particular. Su cadena empieza tarde, counselor.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Empieza tarde y lo admito. Lo que sí prueba es que ese cierre no volvió a esa habitación ni pasó por las manos del acusado, que a esa hora ya estaba detenido.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Queda abierta una posibilidad sobre quien lo guardó.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Queda. Y no la pienso cerrar con la palabra de nadie, sino con lo que se quedó atrapado dentro del canal.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'El tribunal acepta el método y reserva la mano.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: '¡Y esa mano cargaba herramientas! Un fontanero trae encima cosas finas y rígidas todo el santo día. ¡Y tuvo la botella cinco minutos!', pose: 'supersam_point' },
  { speaker: 'BOTIJA', text: 'Yo la llevé pegadita al pecho, señor. Como se lleva a un niño.', pose: 'botija_nervioso' },
  { speaker: 'SUPER SAM', text: 'Five minutes are five minutes, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Entonces comparemos ese canal con lo que se quedó adentro.', pose: 'donramon_point' }
];

export const CASE4_CLIMAX_STAGE2_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡A esta punta le falta un pedazo! Y el pedazo que le falta se quedó dentro del corcho.', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'SARGENTO', text: 'Las dos superficies de rotura están fotografiadas a la misma escala, señor juez. Coinciden borde con borde.', pose: 'pazguato_saludo' },
  { speaker: 'SARGENTO', text: 'Y la rotura es reciente. El perito dice que una punta así se parte al forzarla contra el vidrio del cuello.', pose: 'pazguato_decidido' },
  { speaker: 'DEFENSA', text: 'Por eso quedó dentro del corcho. Quien lo hizo no lo supo hasta hoy.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Y el conducto conserva residuos del mismo agente que mató al señor Gómez.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '...Un anillo.', pose: 'supersam_sweat' },
  { speaker: 'SUPER SAM', text: 'Mi calculadora no tiene una tecla para esto.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Un anillo que sirve para sellar lacre. Por eso a nadie le extraña que tenga cera. Lo que no se explica con cera es una punta hueca.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿Y quién tenía esa pieza esa noche?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'A las nueve y cuarto selló con ella la autorización de la cava. La cera sigue en el folio, con su escudo y todo.', pose: 'donramon_idle' },
  { speaker: 'CECILIO', text: 'Ese sello lo estampó delante de mí. Por eso ese folio lleva lacre y no una firma más.', pose: 'cecilio_idle' },
  { speaker: 'MARUJA', text: 'Y yo se lo vi puesto en la puerta de la 204, cuando firmó el recibo del vino.', pose: 'maruja_idle' },
  { speaker: 'DEFENSA', text: 'Botija nunca lo tuvo, y nadie ha declarado habérselo prestado esa noche.', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'Yo se lo incauté ayer por la tarde, cuando el tribunal ordenó su custodia. No hubo una sola noche para deshacerse de él.', pose: 'pazguato_decidido' },
  { speaker: 'DEFENSA', text: 'Y ahí se cierra lo que quedó abierto hace un momento: quien guardó el cierre nunca tuvo este anillo, y la pieza que dejó ese fragmento lleva bajo custodia desde ayer.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'El tribunal da por resuelta esa posibilidad.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'DEFENSA', text: 'Señor Rufián: usted se quedó solo con una botella cerrada... y el pedazo que le falta a su anillo estaba dentro de ese corcho.', pose: 'donramon_point', cutin: 'objection_toma_eso', sfx: 'whoosh', bgm: 'objection' },
  { speaker: 'RUFINO', text: '...', pose: 'rufino_panic' },
  { speaker: 'RUFINO', text: '¡Ese cierre debía irse a la basura! ¡Se lo dio a ella! ¡SE LO DIO A ELLA DELANTE DE MÍ, COMO SI FUERA UN CARAMELO!', pose: 'rufino_breakdown', sfx: 'desk_slam' }
];

export const CASE4_CLIMAX_VERDICT: DialogueLine[] = [
  { speaker: 'RUFINO', text: 'El collar lo planeé yo. Él nada más abrió una vitrina y desde entonces se creyó mi socio.', pose: 'rufino_breakdown' },
  { speaker: 'RUFINO', text: 'Once meses cobrando. Y esa noche llegó a mi hotel a ponerle precio a mi apellido.', pose: 'rufino_breakdown' },
  { speaker: 'JUEZ', text: 'Su apellido es falso.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'RUFINO', text: 'Por eso valía tanto.', pose: 'rufino_breakdown' },
  { speaker: 'DEFENSA', text: '¿Y el fontanero?', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'Un hombre con expediente, con llave maestra y con un pleito que oyó medio pasillo. Lo escribí en un papel y el hotel me lo subió.', pose: 'rufino_breakdown' },
  { speaker: 'BOTIJA', text: 'Me escogió porque nadie me iba a creer.', pose: 'botija_llorando' },
  { speaker: 'RUFINO', text: 'Lo escogí porque era barato.', pose: 'rufino_breakdown' },
  { speaker: 'CHIMOLTRUFIA', text: '¡Míreme cuando diga eso!', pose: 'chimoltrufia_shock' },
  { speaker: 'SUPER SAM', text: 'La fiscalía retira los cargos contra el acusado, Your Honor. Y solicita que las tres audiencias se le carguen a la cuenta del conde.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'Bastante he oído. Este tribunal dicta su fallo.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'Gordon Botija Pompa y Pompa, este tribunal lo declara NO CULPABLE.', pose: 'judge_gavel', cutin: 'objection_inocente', sfx: 'whoosh', bgm: 'victory' },
  { speaker: 'JUEZ', text: 'El acusado responderá en vía administrativa por haber tomado y no entregado la cartera del difunto. No por su muerte.', pose: 'judge_neutral' },
  { speaker: 'BOTIJA', text: 'Sí, señor. Eso sí lo hice.', pose: 'botija_aliviado' },
  { speaker: 'JUEZ', text: 'Se ordena procesar a Rufino Rufián por homicidio, encubrimiento y receptación del Collar de Cleopatra.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'El tribunal deja constancia del trabajo del sargento Refugio Pazguato, que solicitó los exámenes que corrigieron su propio parte.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'Un fiscal eficiente reconoce sus pérdidas y cierra la posición, Your Honor. Time is money.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'Es lo más bonito que le he oído decir.', pose: 'donramon_idle' }
];
