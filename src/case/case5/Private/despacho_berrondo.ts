// @Architecture(descriptionShort="Case 5 day 2 Lic Berrondo office investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 2 — Despacho del Lic. Fulgencio Berrondo (`despacho_berrondo`). Spec §12.3.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_BERRONDO_HOTSPOTS } from './despacho_berrondo_hotspots.js';
import { CASE5_BERRONDO_TALKS } from './despacho_berrondo_talks.js';

export const CASE5_DESPACHO_BERRONDO: InvestigationScene = {
  title: 'Despacho del Lic. Fulgencio Berrondo',
  name: 'Despacho Berrondo',
  bg: 'assets/bg_despacho_berrondo.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'berrondo_idle',
  intro: [
    { speaker: 'NARRADOR', text: '7 de diciembre, 11:30 AM. Donceles 14, segundo piso. Despacho del Lic. Fulgencio Berrondo.', bg: 'assets/bg_despacho_berrondo.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'NARRADOR', text: 'Cuatro paredes de libros encuadernados en piel, del piso al techo, ordenados por tomo y por año.' },
    { speaker: 'BERRONDO', text: 'Adelante, licenciado. Lo estaba esperando.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: '¡¿A mí?!', pose: 'chapulin_panic' },
    { speaker: 'BERRONDO', text: 'Ayer, en la sala, se quedó usted mirando mi leontina durante cuarenta segundos. Un abogado que mira una leontina cuarenta segundos, viene.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Siéntese. ¿Café? Es de Coatepec.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: '(Este señor es el contrario y me está ofreciendo café.)', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Licenciado, usted está ayudando al fiscal que quiere encerrar a mi cliente.', pose: 'chapulin_point' },
    { speaker: 'BERRONDO', text: 'Estoy auxiliando al ministerio público, que es distinto y peor pagado: no cobro nada.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Y si su cliente es inocente, licenciado, yo seré el primero en pedirle disculpas por escrito. Con copia al colegio.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: '(No está actuando. Ése es el problema: no está actuando.)', pose: 'chapulin_idle' }
  ],
  hotspots: CASE5_BERRONDO_HOTSPOTS,
  talkOptions: CASE5_BERRONDO_TALKS
};
