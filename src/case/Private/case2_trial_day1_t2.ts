// @Architecture(descriptionShort="Case 2 day-1 Peterete crowbar testimony and adjournment", type="data", icon="layers")
/**
 * Case 2 Trial Day 1 — Testimony 2 (El Peterete) and 24-hour adjournment.
 */

import type { DialogueLine, Testimony } from '../../types/index.js';

const T2_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Señor Peterete, sus mentiras caen por su propio peso!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: '¿M-mentiras? ¡Mida sus palabras, picapleitos!', pose: 'peterete_sweat' },
  { speaker: 'DEFENSA', text: '¡El Informe de la Bóveda dictamina que los pestillos NO sufrieron ningún daño por palanca!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'La cerradura fue abierta suave y limpiamente con una LLAVE MAESTRA. Y la palanca tiene pintura AZUL MARINO del cuadro eléctrico.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio! ¡Al Chómpiras le pusieron la palanca en las manos mientras dormía por un gas somnífero!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¡¿Gas somnífero?! ¡Esto cambia el caso de un robo rústico a una conspiración premeditada!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Objection! ¿Quién tenía la llave maestra y dónde está el somnífero? ¡Sin esas pruebas esto son especulaciones!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡Suspendo esta sesión por 24 horas para que investiguen el origen de la llave y el sedante!', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE2_TESTIMONY_2: Testimony = {
  title: 'Testimonio: El Forcejeo de la Caja Fuerte',
  witness: 'El Peterete',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt2_1',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Muy astuta la observación del reloj, Licenciado. Pero los hechos materiales son indiscutibles.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Usted dónde se encontraba a las 9:15 PM?', pose: 'donramon_idle' },
        { speaker: 'PETERETE', text: 'En la estafeta de correos, despachando unas encomiendas urgentes. El cartero podrá confirmárselo.', pose: 'peterete_thinking' }
      ]
    },
    {
      id: 'stmt2_2',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'El Chómpiras utilizó la palanca metálica para forzar el pestillo de acero de la caja y arrancar el Chanfle de Oro.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: '¿Qué otra explicación hay? Lo hallaron con la herramienta en la mano.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['informe_boveda', 'palanca_rota'], successDialogue: T2_SUCCESS }
    },
    {
      id: 'stmt2_3',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Al entrar tras la alarma, vi con mis propios ojos las marcas del forcejeo: el acero cedió ante la fuerza bruta del sospechoso.',
      pressText: [
        { speaker: 'CHAPULIN', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'chapulin_point' },
        { speaker: 'CHAPULIN', text: '¿Marcas de forcejeo? ¡Mis antenitas no detectaron ni un rasguño en esa caja!', pose: 'chapulin_idle' },
        { speaker: 'PETERETE', text: '¡Serían rasguños finísimos, de acero de alta resistencia, alimaña roja!', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['informe_boveda', 'palanca_rota'], successDialogue: T2_SUCCESS }
    },
    {
      id: 'stmt2_4',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'No existe otra forma en que esa puerta blindada pudiera abrirse sin dejar rastros.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Salvo magia barata, Licenciado. Y en esta hacienda no hay magia: hay seguridad.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['informe_boveda', 'palanca_rota'], successDialogue: T2_SUCCESS }
    }
  ]
};
