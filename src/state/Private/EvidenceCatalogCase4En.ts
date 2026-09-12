// @Architecture(descriptionShort="Case 4 court record items in English", type="catalog", icon="database")
/**
 * English Case 4 evidence catalog — merged when getEvidenceCatalog(lang, 'case4').
 * Adaptation (not literal translation): Chapulin proverb mixes need two English
 * proverbs crossed just as badly; Super Sam keeps financial vocabulary, not Spanish.
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

export const CASE4_EVIDENCE_EN: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: "Attorney's Badge",
    desc: "Dented badge of Don Ramón."
  }),
  informe_policial: ev('informe_policial', {
    name: 'Police Report',
    desc: 'Discovery at 23:20 after the 23:15 bang: bullet wound, gun, key on the side table, and Botija inside. Cause pending further examination.',
    updates: [
      'Annex: cork handed in by Maruja, with time of delivery and both signatures.',
      'The time of the noise (23:15) is not the time of death: further examination pending.',
      'Ballistic comparison of gun, bullet, and pillow; registry records the revolver under the dead man’s name.'
    ]
  }),
  foto_crimen: ev('foto_crimen', {
    name: 'Crime Photo',
    icon: 'assets/foto_suite304.webp',
    desc: '23:30 image: body, pierced pillow, torn suit, glass, bottle, and key on the table.'
  }),
  candado_cadena: ev('candado_cadena', {
    name: 'Chain Latch',
    desc: 'Plate with sliding bolt, trapped fibers, and a length recovered from the corridor; route diagram.'
  }, {
    imageAsset: 'assets/examine_cadena.webp',
    caption: 'Removed plate: inner bolt, loop route prepared from inside, broken fragment on the edge.'
  }),
  plano_hotel: ev('plano_hotel', {
    name: 'Hotel Floor Plan',
    desc: 'Suite 304 bath and sitting room, corridors, outer freight-elevator stops, and the 204–304 branch.'
  }, {
    imageAsset: 'assets/examine_plano.webp',
    caption: 'West wing plan: Suite 304 with bath and screen; the lift serves service corridors.'
  }),
  billetera_cuajinais: ev('billetera_cuajinais', {
    name: "Cuajinais's Wallet",
    desc: 'Wallet with the Mr. Gómez ID and $200, picked up by Botija by his own account. Inventoried by police.'
  }),
  orden_servicios: ev('orden_servicios', {
    name: 'Service Logbook',
    icon: 'assets/orden_servicios.webp',
    desc: 'Shift log: bottle V58-17 to 204, trunk B-17 to 304, and 23:05 maintenance. Includes delivery and receipt times.',
    updates: [
      'Rufino’s original handwritten folio: Suite 304 bathroom check at 23:05, assigned to Botija, handed over in person.',
      'B-17 freight receipts: sealed delivery and signed reception.',
      'Certification of the wine delivery witnessed by Maruja.'
    ]
  }, {
    imageAsset: 'assets/examine_orden.webp',
    caption: 'Handwritten folio: maintenance request naming the employee and the hour.'
  }),
  informe_forense: ev('informe_forense', {
    name: 'Forensic Report',
    icon: 'assets/informe_forense.webp',
    desc: 'Supplement: wound with no vital reaction; death window between 20:30 and 22:00; cause under analysis.'
  }),
  residuos_manos: ev('residuos_manos', {
    name: 'Hand Residue Samples',
    icon: 'assets/residuos_manos.webp',
    desc: 'Samples consistent with soot and boiler work; do not support the initial gunshot-residue charge.'
  }),
  casquillo_fogueo: ev('casquillo_fogueo', {
    name: 'Blank Effect Set',
    icon: 'assets/casquillo_fogueo.webp',
    desc: 'Secured sound-effect set with no projectile, timer device from the gala stock.'
  }),
  registro_montacargas: ev('registro_montacargas', {
    name: 'Freight Elevator Log',
    icon: 'assets/registro_montacargas.webp',
    desc: 'Several luggage rows: B-17 leaves floor 2 at 10:20 PM for floor 3 at 100 kg, and reaches the roof from floor 3 at 10:40 PM at 20 kg. No passengers in the cabin.'
  }, {
    imageAsset: 'assets/examine_registro.webp',
    caption: 'Logbook: B-17 twice with different loads; printed marks, legible.'
  }),
  baul_etiquetas: ev('baul_etiquetas', {
    name: 'Trunk B-17',
    icon: 'assets/baul_etiquetas.webp',
    desc: 'B-17 with broken strap, swatch matching the photo tear, and numbered strap stub signed at delivery.'
  }),
  toxicologia_vino: ev('toxicologia_vino', {
    name: 'Wine Toxicology',
    icon: 'assets/toxicologia_vino.webp',
    desc: 'Same toxic agent in the victim and the glass wine; ingestion route consistent. Does not name who dosed it.',
    updates: [
      'Agent found inside the cork, plus separate examination of the ring, with no fit announced.'
    ]
  }),
  copa_vino: ev('copa_vino', {
    name: 'Wine Glass',
    icon: 'assets/copa_vino.webp',
    desc: 'Fragments secured beside the body, plus analyzed sample.'
  }),
  botella_vino: ev('botella_vino', {
    name: 'Bottle V58-17',
    icon: 'assets/botella_vino.webp',
    desc: 'V58-17, opened; the cork does not travel with it: police annex custody with its own chain. Enlarged cork view with two different marks, pending analysis.'
  }, {
    imageAsset: 'assets/examine_botella.webp',
    caption: 'Cork kept apart: wide corkscrew track and a fine channel through it, metal inclusion on the rim.'
  }),
  boleta_baccarat: ev('boleta_baccarat', {
    name: 'Baccarat Slip',
    icon: 'assets/boleta_baccarat.webp',
    desc: 'Round log confirming Rufino between 23:10 and 23:25.'
  }),
  nota_amenaza: ev('nota_amenaza', {
    name: "Cuajinais's Telegram",
    desc: 'Filed copy and receipt of the telegram delivered to Rufino: Cleopatra Necklace payment or report.',
    updates: [
      'Recovery record of the necklace from the seized briefcase.'
    ]
  }, {
    imageAsset: 'assets/examine_nota.webp',
    caption: 'Telegram with receipt signed by the addressee.',
    clickableZones: [
      { id: 'encabezado_hora', x: 79, y: 13, width: 20, height: 24, tooltip: 'Filed from the hotel itself' },
      { id: 'linea_exigencia', x: 14, y: 47, width: 63, height: 18, tooltip: 'Payment demand under threat of report' },
      { id: 'firma_remitente', x: 23, y: 66, width: 16, height: 7, tooltip: 'Sender signature' },
      { id: 'acuse_recepcion', x: 4, y: 76, width: 55, height: 16, tooltip: 'Receipt signed by the addressee' }
    ]
  }),
  sello_lacre: ev('sello_lacre', {
    name: "Rufino's Ring",
    icon: 'assets/sello_lacre.webp',
    desc: "Rufino's ring: swivel head, cavity, channel, truncated metal tip. Independent views and analysis."
  }, {
    imageAsset: 'assets/examine_sello.webp',
    caption: 'Open ring: crest head, cavity, fine channel, broken tip.'
  })
};
