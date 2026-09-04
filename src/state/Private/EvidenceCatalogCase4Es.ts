// @Architecture(descriptionShort="Case 4 court record items in Spanish", type="catalog", icon="database")
/**
 * Spanish Case 4 evidence catalog — merged when getEvidenceCatalog(lang, 'case4').
 */

import type { EvidenceId, EvidenceItem } from '../../types/index.js';

function ev(
  id: EvidenceId,
  text: { name: string; desc: string; updatedDesc?: string; updates?: string[] },
  detailedView?: EvidenceItem['detailedView']
): EvidenceItem {
  return {
    id,
    name: text.name,
    icon: `assets/${id}.webp`,
    desc: text.desc,
    updatedDesc: text.updatedDesc,
    updates: text.updates,
    detailedView
  };
}

export const CASE4_EVIDENCE_ES: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: 'Insignia de Abogado',
    desc: 'Chapa profesional del Licenciado Monchito. Abollada y empeñada tres veces para pagar la renta, pero legalmente válida.'
  }),
  informe_policial: ev('informe_policial', {
    name: 'Informe Policial del Sargento',
    desc: 'La víctima murió de un disparo calibre .38 en el pecho en la Suite 304 a las 11:15 PM. Habitación cerrada con cerrojo de cadena interior.',
    updates: [
      'Informe preliminar del Sargento. La hora de muerte fijada (11:15 PM) se asentó únicamente por el estruendo escuchado desde el pasillo a través de las tuberías de vapor, sin examen médico forense in situ.',
      'Informe policial preliminar refutado: la autopsia médico-legal certificó que la víctima falleció por asfixia por cianuro de potasio a las 9:50 PM; el impacto de bala a las 11:15 PM fue post-mortem.'
    ]
  }),
  foto_crimen: ev('foto_crimen', {
    name: 'Fotografía de la Suite 304',
    desc: 'Escena del crimen a las 11:30 PM. El cuerpo yace junto a la chimenea; sobre la alfombra y la mesita yacen la copa rota con residuos secos y la botella descorchada de Chateau Buena Vista 1958 junto a la cubeta de hielo, aseguradas por el Sargento.',
    updates: [
      'Escena del crimen a las 11:30 PM. La cubeta sobre la mesita contiene agua templada sin un solo témpano de hielo flotando, demostrando que el servicio de bebidas se entregó horas antes del estruendo.'
    ]
  }, {
    imageAsset: 'assets/examine_foto.webp',
    caption: 'Fotografía asegurada del Sargento: mesita ratona con cubeta de hielo, copa rota y botella descorchada junto a la chimenea.'
  }),
  candado_cadena: ev('candado_cadena', {
    name: 'Cerrojo de Cadena de la 304',
    desc: 'Mecanismo de seguridad de la puerta. Riel horizontal de latón con perno deslizante. En el canto exterior hay un rasguño fresco y un sedal de pescar de nylon.'
  }, {
    imageAsset: 'assets/examine_cadena.webp',
    caption: 'Placa de latón del cerrojo: ranura de deslizamiento, raspón en la jamba y sedal de nylon enganchado al perno.'
  }),
  plano_hotel: ev('plano_hotel', {
    name: 'Plano de Tuberías y Suites',
    desc: 'Sección arquitectónica del ala oeste. Demuestra que el radiador y chimenea de la 304 comparten tiro directo y cavidad con la Suite 204.',
    updates: [
      'Plano arquitectónico del ala oeste. Confirma la conexión directa del tiro vertical de tuberías de purga de vapor entre la Suite 204 y la Suite 304, conducto por el cual reverberó la detonación acústica de fogueo.'
    ]
  }, {
    imageAsset: 'assets/examine_plano.webp',
    caption: 'Corte transversal del ala oeste: tiro común de chimenea y tubería de purga de vapor entre las suites 204 y 304.'
  }),
  residuos_manos: ev('residuos_manos', {
    name: 'Análisis de Manos de Botija',
    desc: 'Polvo negro tomado de las manos y ropa negra de Botija. Calificado inicialmente por Super Sam como "pólvora fresca de disparo".',
    updates: [
      'Peritaje químico corregido de las manos y ropa negra de Botija: 98% de hollín mineral de carbón y azufre de la caldera; 0% de pólvora o nitratos balísticos. Descarta disparo de arma de fuego.'
    ]
  }),
  billetera_cuajinais: ev('billetera_cuajinais', {
    name: 'Billetera de la Víctima',
    desc: 'Billetera de piel de cocodrilo hallada en manos de Botija. Contiene $200 pesos íntegros, credencial del "Sr. Gómez" y un forro secreto descosido.',
    updates: [
      'Billetera de piel de cocodrilo con $200 intactos. El peritaje químico descosió el forro secreto y extrajo la llave de la taquilla #42 de la terminal de autobuses.'
    ]
  }),
  informe_forense: ev('informe_forense', {
    name: 'Autopsia Toxicológica',
    desc: 'Reporte patológico oficial: el disparo en el pecho fue post-mortem (sin reacción vital ni hemorragia interna). Causa real: asfixia por cianuro potásico a las 9:50 PM.'
  }),
  casquillo_fogueo: ev('casquillo_fogueo', {
    name: 'Casquillo de Fogueo Quemado',
    desc: 'Casquillo calibre .38 detonado sin proyectil, hallado dentro de la válvula de purga del radiador de la Suite 204. Restos de mecha lenta de azufre.'
  }),
  registro_montacargas: ev('registro_montacargas', {
    name: 'Bitácora del Montacargas',
    desc: 'Registro del ascensor de carga: a las 10:20 PM carga pesada (~175 kg: piso 2 a piso 3); a las 10:25 PM carga ligera (~95 kg: piso 3 a azotea).'
  }),
  copa_vino: ev('copa_vino', {
    name: 'Copa Rota de Vino',
    desc: 'Copa de cristal fino con restos de vino tinto Chateau Buena Vista 1958. Sedimento analizado dio positivo letal a cianuro de potasio.'
  }),
  botella_vino: ev('botella_vino', {
    name: 'Botella Chateau Buena Vista 1958',
    desc: 'Botella de gran reserva privada de Rufino. Corcho extraído intacto. En la cúpula del sello de lacre rojo hay un micro-orificio de aguja disimulado con cera fundida.'
  }, {
    imageAsset: 'assets/examine_botella.webp',
    caption: 'Gollete de la botella descorchada: cúpula de lacre rojo con punzada milimétrica de aguja resellada con cera derretida.'
  }),
  boleta_baccarat: ev('boleta_baccarat', {
    name: 'Boleta de Baccarat de Rufino',
    desc: 'Boleta de apuestas del salón de juegos. Acredita juego de 10:30 PM a 11:30 PM, pero incluye un receso sellado de 15 min (11:10 a 11:25 PM).'
  }),
  baul_etiquetas: ev('baul_etiquetas', {
    name: 'Baúl de Viaje con Ruedas',
    desc: 'Baúl de cuero inglés hallado oculto en el cuarto de máquinas de la azotea. En su forro de terciopelo se hallaron fibras de lana del traje de Cuajinais y carbón.'
  }),
  sello_lacre: ev('sello_lacre', {
    name: 'Anillo Sello de Oro',
    desc: 'Anillo con escudo heráldico propiedad de Rufino Rufián. Hallado en la basura de la 204; presenta rastros microscópicos de cera roja fundida en el relieve.'
  }),
  nota_amenaza: ev('nota_amenaza', {
    name: 'Resguardo de Telegrama de Extorsión',
    desc: 'Recibo oficial de telégrafos hallado en la taquilla de Cuajinais: "Conde de Montemayor: o pagas mis $50,000 del collar de Cleopatra o la policía sabrá todo. Habitación 304."'
  }, {
    imageAsset: 'assets/examine_nota.webp',
    caption: 'Formulario de Telégrafos Nacionales con matasellos de la terminal de autobuses (8:15 PM, 24 de octubre).',
    clickableZones: [
      { id: 'destinatario_conde', x: 18, y: 28, width: 64, height: 10, tooltip: 'Destinatario: Conde de Montemayor' },
      { id: 'monto_extorsion', x: 22, y: 48, width: 28, height: 8, tooltip: 'Exigencia: $50,000 del Collar de Cleopatra' },
      { id: 'habitacion_304', x: 58, y: 62, width: 22, height: 8, tooltip: 'Habitación 304' }
    ]
  })
};
