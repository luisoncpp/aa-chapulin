// @Architecture(descriptionShort="Case 4 day-3 Rufino business testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Testimony 6, Rufino (§12.3). Directo al clímax.
 */

import type { Testimony } from '../../../types/index.js';
import { CASE4_D3_T2_NOTA_SUCCESS, CASE4_TELEGRAMA_POINT_TARGET } from './trial_day3_success.js';

export const CASE4_TESTIMONY_6: Testimony = {
  title: 'Testimonio: Una reunión de negocios',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t2_1',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Conocí al señor Gómez hace años, en asuntos de importación. Gente de tránsito, ya me entiende usted.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Negocios vagos de importación. Nada más que añadir.', pose: 'rufino_monocle' }
      ]
    },
    {
      id: 'd3_t2_2',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Aquella noche subió a proponerme una inversión y se marchó por su propio pie.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Se marchó de mi vista. Eso es lo que quise decir.', pose: 'rufino_sweat' }
      ]
    },
    {
      id: 'd3_t2_3',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Yo no le debía nada a ese hombre. Ni tenía el menor interés personal en su muerte.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Mi fortuna es propia y la palabra deuda me resulta ofensiva.', pose: 'rufino_monocle' }
      ]
    },
    {
      id: 'd3_t2_4',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Y ni siquiera esperaba su visita. Supe que estaba en este hotel cuando lo vi entrar en mi habitación.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Nadie me anunció esa visita.', pose: 'rufino_monocle' }
      ],
      contradiction: {
        evidence: ['nota_amenaza'],
        pointTarget: CASE4_TELEGRAMA_POINT_TARGET,
        successDialogue: CASE4_D3_T2_NOTA_SUCCESS
      }
    }
  ]
};
