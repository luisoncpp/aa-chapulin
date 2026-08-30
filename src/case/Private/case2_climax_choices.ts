// @Architecture(descriptionShort="Spanish Case 2 climax choice prompts", type="data", icon="layers")
/**
 * Case 2 climax multiple-choice verdict questions (Spanish).
 */

import type { ChoicePrompt } from '../../types/index.js';

export const CASE2_CLIMAX_CHOICES: ChoicePrompt[] = [
  {
    id: 'clotilde_key',
    question: '¿Qué es lo más importante del testimonio de Doña Clotilde?',
    options: [
      { id: 'clothing', label: 'Cómo iba vestido' },
      { id: 'manners', label: 'Sus modales' },
      { id: 'purchase_time', label: 'La hora de la compra' }
    ],
    correctId: 'purchase_time',
    failDialogue: [
      { speaker: 'DEFENSA', text: '¡Pues... que el hombre tenía un estilo impecable, señor Juez!', pose: 'donramon_sweat' },
      { speaker: 'SUPER SAM', text: '¡Time is money! ¡Esto es un tribunal, no un desfile de moda!', pose: 'supersam_idle' },
      { speaker: 'JUEZ', text: '¡La defensa recibirá una penalización si no deja de perder el tiempo!', pose: 'judge_shock' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: '¡La clave no es cómo iba vestido, sino CUÁNDO fue! Doña Clotilde dijo que el hombre fue a comprar la esencia la tarde del 28 de agosto.', pose: 'donramon_point' },
      { speaker: 'JUEZ', text: '¿La tarde del 28 de agosto? ¿Y por qué es tan importante esa hora específica?', pose: 'judge_neutral' }
    ]
  },
  {
    id: 'key_holder',
    question: '¿Quién era el portador de la llave maestra durante la tarde del 28 de agosto?',
    options: [
      { id: 'bellhop', label: 'El botones' },
      { id: 'security_chief', label: 'El jefe de seguridad' },
      { id: 'general_manager', label: 'El gerente general' }
    ],
    correctId: 'security_chief',
    failDialogue: [
      { speaker: 'DEFENSA', text: '¡Está clarísimo! El que portaba la llave era... ¡esa persona!', pose: 'donramon_sweat' },
      { speaker: 'PETERETE', text: 'Me temo que las reglas del hotel dicen lo contrario. Intente leer el manual de empleados antes de acusar.', pose: 'peterete_smug' },
      { speaker: 'JUEZ', text: 'Licenciado, si va a hacer acusaciones infundadas me veré obligado a penalizarlo.', pose: 'judge_gavel', sfx: 'gavel' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: '¡Y según las reglas del hotel, la única persona que portaba la llave maestra original esa tarde era el JEFE DE SEGURIDAD!', pose: 'donramon_slam', sfx: 'desk_slam' },
      { speaker: 'DEFENSA', text: '¡Usted compró la valeriana, copió su propia llave, durmió al Chómpiras, abrió la caja y metió el oro en la lata!', pose: 'donramon_point' },
      { speaker: 'PETERETE', text: '¡¡¡NOOOOOOOOOOOO!!! ¡¡¡MI PLAN PERFECTO DE CINCO MILLONES DE DÓLARES ARRUINADO POR UN LIMPIABOTAS Y UN DEFENSOR DEL NECAXA!!!', pose: 'peterete_breakdown', sfx: 'damage' },
      { speaker: 'NARRADOR', text: '(El Peterete se abofetea con su fedora hasta caer desplomado en el estrado).' },
      { speaker: 'SUPER SAM', text: 'OH NOOO! ¡My fees! ¡My bonus! ¡Time is money and I lost my dollars!', pose: 'supersam_breakdown' },
      { speaker: 'JUEZ', text: '¡Silencio y orden! Habiendo aparecido la prueba reina, demostrado el método y confesado el verdadero culpable, ¡este juzgado emite su veredicto definitivo!', pose: 'judge_gavel', sfx: 'gavel' },
      { cutin: 'objection_culpable', speaker: 'JUEZ', text: '¡Declaro al acusado, Aquiles Esquivel Madrazo... INOCENTE!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' }
    ]
  }
];
