// @Architecture(descriptionShort="Case 4 day-3 contradiction success and point targets", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — D3-T1 folio point + D3-T2 telegram point (spec §12).
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

export const CASE4_ORDEN_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'orden_servicios',
  promptQuestion: '¿Qué parte de esta solicitud elige a un empleado concreto?',
  imageAsset: 'assets/examine_orden.webp',
  zones: [
    { id: 'nombre_empleado', bounds: [18, 58, 80, 82], isCorrect: true, failureDialogue: [] },
    { id: 'orden_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Esa parte no designa a nadie, licenciado. Busque dónde se escoge a la persona que debía subir.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Take your time, counselor. Yo cobro por hora.' }
    ] }
  ]
};

export const CASE4_TELEGRAMA_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'nota_amenaza',
  promptQuestion: '¿Qué parte de este documento acredita que el destinatario lo tuvo en la mano?',
  imageAsset: 'assets/examine_nota.webp',
  zones: [
    { id: 'acuse_recepcion', bounds: [10, 64, 94, 86], isCorrect: true, failureDialogue: [] },
    { id: 'telegrama_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Esa parte no acredita recepción. Busque la firma de quien lo recibió.', sfx: 'damage' }
    ] }
  ]
};

export const CASE4_D3_T1_ORDEN_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡El hotel no eligió a nadie! ¡El nombre está escrito aquí, de su puño y letra!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: 'Un hotel copia lo que le dicta el huésped.', pose: 'rufino_sweat' },
  { speaker: 'CECILIO', text: 'Usted perdone, señor conde, pero ese papel me lo puso en la mano usted mismo. Yo sólo lo archivé. Y para archivar sí veo perfectamente.', pose: 'cecilio_idle' },
  { speaker: 'DEFENSA', text: 'Pidió a un hombre concreto, por su nombre, para que estuviera dentro de esa habitación a una hora concreta.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿Con qué finalidad, licenciado?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Con la de que lo encontraran ahí. Usted no improvisó ningún montaje: usted escogió a quién se lo iba a colgar.', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'Escogí al que estaba disponible.', pose: 'rufino_sweat' },
  { speaker: 'DEFENSA', text: 'Escogió al que tenía expediente.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Your Honor, escoger a un empleado no es envenenar a un huésped. La fiscalía mantiene que el vino llegó alterado.', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Y por eso vamos a hablar de la botella. Pero que conste en actas quién escribió ese nombre.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Consta.', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE4_D3_T2_NOTA_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Usted firmó el acuse cincuenta minutos antes de esa visita que según usted no esperaba!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: 'Firmo docenas de papeles al día.', pose: 'rufino_sweat' },
  { speaker: 'DEFENSA', text: 'Éste exige el pago de un collar robado bajo amenaza de denuncia. Ése no se firma sin leerlo. Ni usted ni nadie.', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'Y el collar apareció ayer en el maletín que incautamos en su habitación, señor juez. Levanté acta.', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: '¿Reconoce esa joya?', pose: 'judge_thinking' },
  { speaker: 'RUFINO', text: 'Reconozco que es mía.', pose: 'rufino_sweat' },
  { speaker: 'DEFENSA', text: 'Está denunciada como robada hace once meses. Y el hombre que venía a cobrar su parte apareció muerto dentro de un baúl suyo.', pose: 'donramon_point', bgm: 'objection' },
  { speaker: 'SUPER SAM', text: '...Un móvil. Ahora sí tenemos un móvil.', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '¡Pero un móvil no es un método, Your Honor! ¡El que tocó esa botella sigue siendo el acusado!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'De acuerdo, señor fiscal. Entonces hablemos de la botella.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Ya era hora! Llevo tres días cargando con ella.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Que la defensa exponga cómo se alteró ese vino. Es lo último que le queda por resolver a este proceso.', pose: 'judge_gavel', sfx: 'gavel' }
];

/** Legacy aliases for old test imports. */
// fallow-ignore-next-line unused-export
export const CASE4_DAY3_OPENING_PRESENT_SUCCESS: DialogueLine[] = CASE4_D3_T2_NOTA_SUCCESS;
// fallow-ignore-next-line unused-export
export const CASE4_D3_T1_BOLETA_SUCCESS: DialogueLine[] = CASE4_D3_T1_ORDEN_SUCCESS;
// fallow-ignore-next-line unused-export
export const CASE4_D3_T1_REGISTRO_FOLLOWUP: DialogueLine[] = CASE4_D3_T1_ORDEN_SUCCESS;
// fallow-ignore-next-line unused-export
export const CASE4_D3_T2_BAUL_SUCCESS: DialogueLine[] = CASE4_D3_T2_NOTA_SUCCESS;
// fallow-ignore-next-line unused-export
export const CASE4_D3_T2_COPA_FOLLOWUP: DialogueLine[] = CASE4_D3_T2_NOTA_SUCCESS;
