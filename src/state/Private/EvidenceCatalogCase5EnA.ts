// @Architecture(descriptionShort="Case 5 English evidence catalog block A", type="catalog", icon="database")
/**
 * Case 5 English evidence — block A (day 1 and day 2 start).
 */

import type { EvidenceItem } from '../../types/index.js';
import { evCase5 as ev } from './EvidenceCatalogCase5Helpers.js';

export const CASE5_EVIDENCE_EN_A: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: "Attorney's Badge",
    desc: 'Dented badge of Don Ramón. It fell down a drain in July. Someone else is wearing it today.',
    icon: 'assets/insignia_abogado.webp'
  }),
  parte_detencion: ev('parte_detencion', {
    name: 'Arrest Report',
    desc: 'December 4 report: Ramón Valdés arrested at 9:40 PM in the neighborhood. Inventory: one attorney badge, three pesos, one notebook, and a rent receipt in his name for seventeen months. Annex: Archive custody relay sheet with entry and exit signatures of both custodian pairs.',
    icon: 'assets/parte_detencion_c5.webp'
  }),
  esquina_tarjeta: ev('esquina_tarjeta', {
    name: 'Card Corner Fragment',
    desc: 'Forensic photograph of the fragment found in the victim’s right hand: cream cardstock corner, typewritten, with an incomplete address.'
  }, {
    imageAsset: 'assets/examine_esquina_tarjeta_en.webp',
    caption: 'Forensic macro with 5 cm scale: cream card fragment, four short typed lines, clean straight tear.'
  }),
  informe_forense_c5: ev('informe_forense_c5', {
    name: 'Forensic Report',
    desc: 'Casimiro Lengua: single blow to the occipital region. Heavy object, four-centimeter straight edge, no sharp corners. Temperature taken at 6:40 PM; estimated window 5:00–5:30 PM.',
    icon: 'assets/informe_forense_c5.webp',
    updates: [
      'Supplement: the cast matches a four-centimeter straight edge applied top to bottom from behind, object held in both hands and closed on the nape. No swing arc: it was not swung, it was closed.',
      'Medical examiner correction: applying the coefficient for a room at 31 °C, the window is corrected to 4:35–5:05 PM.'
    ]
  }),
  tomo_caido: ev('tomo_caido', {
    name: 'Fallen Volume',
    desc: 'Volume XI of El Saber Universal, economy edition, cloth-bound. Found one meter from the body, blood on the spine edge. On the flyleaf, a violet ink stamp.'
  }, {
    imageAsset: 'assets/examine_tomo_caido_en.webp',
    caption: 'Olive cloth volume XI with brown stain on the spine edge; open flyleaf shows a violet oval stamp.'
  }),
  estante_consulta: ev('estante_consulta', {
    name: 'Reference Shelf',
    desc: 'Consultation shelf in corridor 7. Twenty-four numbered slots; the El Saber Universal set donated to the Archive in 1971.'
  }, {
    imageAsset: 'assets/examine_estante_consulta.webp',
    caption: 'Twenty-four numbered slots with olive cloth spines, one darker empty slot, and one dissimilar spine among its neighbors.'
  }),
  libro_visitas: ev('libro_visitas', {
    name: 'Visitors Log',
    desc: 'Public visitors book, December 4 sheet. Fourteen signatures. The last: R. Valdés, 4:40 PM / 4:58 PM.'
  }, {
    imageAsset: 'assets/examine_libro_visitas_en.webp',
    caption: 'Public visitors book: fourteen handwritten rows; the last entry is R. Valdés, 4:40 PM / 4:58 PM.'
  }),
  plano_archivo: ev('plano_archivo', {
    name: 'Archive Floor Plan',
    desc: 'Civil-protection plan of the Judicial Archive, tacked beside the counter. Marks two accesses, the service stair, and the freight elevator landings in basement, courtyard, and first floor.'
  }, {
    imageAsset: 'assets/examine_plano_archivo_en.webp',
    caption: 'Civil-protection plan: two accesses, service stair, freight elevator landings on three levels.'
  }),
  expediente_casimiro: ev('expediente_casimiro', {
    name: "Casimiro's File",
    desc: 'Victim’s appeal file, found open on the consultation table at folio 214. That folio bears, as evidence seized in July, a business card.'
  }),
  recibo_renta: ev('recibo_renta', {
    name: 'Rent Receipt',
    desc: 'Receipt from Señor Barriga, November 29, for seventeen months. Handwritten concept in his own hand: “received from unidentified third party, on account of the tenant.”'
  }),
  nota_mecanografiada: ev('nota_mecanografiada', {
    name: 'Typewritten Note',
    desc: 'Half sheet of onion-skin paper from the yellow envelope. Three lines in third person and official formula. No signature.'
  }, {
    imageAsset: 'assets/examine_nota_renta_en.webp',
    caption: 'Half onion-skin sheet with three typed lines, no signature, beside the open manila envelope.'
  }),
  acuse_notificacion: ev('acuse_notificacion', {
    name: 'Service Acknowledgment',
    desc: 'Acknowledgment for official letter 4471, delivered November 29 at the bankruptcy 114/1971 syndicate office. The entry transcribes the full subject, with the name of the inmate who requested the proceeding. Initialed.'
  }, {
    imageAsset: 'assets/examine_acuse_en.webp',
    caption: 'Acknowledgment for official letter 4471 with the inmate’s name, tiny energetic blue rubric, and NOV 29 stamp.'
  })
};
