// @Architecture(descriptionShort="Case 3 day 3 bodega and Cabina A investigation scene", type="data", icon="layers")
/**
 * Case 3 Day 3 — Bodega y Cabina A (`bodega_radio`).
 */

import type { InvestigationScene } from '../../../types/index.js';
import { BODEGA_HOTSPOTS } from './bodega_hotspots.js';

export const CASE3_BODEGA: InvestigationScene = {
  title: 'Bodega y Cabina A de XEVC',
  name: 'Bodega XEVC',
  bg: 'assets/bg_bodega.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '18 de septiembre, 7:00 AM. Bodega de XEVC: cables, polvo y una puerta a la Cabina A.' },
    { speaker: 'DEFENSA', text: 'Aquí hallaron amarrado a don Aniceto. Revisemos cada rincón.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Mis antenitas de vinil ya están haciendo temblorcito!', pose: 'chapulin_idle' }
  ],
  hotspots: BODEGA_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_amarrado',
      label: 'Sobre el amarre de Aniceto',
      dialogue: [
        { speaker: 'DEFENSA', text: 'Veinte minutos amordazado... y el polvo no muestra forcejeo. Eso no cuadra.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio!', pose: 'chapulin_point' }
      ]
    }
  ]
};
