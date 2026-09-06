// @Architecture(descriptionShort="Case 4 day 3 wine cellar evidence scene", type="data", icon="layers")
/**
 * Case 4 Day 3 — Cava (`hotel_cava`), 09:00. Spec §11.1.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CAVA_HOTSPOTS } from './hotel_cava_hotspots.js';

export const CASE4_HOTEL_CAVA: InvestigationScene = {
  title: 'Cava de Vinos del Gran Hotel',
  name: 'Cava de Vinos',
  bg: 'assets/bg_hotel_cava.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 9:00. Cava del Gran Hotel Buena Vista.' },
    { speaker: 'SARGENTO', text: 'Aquí le traje todo lo que tenemos de esa botella, mi licenciado. Hasta el corcho que nos dio la señorita Maruja.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: '¿Desde cuándo lo tiene usted?', pose: 'donramon_point' },
    { speaker: 'SARGENTO', text: 'Desde el mediodía siguiente al hallazgo. Con hora, folio y las dos firmas. Ahí donde lo ve, ese corcho tiene mejor papelería que yo.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: 'Entonces ese pedazo de corcho salió del hotel antes de que el hombre bebiera.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Estuvo en un bolso y luego en mi archivo. Nadie más lo tocó, se lo firmo.', pose: 'pazguato_idle' },
    { speaker: 'CHAPULIN', text: '¿Y qué le vamos a preguntar a un corcho, Monchito? ¡Los corchos no hablan!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Éste sí. Le vamos a preguntar por dónde entró lo que mató al señor Gómez.', pose: 'donramon_point' },
    { speaker: 'CHAPULIN', text: '...Ay. Ya me dio cosa el corcho.', pose: 'chapulin_panic' }
  ],
  hotspots: CAVA_HOTSPOTS,
  talkOptions: [
    {
      id: 'analisis_canal',
      label: 'Pedir el análisis del canal',
      condition: (flags) => Boolean(flags.examined_hotspot_libro) && Boolean(flags.examined_hotspot_botella) && Boolean(flags.examined_hotspot_cierre),
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Tiene dos agujeros! Uno gordo y uno flaquito.', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'El gordo es del sacacorchos. El flaquito... ése no sé de qué es.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'Yo tampoco. Y a mí las cosas que no sé me quitan más el sueño que el casero.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: '¿Entonces lo anoto como está?', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'Como está. Y que lo analicen por dentro, no por fuera.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: '¿También ese puntito que se quedó atorado en el borde?', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'También. Pero que el informe diga qué es, no a qué se parece. Yo no quiero adivinanzas: quiero un análisis.', pose: 'donramon_point', unlockLocation: 'hotel_lobby_d3' },
        { speaker: 'CHAPULIN', text: '(Me están vibrando las antenitas. Aunque a lo mejor es el frío de la cava.)', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'Curso la solicitud. El resultado llegará a la delegación por la tarde.', pose: 'pazguato_decidido' }
      ]
    }
  ]
};
