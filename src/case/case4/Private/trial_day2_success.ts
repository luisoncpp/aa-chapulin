// @Architecture(descriptionShort="Case 4 day-2 contradiction success and point targets", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — D2-T1 and D2-T2 success dialogues.
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const PLANO_FAILURE: DialogueLine[] = [
  { speaker: 'DEFENSA', pose: 'donramon_panic', text: '¡Por este sector del edificio es por donde viajó el estruendo... creo!' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: '¡Pero Licenciado, ese sector no tiene conexión directa de vapor con la Suite 304!', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Pura desorientación arquitectónica! ¡Menos diez dólares a su honorario!' }
];

export const CASE4_PLANO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'plano_hotel',
  promptQuestion: '¡Señale el conducto exacto donde se propagó la onda sonora del disparo de las 11:15 PM!',
  imageAsset: 'assets/examine_plano.webp',
  zones: [
    { id: 'tuberia_vapor_vertical', bounds: [40, 18, 62, 74], isCorrect: true, failureDialogue: [] },
    { id: 'plano_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: PLANO_FAILURE }
  ]
};

export const CASE4_D2_T1_RESIDUOS_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Lo que Botija tiene en sus manos no contiene un solo grano de pólvora, señor Fiscal!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '¡El dictamen químico del laboratorio demuestra que es carbón mineral, tizne y azufre de la caldera central que estuvo destapando por órdenes de Don Cecilio antes de subir al tercer piso!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'residuos_manos' },
  { speaker: 'SUPER SAM', text: 'But... but the gunshot at 11:15 PM! ¡El estruendo del disparo lo oyó todo el hotel y la víctima murió en el acto por esa bala!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '¡Y aquí se derrumba la segunda farsa de la fiscalía!', sfx: 'desk_slam', bgm: 'suspense', pose: 'donramon_point' }
];

export const CASE4_D2_T1_FORENSE_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡La víctima, El Cuajinais, NO murió a las 11:15 de la noche!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡¿CÓMO DICE?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'El informe patológico forense dictamina que el disparo fue ejecutado sobre un cadáver frío. ¡La causa real de la muerte fue asfixia celular provocada por cianuro de potasio ingerido antes de las diez de la noche!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'informe_policial' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! ¡Two hours earlier?! ¡Mis honorarios se devaluaron un cincuenta por ciento!', pose: 'supersam_breakdown', sfx: 'damage' },
  { speaker: 'JUEZ', text: '¡Cielos santos! Si la víctima ya era un cadáver a las diez de la noche... ¿qué demonios fue el estruendo de bala que todos escucharon a las 11:15 PM?', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: '¡Silencio en la sala! La autopsia oficial no admite dudas: El Cuajinais ya no respiraba a las diez de la noche. Pero esto nos confronta con un misterio desconcertante... Si la víctima ya era un cadáver antes de las diez, ¿qué clase de fenómeno produjo el estruendo de bala que estremeció al hotel entero a las 11:15 PM?', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: '¡La fiscalía no se rinde ante tecnicismos forenses! ¡Llamo de inmediato al estrado a una testigo presencial que escuchó el disparo con sus propios oídos pegada a la pared divisoria: la distinguida dama de la Suite 303, señorita Maruja, conocida como "La Sirena del Hotel"!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'MARUJA', text: 'Buenas tardes a todos los presentes... con la venia del honorable magistrado y del distinguido caballero de la defensa. Vengo con gusto a narrar el sobresalto que sacudió mi alcoba.', pose: 'maruja_coqueta' },
  { speaker: 'JUEZ', text: 'Testigo, declare bajo juramento lo que presenció en su recámara la noche de los hechos.', pose: 'judge_neutral' }
];

export const CASE4_D2_T2_PLANO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡El estruendo de las 11:15 PM no fue el asesinato de Cuajinais!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point', updateEvidence: 'plano_hotel' }
];

export const CASE4_D2_T2_CASQUILLO_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡Fue una trampa acústica fabricada con este casquillo de fogueo con mecha lenta, detonado dentro del tubo de purga de la Suite 204!', pose: 'donramon_point', cutin: 'objection_toma_eso', sfx: 'whoosh', bgm: 'objection' },
  { speaker: 'MARUJA', text: '¡¿La Suite 204?! ¡Pero si esa es la recámara del Conde de Montemayor!', pose: 'maruja_shock' },
  { speaker: 'JUEZ', text: '¡¿El ilustre Conde de Montemayor involucrado en un artificio pirotécnico?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡El verdadero asesino envenenó al Cuajinais con cianuro antes de las diez, le disparó un tiro a través de la almohada de plumas de la suite para sofocar el estruendo y simular muerte por bala, armó una detonación acústica retardada para labrarse una coartada pública a las 11:15 PM y dejó encerrado a mi cliente para que cargara con el muerto!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Objection! ¡Usted no ha probado quién preparó ese veneno ni qué relación guardaba el Conde con el difunto!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'La gravedad de esta revelación exige abrir la investigación sobre la procedencia del veneno y las actividades de la Suite 204. ¡Se levanta la sesión hasta la jornada final!', pose: 'judge_gavel', sfx: 'gavel' }
];
