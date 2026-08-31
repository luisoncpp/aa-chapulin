// @Architecture(descriptionShort="Case 3 day 3 bodega hotspot finds and staged bindings", type="data", icon="layers")
/**
 * Hotspots for bodega / Cabina A — day 3 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const BODEGA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_ataduras',
    label: 'Ataduras en el Piso',
    x: 58, y: 72, w: 36, h: 22,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Monchito! ¡El nudo de la mordaza está por delante, del lado izquierdo!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Si a usted lo amordaza alguien parado a sus espaldas, ¿dónde le queda el nudo?', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡Atrás! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Adelante y a la izquierda. Como se amarra uno la corbata frente al espejo.)', pose: 'donramon_sweat', sfx: 'realization', addEvidence: 'ataduras_bodega' }
    ]
  },
  {
    id: 'hotspot_polvo',
    label: 'Polvo del Piso',
    x: 28, y: 62, w: 28, h: 22,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Una marca limpia de alguien sentándose despacio. Ni un arrastrón, ni una patada. Y las muñecas del testigo... sin una sola rozadura.', pose: 'donramon_point' }
    ]
  },
  {
    id: 'hotspot_discos',
    label: 'Estante del Aniversario',
    x: 0, y: 6, w: 26, h: 70,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Dijo que bajó por estos discos. Nadie ha tocado esta caja en cinco días. El fleje sigue intacto desde el lunes.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡Chanfle! ¿Entonces a qué bajó?', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'A que lo encontraran, Chapulín. Bajó a que lo encontraran.', pose: 'donramon_point' }
    ]
  },
  {
    id: 'hotspot_cabina_a',
    label: 'Cabina A — Ventana',
    x: 42, y: 10, w: 22, h: 26,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡La misma cuña! ¡El mismo ventilador muerto!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Confirma lo de la ventana: aquí también se oye la plaza.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_sketch',
    label: 'Estante de Cintas — Cabina A',
    x: 52, y: 30, w: 20, h: 26,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Es la voz del señor Barriga! ¡Está vivo y hablando!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Es el sketch de los jueves, Chapulín. Un actor imitando al casero. Lleva años al aire y a toda la vecindad le da risa.', pose: 'donramon_idle', addEvidence: 'cinta_sketch' },
      { speaker: 'DEFENSA', text: '(...Un actor imitando al casero. Un actor. Imitando. Al casero.)', pose: 'donramon_shock', sfx: 'realization', unlockLocation: 'detention_d3' }
    ]
  }
];
