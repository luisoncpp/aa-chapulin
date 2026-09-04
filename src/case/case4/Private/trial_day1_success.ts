// @Architecture(descriptionShort="Case 4 day-1 contradiction success and point targets", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — D1-T1 point/followUp and D1-T2 chain/wallet success.
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const FOTO_FAILURE: DialogueLine[] = [
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '¡Mire fijamente aquí, señor Juez! ¿Acaso no ve... eh... una mancha sospechosa?' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado Monchito, señalar ese punto no aporta nada sobre la hora del servicio.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money! ¡Deje de señalar fantasmas y pague la penalización!' }
];

export const CASE4_FOTO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'foto_crimen',
  promptQuestion: '¡Señale el elemento gráfico que desmiente que el servicio estuviera recién servido a las 11:15 PM!',
  imageAsset: 'assets/examine_foto.webp',
  zones: [
    { id: 'cubeta_hielo_derretido', bounds: [56, 46, 76, 70], isCorrect: true, failureDialogue: [] },
    { id: 'foto_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FOTO_FAILURE }
  ]
};

/** Alias used by trial_day1.ts */
export const CASE4_D1_T1_POINT_TARGET = CASE4_FOTO_POINT_TARGET;

export const CASE4_D1_T1_POINT_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡Mire con aumento la cubeta de la mesita, señor Juez!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿La cubeta metálica? Pero si sólo contiene líquido...', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡Exacto! ¡Es agua líquida a temperatura ambiente! ¡No queda ni una raspadura de hielo!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'foto_crimen' },
  { speaker: 'SUPER SAM', text: 'What?! ¡¿Y qué tienen que ver los hielos con el plomo caliente de una bala?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '¡Un bloque de cubos de hielo en un balde tarda entre dos y tres horas en derretirse por completo a temperatura de habitación! Si el servicio hubiera subido a las 11:15 PM, ¡a las 11:30 PM los hielos estarían casi completos!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Es un razonamiento incontestable... La cubeta fue llevada a esa recámara mucho antes de las once de la noche.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'Objection! ¡Puras pamplinas termodinámicas!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '¡Aunque el agua estuviera tibia, la carátula oficial de la policía fija taxativamente las 11:15 PM como el minuto exacto del homicidio por arma de fuego! ¡Contra un parte policial sellado, los cubitos de hielo no tienen valor probatorio!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'El señor Fiscal plantea una cuestión de primer orden formal. El acta preliminar de las autoridades goza de fe pública respecto a la hora del deceso. Licenciado Monchito, ¿tiene alguna prueba documental en sus manos que desacredite formalmente la certeza de la hora registrada en ese reporte?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '¡Por supuesto, señor Juez! ¡La propia carátula de las autoridades desmiente la certeza médica de ese horario!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

export const CASE4_D1_T1_FOLLOWUP_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Examinen detenidamente la carátula del informe policial redactado por el Sargento!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿El informe policial preliminar?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡Lean con lupa la casilla de "Hora del Crimen"! El Sargento anotó las 11:15 PM basándose única y exclusivamente en el estruendo escuchado desde el pasillo a través de las tuberías de vapor. ¡No hubo ningún médico forense presente certificando signos vitales, temperatura corporal ni rigidez cadavérica a esa hora!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'Es verdad, mi Licenciado... Con el susto del trallazo en los tubos, dimos por hecho que el disparo fatal acababa de sonar. No teníamos forense a esa hora en el hotel para revisar el cuerpo...', pose: 'pazguato_sweat', updateEvidence: 'informe_policial' },
  { speaker: 'DEFENSA', text: '¡De modo que las 11:15 PM es la hora de un sonido en el edificio, no la hora médica en que murió Cuajinais!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '¡Cielos santos! La carátula policial carece de sustento biológico. La hora del asesinato queda formalmente en entredicho.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: '¡Irrelevant! ¡Aunque la hora médica esté pendiente, nadie pudo entrar a disparar antes ni después porque la puerta tenía la cadena echada por dentro!', pose: 'supersam_slam', sfx: 'desk_slam' }
];

export const CASE4_D1_T2_CHAIN_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Examine este cerrojo recuperado del pasillo exterior, Don Cecilio!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'CECILIO', text: 'Permítame limpiar mis cristales... ¡Válgame Dios, qué bonito dije de bisutería!', pose: 'cecilio_ciego' },
  { speaker: 'DEFENSA', text: '¡No es ningún dije! ¡Es la base del cerrojo de cadena! En el perno corredizo hay una raspadura fresca y un sedal de pescar de nylon transparente.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿Un sedal de pesca?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡Cualquier persona parada en el pasillo exterior puede pasar un sedal de pescar por la rendija de la puerta emparejada, sujetar el perno y tirar del hilo desde afuera para traccionar y correr el perno a lo largo del riel horizontal hasta calzarlo en el tope interior, soltando luego el sedal para recuperarlo y dejar la habitación bloqueada por dentro!', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Exactamente! ¡No contaban con mi astucia! ¡Cualquiera desde el corredor pudo montar el falso cuarto cerrado y dejar a mi cliente atrapado adentro!', pose: 'chapulin_point' },
  { speaker: 'SUPER SAM', text: 'Objection! ¡Puras filigranas teóricas de pescador de domingo!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'Aunque un duende hubiera corrido ese cerrojo con un hilito de nylon, ¿cómo explica la defensa el móvil criminal? ¡Gordon Botija fue capturado con la billetera de piel de cocodrilo de la víctima en su propio bolsillo! ¡Entró a desvalijar al señor Gómez!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Ciertamente... El señor Fiscal plantea una cuestión de primer orden. La presencia de la billetera en manos del encausado sugiere un móvil de robo con violencia. Licenciado Monchito, ¿tiene alguna prueba en su poder que refute ese móvil de robo?', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'DEFENSA', text: '¡La defensa tiene la prueba irrefutable de que Botija jamás tuvo la intención de robar un solo centavo!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

export const CASE4_D1_T2_WALLET_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Examine con atención el contenido de la billetera del difunto, señor Juez!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿La billetera del señor Gómez? Pero si contiene... ¡doscientos pesos intactos en billetes de curso legal!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡Exacto! ¡Doscientos pesos íntegros sin que falte una sola moneda! Si Gordon Botija hubiera entrado con el propósito criminal de robar, ¿se habría guardado la cartera con el dinero adentro para que sirviera de prueba en su bolsillo, en lugar de llevarse los billetes y tirar la billetera por la ventana? ¡El dinero intacto descarta por completo el móvil de robo con violencia!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?! ¡Pero tenía las manos llenas de pólvora negra!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Es un argumento de peso... Ningún carterista profesional deja el dinero intacto en la billetera de su víctima. La defensa ha demostrado que la cadena pudo correrse desde el pasillo y que el móvil de robo es insostenible. Sin embargo, el enigma de los residuos negros en las manos de Botija y el estampido de bala de las 11:15 PM exigen respuesta pericial. ¡Se suspende la sesión hasta mañana!', pose: 'judge_gavel', sfx: 'gavel' }
];
