// @Architecture(descriptionShort="Case 5 climax stage 4 — ficha domicilio", type="data", icon="layers")
/**
 * Case 5 climax — Etapa 4 ¿QUÉ VENDÍA? (spec §18.5).
 */

import type { ClimaxStage } from '../../../types/index.js';

export const CASE5_CLIMAX_STAGE4: ClimaxStage = {
  presentTarget: ['ficha_domicilio'],
  prompt: '¿Qué había en ese cedulario que tocaba directamente a este juicio?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'Eso no es lo que acaba de traer el secretario a esta sala, licenciado.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Esta corte le está ofreciendo una tarjeta. Preséntela.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'Un punto menos, señor juez, y son los últimos.', sfx: 'damage' }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam' },
    { speaker: 'DEFENSA', text: 'La tarjeta del cedulario correspondiente a la vecindad de la calle del Espanto número ocho, vivienda cuatro.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: 'Léala, licenciado. Campo por campo.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: '«Domicilio: vecindad de la calle del Espanto ocho, vivienda cuatro.»', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '«Ingreso declarado: variable. Oficio: abogado sin despacho.»', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '«Objetos de valor declarados: ninguno.»', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '«Puntualidad de pago: catorce meses de atraso.»', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '«Observaciones del vendedor: no insistir.»', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Y el último campo de la columna izquierda, señor juez. El de abajo del todo.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '«Estado de la puerta: chapa vencida. Se empuja.»', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'Murmullo largo y feo en la galería.', sfx: 'realization' },
    { speaker: 'JUEZ', text: '¿De cuándo es esa tarjeta?', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Levantada en mil novecientos sesenta y nueve.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Y actualizada en agosto de este año.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'La sala estalla.', sfx: 'gavel', bgm: 'pursuit' },
    { speaker: 'JUEZ', text: '¡ORDEN!', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: 'Señor juez, a este hombre lo tenían fichado.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'No como abogado. No como enemigo.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Como mercancía. Con su renta atrasada y su chapa vencida, en un cajón, entre Donceles y el Espanto.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DON RAMÓN', text: '...Catorce meses.', pose: 'donramon_shock' },
    { speaker: 'DON RAMÓN', text: 'En agosto yo debía catorce meses. Es verdad.', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: 'Y alguien se tomó la molestia de anotarlo.', pose: 'donramon_sweat' },
    { speaker: 'DEFENSA', text: 'Y hay una cosa más, señor juez, y es la que me tiene aquí parado.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'A esta tarjeta le falta la esquina inferior derecha.', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: '¡Alguacil! ¡El fragmento hallado en la mano del occiso!', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'NARRADOR', text: 'El alguacil pone el sobrecito de papel encerado sobre la mesa del secretario y saca el pedazo con pinzas.', bgm: 'suspense' },
    { speaker: 'NARRADOR', text: 'El secretario acerca el fragmento a la tarjeta.', sfx: 'realization' },
    { speaker: 'SECRETARIO', text: '...Empata, señor juez.' },
    { speaker: 'SECRETARIO', text: 'Diente por diente. Y los cuatro renglones del campo domicilio se completan: «...cindad de la calle del Espanto 8, viv. 4.»' },
    { speaker: 'NARRADOR', text: 'Silencio absoluto.', bgm: 'suspense' },
    { speaker: 'DEFENSA', text: 'Y no sólo empata el papel, señor juez.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'El retiro de la sindicatura fue de cinco mil pesos. La factura auténtica del notario, de setecientos cincuenta.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'El cálculo es cinco mil menos setecientos cincuenta: cuatro mil doscientos cincuenta, exactamente las diecisiete mensualidades del sobre.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'La nota hizo que existiera un recibo a nombre de mi cliente y que Barriga guardara constancia del pago. Ése es el rastro que Berrondo necesitaba para su montaje.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Barriga conservó la copia y entregó el original a Don Ramón; por eso apareció en su bolsillo. La nota no ordenaba esa entrega, pero el montaje aprovechó que ocurriera.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: 'Licenciado Berrondo.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'El pedazo de papel que apareció en la mano de un hombre asesinado salió de una tarjeta de su cedulario, guardado bajo su custodia.', pose: 'judge_shock' },
    { speaker: 'BERRONDO', text: '...Cualquiera pudo arrancarla, señor juez.', pose: 'berrondo_panic' },
    { speaker: 'DEFENSA', text: 'Cualquiera no, licenciado.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Porque cualquiera se habría llevado la tarjeta.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Y usted la volvió a meter en su cajón.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Mutilada, sin una esquina, pero en su sitio.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Igual que el estante.', pose: 'chapulin_idle' },
    { speaker: 'BERRONDO', text: '¡...!', pose: 'berrondo_panic' },
    { speaker: 'JUEZ', text: 'La corte ordena la detención preventiva del licenciado Fulgencio Berrondo.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'SECRETARIO', text: 'Señor juez, con la venia... la representación social hace notar que todo esto sigue siendo circunstancial.' },
    { speaker: 'JUEZ', text: '...Lo es.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Y esta corte no va a mandar a un hombre de setenta y un años a la cárcel por una manía de ordenar libros.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'Defensa. Le queda una y lo sabemos los dos.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Cierre el origen de esos documentos y explique por qué esta cadena señala a Berrondo.', sfx: 'gavel', pose: 'judge_gavel' }
  ]
};
