// @Architecture(descriptionShort="Case 4 day 2 rooftop with Chómpiras and trunk", type="data", icon="layers")
/**
 * Case 4 Day 2 — Azotea (`hotel_azotea`), 12:00. Spec §9.4.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { AZOTEA_HOTSPOTS } from './hotel_azotea_hotspots.js';

export const CASE4_HOTEL_AZOTEA: InvestigationScene = {
  title: 'Azotea y Cuarto de Máquinas',
  name: 'Azotea',
  bg: 'assets/bg_hotel_azotea_day.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 12:00 PM. Azotea. Chómpiras y el Sargento acompañan la inspección.' },
    { speaker: 'CHOMPIRAS', text: 'El baúl está donde el registro indica. No se encontró barriendo por casualidad.', pose: 'chompiras_idle' }
  ],
  hotspots: AZOTEA_HOTSPOTS,
  talkOptions: [
    {
      id: 'cotejar_porte',
      label: 'Cotejar el porte',
      condition: (flags) => Boolean(flags.examined_hotspot_etiqueta) && Boolean(flags.examined_hotspot_faja) && Boolean(flags.examined_hotspot_forro),
      dialogue: [
        { speaker: 'SARGENTO', text: 'Voy a fotografiar el forro antes de recoger nada. Foto, número y bolsa. En ese orden.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'Y ese pedacito de tela enganchado, inclúyalo.', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: '¿Tanto trabajo por un hilo?', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: 'Chómpiras, en mi oficio los hilos son lo único que se puede jalar.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡En el mío también! Fíjese que a mis mallas...', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'No.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '...que a mis mallas se les va deshilando la costura de atrás.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Sargento, fotografíe eso también. No vaya a ser.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'El retal se compara con el desgarro de la ropa custodiada. Correspondencia de bordes y tejido.', pose: 'pazguato_saludo', addEvidence: 'baul_etiquetas' },
        { speaker: 'DEFENSA', text: '(Puede indicar contacto de esa prenda con el interior; admite que la prenda pudo estar separada del cuerpo.)', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Organizo los resultados para la delegación.', pose: 'pazguato_decidido', unlockLocation: 'delegacion' }
      ]
    }
  ]
};
