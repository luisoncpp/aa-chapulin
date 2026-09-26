// @Architecture(descriptionShort="Case 5 day 2 court correspondence investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 2 — Oficina de correspondencia del juzgado (`correspondencia`). Spec §12.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_CORRESPONDENCIA_TALKS } from './correspondencia_talks.js';

export const CASE5_CORRESPONDENCIA: InvestigationScene = {
  title: 'Oficina de Correspondencia del Juzgado',
  name: 'Correspondencia',
  bg: 'assets/bg_correspondencia.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  idlePose: 'chimoltrufia_idle',
  intro: [
    { speaker: 'NARRADOR', text: '7 de diciembre, 10:00 AM. Oficina de correspondencia del Juzgado Séptimo.', bg: 'assets/bg_correspondencia.webp', furniture: 'none', bgm: 'investigation_core' },
    { speaker: 'NARRADOR', text: 'Cuatro mil oficios al mes entran y salen por una ventanilla de madera de setenta centímetros.' },
    { speaker: 'CHIMOLTRUFIA', text: '¡Ay, qué la canción! ¡Si es el Chapulín Colorado!', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: '¡Que no panda el cúnico, señorita! Vengo por un asunto oficial.', pose: 'chapulin_point' },
    { speaker: 'CHIMOLTRUFIA', text: 'Pues aquí todo es oficial. Bueno, casi todo. Como digo una cosa, digo otra.', pose: 'chimoltrufia_idle' },
    { speaker: 'DEFENSA', text: 'Necesito saber a quién se le avisó de una diligencia que iba a haber el cuatro de diciembre.', pose: 'chapulin_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Uy, joven, por aquí pasan cuatro mil papeles al mes.', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHIMOLTRUFIA', text: 'Yo me acuerdo de todos.', pose: 'chimoltrufia_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Bueno, de ninguno.', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHIMOLTRUFIA', text: '¡Pero de ése sí!', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: '(...Voy a necesitar el libro.)', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libro_acuses',
      label: 'Libro de acuses',
      x: 65, y: 67, w: 31, h: 22,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Un libro empastado en tela azul, con una columna de firmas garabateadas al margen de cada asiento.' },
        { speaker: 'DEFENSA', text: 'Veintinueve de noviembre... veintinueve de noviembre...', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '¡Aquí! «Oficio 4471. Diligencia de cotejo documental promovida por el interno C. Lengua. Archivo Judicial, 4 de diciembre, 17:00 horas.»', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '«Entregado en: Sindicatura de la quiebra 114/1971.»', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Trae hasta el nombre del señor Lengua. Con todas sus letras.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '¿Sindi... qué?', pose: 'chapulin_panic' },
        { speaker: 'CHIMOLTRUFIA', text: 'Sindicatura, joven. Es donde vive el síndico.', pose: 'chimoltrufia_idle' },
        { speaker: 'DEFENSA', text: '¿Y el síndico qué es? ¿Un señor o un edificio?', pose: 'chapulin_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'Es un señor. Bueno, es un cargo. Bueno, como digo una cosa, digo otra.', pose: 'chimoltrufia_confundida' },
        { speaker: 'DEFENSA', text: '(Y aquí al margen hay una rúbrica. Alguien recibió ese aviso y firmó de recibido.)', pose: 'chapulin_idle', addEvidence: 'acuse_notificacion' }
      ]
    }
  ],
  talkOptions: CASE5_CORRESPONDENCIA_TALKS
};
