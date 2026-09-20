// @Architecture(descriptionShort="Case 5 day-4 Genoveva Peñaloza testimony", type="data", icon="layers")
/**
 * Case 5 Trial Day 4 — Testimony 9, Srta. Genoveva Peñaloza (spec §17.2).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D4_T1_CEDULARIO_SUCCESS, CASE5_D4_T1_LIBRO_SUCCESS } from './trial_day4_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_9: Testimony = {
  title: 'Testimonio: El reglamento de la ventanilla',
  witness: 'Srta. Genoveva Peñaloza',
  bgm: 'cross_exam_final',
  statements: [
    {
      id: 'c5_d4t1_1',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'Mi ventanilla atiende a peritos, actuarios, notarios y síndicos. Es el único acceso de ese edificio que no es el público.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Y usted ve la escalera de servicio desde su ventanilla?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'No, señor.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Y el portón del patio?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Tampoco.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Y no le parece raro?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'El reglamento no me faculta para que me parezcan raras las cosas, señor.', pose: 'genoveva_reglamento' },
        { speaker: 'NARRADOR', text: 'Risas breves en la galería.', sfx: 'realization' },
        { speaker: 'GENOVEVA', text: 'Y le suplico a la galería que no se ría. Yo llevo trece años haciendo exactamente lo que dice un papel, y por eso ese papel existe.', pose: 'genoveva_reglamento' },
        { speaker: 'JUEZ', text: 'La corte apoya a la testiga.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c5_d4t1_2',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'El cuatro de diciembre atendí a cuatro personas, y las cuatro están en mi libro con su hora de entrada y su hora de salida.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Su libro se enmienda?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Jamás. Si me equivoco, tacho con una raya, escribo al lado y firmo la tachadura.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Y hay tachaduras el cuatro de diciembre?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Ninguna.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '(Ninguna tachadura. Y ella está segurísima.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Va a ser horrible.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['libro_peritos'],
        successDialogue: CASE5_D4_T1_LIBRO_SUCCESS,
        followUp: {
          evidence: ['fichero_cedulario'],
          prompt: '¿Qué habría que escribir en un vale para abrir ese cedulario?',
          successDialogue: CASE5_D4_T1_CEDULARIO_SUCCESS
        }
      }
    },
    {
      id: 'c5_d4t1_3',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'Al licenciado Berrondo le entregué un gafete de visita a las dieciséis cero cinco y se lo recibí a las dieciséis cincuenta.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Y qué es exactamente un gafete de visita?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Una placa de latón numerada, con un cordón. Habilita las salas de lectura del primer piso.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Nada más el primer piso?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Nada más. El sótano no se abre con gafete. El sótano se abre con credencial.', pose: 'genoveva_reglamento' },
        { speaker: 'DEFENSA', text: '¿Y la credencial se la guarda usted?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: '¿La credencial de un síndico? Ni aunque me lo ordenaran. Ésa se la expide un juez y se la queda él.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '(...)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(El gafete es del edificio. La credencial es del concurso. Me lo dijo él mismo ayer.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d4t1_4',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'La hora la escribo yo, con mi pluma, cuando me ponen el gafete en el mostrador. El reglamento me faculta para eso.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Señorita: cuando usted escribe esa hora, ¿qué está usted viendo?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Un gafete sobre mi mostrador, señor.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Y a la persona?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'También, si se queda a esperar el recibo. Muchos no se quedan.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Y después?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Después no, señor. Después yo sigo con lo mío.', pose: 'genoveva_idle' },
        { speaker: 'GENOVEVA', text: 'Mi ventanilla mira hacia adentro del edificio. La puerta queda a mi espalda.', pose: 'genoveva_reglamento' },
        { speaker: 'JUEZ', text: '...¿La testigo está de espaldas a la puerta que custodia?', pose: 'judge_shock' },
        { speaker: 'GENOVEVA', text: 'Yo no custodio nada, señor juez. Yo registro.', pose: 'genoveva_reglamento' }
      ]
    },
    {
      id: 'c5_d4t1_5',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'Y, por reglamento, toda apertura o extracción de la bodega de bienes exige vale. Los vales que se tramitan los lleno yo y los archivo yo.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Qué es un vale de bodega?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Una papeleta. El reglamento exige que quien vaya a mover, abrir o consultar un bien en depósito llene el vale y lo firme.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '¿Aunque él sea el depositario?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Sobre todo si está bajo su responsabilidad, señor. El depósito no protege al juzgado: protege al depositario.', pose: 'genoveva_reglamento' },
        { speaker: 'DEFENSA', text: '¿Y qué se escribe en el vale?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Fecha, nombre, número de huacal... y qué se abrió. Con su rótulo exacto.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '(Con su rótulo exacto.)', pose: 'chapulin_panic' }
      ]
    }
  ]
};
