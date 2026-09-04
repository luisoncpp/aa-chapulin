// @Architecture(descriptionShort="Case 4 court record items in English", type="catalog", icon="database")
/**
 * English Case 4 evidence catalog — merged when getEvidenceCatalog(lang, 'case4').
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

export const CASE4_EVIDENCE_EN: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: "Attorney's Badge",
    desc: "Licenciado Monchito's professional badge. Dented and pawned three times to pay rent, but still legally valid."
  }),
  informe_policial: ev('informe_policial', {
    name: "Sergeant's Police Report",
    desc: 'Victim died from a .38 chest shot in Suite 304 at 11:15 PM. Room locked with an interior chain latch.',
    updates: [
      "Preliminary report: time of death (11:15 PM) was set only from hallway noise through steam pipes, with no on-site forensic exam.",
      'Preliminary report refuted: legal autopsy certified death by potassium cyanide asphyxia at 9:50 PM; the 11:15 PM gunshot was post-mortem.'
    ]
  }),
  foto_crimen: ev('foto_crimen', {
    name: 'Suite 304 Photograph',
    desc: 'Crime scene at 11:30 PM. Body by the fireplace; broken glass, dried residue, and an opened Chateau Buena Vista 1958 bottle beside an ice bucket on the coffee table, secured by the Sergeant.',
    updates: [
      'Crime scene at 11:30 PM. The bucket on the coffee table holds lukewarm water without a single ice cube, proving drinks were served hours before the gunshot noise.'
    ]
  }, {
    imageAsset: 'assets/examine_foto.webp',
    caption: 'Sergeant-secured photo: coffee table with ice bucket, broken glass, and opened bottle by the fireplace.'
  }),
  candado_cadena: ev('candado_cadena', {
    name: 'Suite 304 Chain Latch',
    desc: 'Door security mechanism. Horizontal brass rail with sliding bolt. Fresh scratch on the outer edge and a nylon fishing line.'
  }, {
    imageAsset: 'assets/examine_cadena.webp',
    caption: 'Brass latch plate: sliding slot, jamb scratch, and nylon fishing line hooked on the bolt.'
  }),
  plano_hotel: ev('plano_hotel', {
    name: 'Pipes & Suites Blueprint',
    desc: 'West wing architectural section. Shows Suite 304 radiator and fireplace share a direct flue and cavity with Suite 204.',
    updates: [
      'West wing blueprint. Confirms direct vertical steam-bleed piping between Suites 204 and 304—the conduit that carried the blank-cartridge detonation.'
    ]
  }, {
    imageAsset: 'assets/examine_plano.webp',
    caption: 'West wing cross-section: shared chimney flue and vertical steam bleed between Suites 204 and 304.'
  }),
  residuos_manos: ev('residuos_manos', {
    name: "Botija's Hand Residue Analysis",
    desc: 'Black powder from Botija\'s hands and black work clothes. Super Sam initially called it "fresh gunshot residue".',
    updates: [
      'Corrected chemical analysis: 98% coal-boiler soot and sulfur; 0% gunpowder or ballistic nitrates. Rules out firing a firearm.'
    ]
  }),
  billetera_cuajinais: ev('billetera_cuajinais', {
    name: "Victim's Wallet",
    desc: 'Crocodile-skin wallet found in Botija\'s hands. Holds intact $200, "Mr. Gómez" ID, and a ripped secret lining.',
    updates: [
      'Crocodile wallet with $200 intact. Forensics unstitched the secret lining and recovered locker key #42 from the bus terminal.'
    ]
  }),
  informe_forense: ev('informe_forense', {
    name: 'Toxicology Autopsy',
    desc: 'Official pathology report: chest shot was post-mortem (no vital reaction or internal bleeding). True cause: potassium cyanide asphyxia at 9:50 PM.'
  }),
  casquillo_fogueo: ev('casquillo_fogueo', {
    name: 'Burned Blank Cartridge',
    desc: '.38 blank casing without projectile, found inside Suite 204 radiator bleed valve. Traces of slow-burning sulfur fuse.'
  }),
  registro_montacargas: ev('registro_montacargas', {
    name: 'Freight Elevator Log',
    desc: 'Service lift record: 10:20 PM heavy load (~175 kg, floor 2 to 3); 10:25 PM light load (~95 kg, floor 3 to roof).'
  }),
  copa_vino: ev('copa_vino', {
    name: 'Broken Wine Glass',
    desc: 'Fine crystal with Chateau Buena Vista 1958 red wine residue. Sediment tested positive for lethal potassium cyanide.'
  }),
  botella_vino: ev('botella_vino', {
    name: 'Chateau Buena Vista 1958 Bottle',
    desc: "Rufino's private reserve bottle. Cork removed intact. Red wax seal dome hides a needle pinhole patched with melted wax."
  }, {
    imageAsset: 'assets/examine_botella.webp',
    caption: 'Opened bottle neck: red wax seal dome with a hair-thin needle puncture resealed with melted wax.'
  }),
  boleta_baccarat: ev('boleta_baccarat', {
    name: "Rufino's Baccarat Slip",
    desc: 'Casino betting slip. Shows play from 10:30 PM to 11:30 PM, including a stamped 15-minute recess (11:10 to 11:25 PM).'
  }),
  baul_etiquetas: ev('baul_etiquetas', {
    name: 'Wheeled Travel Trunk',
    desc: 'English leather trunk hidden in the roof machine room. Velvet lining held Cuajinais suit wool fibers and coal dust.'
  }),
  sello_lacre: ev('sello_lacre', {
    name: 'Gold Wax Seal Ring',
    desc: "Heraldic signet ring belonging to Rufino Rufián. Found in Suite 204 trash; microscopic traces of melted red wax in the relief."
  }),
  nota_amenaza: ev('nota_amenaza', {
    name: 'Extortion Telegram Receipt',
    desc: 'Official telegraph receipt from Cuajinais\' locker: "Count of Montemayor: pay my $50,000 for Cleopatra\'s necklace or police learn everything. Room 304."'
  }, {
    imageAsset: 'assets/examine_nota.webp',
    caption: 'National Telegraphs form with bus-terminal postmark (8:15 PM, October 24).',
    clickableZones: [
      { id: 'destinatario_conde', x: 18, y: 28, width: 64, height: 10, tooltip: 'Addressee: Count of Montemayor' },
      { id: 'monto_extorsion', x: 22, y: 48, width: 28, height: 8, tooltip: 'Demand: $50,000 for Cleopatra\'s necklace' },
      { id: 'habitacion_304', x: 58, y: 62, width: 22, height: 8, tooltip: 'Room 304' }
    ]
  })
};
