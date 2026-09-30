// @Architecture(descriptionShort="Resolves localized investigation place names without loading case scripts", type="catalog", icon="globe")
/**
 * Lightweight bilingual labels used by save-slot summaries. Keep these aligned
 * with each investigation scene's `title`; the full case scripts stay lazy.
 */

import type { CaseId, Language } from '../types/index.js';

type CaseLocationNames = Partial<Record<CaseId, Record<string, string>>>;

const LOCATION_NAMES: Record<Language, CaseLocationNames> = {
  es: {
    case1: {
      detention: 'Centro de Detención - Sala de Visitas', museo_sala2: 'Museo de las Curiosidades - Sala 2',
      clinica: 'Clínica Municipal - Cuarto 6', patio_carga: 'Patio de Carga del Museo',
      cuarto_camaras: 'Pasillo del Espejo - Cuarto de Cámaras',
      clinica_d2: 'Clínica Municipal - Cuarto 6 (2º día)'
    },
    case2: {
      detention: 'Centro de Detención - Sala de Visitas',
      boveda: 'Gran Bóveda del Tesoro - Escena del Crimen',
      restaurante: 'Restaurante de Doña Florinda y Cuadro Eléctrico',
      oficina_postal: 'Oficina Postal y Callejón Trasero',
      casa_clotilde: 'Habitación 71 y Laboratorio Botánico'
    },
    case3: {
      detention: 'Centro de Detención - Sala de Visitas', cabina_radio: 'Radiodifusora XEVC - Cabina B',
      plaza_kermes: 'Plaza de la Kermés', despacho_barriga: 'Despacho del Señor Barriga',
      clinica_chapatin: 'Clínica del Doctor Chapatín', delegacion: 'Delegación de Policía',
      bodega_radio: 'Bodega y Cabina A de XEVC', delegacion_d3: 'Delegación de Policía — Día 3',
      detention_d3: 'Centro de Detención — Tercer Día'
    },
    case4: {
      detention: 'Centro de Detención - Sala de Visitas',
      hotel_lobby: 'Gran Vestíbulo del Hotel Buena Vista', hotel_suite: 'Suite Presidencial 304',
      hotel_terraza: 'Terraza Bar "El Chapuzón"', hotel_sotano: 'Sótano - Sala de Calderas',
      hotel_suite204: 'Suite 204 - Habitación de Rufino Rufián',
      hotel_terraza_d2: 'Terraza Bar "El Chapuzón"', delegacion: 'Delegación de Policía',
      hotel_cava: 'Cava de Vinos del Gran Hotel', hotel_lobby_d3: 'Gran Vestíbulo del Hotel Buena Vista',
      hotel_azotea: 'Azotea y Cuarto de Máquinas', detention_d3: 'Centro de Detención — Tercer Día',
      delegacion_d3: 'Delegación de Policía — Tercer Día'
    },
    case5: {
      celda_c5: 'Centro de Detención - Celda', archivo_vestibulo: 'Archivo Judicial - Vestíbulo',
      archivo_pasillo7: 'Archivo Judicial - Pasillo 7', vecindad_c5: 'Despacho del Señor Barriga',
      correspondencia: 'Oficina de Correspondencia del Juzgado',
      despacho_berrondo: 'Despacho del Lic. Fulgencio Berrondo', delegacion_c5: 'Delegación de Policía',
      bodega_masa: 'Bodega de Bienes en Depósito', fiscalia_c5: 'Despacho del Agente del Ministerio Público',
      penal_efectos: 'Penal del Distrito — Bodega de Efectos', celda_c5_d4: 'Centro de Detención - Celda',
      archivo_caldera: 'Archivo Judicial - Sala de Calderas'
    }
  },
  en: {
    case1: {
      detention: 'Detention Centre - Visiting Room', museo_sala2: 'Museum of Curiosities - Gallery 2',
      clinica: 'Municipal Clinic - Room 6', patio_carga: 'Museum Loading Yard',
      cuarto_camaras: 'Mirror Corridor - Camera Room', clinica_d2: 'Municipal Clinic - Room 6 (day 2)'
    },
    case2: {
      detention: 'Detention Center - Visitor Room', boveda: 'Grand Treasure Vault - Crime Scene',
      restaurante: "Doña Florinda's Restaurant and Electrical Yard",
      oficina_postal: 'Post Office and Rear Alley', casa_clotilde: 'Room 71 and Botanical Laboratory'
    },
    case3: {
      detention: 'Detention Center - Visitor Room', cabina_radio: 'Radio Station XEVC - Cabina B',
      plaza_kermes: 'Plaza de la Kermés', despacho_barriga: "Señor Barriga's Office",
      clinica_chapatin: "Doctor Chapatín's Clinic", delegacion: 'Police Station',
      bodega_radio: 'XEVC Storeroom & Cabina A', delegacion_d3: 'Police Station — Day 3',
      detention_d3: 'Detention Center — Third Day'
    },
    case4: {
      detention: 'Detention Center - Visitor Room', hotel_lobby: 'Grand Lobby of Hotel Buena Vista',
      hotel_suite: 'Presidential Suite 304', hotel_terraza: 'Terrace Bar "El Chapuzón"',
      hotel_sotano: 'Basement - Boiler Room', hotel_suite204: "Suite 204 - Rufino Rufián's Room",
      hotel_terraza_d2: 'Terrace Bar "El Chapuzón"', delegacion: 'Police Precinct',
      hotel_cava: 'Wine Cellar of the Gran Hotel', hotel_lobby_d3: 'Grand Lobby of Hotel Buena Vista',
      hotel_azotea: 'Rooftop and Machine Room', detention_d3: 'Detention Center — Day Three',
      delegacion_d3: 'Police Precinct — Day Three'
    },
    case5: {
      celda_c5: 'Detention Center - Cell', archivo_vestibulo: 'Judicial Archive - Vestibule',
      archivo_pasillo7: 'Judicial Archive - Hallway 7', vecindad_c5: "Mr. Barriga's Office",
      correspondencia: 'Court Correspondence Office', despacho_berrondo: 'Office of Attorney Fulgencio Berrondo',
      delegacion_c5: 'Police Precinct', bodega_masa: 'Judicial Property Warehouse',
      fiscalia_c5: 'Public Ministry Agent Office', penal_efectos: 'District Penitentiary — Effects Warehouse',
      celda_c5_d4: 'Detention Center — Cell', archivo_caldera: 'Judicial Archive — Boiler Room'
    }
  }
};

export function getInvestigationLocationName(
  lang: Language,
  caseId: CaseId,
  locationId: string
): string | undefined {
  return LOCATION_NAMES[lang][caseId]?.[locationId];
}
