// @Architecture(descriptionShort="Case 3 day-2 intro and Nono testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 2 — Reopening and Testimony 3 (Ñoño).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE3_T3_SUCCESS } from './trial_day2_success.js';

export const CASE3_DAY2_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la sesión. El registro del despacho confirmó lo que dijo la defensa: ahí se cometió la agresión.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Correction, Your Honor! ¡Confirma que ahí se cometió, no QUIÉN la cometió!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡El acusado tuvo desde las 10:40 hasta las 11:03! ¡Time enough to be money!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'La defensa llama al operador de la consola de XEVC.', sfx: 'desk_slam' }
];

export const CASE3_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Yo estaba en la consola',
  witness: 'Ñoño',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt3_1',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'Yo soy el operador. Esa noche manejé la consola durante todo el Grito.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Estuvo usted frente a la consola todo el rato?', pose: 'donramon_idle' },
        { speaker: 'NONO', text: '...Bueno. A las diez cincuenta y tres don Aniceto me dijo que a las once en punto subiera a la azotea a mover la antena, porque el Grito se estaba oyendo con estática. Bajé hasta las 11:06.', pose: 'nono_llorando' }
      ]
    },
    {
      id: 'stmt3_1b',
      speaker: 'NONO',
      pose: 'nono_llorando',
      text: 'A las diez cincuenta y tres don Aniceto me dijo que a las once subiera a la azotea. Bajé hasta las 11:06.',
      unlockedBy: 'stmt3_1',
      pressText: [
        { speaker: 'DEFENSA', text: '¿Entonces la consola estuvo SOLA justo en el minuto del grito?', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Objection! ¡Eso favorece a la fiscalía! ¡Una consola sola es una consola que cualquiera pudo usar!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(O una consola que no necesitaba a nadie...)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt3_2',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'A las 11:03 el grito de mi papi entró por el micrófono de la Cabina B y salió al aire.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: '¡Lo oí por las bocinas! ¡Salió al aire!', pose: 'nono_nervioso' }
      ],
      contradiction: { evidence: ['bitacora_transmision', 'microfono_cabina'], successDialogue: CASE3_T3_SUCCESS }
    },
    {
      id: 'stmt3_3',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'Nadie más tocó la consola. ¡Nadie, se los juro!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: '¡Nadie! ¡Nadie, se los juro! ¡No me moví ni un segundito... bueno, casi!', pose: 'nono_llorando' },
        { speaker: 'JUEZ', text: 'Calma, muchacho. La corte anota su nerviosismo.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'stmt3_4',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'Luego subimos todos... y el doctor estaba ahí, con mi papi en el suelo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: '¡El doctor estaba arrodillado dándole primeros auxilios!', pose: 'nono_nervioso' }
      ]
    }
  ]
};
