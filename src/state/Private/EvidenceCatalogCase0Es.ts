// @Architecture(descriptionShort="Spanish Case 0 court record catalog", type="catalog", icon="database")
import type { EvidenceId, EvidenceItem } from '../../types/index.js';

function ev(id: EvidenceId, name: string, desc: string, updates?: string[], detailedView?: EvidenceItem['detailedView']): EvidenceItem {
  return { id, name, icon: `assets/${id}.webp`, desc, updates, detailedView };
}

export const CASE0_EVIDENCE_ES: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', 'Insignia de Abogado', 'Insignia abollada del Lic. Monchito. Primera vez que la usa.'),
  parte_detencion: ev('parte_detencion', 'Informe de Detención', 'Informe policial del 12 de julio: detención a las 14:15. Pertenencias: barra de hielo, 40 centavos y recibo de hielería. La cerradura de la vivienda 4 está descompuesta desde marzo. El maletín no fue localizado. Anexo: descripción del maletín aportada por Lengua a las 14:15.', ['Informe actualizado: el testigo describió el color y broche del maletín, y afirmó que el sospechoso lo llevaba en la mano izquierda a las 14:15.']),
  informe_lesiones: ev('informe_lesiones', 'Informe de Lesiones', 'Don Nazario Cuenca: golpe único en la región occipital, objeto pesado de base plana. Ventana del golpe entre 13:00 y 14:00. Amnesia del episodio; no puede declarar.', ['Ampliación: el golpe vino desde atrás y desde arriba.', 'Peritaje complementario: la silueta de la lesión es compatible con una base plana, borde recto y unos seis kilos.'], { imageAsset: 'assets/examine_informe_lesiones.webp', caption: 'La fotografía pericial de Don Nazario, el golpe occipital y la silueta compatible con una plancha de carbón.' }),
  recibo_hielo: ev('recibo_hielo', 'Recibo de la Hielería', 'Recibo de la Hielería La Nevada con dos sellos de hora: entrada 13:05, salida 13:55, y la firma del hielero.', undefined, { imageAsset: 'assets/examine_recibo_hielo.webp', caption: 'Los dos sellos de hora del recibo y la firma del hielero.' }),
  foto_patio: ev('foto_patio', 'Foto del Patio', 'Fotografía del patio de la vecindad tomada a las 14:30 desde la vivienda 4. Se ven el lavadero, el tendedero y la escuela de enfrente.', undefined, { imageAsset: 'assets/examine_foto_patio.webp', caption: 'La escuela del fondo: el campanario tiene andamios y el hueco de la campana está vacío.' }),
  plancha_carbon: ev('plancha_carbon', 'Plancha de Carbón', 'Plancha de carbón recogida de la repisa de la vivienda 4. Tizne fresco en el mango. Guardada con el asa hacia la pared.', undefined, { imageAsset: 'assets/examine_plancha.webp', caption: 'La plancha en la repisa, con el mango tiznado y el asa hacia la pared.' }),
  lata_ahorros: ev('lata_ahorros', 'Lata de Ahorros', 'Lata de dulces con los ahorros de Toribio: 40 pesos completos. Hallada sobre la mesa de la vivienda 4.', ['La tapa presenta el mismo tizne que el mango de la plancha.'], { imageAsset: 'assets/examine_lata.webp', caption: 'La lata completa sobre la mesa; la tapa conserva una marca de tizne.' }),
  maletin_cobranza: ev('maletin_cobranza', 'Maletín de Cobranza', 'Maletín de Don Nazario, vacío, hallado dentro del maletín de muestras del testigo. Contiene la lista de rentas de la vecindad.'),
  tarjeta_enciclopedias: ev('tarjeta_enciclopedias', 'Tarjeta de Presentación', 'Tarjeta de presentación de “Enciclopedias El Saber Universal, S.A.”. La sociedad está disuelta desde 1971. Sin hoja de ruta ni pedidos; tres tomos tienen el lomo roto.')
};
