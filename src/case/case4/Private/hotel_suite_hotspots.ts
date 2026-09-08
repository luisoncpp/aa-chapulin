// @Architecture(descriptionShort="Case 4 Suite 304 hotspot geometry and evidence", type="data", icon="layers")
/**
 * Hotspots for Suite Presidencial 304 — day 1 investigation (spec §7.3).
 * Boxes follow the approved 16:9 Suite 304 plate at the 960x540 stage:
 * hall and bathroom (left), damaged latch (left door), radiator and hamper
 * (right wall), body/table and pillow (lower right foreground).
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE304_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Cuerpo y Mesita',
    x: 54, y: 56, w: 35, h: 38,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Posición del cadáver en foto, llave ordinaria, copa rota y botella abierta. El cierre no está en la habitación; el inventario lo hace constar sin explicar todavía por qué.', pose: 'pazguato_saludo' },
      { speaker: 'SARGENTO', text: 'Tome el parte y la foto. La hora 23:30 corresponde a la fotografía.', pose: 'pazguato_saludo', addEvidence: 'informe_policial' },
      { speaker: 'DEFENSA', text: '(La foto lo fija todo en su sitio. Ya pediremos lo que falte.)', pose: 'donramon_idle', addEvidence: 'foto_crimen' }
    ]
  },
  {
    id: 'hotspot_almohada',
    label: 'Almohada',
    x: 68, y: 64, w: 15, h: 17,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Orificio, tela ennegrecida y plumas. Sargento: quiero el cotejo de esto con la herida y el proyectil.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Lo pediré por escrito. Sin anticipar conclusiones.', pose: 'pazguato_saludo' }
    ]
  },
  {
    id: 'hotspot_recibidor',
    label: 'Recibidor y Baño',
    x: 10, y: 4, w: 29, h: 64,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Línea de paso: del recibidor al baño sin atravesar la zona del cuerpo, parcialmente oculta por el biombo.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(Desde el baño no se ve la zona del cadáver. El biombo no tapa ninguna puerta secreta.)', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_cierre',
    label: 'Cierre Arrancado',
    x: 2, y: 28, w: 9, h: 21,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Fragmento de fibra en la placa y tramo recogido del pasillo. Llevaré la pieza a la terraza para que Maruja confirme cómo se encontró.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_radiador',
    label: 'Radiador',
    x: 72, y: 27, w: 14, h: 26,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Ramal hacia la 204 y olor de combustión. Habrá que seguir las tuberías mañana.', pose: 'donramon_idle' },
      { speaker: 'SARGENTO', text: 'El olor no diagnostica autor ni clase exacta de efecto. Solo justifica seguir el ramal.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_cesto',
    label: 'Cesto',
    x: 84, y: 43, w: 15, h: 29,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Ropa con tizne compatible con el trabajo. Incómodo escondite, sin más.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_cubeta',
    label: 'Cubeta',
    x: 89, y: 77, w: 11, h: 22,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Agua y botella de mineral. Servicio ordinario de la habitación.', pose: 'pazguato_idle' }
    ]
  }
];
