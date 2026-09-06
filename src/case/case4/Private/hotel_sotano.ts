// @Architecture(descriptionShort="Case 4 day 2 basement boiler room with Sargento", type="data", icon="layers")
/**
 * Case 4 Day 2 — Sótano (`hotel_sotano`), 09:00. Spec §9.1.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SOTANO_HOTSPOTS } from './hotel_sotano_hotspots.js';

export const CASE4_HOTEL_SOTANO: InvestigationScene = {
  title: 'Sótano - Sala de Calderas',
  name: 'Sótano',
  bg: 'assets/bg_hotel_sotano.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 9:00. Sótano de calderas del Gran Hotel.' },
    { speaker: 'SARGENTO', text: 'Ya salió la comparación del arma, mi licenciado. El proyectil sí es del revólver que estaba en la habitación.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Bien. Ya sabemos qué hizo el agujero. Nos falta saber qué hizo el ruido.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'También llegó lo de las manos del detenido. Lo que traía era tizne de caldera, del puro trabajo. No es lo que supusimos cuando lo arrestamos.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¡Entonces lo detuvieron por andar sucio!', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'Lo detuvimos por estar adentro, Chapulín. Lo de andar sucio nomás nos ayudó a convencernos.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Sargento, esa frase apúntela en su informe. Ahí es donde vale.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Y la comparación con la almohada y el padrón del revólver ya quedaron en el parte.', pose: 'pazguato_saludo', updateEvidence: 'informe_policial' },
    { speaker: 'CHAPULIN', text: '¿Y ese tubo que sube hasta allá arriba?', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'Ése lo pueden seguir en el plano. El hotel ya nos autorizó revisar el ramal que pasa debajo de la 304.', pose: 'pazguato_idle' }
  ],
  hotspots: SOTANO_HOTSPOTS,
  talkOptions: [
    {
      id: 'muestras_manos',
      label: 'Las muestras de manos',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Muestras compatibles con hollín y trabajo de caldera; no apoyan la imputación inicial de residuos de disparo.', pose: 'pazguato_saludo', addEvidence: 'residuos_manos' }
      ]
    },
    {
      id: 'seguir_ramal',
      label: 'Seguir el ramal',
      condition: (flags) => Boolean(flags.examined_hotspot_conducto) && Boolean(flags.examined_hotspot_inventario),
      dialogue: [
        { speaker: 'SARGENTO', text: 'El ramal lleva a la 204. La revisamos con autorización y bajo supervisión.', pose: 'pazguato_decidido', unlockLocation: 'hotel_suite204' }
      ]
    }
  ]
};
