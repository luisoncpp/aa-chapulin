// @Architecture(descriptionShort="Case 4 court record items in Spanish", type="catalog", icon="database")
/**
 * Spanish Case 4 evidence catalog — merged when getEvidenceCatalog(lang, 'case4').
 * Follows docs/specs/case-4-el-caso-del-hotel-buena-vista.md §5 table:
 * content, order and function are fixed; descriptions stay short observations.
 */

import type { EvidenceId, EvidenceItem } from '../../types/index.js';

function ev(
  id: EvidenceId,
  text: { name: string; desc: string; updatedDesc?: string; updates?: string[]; icon?: string },
  detailedView?: EvidenceItem['detailedView']
): EvidenceItem {
  return {
    id,
    name: text.name,
    icon: text.icon ?? `assets/${id}.webp`,
    desc: text.desc,
    updatedDesc: text.updatedDesc,
    updates: text.updates,
    detailedView
  };
}

export const CASE4_EVIDENCE_ES: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: 'Insignia de Abogado',
    desc: 'Insignia abollada del Lic. Monchito.'
  }),
  informe_policial: ev('informe_policial', {
    name: 'Informe Policial',
    desc: 'Hallazgo a las 23:20 tras el estruendo de las 23:15: herida de bala, arma, llave en la mesita y Botija dentro. Causa pendiente de examen complementario.',
    updates: [
      'Anexo: cierre entregado por Maruja, con hora de entrega y firmas del Sargento y la testigo.',
      'La hora del ruido (23:15) no es la hora de la muerte: queda pendiente el examen complementario.',
      'Comparación del arma con el proyectil y la almohada; el padrón registra el revólver a nombre del difunto.'
    ]
  }),
  foto_crimen: ev('foto_crimen', {
    name: 'Foto del Crimen',
    icon: 'assets/foto_suite304.webp',
    desc: 'Imagen de las 23:30: cuerpo, almohada perforada, traje desgarrado, copa, botella y llave en la mesita.'
  }, {
    imageAsset: 'assets/examine_foto.webp',
    caption: 'Mesa de la 304: copa y botella aseguradas, llave ordinaria y almohada perforada.'
  }),
  candado_cadena: ev('candado_cadena', {
    name: 'Cierre de Cadena',
    desc: 'Placa con perno deslizante, fibras retenidas y tramo recuperado del corredor; esquema de recorrido.'
  }, {
    imageAsset: 'assets/examine_cadena.webp',
    caption: 'Placa desmontada: perno interior, recorrido del lazo preparado desde dentro y fragmento roto en el borde.'
  }),
  plano_hotel: ev('plano_hotel', {
    name: 'Plano del Hotel',
    desc: 'Baño y sala de la 304, corredores, paradas externas del montacargas y ramal 204–304.'
  }, {
    imageAsset: 'assets/examine_plano.webp',
    caption: 'Plano del ala oeste: la 304 con baño y biombo; el montacargas da a corredores de servicio.'
  }),
  billetera_cuajinais: ev('billetera_cuajinais', {
    name: 'Billetera del Cuajinais',
    desc: 'Cartera con credencial del Sr. Gómez y $200, recogida por Botija según su relato. Inventariada por la policía.'
  }),
  orden_servicios: ev('orden_servicios', {
    name: 'Libro de Servicios',
    icon: 'assets/orden_servicios.webp',
    desc: 'Libro del turno: botella V58-17 a la 204, porte B-17 a la 304 y mantenimiento de las 23:05. Incluye horas de entrega y recepción.',
    updates: [
      'Folio manuscrito original de Rufino: revisión del baño de la 304 a las 23:05, asignada a Botija, entregado en mano.',
      'Recibos del porte B-17: entrega cerrada y recepción firmada.',
      'Certificación de entrega del vino ante Maruja.'
    ]
  }, {
    imageAsset: 'assets/examine_orden.webp',
    caption: 'Folio manuscrito: solicitud de mantenimiento con nombre del empleado y hora del servicio.'
  }),
  informe_forense: ev('informe_forense', {
    name: 'Informe Forense',
    icon: 'assets/informe_forense.webp',
    desc: 'Ampliación: herida sin reacción vital; ventana de muerte entre las 20:30 y las 22:00; causa en análisis.'
  }),
  residuos_manos: ev('residuos_manos', {
    name: 'Residuos en Manos',
    icon: 'assets/residuos_manos.webp',
    desc: 'Muestras compatibles con hollín y trabajo de caldera; no apoyan la imputación inicial de residuos de disparo.'
  }),
  casquillo_fogueo: ev('casquillo_fogueo', {
    name: 'Efecto de Fogueo',
    icon: 'assets/casquillo_fogueo.webp',
    desc: 'Conjunto asegurado de efecto sonoro sin proyectil, con dispositivo retardado perteneciente al material de gala.'
  }),
  registro_montacargas: ev('registro_montacargas', {
    name: 'Registro del Montacargas',
    icon: 'assets/registro_montacargas.webp',
    desc: 'Varias filas de equipaje: B-17 sale de planta 2 a las 22:20 hacia planta 3 con 100 kg, y llega de planta 3 a azotea a las 22:40 con 20 kg. Cabina sin pasajeros.'
  }, {
    imageAsset: 'assets/examine_registro.webp',
    caption: 'Bitácora: número B-17 con dos cargas distintas; marcas impresas legibles.'
  }),
  baul_etiquetas: ev('baul_etiquetas', {
    name: 'Baúl B-17',
    icon: 'assets/baul_etiquetas.webp',
    desc: 'B-17 con faja rota, retal enganchado compatible con el desgarro de la foto y talón de faja numerada firmado en la entrega.'
  }),
  toxicologia_vino: ev('toxicologia_vino', {
    name: 'Toxicología del Vino',
    icon: 'assets/toxicologia_vino.webp',
    desc: 'Mismo agente tóxico en la víctima y en el vino de la copa; vía de ingestión compatible. No identifica al administrador.',
    updates: [
      'Hallazgo del agente en el interior del cierre y examen separado del anillo, sin anunciar encaje.'
    ]
  }),
  copa_vino: ev('copa_vino', {
    name: 'Copa de Vino',
    icon: 'assets/copa_vino.webp',
    desc: 'Fragmentos asegurados junto al cuerpo y muestra analizada.'
  }),
  botella_vino: ev('botella_vino', {
    name: 'Botella V58-17',
    icon: 'assets/botella_vino.webp',
    desc: 'V58-17, abierta; el cierre no viaja con ella: llega del anexo policial con su propia custodia. Vista ampliada del cierre con dos marcas de trazo distinto, pendientes de análisis.'
  }, {
    imageAsset: 'assets/examine_botella.webp',
    caption: 'Cierre conservado aparte: huella ancha del sacacorchos y canal fino que lo atraviesa, con inclusión metálica en el borde.'
  }),
  boleta_baccarat: ev('boleta_baccarat', {
    name: 'Boleta de Baccarat',
    icon: 'assets/boleta_baccarat.webp',
    desc: 'Registro de rondas que confirma a Rufino entre las 23:10 y las 23:25.'
  }),
  nota_amenaza: ev('nota_amenaza', {
    name: 'Telegrama de Cuajinais',
    desc: 'Copia y acuse del telegrama entregado a Rufino: pago del Collar de Cleopatra o denuncia.',
    updates: [
      'Acta de recuperación del collar del maletín incautado.'
    ]
  }, {
    imageAsset: 'assets/examine_nota.webp',
    caption: 'Telegrama con acuse de recepción firmado por el destinatario.',
    clickableZones: [
      { id: 'encabezado_hora', x: 79, y: 13, width: 20, height: 24, tooltip: 'Depósito desde el propio hotel' },
      { id: 'linea_exigencia', x: 14, y: 47, width: 63, height: 18, tooltip: 'Exigencia de pago bajo amenaza de denuncia' },
      { id: 'firma_remitente', x: 23, y: 66, width: 16, height: 7, tooltip: 'Firma del remitente' },
      { id: 'acuse_recepcion', x: 4, y: 76, width: 55, height: 16, tooltip: 'Recibo firmado por el destinatario' }
    ]
  }),
  sello_lacre: ev('sello_lacre', {
    name: 'Anillo de Rufino',
    icon: 'assets/sello_lacre.webp',
    desc: 'Anillo de Rufino: cabeza giratoria, cavidad, conducto y extremo metálico truncado. Vistas y análisis independientes.'
  }, {
    imageAsset: 'assets/examine_sello.webp',
    caption: 'Anillo abierto: cabeza con escudo, cavidad, conducto fino y punta partida.'
  })
};
