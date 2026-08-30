// @Architecture(descriptionShort="Case 3 day-3 intro and Barriga testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 3 — Reopening and Testimony 5 (Señor Barriga vendado).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE3_T5_SUCCESS } from './trial_day3_success.js';

export const CASE3_DAY3_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la sesión. La corte ha sido informada de que la víctima recuperó el conocimiento.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡Y la fiscalía lo llama de inmediato al estrado! ¡Que la víctima señale a su agresor y nos vamos a comer!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Que hable. Es justo lo que necesito.)' }
];

export const CASE3_TESTIMONY_5: Testimony = {
  title: 'Testimonio: El nombre que nunca dije',
  witness: 'Señor Barriga',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt5_1',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'El 12 de septiembre descubrí que faltaban cuarenta mil pesos del Fondo de la Kermés.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: '¡Cuarenta mil pesos! ¡Eso es la renta de once meses! ¡Digo, de quince meses, y usted sabe muy bien de quién estoy hablando, Licenciado!', pose: 'barriga_enojado' },
        { speaker: 'DEFENSA', text: '(Chanfle...)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'stmt5_2',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'Los retiros llevaban firma de tesorería, así que decidí decir el nombre al aire después del Grito.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: 'Después del Grito. En mi estación. Al aire.', pose: 'barriga_vendado' }
      ]
    },
    {
      id: 'stmt5_3',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'No se lo dije a nadie... a nadie, salvo a una persona de toda mi confianza.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿A quién le confió el secreto del faltante?', pose: 'donramon_idle' },
        { speaker: 'BARRIGA', text: 'Se lo dije a las ocho de la noche, en mi despacho, mientras guardaba el Libro Verde en la caja fuerte.', pose: 'barriga_vendado' }
      ]
    },
    {
      id: 'stmt5_3b',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'Me acuerdo clarito porque él me detuvo la puerta mientras yo marcaba la combinación.',
      unlockedBy: 'stmt5_3',
      pressText: [
        { speaker: 'DEFENSA', text: '(Una sola persona sabía del faltante. Una sola persona vio la combinación. Y esa persona apareció amarrada.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '(¡Monchito! ¡Pero si esa persona es la víctima número dos!)', pose: 'chapulin_thinking' },
        { speaker: 'DEFENSA', text: '(Por eso mismo, Chapulín. Por eso a nadie se le ocurrió mirarla.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt5_4',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'Y esa persona es inocente: a esa persona también la atacaron y la dejaron amarrada en la bodega.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: '¡Esa persona es inocente! ¡La atacaron también!', pose: 'barriga_shock' }
      ],
      contradiction: { evidence: ['ataduras_bodega'], successDialogue: CASE3_T5_SUCCESS }
    }
  ]
};
