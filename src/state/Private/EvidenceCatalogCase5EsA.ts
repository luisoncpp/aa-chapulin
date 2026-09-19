// @Architecture(descriptionShort="Case 5 Spanish evidence catalog block A", type="catalog", icon="database")
/**
 * Case 5 Spanish evidence — block A (day 1 and day 2 start).
 */

import type { EvidenceItem } from '../../types/index.js';
import { evCase5 as ev } from './EvidenceCatalogCase5Helpers.js';

export const CASE5_EVIDENCE_ES_A: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: 'Insignia de Abogado',
    desc: 'Insignia abollada de Don Ramón. Se le cayó al drenaje en julio. Hoy la trae otro.',
    icon: 'assets/insignia_abogado.webp'
  }),
  parte_detencion: ev('parte_detencion', {
    name: 'Acta de Detención',
    desc: 'Acta de detención del 4 de diciembre: detención de Ramón Valdés a las 21:40 en la vecindad. Inventario: una insignia de abogado, tres pesos, una libreta y un recibo de renta a su nombre por diecisiete mensualidades.',
    icon: 'assets/parte_detencion_c5.webp'
  }),
  hoja_relevo: ev('hoja_relevo', {
    name: 'Hoja de Relevo de Custodia',
    desc: 'Hoja de relevo de custodia del Archivo Judicial, 4 de diciembre. Turno saliente: Rangel y Nieto firman su SALIDA de la reja del pasillo 7 a las 17:00. Turno entrante: Cadena y Solís firman su ENTRADA a las 17:15. Entre las dos firmas hay quince minutos sin ningún custodio asentado en la reja.',
    icon: 'assets/bitacora_transmision.webp'
  }),
  esquina_tarjeta: ev('esquina_tarjeta', {
    name: 'Esquina de Tarjeta',
    desc: 'Fotografía pericial del fragmento hallado en la mano derecha de la víctima: esquina de cartulina crema, mecanografiada, con un domicilio incompleto.'
  }, {
    imageAsset: 'assets/examine_esquina_tarjeta.webp',
    caption: 'Macro pericial con regla testigo de 5 cm: fragmento de cartulina crema, cuatro renglones mecanografiados cortos y borde roto recto y limpio.'
  }),
  informe_forense_c5: ev('informe_forense_c5', {
    name: 'Informe Forense',
    desc: 'Casimiro Lengua: golpe único en región occipital. Objeto pesado, canto recto de cuatro centímetros, sin aristas vivas. Temperatura tomada a las 18:40; intervalo estimado 17:00–17:30.',
    icon: 'assets/informe_forense_c5.webp',
    updates: [
      'Ampliación: el calco corresponde a un canto recto de cuatro centímetros aplicado de arriba abajo y por detrás, con el objeto sostenido a dos manos y cerrado sobre la nuca. No hay arco de golpe: no se blandió, se cerró.',
      'Rectificación del forense: aplicado el coeficiente de una sala a 31 °C, el intervalo se corrige a 16:35–17:05.'
    ]
  }),
  tomo_caido: ev('tomo_caido', {
    name: 'Tomo Caído',
    desc: 'Tomo XI de El Saber Universal, edición económica, encuadernado en tela. Hallado a un metro del cuerpo, con sangre en el lomo. En la guarda, un sello de tinta violeta.'
  }, {
    imageAsset: 'assets/examine_tomo_caido.webp',
    caption: 'Tomo XI de tela verde oliva con mancha parda en el lomo; en la guarda abierta se ve un sello ovalado de tinta violeta.'
  }),
  estante_consulta: ev('estante_consulta', {
    name: 'Estante de Consulta',
    desc: 'Estante de consulta del pasillo 7. Veinticuatro ranuras numeradas; la colección de El Saber Universal donada al Archivo en 1971.'
  }, {
    imageAsset: 'assets/examine_estante_consulta.webp',
    caption: 'Veinticuatro ranuras numeradas con lomos de tela verde oliva, una ranura vacía más oscura y un lomo distinto entre sus vecinos.'
  }),
  libro_visitas: ev('libro_visitas', {
    name: 'Libro de Visitas',
    desc: 'Libro de visitas del público, hoja del 4 de diciembre. Catorce firmas. La última: R. Valdés, 16:40 / 16:58. Sólo firman los que vienen de visita: el personal del edificio no firma.'
  }, {
    imageAsset: 'assets/examine_libro_visitas.webp',
    caption: 'Libro de visitas del público: catorce renglones manuscritos; el último asiento es R. Valdés, 16:40 / 16:58.'
  }),
  plano_archivo: ev('plano_archivo', {
    name: 'Plano del Archivo',
    desc: 'Plano de protección civil del Archivo Judicial, clavado con tachuelas junto al mostrador. Marca dos accesos, la escalera de servicio y los tres descansos del montacargas en sótano, patio y primer piso.'
  }, {
    imageAsset: 'assets/examine_plano_archivo.webp',
    caption: 'Plano de protección civil: dos accesos, escalera de servicio y descansos del montacargas en sótano, patio y primer piso.'
  }),
  expediente_casimiro: ev('expediente_casimiro', {
    name: 'Expediente de Casimiro',
    desc: 'Expediente de apelación de la víctima, hallado abierto sobre la mesa de consulta, en la página 214. En esa página está pegada, como prueba decomisada en julio, una tarjeta de presentación.'
  }),
  recibo_renta: ev('recibo_renta', {
    name: 'Recibo de Renta',
    desc: 'Recibo del Señor Barriga, 29 de noviembre, por diecisiete mensualidades. Concepto escrito de su puño: «recibí de tercero no identificado, a cuenta del inquilino».'
  }),
  nota_mecanografiada: ev('nota_mecanografiada', {
    name: 'Nota Mecanografiada',
    desc: 'Media cuartilla mecanografiada que venía en el sobre amarillo. Tres renglones en tercera persona y fórmula de oficio. Sin firma.'
  }, {
    imageAsset: 'assets/examine_nota_renta.webp',
    caption: 'Media cuartilla de papel cebolla con tres renglones mecanografiados, sin firma, junto al sobre de manila.'
  }),
  acuse_notificacion: ev('acuse_notificacion', {
    name: 'Acuse de Notificación',
    desc: 'Acuse del oficio 4471, entregado el 29 de noviembre en la sindicatura de la quiebra 114/1971. El asiento transcribe el asunto completo, con el nombre del interno que promovió la diligencia. Rubricado.'
  }, {
    imageAsset: 'assets/examine_acuse.webp',
    caption: 'Acuse del oficio 4471 con nombre del interno, rúbrica azul enérgica y fechador 29 NOV.'
  })
};
