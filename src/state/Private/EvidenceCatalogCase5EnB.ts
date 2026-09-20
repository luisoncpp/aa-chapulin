// @Architecture(descriptionShort="Case 5 English evidence catalog block B", type="catalog", icon="database")
/**
 * Case 5 English evidence — block B (day 2 end through day 4).
 */

import type { EvidenceItem } from '../../types/index.js';
import { evCase5 as ev } from './EvidenceCatalogCase5Helpers.js';

export const CASE5_EVIDENCE_EN_B: Record<string, EvidenceItem> = {
  credencial_sindico: ev('credencial_sindico', {
    name: 'Syndic Credential',
    desc: 'Credential issued by the Seventh Court: Fulgencio Berrondo, syndic, bankruptcy 114/1971. Valid until the proceeding concludes. No time limit. Access to the estate goods deposit.'
  }, {
    imageAsset: 'assets/examine_credencial_en.webp',
    caption: 'Certified copy: B&W photo of an older man in a dark suit and half-moon glasses, three printed validity lines, 1971 reverse signature.'
  }),
  inventario_1971: ev('inventario_1971', {
    name: '1971 Inventory',
    desc: 'Estate inventory, October 14, 1971. Forty-seven line items. Item 12: card file, 11,400 cards. Item 41: Olivetti Lexikon 80 typewriter. Item 44: unsold luxury copies, 210.'
  }, {
    imageAsset: 'assets/examine_inventario_en.webp',
    caption: 'Two typed pages; items 12, 41, and 44 are visible by position, not highlights.'
  }),
  libro_peritos: ev('libro_peritos', {
    name: 'Experts Log',
    desc: 'Experts and court auxiliaries log, December 4 sheet. Four entries, including court clerk Hilario Balbuena at 5:44 PM. Two columns: time of entry and badge return time.'
  }, {
    imageAsset: 'assets/examine_libro_peritos_en.webp',
    caption: 'Four entries with printed headers “TIME OF ENTRY” and “TIME BADGE RETURNED”; Balbuena, 5:44 PM / 6:05 PM.'
  }),
  expediente_serie: ev('expediente_serie', {
    name: 'Series File Extract',
    desc: 'Certified extract of five files from this year, compiled by judicial police. Five panels: A (Jul 12), B (Aug 28), C (Aug 21), D (Sep 15), E (Oct 24).'
  }, {
    imageAsset: 'assets/examine_expediente_serie_en.webp',
    caption: 'Five dated panels A–E on an exam table: business card, typed card, bottle and mold, pawn slip, and typed minutes with a photograph.'
  }),
  huacal_9: ev('huacal_9', {
    name: 'Bonded Crate 9',
    desc: 'Wooden crate, bankruptcy 114/1971. On the lid, more than two hundred fifty overlapping seal strips, each initialed by the syndic and dated with the day of the week. The top strip reads the full date SAT 4-XII.'
  }, {
    imageAsset: 'assets/examine_huacal9_en.webp',
    caption: 'Crate lid with 250+ overlapping seal strips; the top strip legible: SAT 4-XII.'
  }),
  fichero_cedulario: ev('fichero_cedulario', {
    name: 'Card-File Index',
    desc: 'Card file of eleven thousand four hundred seven physical cards in nine wooden drawers. Sorted by street, not by name. Each card lists address, declared income, declared valuables, payment punctuality, and latch condition; closed accounts remain filed with an inactive mark.'
  }),
  maquina_escribir: ev('maquina_escribir', {
    name: 'Typewriter',
    desc: 'Olivetti Lexikon 80, item 41 of the 1971 inventory. Two-color ribbon worn down to the fabric.',
    updates: [
      'Visual examination: the lowercase “s” typebar is bent nine tenths of a millimeter. It prints half a line below the row and half a degree left of vertical.',
      'Documentoscopy ruling: the three challenged documents —the July card, the August card, and the envelope note— share the same defect. The machine could not be matched: it is in judicial deposit and a court order is required for a sample.'
    ]
  }, {
    imageAsset: 'assets/examine_maquina.webp',
    caption: 'Olivetti Lexikon 80 with stencil 41, typebar fan, and worn two-color ribbon.'
  }),
  oficio_diligencia: ev('oficio_diligencia', {
    name: 'Diligence Order',
    desc: 'Prosecution official letter 4471, November 26: orders the diligence set for Saturday, December 4 at 5:00 PM at the Judicial Archive and appoints court clerk Hilario Balbuena. The distribution list names the assigned clerk, the Archive Directorate, and the bankruptcy syndic 114/1971.'
  }),
  efectos_casimiro: ev('efectos_casimiro', {
    name: "Casimiro's Effects",
    desc: 'Victim’s effects. Two pieces: his black notebook, written in catalog hand, and the carbon copy of the letter he sent the public ministry on November 8.'
  }, {
    imageAsset: 'assets/examine_efectos_en.webp',
    caption: 'Black notebook and carbon copy of the November 8 official letter; two stopped wristwatches beside them.'
  }),
  bitacora_caldera: ev('bitacora_caldera', {
    name: 'Boiler Log',
    desc: 'Archive maintenance log. Pipe burst December 3 in corridor 7’s wall; boiler and two dryers at maximum from December 3 through 7. Attached, the archived thermograph strip; recorder in the basement, probe in corridor 7.'
  }, {
    imageAsset: 'assets/examine_termografo_en.webp',
    caption: 'December 3 maintenance log and archived thermograph strip with the corridor 7 probe note.'
  }),
  ficha_domicilio: ev('ficha_domicilio', {
    name: 'Address Card',
    desc: 'Card-file entry for Don Ramón’s neighborhood. Raised in 1969 and updated this past August. Six fields in two columns: five on the left (the last is door condition) and address on the right in four short lines reaching the lower corner. The lower-right corner is missing.'
  }, {
    imageAsset: 'assets/examine_ficha_domicilio_en.webp',
    caption: 'Cream card with six fields and missing lower-right corner, same clean straight tear as the fragment.'
  })
};
