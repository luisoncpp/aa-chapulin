// @Architecture(descriptionShort="Case 2 court record items in Spanish and English", type="catalog", icon="database")
/**
 * Case 2 evidence entries merged into [[./EvidenceCatalog.ts]].
 */

import type { EvidenceId, EvidenceItem } from '../../types/index.js';

function ev(id: EvidenceId, text: { name: string; desc: string; updatedDesc?: string }): EvidenceItem {
  return { id, name: text.name, icon: `assets/${id}.webp`, desc: text.desc, updatedDesc: text.updatedDesc };
}

// @Section(Spanish Case 2 Evidence)
export const CASE2_EVIDENCE_ES: Record<string, EvidenceItem> = {
  chanfle_oro: ev('chanfle_oro', {
    name: 'Chanfle de Oro',
    desc: 'Reliquia de oro macizo de 5 kg con esmeraldas. Desaparecida de la caja fuerte.'
  }),
  reloj_pendulo: ev('reloj_pendulo', {
    name: 'Reloj de Péndulo Dañado',
    desc: 'Reloj electromecánico de la bóveda. Manecillas congeladas a las 9:15 PM tras el corte.'
  }),
  informe_boveda: ev('informe_boveda', {
    name: 'Informe de la Bóveda',
    desc: 'La cerradura no tiene forcejeo; se abrió limpiamente con la llave maestra.'
  }),
  palanca_rota: ev('palanca_rota', {
    name: 'Palanca Rota',
    desc: 'Barra de hierro hallada en manos del Chómpiras.',
    updatedDesc: 'Barra hallada en manos del Chómpiras. La punta tiene pintura azul marino, no gris de caja fuerte.'
  }),
  aroma_dulce: ev('aroma_dulce', {
    name: 'Muestra de Aroma Dulce',
    desc: 'Residuos de la rejilla de ventilación. Huele a rosas y valeriana.'
  }),
  plano_hacienda: ev('plano_hacienda', {
    name: 'Plano de la Hacienda',
    desc: 'Diagrama de Jirafales: ducto de ventilación y montaplatos al callejón, independientes.'
  }),
  caja_generador: ev('caja_generador', {
    name: 'Caja del Generador',
    desc: 'Caja azul abollada del ancho de la palanca. Pintura azul transferida a la palanca.'
  }),
  registro_postal: ev('registro_postal', {
    name: 'Registro Postal',
    desc: 'Entrada a las 9:30 PM con sello manual irregular. Jaimito dormía y no selló nada.'
  }),
  multa_transito: ev('multa_transito', {
    name: 'Multa de Tránsito',
    desc: 'Multa de las 9:30 PM al carrito postal abandonado en el callejón. No es inspección judicial.'
  }),
  frasco_valeriana: ev('frasco_valeriana', {
    name: 'Frasco de Esencia de Valeriana',
    desc: 'Brebaje de Clotilde. Sueño profundo ~30 min; coincide con el residuo del ducto. Lo compró un cliente misterioso.'
  }),
  molde_cera: ev('molde_cera', {
    name: 'Molde de Cera',
    desc: 'Cera de veladora con la huella de la llave maestra. El cliente misterioso la copió al comprar la esencia.'
  }),
  lata_grasa: ev('lata_grasa', {
    name: 'Lata de Grasa de Zapatos',
    desc: 'Lata del Chómpiras, ~5.3 kg. Tiene polvo dorado resplandeciente en la junta.'
  })
};

// @Section(English Case 2 Evidence)
export const CASE2_EVIDENCE_EN: Record<string, EvidenceItem> = {
  chanfle_oro: ev('chanfle_oro', {
    name: 'Golden Chanfle',
    desc: 'Solid gold 5 kg relic with emeralds. Missing from the vault safe.'
  }),
  reloj_pendulo: ev('reloj_pendulo', {
    name: 'Stopped Pendulum Clock',
    desc: 'Vault electromechanical clock. Hands frozen at 9:15 PM after the blackout.'
  }),
  informe_boveda: ev('informe_boveda', {
    name: 'Vault Report',
    desc: 'The lock shows no pry damage; it was opened cleanly with the master key.'
  }),
  palanca_rota: ev('palanca_rota', {
    name: 'Broken Crowbar',
    desc: "Iron bar found in Chómpiras's hands.",
    updatedDesc: "Found in Chómpiras's hands. The tip has navy-blue paint, not safe-gray metal."
  }),
  aroma_dulce: ev('aroma_dulce', {
    name: 'Sweet Aroma Sample',
    desc: 'Residue from the air vent. Smells strongly of roses and valerian.'
  }),
  plano_hacienda: ev('plano_hacienda', {
    name: 'Hacienda Blueprint',
    desc: "Jirafales's diagram: ventilation duct and laundry dumbwaiter to the alley."
  }),
  caja_generador: ev('caja_generador', {
    name: 'Generator Box',
    desc: 'Dented blue switch box matching the crowbar width. Blue paint on the bar.'
  }),
  registro_postal: ev('registro_postal', {
    name: 'Postal Ledger',
    desc: '9:30 PM entry with an irregular hand stamp. Jaimito was asleep and stamped nothing.'
  }),
  multa_transito: ev('multa_transito', {
    name: 'Traffic Citation',
    desc: '9:30 PM ticket for an unsupervised mail cart in the alley. Not a crime-scene search.'
  }),
  frasco_valeriana: ev('frasco_valeriana', {
    name: 'Valerian Essence Bottle',
    desc: "Clotilde's brew. Instant deep sleep ~30 min; matches the vent residue. Bought by a mysterious client."
  }),
  molde_cera: ev('molde_cera', {
    name: 'Wax Mold',
    desc: 'Candle wax bearing the master key imprint. Copied by the mysterious client while buying the essence.'
  }),
  lata_grasa: ev('lata_grasa', {
    name: 'Shoe Polish Tin',
    desc: "Chómpiras's tin, ~5.3 kg. There is sparkling gold dust at the seam."
  })
};
