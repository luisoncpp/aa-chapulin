// @Architecture(descriptionShort="Case 5 day 2 Barriga office vecindad investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 2 — Despacho del Señor Barriga (`vecindad_c5`). Spec §12.1.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_VECINDAD_HOTSPOTS } from './vecindad_hotspots.js';
import { CASE5_VECINDAD_TALKS } from './vecindad_talks.js';

export const CASE5_VECINDAD: InvestigationScene = {
  title: 'La Vecindad - Despacho del Señor Barriga',
  name: 'La Vecindad',
  bg: 'assets/bg_despacho.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'barriga_idle',
  intro: [
    { speaker: 'NARRADOR', text: '7 de diciembre, 8:30 AM. Despacho del Señor Barriga, en la vecindad de la calle del Espanto.', bg: 'assets/bg_despacho.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'BARRIGA', text: '¡Ay, no! ¡Otra vez no! ¡Ya sé para qué viene!', pose: 'barriga_enojado' },
    { speaker: 'DEFENSA', text: 'Yo no le he dicho nada.', pose: 'chapulin_idle' },
    { speaker: 'BARRIGA', text: '¡Es que cada vez que alguien de esta vecindad me toca la puerta es para pedirme prórroga!', pose: 'barriga_enojado' },
    { speaker: 'DEFENSA', text: 'Vengo por lo contrario, señor Barriga. Vengo por una renta que sí se pagó.', pose: 'chapulin_point' },
    { speaker: 'BARRIGA', text: '...Ah.', pose: 'barriga_idle' },
    { speaker: 'BARRIGA', text: 'Ésa.', pose: 'barriga_shock' },
    { speaker: 'BARRIGA', text: 'Mire, joven. Yo llevo diecisiete años cobrándole al señor Ramón. Diecisiete.', pose: 'barriga_idle' },
    { speaker: 'BARRIGA', text: 'Y el veintinueve de noviembre encontré un sobre amarillo debajo de mi puerta con diecisiete meses adentro.', pose: 'barriga_shock' },
    { speaker: 'BARRIGA', text: 'Yo me senté en el escalón y me estuve quieto diez minutos.', pose: 'barriga_idle' },
    { speaker: 'DEFENSA', text: '¿Por el gusto?', pose: 'chapulin_idle' },
    { speaker: 'BARRIGA', text: 'Por el susto. Cuando algo se arregla solo después de diecisiete años, uno sabe que algo se descompuso en otro lado.', pose: 'barriga_idle', addProfile: 'perfil_barriga' }
  ],
  hotspots: CASE5_VECINDAD_HOTSPOTS,
  talkOptions: CASE5_VECINDAD_TALKS
};
