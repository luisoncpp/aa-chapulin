// @Architecture(descriptionShort="Case 5 day-1 Nicanor recall testimony three", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Testimony 3, Nicanor Tolentino recall (spec §11.4).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D1_T3_EXPEDIENTE_GIRO_SUCCESS, CASE5_D1_T3_PLANO_SUCCESS } from './trial_day1_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Lo que sí vi al subir',
  witness: 'Nicanor Tolentino',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c5_d1t3_1',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'A las cinco treinta y cinco subí por la escalera principal, como todos los días de mi vida.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Todos los días a la misma hora?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Cinco treinta y cinco. Ni un minuto antes, porque a las cinco treinta todavía puede llegar un pasante corriendo.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¿Y quién más sabe que usted sube a las cinco treinta y cinco?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'Todo el edificio, licenciado. Llevo treinta y un años subiendo a la misma hora. Es lo único que la gente sabe de mí.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '(Todo el edificio. Otra vez un horario escrito en la frente de un hombre bueno.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t3_2',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'En el pasillo siete estaba el señor en el suelo, y el tomo a un metro de él.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿El tomo estaba abierto o cerrado?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Cerrado. Boca abajo, con el lomo para arriba.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¿Y usted sabe cuál tomo era?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'El once, licenciado. Lo sé porque lo sacudo los lunes. Ferrocarriles-Guatemala.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '(Este señor conoce esa colección tomo por tomo. Y no se le ocurrió ni una vez decir que faltara alguno.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t3_3',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'Lo demás estaba en su sitio: la mesa con su legajo abierto, la lámpara prendida y el estante derechito.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '«El estante derechito.» ¿Qué quiere decir eso?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Que estaba completo, licenciado. Sin un hueco.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¿Completo? ¿Con un tomo tirado en el suelo?', pose: 'chapulin_panic' },
        { speaker: 'NICANOR', text: 'Pues sí. Se me hizo raro un segundito y luego se me olvidó, porque había un muerto.', pose: 'nicanor_sweat' },
        { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡El testigo acababa de encontrar un cadáver! ¡Nadie cuenta libros en ese momento!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'NICANOR', text: 'Yo sí, señor fiscal. Yo los cuento hasta dormido. Son veintitrés y el hueco del trece.', pose: 'nicanor_idle' },
        { speaker: 'JUEZ', text: '¿El hueco del trece?', pose: 'judge_thinking' },
        { speaker: 'NICANOR', text: 'Ése lleva vacío desde el setenta y uno. Es un tomo que anunciaron y nunca imprimieron. Yo le digo «el tomo trece» y ahí sigue, vacío.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '(El tomo trece.)', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: '...', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Ese señor de la leontina no se ha movido en toda la audiencia. Y acaba de mover un dedo.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t3_4',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'Y como por mi escalera no subió nadie después del licenciado, concluí que nadie más pudo llegar al pasillo siete. Esa escalera empieza a tres metros de mi mostrador.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Su escalera es la única que llega al pasillo siete?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'La mía es la de la gente.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'No le pregunté si es la de la gente. Le pregunté si es la única.', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡Ya rechazó esta corte esa línea! ¡El testigo declara sobre su puerta!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: '...La corte rechaza la objeción.', pose: 'judge_neutral' },
        { speaker: 'SUPER SAM', text: '¡¿QUÉ?!', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'Esta mañana la defensa preguntaba por curiosidad. Ahora hay quince minutos sin vigilancia y un papel que alguien planchó.', pose: 'judge_thinking' },
        { speaker: 'JUEZ', text: 'Conteste, testigo.', sfx: 'gavel', pose: 'judge_gavel' },
        { speaker: 'NICANOR', text: '...No, licenciado. No es la única.', pose: 'nicanor_sweat' }
      ],
      contradiction: {
        evidence: ['plano_archivo'],
        successDialogue: CASE5_D1_T3_PLANO_SUCCESS,
        followUp: {
          evidence: ['expediente_casimiro'],
          prompt: '¿Qué estaba haciendo la víctima cuando la golpearon?',
          successDialogue: CASE5_D1_T3_EXPEDIENTE_GIRO_SUCCESS
        }
      }
    }
  ]
};
