// @Architecture(descriptionShort="Case 5 day-3 Lic. Berrondo testimony", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 8, Lic. Berrondo investigado (spec §15.4). BGM cross_exam_grave.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T3_ACUSE_SUCCESS, CASE5_D3_T3_TOMO_SUCCESS } from './trial_day3_success_berrondo.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_8: Testimony = {
  title: 'Testimonio: Lo que hice el cuatro de diciembre',
  witness: 'Lic. Berrondo (investigado)',
  bgm: 'cross_exam_grave',
  statements: [
    {
      id: 'c5_d3t3_1',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Comparezco en calidad de investigado, por decisión de esta corte, y no me opongo a ella.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿De veras no se opone?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'No, licenciado. Un investigado que se opone a declarar le está regalando a la corte la mitad de la sentencia.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'Además, llevo veintisiete años diciéndoles a mis clientes que declaren. Sería incoherente.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Ni una gota de sudor. Ni una.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t3_2',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'El cuatro de diciembre entré por la ventanilla de peritos a las dieciséis cero cinco y recibí un gafete de visita.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Para qué necesita un gafete si tiene credencial?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'El gafete es del edificio, licenciado. La credencial es del concurso.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'Son cosas distintas y conviene no confundirlas: una la da el Archivo y la otra la dio un juez.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Y cuál de las dos le abre el sótano?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'La credencial. El gafete sólo sirve para las salas de lectura de arriba.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(...)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Guárdatelo, Chapulín. Guárdatelo entero.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t3_3',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Bajé al sótano, abrí el huacal nueve, lo revisé, lo cerré y sellé la tapa con mi rúbrica y la fecha del día.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Cuánto tarda usted en revisar ese huacal?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Media hora larga. Hay que contar tarjetas por muestreo y cotejar contra el inventario.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'De las cuatro y diez a las cuatro cuarenta.', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'Aproximadamente.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'Y de las cuatro cuarenta a las cuatro cincuenta, ¿qué hizo?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Subir la escalera de servicio y caminar hasta la ventanilla. Son ciento veinte escalones y tengo setenta y un años.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Diez minutos para ciento veinte escalones. Es razonable. Es tan razonable que da coraje.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t3_4',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'A las dieciséis cincuenta devolví el gafete en la ventanilla y salí por el patio de maniobras, donde tengo el automóvil.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Alguien lo vio salir por el patio?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'No, licenciado. El portón no tiene garita.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'Entonces su salida no le consta a nadie.', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'A nadie. Como tampoco le consta a nadie la de usted, cuando sale de su casa.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'La ley no exige testigo para irse, licenciado. Sólo para llegar.', pose: 'berrondo_definicion' },
        { speaker: 'JUEZ', text: '...La corte confirma que eso es exacto y lamenta que lo sea.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'c5_d3t3_5',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Nunca subí al primer piso. No supe que el occiso estuviera en ese edificio hasta que lo leí en el periódico del domingo.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Nunca subió al primer piso?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Nunca. No tenía nada que hacer arriba.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Y el domingo se enteró por el periódico?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'Por la segunda sección. Cuatro párrafos y una fotografía muy mala.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Y le confieso una cosa, licenciado, ya que estamos: me alegré de que fuera en el Archivo.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¡¿Se alegró?!', pose: 'chapulin_panic' },
        { speaker: 'BERRONDO', text: 'De que fuera en el Archivo y no en mi sótano. Un homicidio en un depósito a mi cargo me habría costado la sindicatura.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Es una reacción fea. Pero es la mía y no la voy a maquillar en un estrado.', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: '...La corte querría añadir algo a esa declaración y no encuentra qué.', pose: 'judge_thinking' },
        { speaker: 'BERRONDO', text: 'Si me permite, señor juez, hay una cosa más que debería agregar yo.', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: '¡La corte quiere oírla! Testigo, agréguela a su testimonio.', sfx: 'gavel', pose: 'judge_gavel' },
        { speaker: 'NARRADOR', text: 'Se ha añadido una nueva declaración al testimonio.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d3t3_6',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: '...Y si esta corte quiere saber por qué no lo supe, la respuesta es sencilla: porque nadie me lo dijo.',
      unlockedBy: 'c5_d3t3_5',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Nadie se lo dijo?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Nadie, licenciado. Ni el Archivo, ni la fiscalía, ni el actuario.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Y me parece una negligencia notable, porque yo tenía derecho a estar presente en esa diligencia.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Tenía usted derecho a estar presente?', pose: 'chapulin_panic' },
        { speaker: 'BERRONDO', text: 'Derecho y obligación. Un bien de la masa no se exhibe sin su depositario.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'Si alguien me hubiera avisado, yo habría estado ahí a las cinco de la tarde, sentado junto a ese pobre hombre.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Y quizá no habría pasado nada.', pose: 'berrondo_idle' },
        { speaker: 'NARRADOR', text: 'El Chapulín se queda quieto.', bgm: 'suspense' },
        { speaker: 'DEFENSA', text: '(...Acaba de decir que nadie le avisó.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Y lo dijo él solito, sin que yo se lo preguntara, para quedar bien.)', pose: 'chapulin_panic' }
      ],
      contradiction: {
        evidence: ['acuse_notificacion'],
        successDialogue: CASE5_D3_T3_ACUSE_SUCCESS,
        followUp: {
          evidence: ['tomo_caido'],
          prompt: '¿De dónde salió el libro con el que mataron a ese hombre?',
          successDialogue: CASE5_D3_T3_TOMO_SUCCESS
        }
      }
    }
  ]
};
