// @Architecture(descriptionShort="Case 3 Cabina B hotspot dialogues and evidence picks", type="data", icon="layers")
/**
 * Hotspots for XEVC Cabina B — day 1 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const CABINA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_trofeo',
    label: 'Mesa de la Consola',
    x: 38, y: 28, w: 28, h: 30,
    dialogue: [
      { speaker: 'PAZGUATO', text: 'Ahí lo puse yo para la foto, se veía más ordenadito.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '¿Que usted... lo puso? Sargento, eso se llama alterar la escena.', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'microfono_oro' }
    ]
  },
  {
    id: 'hotspot_piso',
    label: 'Piso y Silueta de Tiza',
    x: 28, y: 58, w: 40, h: 28,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Mire, Monchito! ¡A estos lentes les falta un ojo!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Falta el cristal derecho... y en toda esta cabina no hay ni un pedacito de vidrio. Interesante.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'lentes_barriga' }
    ]
  },
  {
    id: 'hotspot_micro',
    label: 'Micrófono de la Cabina',
    x: 58, y: 18, w: 16, h: 28,
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'Ay, es que el muchacho lo desconecta cada noche al acabar. Como digo una cosa, digo otra: yo le digo que lo deje, y él lo enrolla.', pose: 'chimoltrufia_idle', addEvidence: 'microfono_cabina' }
    ]
  },
  {
    id: 'hotspot_ventana',
    label: 'Ventana y Ventilador',
    x: 78, y: 10, w: 18, h: 36,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Aquí se oye la feria como si estuviéramos en la feria!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Anótelo, no vaya a ser.', pose: 'donramon_idle', addEvidence: 'ventana_cabina' }
    ]
  },
  {
    id: 'hotspot_cintas',
    label: 'Estante de Cintas',
    x: 8, y: 16, w: 18, h: 40,
    dialogue: [
      { speaker: 'DEFENSA', text: '(Una cinta de consejos para la digestión. Dudo que esto le sirva de algo a nadie.)', pose: 'donramon_sweat', addEvidence: 'cinta_salud' }
    ]
  },
  {
    id: 'hotspot_pasillo',
    label: 'Alfombra del Pasillo',
    x: 4, y: 62, w: 24, h: 22,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Dos rayas de grasa negra... del despacho a la Cabina B. Y un hilo de casimir gris.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'marcas_carrito' }
    ]
  }
];
