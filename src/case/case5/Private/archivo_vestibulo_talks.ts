// @Architecture(descriptionShort="Case 5 day 1 vestibulo talk options and pasillo unlock", type="data", icon="layers")
/**
 * Caso 5, Día 1 — conversaciones con Nicanor. Spec §10.2.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_VESTIBULO_TALKS: TalkOption[] = [
  {
    id: 'como_encontro_cuerpo',
    label: '¿Cómo encontró el cuerpo?',
    dialogue: [
      { speaker: 'NICANOR', text: 'A las cinco treinta y cinco subo a cerrar los pasillos. Siempre a las cinco treinta y cinco, porque a las seis llega mi relevo y a las siete cierro.', pose: 'nicanor_idle' },
      { speaker: 'NICANOR', text: 'Llegué al siete y vi los zapatos primero. Los zapatos y luego lo demás.', pose: 'nicanor_sweat' },
      { speaker: 'DEFENSA', text: '¿Movió algo?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Nada. Bajé corriendo y hablé por teléfono. Yo he barrido este edificio treinta y un años y nunca había barrido un muerto.', pose: 'nicanor_sweat' },
      { speaker: 'NICANOR', text: 'Ni pienso.', pose: 'nicanor_idle' }
    ]
  },
  {
    id: 'quien_mas_estuvo',
    label: '¿Quién más estuvo aquí esa tarde?',
    unlockedByTalk: 'como_encontro_cuerpo',
    dialogue: [
      { speaker: 'NICANOR', text: 'De visita, catorce personas y todas antes de las cinco. El último fue su licenciado.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '¿Y los que no venían de visita?', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'De ésos no me consta. Yo tengo mi puerta y la señorita Genoveva tiene la suya.', pose: 'nicanor_idle' },
      { speaker: 'NICANOR', text: 'Cada quien su puerta, joven. Aquí eso es como cada quien su tumba.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '(Voy a tener que conocer a la señorita Genoveva.)', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Suba al siete si quiere. Ya levantaron la cinta esta mañana. Y no se recargue en el estante, que está enderezado.', pose: 'nicanor_escoba', unlockLocation: 'archivo_pasillo7' },
      { speaker: 'DEFENSA', text: '¿Enderezado?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Derechito. Como siempre. Ése es el único mueble de este edificio que nunca me ha dado guerra.', pose: 'nicanor_idle' }
    ]
  }
];
