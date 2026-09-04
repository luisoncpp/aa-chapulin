// @Architecture(descriptionShort="Case 4 climax stage success and bottle point target", type="data", icon="layers")
/**
 * Case 4 climax — two-stage present success dialogues and bottle point target.
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const BOTTLE_FAILURE: DialogueLine[] = [
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '¡El veneno entró exactamente por este lado de la botella!' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'El vidrio está perfectamente intacto y sellado en esa zona, Licenciado.', sfx: 'damage' },
  { speaker: 'RUFINO', pose: 'rufino_smug', text: '¡Qué ignorancia! Mis botellas de reserva privada no presentan la más mínima fisura en el cristal.' }
];

export const CASE4_CLIMAX_BOTTLE_POINT: PointTargetContradiction = {
  targetEvidenceId: 'botella_vino',
  promptQuestion: '¡Señale el punto exacto por donde penetró el cianuro en la botella sellada!',
  imageAsset: 'assets/examine_botella.webp',
  zones: [
    { id: 'cupula_sello_lacre', bounds: [42, 2, 58, 30], isCorrect: true, failureDialogue: [] },
    { id: 'botella_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: BOTTLE_FAILURE }
  ]
};

export const CASE4_CLIMAX_STAGE1_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Miren con lente de aumento la cabeza de este sello de lacre rojo! ¡Ahí está la marca de una aguja hipodérmica!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡Un orificio milimétrico disimulado con cera fundida!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡Usted no descorchó la botella! Inyectó el cianuro líquido a través del corcho virgen y luego usó un objeto metálico caliente para sellar la punzada con la propia cera derretida.', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Pero... ¿con qué objeto específico calentó y estampó esa cera?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '¡Con la misma joya que tiró al basurero de su suite creyendo que nadie la encontraría!', pose: 'donramon_point' }
];

export const CASE4_CLIMAX_STAGE2_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Este anillo de oro con sello fundidor de lacre! ¡La joya que Rufino arrojó al basurero de su suite!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: '¡NOOOOO! ¡Maldito seas, picapleitos de vecindad!', pose: 'rufino_panic', sfx: 'damage' }
];

export const CASE4_CLIMAX_VERDICT: DialogueLine[] = [
  { speaker: 'NARRADOR', text: '(A Rufino se le desprende el monóculo de oro, que se estrella contra el estrado. Desesperado, se jala el bigote postizo hasta arrancárselo de cuajo y arroja el frac al suelo entre estertores de rabia.)' },
  { speaker: 'RUFINO', text: '¡Ese cerdo del Cuajinais me iba a delatar! ¡Robamos juntos el Collar de Cleopatra en Marsella y vino a exigirme cincuenta mil pesos en efectivo o traería a la policía a mi puerta!', pose: 'rufino_breakdown', bgm: 'pursuit' },
  { speaker: 'RUFINO', text: '¡Iba a matarme! ¡Sólo le ofrecí una copa en mi suite para que durmiera eternamente! ¡Y ese infeliz fontanero gordo subió a destapar las tuberías en el momento perfecto para ser mi chivo expiatorio!', pose: 'rufino_breakdown' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! ¡A criminal swindler! ¡Mis inversiones en bonos nobiliarios cayeron a cero!', pose: 'supersam_breakdown', sfx: 'damage' },
  { speaker: 'JUEZ', text: '¡Se acabó la farsa! Habiendo quedado demostrado el autor intelectual, material y la mecánica de la trampa pirotécnica...', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'JUEZ', text: '¡Declaro al ciudadano Gordon Botija Pompa y Pompa... INOCENTE de todos los cargos!', pose: 'judge_gavel', cutin: 'objection_inocente', sfx: 'whoosh', bgm: 'victory' },
  { speaker: 'NARRADOR', text: '(Cae confeti tricolor sobre el estrado de la defensa. Botija abraza a la Chimoltrufia elevándola por los aires entre lágrimas y risas estruendosas.)' },
  { speaker: 'BOTIJA', text: '¡Soy libre, mi cielo! ¡Soy libre!', pose: 'botija_aliviado' },
  { speaker: 'CHIMOLTRUFIA', text: '¡Como digo una cosa digo otra, pero hoy te preparo una cazuela de chicharrón en salsa verde con triple tortilla!', pose: 'chimoltrufia_confundida' },
  { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' }
];
