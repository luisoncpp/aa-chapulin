// @Architecture(descriptionShort="English Court Record entries for Case 1", type="catalog", icon="database")
/**
 * Court Record — Case 1 (English). Spec §5 and §21.
 * The watchman's jargon ("the forward hold" / "the after hold") must read
 * identically here, in the D2-T1 contradiction and in line three of the card.
 */

import type { EvidenceCatalogMap } from '../../types/index.js';

export const CASE1_EVIDENCE_EN: EvidenceCatalogMap = {
  insignia_abogado: {
    id: 'insignia_abogado',
    name: "Attorney's Badge",
    icon: 'assets/insignia_abogado.webp',
    desc: "Don Ramón's dented badge. A fixture of the series: without it there is no licensed counsel."
  },
  parte_detencion: {
    id: 'parte_detencion',
    name: 'Arrest Report',
    icon: 'assets/parte_detencion_c1.webp',
    desc: 'Report of August 21st: arrest at 9:07 PM in gallery 2. Effects on the detainee: one Chipote Chillón, one box of Pastillas de Chiquitolina, a pair of Antenitas de Vinil and three pesos. Chicharra not recovered. Museum searched piece by piece. Vehicles on the premises: not logged.',
    updates: [
      'Laboratory annex: the box of Pastillas de Chiquitolina was factory-sealed, twelve of twelve. The defendant took none that night.'
    ]
  },
  chipote_chillon: {
    id: 'chipote_chillon',
    name: 'Chipote Chillón (Squeaky Mallet)',
    icon: 'assets/chipote_chillon.webp',
    desc: "The defendant's mallet. He was holding it when they arrested him in gallery 2. Squeezing it produces a squeak."
  },
  pastillas_chiquitolina: {
    id: 'pastillas_chiquitolina',
    name: 'Pastillas de Chiquitolina (Shrinking Pills)',
    icon: 'assets/pastillas_chiquitolina.webp',
    desc: 'Pills that shrink whoever takes them to the size of a mouse for fifteen minutes. They shrink whatever the person is wearing or holding as well.'
  },
  antenitas_vinil: {
    id: 'antenitas_vinil',
    name: 'Antenitas de Vinil (Vinyl Antennae)',
    icon: 'assets/antenitas_vinil.webp',
    desc: 'They may vibrate near an enemy or an important clue without identifying what triggered them. They vibrated at 8:45 PM on August 21st.'
  },
  chicharra_oro: {
    id: 'chicharra_oro',
    name: 'Chicharra Catalogue Card',
    icon: 'assets/chicharra_oro.webp',
    desc: 'Catalogue card for the stolen piece: a solid gold cicada, 1.2 kg, sharp-edged filigree, mounted on a resonance base. Lifting it off the base makes it sound, and whoever hears it freezes for about a minute.'
  },
  vitrina_rota: {
    id: 'vitrina_rota',
    name: 'Shattered Display Case',
    icon: 'assets/vitrina_rota.webp',
    desc: 'The gallery 2 display case, blown open. No glass remained inside the display case. Wooden pedestal at waist height. Beside it, the historic parrot cage lies knocked over.',
    detailedView: {
      imageAsset: 'assets/examine_vitrina_rota.webp',
      caption: 'Gallery 2 display case photographed at 11:10 PM on August 21st, before anything was collected.'
    }
  },
  rejilla_ducto: {
    id: 'rejilla_ducto',
    name: 'Duct Grate',
    icon: 'assets/rejilla_ducto.webp',
    desc: 'The gallery 2 duct grate, 18 × 24 cm, four screws with the paint unbroken. Lower corner bent; two parallel marks in the dust on the inner lip. A cream pinstriped worsted thread, recovered from the mesh.',
    detailedView: {
      imageAsset: 'assets/examine_rejilla_ducto.webp',
      caption: "Gallery 2 grate with the examiner's tape measure. The thread recovered from the mesh was bagged in waxed paper."
    }
  },
  informe_medico: {
    id: 'informe_medico',
    name: "Alma Negra's Medical Report",
    icon: 'assets/informe_medico.webp',
    desc: 'Alma Negra: a single blow to the occipital region. Heavy, dense object with no edges. Coma. Guarded prognosis. Unfit to testify.',
    updates: [
      'The wound impression indicates a flexible object that deformed on impact, and a trajectory running downward and from behind. Consistent with a dense sack of metal coin.',
      'Metal particles in the wound: 90% silver alloy, identical to the coin lodged in the seam of the canvas bag.'
    ]
  },
  bolsa_dolares: {
    id: 'bolsa_dolares',
    name: "Prosecutor's Canvas Bag",
    icon: 'assets/bolsa_dolares.webp',
    desc: "Canvas bag bearing the prosecutor's seal, found empty beside the truck. Waxed-tarp soot on the outside and one silver coin lodged in the seam.",
    detailedView: {
      imageAsset: 'assets/examine_bolsa_dolares.webp',
      caption: "Canvas bag, 82 × 50 cm, with the Prosecutor's seal. Empty weight: 900 g."
    }
  },
  ficha_museo: {
    id: 'ficha_museo',
    name: 'The Museum Card',
    icon: 'assets/ficha_museo.webp',
    desc: 'Typewritten card found in the glovebox of an unplated truck. Six lines. Printed on the back of stationery from "Enciclopedias El Saber Universal, S.A.".',
    detailedView: {
      imageAsset: 'assets/examine_ficha_museo_en.webp',
      caption: 'Typewritten index card. A printed letterhead on the reverse.'
    }
  },
  foto_crimen: {
    id: 'foto_crimen',
    name: 'Security Photograph',
    icon: 'assets/foto_crimen.webp',
    desc: 'The single frame from the corridor camera, time-stamped 9:00 PM. A running figure is visible.',
    updates: [
      'Roll log: the film is changed on Mondays. On Tuesday the 21st a single frame was left, and it fired on motion at 9:00 PM.'
    ],
    detailedView: {
      imageAsset: 'assets/examine_foto_crimen.webp',
      caption: 'The roll’s only frame. 8× enlargement. Printed time: 21:00.'
    }
  },
  plano_pasillo: {
    id: 'plano_pasillo',
    name: 'Corridor Plan',
    icon: 'assets/plano_pasillo.webp',
    desc: 'Plan of the museum service corridor. It marks the loading door, the camera, the mirror and the passage to the galleries.',
    detailedView: {
      imageAsset: 'assets/examine_plano_pasillo.webp',
      caption: 'Service-corridor plan. Door, camera, mirror and galleries.',
      clickableZones: [
        { id: 'zona_patio', x: 26, y: 26, width: 20, height: 17, tooltip: 'Loading yard' },
        { id: 'zona_camara', x: 18, y: 68, width: 12, height: 16, tooltip: 'Camera, beside the access' },
        { id: 'zona_espejo', x: 77, y: 52, width: 8, height: 28, tooltip: 'Mirror at the end of the run' },
        { id: 'zona_salas', x: 51, y: 26, width: 15, height: 26, tooltip: 'Passage to the galleries' }
      ]
    }
  },
  bitacora_ronda: {
    id: 'bitacora_ronda',
    name: 'Round Notebook',
    icon: 'assets/bitacora_ronda.webp',
    desc: 'Alma Negra\'s round notebook, in his own hand and in sailor\'s slang: "20:45 the forward hold. 21:00 the after hold." It hangs from a nail in the watchman\'s booth.'
  }
} as EvidenceCatalogMap;
