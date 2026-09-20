// @Architecture(descriptionShort="Spanish Court Record entries for Case 1", type="catalog", icon="database")
/**
 * Acta del Juicio — Caso 1 (español). Spec §5.
 * Fourteen entries; isolated from Case 2 so `getEvidenceCatalog(lang, 'case1')`
 * never leaks another case's exhibits.
 */

import type { EvidenceCatalogMap } from '../../types/index.js';

export const CASE1_EVIDENCE_ES: EvidenceCatalogMap = {
  insignia_abogado: {
    id: 'insignia_abogado',
    name: 'Insignia de Abogado',
    icon: 'assets/insignia_abogado.webp',
    desc: 'Insignia abollada de Don Ramón. Constante de la serie: sin ella no hay litigante autorizado.'
  },
  parte_detencion: {
    id: 'parte_detencion',
    name: 'Informe de Detención',
    icon: 'assets/parte_detencion_c1.webp',
    desc: 'Informe policial del 28 de agosto: detención a las 21:07 en la sala 2. Inventario del detenido: un Chipote Chillón, una caja de Pastillas de Chiquitolina, unas Antenitas de Vinil y tres pesos. Chicharra no localizada. Museo revisado pieza por pieza. Vehículos del predio: sin registrar.',
    updates: [
      'Anexo de laboratorio: la caja de Pastillas de Chiquitolina venía sellada de fábrica, doce de doce. El acusado no tomó ninguna esa noche.'
    ]
  },
  chipote_chillon: {
    id: 'chipote_chillon',
    name: 'Chipote Chillón',
    icon: 'assets/chipote_chillon.webp',
    desc: 'El mazo del acusado. Lo traía en la mano cuando lo detuvieron en la sala 2. Al apretarlo emite un chillido.'
  },
  pastillas_chiquitolina: {
    id: 'pastillas_chiquitolina',
    name: 'Pastillas de Chiquitolina',
    icon: 'assets/pastillas_chiquitolina.webp',
    desc: 'Píldoras que reducen a quien las toma al tamaño de un ratón durante quince minutos. Reducen también lo que la persona lleva puesto o en la mano.'
  },
  antenitas_vinil: {
    id: 'antenitas_vinil',
    name: 'Antenitas de Vinil',
    icon: 'assets/antenitas_vinil.webp',
    desc: 'Pueden vibrar cerca de un enemigo o de una pista importante, sin identificar qué las activó. Vibraron a las 20:45 del 28 de agosto.'
  },
  chicharra_oro: {
    id: 'chicharra_oro',
    name: 'Cédula de la Chicharra de Oro',
    icon: 'assets/chicharra_oro.webp',
    desc: 'Ficha de la pieza robada: cigarra de oro macizo, 1.2 kg, filigrana de canto vivo, montada sobre base de resonancia. Al separarla de la base suena, y quien la oye queda inmóvil cerca de un minuto.'
  },
  vitrina_rota: {
    id: 'vitrina_rota',
    name: 'Vitrina Reventada',
    icon: 'assets/vitrina_rota.webp',
    desc: 'Vitrina de la sala 2, reventada. No quedaron vidrios dentro de la vitrina. Pedestal de madera a la altura de la cintura. Junto a ella, la jaula del perico histórico volcada.',
    detailedView: {
      imageAsset: 'assets/examine_vitrina_rota.webp',
      caption: 'Vitrina de la sala 2 fotografiada a las 23:10 del 28 de agosto, antes de recoger nada.'
    }
  },
  rejilla_ducto: {
    id: 'rejilla_ducto',
    name: 'Rejilla del Ducto',
    icon: 'assets/rejilla_ducto.webp',
    desc: 'Rejilla del ducto de la sala 2, 18 × 24 cm, cuatro tornillos con la pintura sin romper. Esquina inferior con el alambre cortado, doblado hacia arriba y vuelto a acomodar; dos marcas paralelas en el polvo del lateral interior. Un hilo de casimir crema con raya, recogido de la malla.',
    detailedView: {
      imageAsset: 'assets/examine_rejilla_ducto.webp',
      caption: 'Rejilla de la sala 2 con cinta métrica del perito. El hilo recogido de la malla quedó embalado en sobre de papel encerado.'
    }
  },
  informe_medico: {
    id: 'informe_medico',
    name: 'Informe Médico de Alma Negra',
    icon: 'assets/informe_medico.webp',
    desc: 'Alma Negra: golpe único en la región occipital. Objeto pesado, denso, sin aristas. Coma. Pronóstico reservado. Sin aptitud para declarar.',
    updates: [
      'El calco indica un objeto flexible, que se deformó al impactar, y una trayectoria de arriba hacia abajo y por detrás. Compatible con un saco denso de moneda metálica.',
      'Partículas metálicas en la herida: aleación de plata al 90%, idéntica a la moneda atorada en la costura de la bolsa de lona.'
    ]
  },
  bolsa_dolares: {
    id: 'bolsa_dolares',
    name: 'Bolsa de Lona de la Fiscalía',
    icon: 'assets/bolsa_dolares.webp',
    desc: 'Bolsa de lona con el sello de la fiscalía, hallada vacía junto a la camioneta. Tizne de lona encerada y una moneda de plata atorada en la costura.',
    detailedView: {
      imageAsset: 'assets/examine_bolsa_dolares.webp',
      caption: 'Bolsa de lona, 82 × 50 cm, con sello de la Fiscalía. Peso en vacío: 900 g.'
    }
  },
  ficha_museo: {
    id: 'ficha_museo',
    name: 'Ficha del Museo',
    icon: 'assets/ficha_museo.webp',
    desc: 'Tarjeta mecanografiada hallada en la guantera de una camioneta sin placas. Seis renglones. Impresa al reverso de una papelería de "Enciclopedias El Saber Universal, S.A.".',
    detailedView: {
      imageAsset: 'assets/examine_ficha_museo.webp',
      caption: 'Tarjeta de cartulina mecanografiada, tamaño ficha de biblioteca. Al reverso, membrete impreso.'
    }
  },
  foto_crimen: {
    id: 'foto_crimen',
    name: 'Fotografía de la Cámara',
    icon: 'assets/foto_crimen.webp',
    desc: 'Único cuadro de la cámara del pasillo, con hora impresa 21:00. Se ve una figura corriendo.',
    updates: [
      'Bitácora del rollo: se cambia los lunes. El martes 28 quedaba un solo cuadro, y se disparó por movimiento a las 21:00.'
    ],
    detailedView: {
      imageAsset: 'assets/examine_foto_crimen.webp',
      caption: 'Único cuadro del rollo. Ampliación 8×. Hora impresa: 21:00.'
    }
  },
  plano_pasillo: {
    id: 'plano_pasillo',
    name: 'Plano del Pasillo',
    icon: 'assets/plano_pasillo.webp',
    desc: 'Plano del pasillo de servicio del museo. Marca la puerta de carga, la cámara, el espejo y el paso a las salas.',
    detailedView: {
      imageAsset: 'assets/examine_plano_pasillo.webp',
      caption: 'Plano del pasillo de servicio. Puerta, cámara, espejo y salas.',
      clickableZones: [
        { id: 'zona_patio', x: 26, y: 26, width: 20, height: 17, tooltip: 'Patio de carga' },
        { id: 'zona_camara', x: 18, y: 68, width: 12, height: 16, tooltip: 'Cámara, junto al acceso' },
        { id: 'zona_espejo', x: 77, y: 52, width: 8, height: 28, tooltip: 'Espejo al fondo del tramo' },
        { id: 'zona_salas', x: 51, y: 26, width: 15, height: 26, tooltip: 'Paso a las salas' }
      ]
    }
  },
  bitacora_ronda: {
    id: 'bitacora_ronda',
    name: 'Libreta de Rondas',
    icon: 'assets/bitacora_ronda.webp',
    desc: 'Libreta de rondas de Alma Negra, escrita de su puño y en jerga marinera: "20:45 bodega de proa. 21:00 bodega de popa." Cuelga de un clavo en la caseta del velador.'
  }
} as EvidenceCatalogMap;
