// @Architecture(descriptionShort="Case 2 day-2 Peterete escape-route testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 2 — Testimony 2 (impossible escape).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const T4_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡No hay ventanas, pero el Plano Arquitectónico del Profesor revela un antiguo MONTAPLATOS DE LAVANDERÍA que sí es una salida al exterior!', sfx: 'desk_slam', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'El montaplatos comunica la bóveda directamente con el callejón trasero donde reposaba el carrito postal.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! ¡Exactamente como lo diseñó el Marqués en 1892!', pose: 'jirafales_angry' },
  { speaker: 'PETERETE', text: '¡P-pero la policía revisó al sospechoso y no había ningún Chanfle de Oro a la vista! ¡¿Dónde está la prueba material?!', pose: 'peterete_panic' }
];

export const CASE2_TESTIMONY_4: Testimony = {
  title: 'Testimonio: La Ruta Imposible del Escape',
  witness: 'El Peterete',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt4_1',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: '¡Aunque no haya estado en correos, nadie pudo haber sacado la estatuilla de 5 kilos de esa bóveda subterránea!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Cinco kilos de oro no se esfuman, Licenciado.', pose: 'peterete_sweat' }
      ]
    },
    {
      id: 'stmt4_2',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: 'Las paredes son de hormigón armado de dos metros de espesor y no existe ninguna salida al exterior.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Ni una rendija. Lo juro como perito valuador.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['plano_hacienda'], successDialogue: T4_SUCCESS }
    },
    {
      id: 'stmt4_3',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: 'Si yo hubiera robado el Chanfle de Oro, la policía me lo habría encontrado encima durante el cacheo preventivo.',
      pressText: [
        { speaker: 'SUPER SAM', text: 'Indeed! ¡La policía lo registró de pies a cabeza y no tenía ni una onza de oro!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: 'Porque el oro nunca salió por la puerta principal...', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt4_4',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: '¡El oro no pudo salir de esa bóveda! ¡Seguramente el Chómpiras lo escondió bajo las baldosas del suelo!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: '¡Revise el piso si quiere perder el tiempo!', pose: 'peterete_panic' }
      ]
    }
  ]
};
