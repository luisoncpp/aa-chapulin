// @Architecture(descriptionShort="English Case 0 court record catalog", type="catalog", icon="database")
import type { EvidenceId, EvidenceItem } from '../../types/index.js';

function ev(id: EvidenceId, name: string, desc: string, updates?: string[], detailedView?: EvidenceItem['detailedView']): EvidenceItem {
  return { id, name, icon: `assets/${id}.webp`, desc, updates, detailedView };
}

export const CASE0_EVIDENCE_EN: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', "Attorney's Badge", 'Don Ramón’s dented badge. The first time he has used it.'),
  parte_detencion: ev('parte_detencion', 'Arrest Report', 'July 12 report: arrest at 2:15 PM. Ice bar, 40 cents, and ice-shop receipt. House 4 lock broken since March. Collection file not found. Annex: Lengua’s 2:15 description of the file.', ['Updated report: the witness described the file’s color and clasp, and stated it was carried in the left hand at 2:15.']),
  informe_lesiones: ev('informe_lesiones', 'Injury Report', 'Don Nazario Cuenca: one blow to the back of the head from a heavy flat-based object. Impact window 1:00–2:00 PM. Amnesia; unable to testify.', ['Supplement: the blow came from behind and above.', 'Further examination: the impression matches a flat base, straight edge, and roughly six kilos.'], { imageAsset: 'assets/examine_informe_lesiones.webp', caption: 'The forensic photo of Nazario, the occipital injury, and the impression traced to scale: flat base, straight edge, roughly six kilos.' }),
  recibo_hielo: ev('recibo_hielo', 'Ice-Shop Receipt', 'La Nevada receipt with two stamps: in at 1:05 PM, out at 1:55 PM, signed by the ice seller.', undefined, { imageAsset: 'assets/examine_recibo_hielo.webp', caption: 'The receipt’s two time stamps and the ice seller’s signature.' }),
  foto_patio: ev('foto_patio', 'Courtyard Photo', 'Courtyard photograph taken at 2:30 PM from house 4. It shows the washbasin, clothesline, and school across the street.', undefined, { imageAsset: 'assets/examine_foto_patio.webp', caption: 'The school in the distance: scaffolding covers the bell tower and the bell opening is empty.' }),
  plancha_carbon: ev('plancha_carbon', 'Charcoal Iron', 'Charcoal iron recovered from house 4’s shelf. Fresh soot on the handle. Stored with the handle against the wall.', undefined, { imageAsset: 'assets/examine_plancha.webp', caption: 'The iron on the shelf, soot on the handle, stored backward.' }),
  lata_ahorros: ev('lata_ahorros', 'Savings Tin', 'Candy tin containing Toribio’s full 40 pesos. Found on the table in house 4.', ['The lid has the same soot as the iron handle.'], { imageAsset: 'assets/examine_lata.webp', caption: 'The full tin on the table, with a soot mark on its lid.' }),
  maletin_cobranza: ev('maletin_cobranza', 'Collection File', 'Don Nazario’s accordion file, folded flat and emptied of the collection money, found among the witness’s sample volumes. It still holds the neighborhood rent list, one pocket per house.', undefined, { imageAsset: 'assets/examine_maletin_cobranza.webp', caption: 'The folded accordion file, its elastic cord, clasp, and one divider for each house.' }),
  tarjeta_enciclopedias: ev('tarjeta_enciclopedias', 'Encyclopedia Business Card', '“The Universal Knowledge Encyclopedias, Inc.” The company dissolved in 1971. No route sheet or orders; three sample volumes have broken spines.')
};
