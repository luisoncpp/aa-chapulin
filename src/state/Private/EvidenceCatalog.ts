// @Architecture(descriptionShort="Master database of case evidence items and descriptions", type="catalog", icon="database")
/**
 * Master Evidence Catalog Database
 * Registry for [[./GameStateManager.ts]] and [[src/engine/Private/ModalManager.ts]].
 */

import type { EvidenceCatalogMap } from '../../types/index.js';

// @Section(Evidence Registry)
export const EVIDENCE_CATALOG: EvidenceCatalogMap = {
  insignia_abogado: {
    id: 'insignia_abogado',
    name: 'Insignia de Abogado CH',
    icon: 'assets/insignia_abogado.png',
    desc: 'Insignia del Abogado Defensor. Don Ramón la porta con orgullo para defender al Chapulín (¡y pagar la renta!).'
  },
  chipote_chillon: {
    id: 'chipote_chillon',
    name: 'Chipote Chillón',
    icon: 'assets/chipote_chillon.png',
    desc: 'Arma supuestamente letal. Hecho de vinil suave; sólo emite un chillido al golpear.'
  },
  pastillas_chiquitolina: {
    id: 'pastillas_chiquitolina',
    name: 'Pastillas de Chiquitolina',
    icon: 'assets/pastillas_chiquitolina.png',
    desc: 'Píldoras que reducen el tamaño de quien las toma al de un ratón durante 15 minutos.'
  },
  antenitas_vinil: {
    id: 'antenitas_vinil',
    name: 'Antenitas de Vinil',
    icon: 'assets/antenitas_vinil.png',
    desc: 'Detectan la presencia del enemigo. Registraron actividad sospechosa a las 8:45 PM.'
  },
  informe_medico: {
    id: 'informe_medico',
    name: 'Informe Médico de Alma Negra',
    icon: 'assets/informe_medico.png',
    desc: 'El guardia fue noqueado por un saco pesado con monedas metálicas, no por goma/vinil.'
  },
  foto_crimen: {
    id: 'foto_crimen',
    name: 'Foto del Sospechoso',
    icon: 'assets/foto_crimen.png',
    desc: 'Foto de seguridad a las 9:00 PM. El logo del pecho dice "HC" (¡está invertido en un espejo!).'
  },
  chicharra_oro: {
    id: 'chicharra_oro',
    name: 'Chicharra Paralizadora de Oro',
    icon: 'assets/chicharra_oro.png',
    desc: 'La reliquia invaluable robada. Quien la hace sonar una vez paraliza todo a su alrededor.'
  },
  bolsa_dolares: {
    id: 'bolsa_dolares',
    name: 'Bolsa de Dólares de Super Sam',
    icon: 'assets/bolsa_dolares.png',
    desc: 'Saco pesado con monedas de plata y billetes con el lema "Time is Money".'
  }
};
