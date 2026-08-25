// @Architecture(descriptionShort="Defines final confrontation, culprit breakdown, and verdict", type="data", icon="layers")
/**
 * Case 1 Final Climax & Verdict Script
 * Consumed by [[src/engine/Private/TrialController.ts]].
 */

import type { ClimaxDefinition } from '../../types/index.js';

// @Section(Climax Confrontation & Dilemma)
export const CLIMAX_DATA: ClimaxDefinition = {
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Hold it right there! Si Tripaseca es el ladrón... ¿dónde está la Chicharra de Oro en este preciso instante?!', pose: 'supersam_point', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: '¡Tiene razón el fiscal! Para dictar sentencia, la defensa debe presentar la prueba concluyente de dónde se oculta el tesoro.', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(Es mi última oportunidad. Las Antenitas de Vinil del Chapulín están detectando la presencia del enemigo... ¡justo en el estrado del testigo!)', pose: 'donramon_idle' }
  ],
  presentTarget: ['antenitas_vinil', 'bolsa_dolares'],
  // @Section(Guilty Confession & Not Guilty Verdict)
  verdict: [
    { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
    { speaker: 'DEFENSA', text: '¡Las Antenitas de Vinil del Chapulín están vibrando con fuerza máxima apuntando al bolsillo de Tripaseca!', pose: 'donramon_point' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! ¡Y menos con mis antenitas!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '¡Oficial, revise el forro de la chaqueta del testigo!', sfx: 'realization', pose: 'donramon_slam' },
    { speaker: 'JUEZ', text: '¡Alguacil! ¡Proceda a la inspección!', pose: 'judge_gavel', sfx: 'gavel' },
    { speaker: 'NARRADOR', text: '*¡¡¡PIII-POOOO!!!* (La Chicharra Paralizadora de Oro cae al suelo y resuena en toda la sala)', sfx: 'chicharra' },
    { speaker: 'TRIPASECA', text: '¡¡¡MALDICIIIIIIÓN!!! ¡¡¡CONFIEEEEESOOOOOO!!! ¡¡¡YO ME ROBÉ LA CHICHARRA Y LE PAGUÉ A SAM CON DÓLARES FALSOS!!!', pose: 'tripaseca_breakdown' },
    { speaker: 'SUPER SAM', text: 'WHAAAAT?! ¡¿DÓLARES FALSOS?! ¡¡¡MY MONEY IS RUINED, OH NOOOOO!!!', pose: 'supersam_breakdown' },
    { speaker: 'JUEZ', text: '¡Visto y comprobado! Este tribunal ha llegado a un veredicto definitivo e incuestionable.', pose: 'judge_gavel', sfx: 'gavel' },
    { cutin: 'objection_culpable', speaker: 'JUEZ', text: '¡INOCENTE!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' },
    { speaker: 'CHAPULIN', text: '¡Se aprovechan de mi nobleza! ¡Pero la justicia siempre triunfa! ¡¡¡SÍGANME LOS BUENOS!!!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '¡Caso Cerrado! Y ahora, señor Barriga... ¡le pago sus 14 meses de renta!', pose: 'donramon_idle' }
  ]
};
