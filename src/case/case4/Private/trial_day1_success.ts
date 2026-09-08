// @Architecture(descriptionShort="Case 4 day-1 contradiction success and point targets", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — D1-T1 chain point and D1-T2 forensic success (spec §8).
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

export const CASE4_CADENA_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'candado_cadena',
  promptQuestion: '¿Qué recorrido permite accionar este cierre desde el corredor después de prepararlo?',
  imageAsset: 'assets/examine_cadena.webp',
  zones: [
    { id: 'puerta_lazo', bounds: [48, 38, 62, 67], isCorrect: true, failureDialogue: [] },
    { id: 'cadena_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Ese punto no conecta con el corredor, licenciado. Revise el recorrido completo.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡Cada minuto de esta corte cuesta dinero, counselor!', sfx: 'desk_slam' },
      { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Y cada equivocación me cuesta un pedazo de cliente. Otra vez, Monchito. Con calma.)' }
    ] }
  ]
};

/** Alias used by trial_day1.ts (kept for cross-language imports). */
// fallow-ignore-next-line unused-export
export const CASE4_D1_T1_POINT_TARGET = CASE4_CADENA_POINT_TARGET;

// fallow-ignore-next-line unused-export
export const CASE4_FOTO_POINT_TARGET = CASE4_CADENA_POINT_TARGET;

export const CASE4_D1_T1_POINT_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Esa cadena dice cómo estaba la puerta cuando ustedes llegaron, no quién la dejó así!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'CECILIO', text: 'Pero el perno está del lado de adentro, licenciado. Eso hasta yo lo veo.', pose: 'cecilio_ciego' },
  { speaker: 'DEFENSA', text: 'Pues véalo bien: por ese perno pasa un hilo, y el hilo sigue hasta el canto de la puerta.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Y el pedacito que recogieron en el pasillo es del mismo hilo! ¡Me vibraron las antenitas!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Sus antenitas y el inventario del Sargento, que para el caso opinan igual.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Con la puerta abierta se prepara el lazo. Después se jala desde el corredor y la cadena cae sola. Lo único que le salió mal al que lo hizo fue que un pedazo se quedó atorado.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¿Entonces alguien pudo intervenir después de que entrara el acusado?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Pudo. Eso es lo que demuestra esta pieza. Quién fue, todavía no.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '¡Y tampoco demuestra que el fontanero no la echara con su propia mano!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Correcto, señor fiscal. Por eso ahora vamos a revisar su homicidio. Que ya se le está haciendo tarde.', pose: 'donramon_idle' }
];

// fallow-ignore-next-line unused-export
export const CASE4_D1_T1_FOLLOWUP_SUCCESS: DialogueLine[] = CASE4_D1_T1_POINT_SUCCESS;

// fallow-ignore-next-line unused-export
export const CASE4_D1_T2_CHAIN_SUCCESS: DialogueLine[] = CASE4_D1_T1_POINT_SUCCESS;

// fallow-ignore-next-line unused-export
export const CASE4_D1_T2_WALLET_SUCCESS: DialogueLine[] = CASE4_D1_T1_POINT_SUCCESS;

export const CASE4_D1_T2_FORENSE_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Esa secuencia se le cae con la ampliación, Sargento!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'SUPER SAM', text: 'Explain yourself, counselor. Y rápido.', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'La herida no tiene reacción vital. En cristiano, señor juez: ese cuerpo ya estaba muerto cuando le entró la bala.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¿Está usted diciendo que alguien le disparó a un muerto?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Eso digo. Y el informe cierra el intervalo de la muerte a las diez de la noche, con todo y su margen. Botija entró a trabajar a las once y cinco.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Llegó una hora y cinco minutos tarde para matarlo!', pose: 'chapulin_point', updateEvidence: 'informe_policial' },
  { speaker: 'BOTIJA', text: 'Entonces... cuando yo entré al baño...', pose: 'botija_nervioso' },
  { speaker: 'DEFENSA', text: 'Ese hombre ya llevaba rato muerto detrás del biombo.', pose: 'donramon_idle' },
  { speaker: 'BOTIJA', text: 'Y yo apretando una tuerca.', pose: 'botija_llorando' },
  { speaker: 'SUPER SAM', text: '...Grrr. Eso cambia la causa. ¡Pero el disparo existió! ¡Yo tengo aquí la bala, y las balas no se inventan!', pose: 'supersam_sweat', bgm: 'objection' },
  { speaker: 'JUEZ', text: '¿Y qué objeto de esa habitación explicaría un tiro que nadie supo distinguir del estruendo?', pose: 'judge_thinking' }
];

export const CASE4_D1_T2_ALMOHADA_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡La almohada! Tiene el orificio y la tela ennegrecida: el arma se disparó apoyada contra ella.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Le pusieron almohada al muerto! ¡Y luego dicen que el raro soy yo!', pose: 'chapulin_idle' },
  { speaker: 'SARGENTO', text: 'Por ese orificio pedimos la comparación, mi licenciado. En cuanto salga la balística la incorporo.', pose: 'pazguato_saludo' },
  { speaker: 'DEFENSA', text: 'No digo que fuera silencioso, señor juez. Digo que ese tiro no es el estruendo que oyó el hotel entero, y hasta hoy los estábamos cobrando como uno solo.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Queda descartado que la bala causara la muerte a las 23:15.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: '...La fiscalía retira esa reconstrucción. ¡Pero el acusado le subió la bebida a la víctima y esa misma tarde se pelearon!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Un pleito no es una causa de muerte, señor fiscal. Si lo fuera, mi casero llevaría dieciséis meses tieso.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'Precisely! Por eso pido toxicología y reconstrucción del servicio. Un fiscal serio no ignora una autopsia: la vuelve a facturar.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Se amplía la investigación. La hora del ruido deja de ser la hora del homicidio.', pose: 'judge_gavel', sfx: 'gavel' }
];
