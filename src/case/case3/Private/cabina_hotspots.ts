// @Architecture(descriptionShort="Case 3 Cabina B hotspot dialogues and evidence picks", type="data", icon="layers")
/**
 * Hotspots for XEVC Cabina B — day 1 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const CABINA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_trofeo',
    label: 'Mesa de la Consola',
    x: 30, y: 28, w: 24, h: 30,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Ahí lo puse yo para la foto, se veía más ordenadito.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '¿Que usted... lo puso? Sargento, eso se llama alterar la escena.', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'microfono_oro' }
    ]
  },
  {
    id: 'hotspot_piso',
    label: 'Piso y Silueta de Tiza',
    x: 50, y: 60, w: 42, h: 32,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Mire, Monchito! ¡A estos lentes les falta un ojo!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Falta el cristal derecho... y en toda esta cabina no hay ni un pedacito de vidrio. Interesante.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'lentes_barriga' }
    ]
  },
  {
    id: 'hotspot_micro',
    label: 'Micrófono de la Cabina',
    x: 52, y: 24, w: 16, h: 40,
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'Ay, es que el muchacho lo desconecta cada noche al acabar. Como digo una cosa, digo otra: yo le digo que lo deje, y él lo enrolla.', pose: 'chimoltrufia_idle', addEvidence: 'microfono_cabina' }
    ]
  },
  {
    id: 'hotspot_ventana',
    label: 'Ventana y Ventilador',
    x: 70, y: 2, w: 28, h: 50,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Aquí se oye la feria como si estuviéramos en la feria!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Anótelo, no vaya a ser.', pose: 'donramon_idle', addEvidence: 'ventana_cabina' }
    ]
  },
  {
    id: 'hotspot_cintas',
    label: 'Estante de Cintas',
    x: 16, y: 8, w: 16, h: 44,
    dialogue: [
      { speaker: 'DEFENSA', text: '(Una cinta de consejos para la digestión. Dudo que esto le sirva de algo a nadie.)', pose: 'donramon_sweat', addEvidence: 'cinta_salud' }
    ]
  },
  {
    id: 'hotspot_pasillo',
    label: 'Alfombra del Pasillo',
    x: 0, y: 54, w: 22, h: 32,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Dos rayas de grasa negra... del despacho a la Cabina B. Y un hilo de casimir café.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'marcas_carrito' }
    ]
  }
];
