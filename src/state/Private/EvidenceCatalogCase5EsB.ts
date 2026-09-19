// @Architecture(descriptionShort="Case 5 Spanish evidence catalog block B", type="catalog", icon="database")
/**
 * Case 5 Spanish evidence — block B (day 2 end through day 4).
 */

import type { EvidenceItem } from '../../types/index.js';
import { evCase5 as ev } from './EvidenceCatalogCase5Helpers.js';

export const CASE5_EVIDENCE_ES_B: Record<string, EvidenceItem> = {
  credencial_sindico: ev('credencial_sindico', {
    name: 'Credencial de Síndico',
    desc: 'Credencial expedida por el juzgado Séptimo: Fulgencio Berrondo, síndico, quiebra 114/1971. Vigente hasta la conclusión del concurso. Sin límite de horario. Acceso al depósito de bienes de la masa.'
  }, {
    imageAsset: 'assets/examine_credencial.webp',
    caption: 'Copia certificada: foto en blanco y negro de hombre mayor con lentes de media luna y tres renglones impresos de vigencia; reverso con firma de 1971.'
  }),
  inventario_1971: ev('inventario_1971', {
    name: 'Inventario de 1971',
    desc: 'Inventario de la masa concursal, 14 de octubre de 1971. Cuarenta y siete partidas. Partida 12: cedulario, 11,400 tarjetas. Partida 41: máquina de escribir Olivetti Lexikon 80. Partida 44: ejemplares de lujo sin vender, 210.'
  }, {
    imageAsset: 'assets/examine_inventario.webp',
    caption: 'Dos folios mecanografiados; por su posición se distinguen las partidas 12, 41 y 44.'
  }),
  libro_peritos: ev('libro_peritos', {
    name: 'Libro de Peritos',
    desc: 'Libro de peritos y auxiliares de la justicia, hoja del 4 de diciembre. Cuatro asientos, incluido el del actuario Hilario Balbuena a las 17:44. Dos columnas: hora de entrada y hora de devolución de gafete.'
  }, {
    imageAsset: 'assets/examine_libro_peritos.webp',
    caption: 'Cuatro asientos con encabezados impresos «HORA DE ENTRADA» y «HORA DE DEVOLUCIÓN DE GAFETE»; Balbuena, 17:44 / 18:05.'
  }),
  expediente_serie: ev('expediente_serie', {
    name: 'Expediente de Serie',
    desc: 'Extracto certificado de cinco expedientes de este año, compilado por la policía judicial. Cinco paneles: A (12 jul), B (21 ago), C (28 ago), D (15 sep), E (24 oct).'
  }, {
    imageAsset: 'assets/examine_expediente_serie.webp',
    caption: 'Cinco paneles fechados A–E sobre mesa de peritajes: tarjeta de presentación, ficha mecanografiada, frasco y molde, boleta de empeño y acta con fotografía.'
  }),
  huacal_9: ev('huacal_9', {
    name: 'Huacal 9',
    desc: 'Huacal de madera, quiebra 114/1971. En la tapa, más de doscientas cincuenta tiras de sello encabalgadas, cada una rubricada por el síndico y fechada con día de la semana. La tira superior lleva la fecha completa SÁB 4-XII.'
  }, {
    imageAsset: 'assets/examine_huacal9.webp',
    caption: 'Tapa del huacal con más de doscientas cincuenta tiras de sello superpuestas; la tira superior legible: SÁB 4-XII.'
  }),
  fichero_cedulario: ev('fichero_cedulario', {
    name: 'Fichero Cedulario',
    desc: 'Cedulario de once mil cuatrocientas siete tarjetas físicas en nueve cajones de madera. Ordenado por calle, no por nombre. Cada tarjeta trae domicilio, ingreso declarado, objetos de valor declarados, puntualidad de pago y estado de la chapa; las bajas permanecen archivadas con marca de inactividad.'
  }),
  maquina_escribir: ev('maquina_escribir', {
    name: 'Máquina de Escribir',
    desc: 'Olivetti Lexikon 80, partida 41 del inventario de 1971. Cinta bicolor gastada hasta la tela.',
    updates: [
      'Peritaje ocular: la barra de la ‘s’ minúscula está vencida nueve décimas de milímetro. Imprime media línea por debajo del renglón y medio grado inclinada a la izquierda.',
      'Dictamen de documentoscopia: los tres documentos cuestionados —la tarjeta de julio, la ficha de agosto y la nota del sobre— presentan el mismo defecto. No fue posible cotejar contra el aparato: la máquina está en depósito judicial y se requiere orden para obtener muestra.'
    ]
  }, {
    imageAsset: 'assets/examine_maquina.webp',
    caption: 'Olivetti Lexikon 80 con plantilla 41, abanico de barras de tipos y cinta bicolor gastada.'
  }),
  oficio_diligencia: ev('oficio_diligencia', {
    name: 'Oficio de Diligencia',
    desc: 'Oficio 4471 de la fiscalía, 26 de noviembre: ordena la diligencia fijada para el sábado 4 de diciembre a las 17:00 en el Archivo Judicial y designa al actuario Hilario Balbuena. Al calce, la lista de distribución.'
  }),
  efectos_casimiro: ev('efectos_casimiro', {
    name: 'Efectos de Casimiro',
    desc: 'Efectos de la víctima. Dos piezas: su libreta de pasta negra, escrita con letra de catálogo, y la copia al carbón del oficio que dirigió al ministerio público el 8 de noviembre.'
  }, {
    imageAsset: 'assets/examine_efectos.webp',
    caption: 'Libreta de pasta negra y copia al carbón del oficio del 8 de noviembre; dos relojes de pulsera parados al lado.'
  }),
  bitacora_caldera: ev('bitacora_caldera', {
    name: 'Bitácora de Caldera',
    desc: 'Bitácora de mantenimiento del Archivo. Tubo reventado el 3 de diciembre en el muro del pasillo 7; caldera y dos secadores al máximo del 3 al 7 de diciembre. Adjunta, la tira archivada del termógrafo, cuyo registrador está en el sótano y cuya sonda está en el pasillo 7.'
  }, {
    imageAsset: 'assets/examine_termografo.webp',
    caption: 'Bitácora del 3 de diciembre y tira del termógrafo archivada junto a la nota de la sonda en el pasillo 7.'
  }),
  ficha_domicilio: ev('ficha_domicilio', {
    name: 'Ficha de Domicilio',
    desc: 'Tarjeta del cedulario correspondiente a la vecindad de Don Ramón. Levantada en 1969 y actualizada en agosto de este año. Seis campos en dos columnas: cinco a la izquierda (el último es el estado de la puerta) y domicilio a la derecha, partido en cuatro renglones que llegan a la esquina inferior. Le falta esa esquina inferior derecha.'
  }, {
    imageAsset: 'assets/examine_ficha_domicilio.webp',
    caption: 'Tarjeta crema con seis campos y esquina inferior derecha faltante, con el mismo borde recto y limpio del fragmento.'
  })
};
