// @Architecture(descriptionShort="Case 2 restaurant scene with blueprint and generator", type="data", icon="layers")
/**
 * Case 2 Day 1 — Doña Florinda's restaurant and generator yard.
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_RESTAURANTE: InvestigationScene = {
  title: 'Restaurante de Doña Florinda y Cuadro Eléctrico',
  name: 'Restaurante de Doña Florinda',
  bg: 'assets/bg_restaurante.jpg',
  bgm: 'restaurante',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '29 de Agosto, 1:00 PM. Restaurante de Doña Florinda.' },
    { speaker: 'JIRAFALES', text: '¡Ah, Don Ramón! He escuchado sobre la penosa situación del señor Chómpiras. Como hombre de ciencia y educación, abogo por la verdad absoluta.', pose: 'jirafales_idle' },
    { speaker: 'DEFENSA', text: 'Profesor, usted que es un pozo de sabiduría, ¿estaba cenando aquí anoche con Doña Florinda?', pose: 'donramon_idle' },
    { speaker: 'JIRAFALES', text: 'En efecto. Degustábamos una exquisita taza de café de olla cuando, de súbito, a las 9:15 PM las luces sufrieron un apagón momentáneo.', pose: 'jirafales_smoking' },
    { speaker: 'DEFENSA', text: '¡¿A las 9:15 PM?! ¡Justo la hora en que se detuvo el reloj de la bóveda!', pose: 'donramon_point' },
    { speaker: 'JIRAFALES', text: 'Así es. De hecho, como entusiasta de la arquitectura, he trazado este plano meticuloso del inmueble.', pose: 'jirafales_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_plano',
      label: 'Plano Arquitectónico',
      x: 36, y: 48, w: 22, h: 22,
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Tenga este plano. La bóveda carece de ventanas y puertas al exterior; sólo posee el ducto de ventilación y un antiguo montaplatos de lavandería que conecta con el callejón trasero.', pose: 'jirafales_idle', addEvidence: 'plano_hacienda' }
      ]
    },
    {
      id: 'hotspot_generador',
      label: 'Generador Eléctrico Exterior',
      x: 69, y: 30, w: 13, h: 28,
      dialogue: [
        { speaker: 'DEFENSA', text: '¡Miren! La punta de la palanca tiene pintura azul marino del generador... ¡la usaron para forzar la caja del generador, no la caja fuerte!', pose: 'donramon_slam', sfx: 'realization', addEvidence: 'caja_generador' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_blackout',
      label: 'Sobre el parpadeo de las luces',
      dialogue: [
        { speaker: 'JIRAFALES', text: 'El restaurante tiene acometida propia. Sólo parpadeó. El ala de la hacienda, en cambio, debió quedar a oscuras.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: '(Si cortaron el interruptor maestro a las 9:15... el reloj digital del pasillo también se quedó sin hora.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
