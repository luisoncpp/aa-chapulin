// @Architecture(descriptionShort="Case 2 court record items in Spanish and English", type="catalog", icon="database")
/**
 * Case 2 evidence entries merged into [[./EvidenceCatalog.ts]].
 */

import type { EvidenceId, EvidenceItem } from '../../types/index.js';

const ICONS = {
  relic: 'assets/chicharra_oro.png',
  report: 'assets/informe_medico.png',
  photo: 'assets/foto_crimen.png',
  tool: 'assets/chipote_chillon.png',
  herb: 'assets/pastillas_chiquitolina.png',
  sack: 'assets/bolsa_dolares.png',
  badge: 'assets/insignia_abogado.png'
};

function ev(id: EvidenceId, text: { name: string; icon: string; desc: string }): EvidenceItem {
  return { id, name: text.name, icon: text.icon, desc: text.desc };
}

// @Section(Spanish Case 2 Evidence)
export const CASE2_EVIDENCE_ES: Record<string, EvidenceItem> = {
  chanfle_oro: ev('chanfle_oro', {
    name: 'Chanfle de Oro', icon: ICONS.relic,
    desc: 'Reliquia de oro macizo de 5 kg con esmeraldas. Desaparecida de la caja fuerte.'
  }),
  reloj_pendulo: ev('reloj_pendulo', {
    name: 'Reloj de Péndulo Dañado', icon: ICONS.report,
    desc: 'Reloj electromecánico de la bóveda. Manecillas congeladas a las 9:15 PM tras el corte.'
  }),
  informe_boveda: ev('informe_boveda', {
    name: 'Informe de la Bóveda', icon: ICONS.report,
    desc: 'La cerradura no tiene forcejeo; se abrió limpiamente con la llave maestra.'
  }),
  palanca_rota: ev('palanca_rota', {
    name: 'Palanca Rota', icon: ICONS.tool,
    desc: 'Barra hallada en manos del Chómpiras. La punta tiene pintura azul marino, no gris de caja fuerte.'
  }),
  aroma_dulce: ev('aroma_dulce', {
    name: 'Muestra de Aroma Dulce', icon: ICONS.herb,
    desc: 'Residuos de la rejilla de ventilación. Huele a rosas y valeriana.'
  }),
  plano_hacienda: ev('plano_hacienda', {
    name: 'Plano de la Hacienda', icon: ICONS.photo,
    desc: 'Diagrama de Jirafales: ducto de ventilación y montaplatos al callejón, independientes.'
  }),
  caja_generador: ev('caja_generador', {
    name: 'Caja del Generador', icon: ICONS.sack,
    desc: 'Caja azul abollada del ancho de la palanca. Pintura azul transferida a la palanca.'
  }),
  registro_postal: ev('registro_postal', {
    name: 'Registro Postal', icon: ICONS.photo,
    desc: 'Entrada a las 9:30 PM con sello manual irregular. Jaimito dormía y no selló nada.'
  }),
  multa_transito: ev('multa_transito', {
    name: 'Multa de Tránsito', icon: ICONS.report,
    desc: 'Multa de las 9:30 PM al carrito postal abandonado en el callejón. No es inspección judicial.'
  }),
  frasco_valeriana: ev('frasco_valeriana', {
    name: 'Frasco de Esencia de Valeriana', icon: ICONS.herb,
    desc: 'Brebaje de Clotilde. Sueño profundo ~30 min; coincide con el residuo del ducto.'
  }),
  molde_cera: ev('molde_cera', {
    name: 'Molde de Cera', icon: ICONS.badge,
    desc: 'Cera de veladora con la huella de la llave maestra. Peterete la copió al comprar la esencia.'
  }),
  lata_grasa: ev('lata_grasa', {
    name: 'Lata de Grasa de Zapatos', icon: ICONS.sack,
    desc: 'Lata del Chómpiras, ~5.3 kg, con polvo dorado en la junta. Contiene el Chanfle.'
  })
};

// @Section(English Case 2 Evidence)
export const CASE2_EVIDENCE_EN: Record<string, EvidenceItem> = {
  chanfle_oro: ev('chanfle_oro', {
    name: 'Golden Chanfle', icon: ICONS.relic,
    desc: 'Solid gold 5 kg relic with emeralds. Missing from the vault safe.'
  }),
  reloj_pendulo: ev('reloj_pendulo', {
    name: 'Stopped Pendulum Clock', icon: ICONS.report,
    desc: 'Vault electromechanical clock. Hands frozen at 9:15 PM after the blackout.'
  }),
  informe_boveda: ev('informe_boveda', {
    name: 'Vault Report', icon: ICONS.report,
    desc: 'The lock shows no pry damage; it was opened cleanly with the master key.'
  }),
  palanca_rota: ev('palanca_rota', {
    name: 'Broken Crowbar', icon: ICONS.tool,
    desc: "Found in Chómpiras's hands. The tip has navy-blue paint, not safe-gray metal."
  }),
  aroma_dulce: ev('aroma_dulce', {
    name: 'Sweet Aroma Sample', icon: ICONS.herb,
    desc: 'Residue from the air vent. Smells strongly of roses and valerian.'
  }),
  plano_hacienda: ev('plano_hacienda', {
    name: 'Hacienda Blueprint', icon: ICONS.photo,
    desc: "Jirafales's diagram: ventilation duct and laundry dumbwaiter to the alley."
  }),
  caja_generador: ev('caja_generador', {
    name: 'Generator Box', icon: ICONS.sack,
    desc: 'Dented blue switch box matching the crowbar width. Blue paint on the bar.'
  }),
  registro_postal: ev('registro_postal', {
    name: 'Postal Ledger', icon: ICONS.photo,
    desc: '9:30 PM entry with an irregular hand stamp. Jaimito was asleep and stamped nothing.'
  }),
  multa_transito: ev('multa_transito', {
    name: 'Traffic Citation', icon: ICONS.report,
    desc: '9:30 PM ticket for an unsupervised mail cart in the alley. Not a crime-scene search.'
  }),
  frasco_valeriana: ev('frasco_valeriana', {
    name: 'Valerian Essence Bottle', icon: ICONS.herb,
    desc: "Clotilde's brew. Instant deep sleep ~30 min; matches the vent residue."
  }),
  molde_cera: ev('molde_cera', {
    name: 'Wax Mold', icon: ICONS.badge,
    desc: 'Candle wax bearing the master key imprint. Copied while buying the essence.'
  }),
  lata_grasa: ev('lata_grasa', {
    name: 'Shoe Polish Tin', icon: ICONS.sack,
    desc: "Chómpiras's tin, ~5.3 kg, gold dust at the seam. The Chanfle is inside."
  })
};
