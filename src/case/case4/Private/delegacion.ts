// @Architecture(descriptionShort="Case 4 day 2 precinct visit with forensic report", type="data", icon="layers")
/**
 * Case 4 Day 2 — Delegación (`delegacion`), 14:00. Spec §9.5: escena final
 * obligatoria; las entregas ocurren al cerrar el tema, nunca en el intro.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DELEGACION: InvestigationScene = {
  title: 'Delegación de Policía',
  name: 'Delegación',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 2:00 PM. Delegación de Policía.' },
    { speaker: 'SARGENTO', text: 'Revisemos el relato inicial de Botija contra firmas y destinos. Sin inventar visitas.', pose: 'pazguato_saludo' }
  ],
  hotspots: [
    {
      id: 'hotspot_expediente',
      label: 'Expediente del Porte',
      x: 10, y: 24, w: 18, h: 32,
      dialogue: [
        { speaker: 'SARGENTO', text: 'Firmas y destinos coinciden con lo que Botija dijo desde el principio.', pose: 'pazguato_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'cotejar_firmas',
      label: 'Cotejar firmas y destinos',
      dialogue: [
        { speaker: 'SARGENTO', text: 'El porte queda revisado: números, faja y firmas en su sitio.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: '(La confirmación pericial del efecto no identifica al usuario. Solo su funcionamiento.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'resultado_laboratorio',
      label: 'El resultado del laboratorio',
      condition: (flags) => Boolean(flags.talk_cotejar_firmas),
      dialogue: [
        { speaker: 'SARGENTO', text: 'Llegó la toxicología, mi licenciado. Y ahora sí se me revolvió el estómago.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'Dígalo de una vez.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Lo que mató al señor Gómez estaba también en el vino de esta copa.', pose: 'pazguato_decidido', addEvidence: 'copa_vino' },
        { speaker: 'CHAPULIN', text: '¡Entonces no fue el balazo, ni el ruido, ni el baúl!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Fue la copa. Sargento, ¿el análisis dice quién lo puso ahí?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'No, señor. Dice qué había y por dónde entró al cuerpo. Los nombres no vienen en el frasco.', pose: 'pazguato_sweat' },
        { speaker: 'CHAPULIN', text: '¿Y la hora?', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'La misma ventana del primer informe. El laboratorio no se volvió relojero de la noche a la mañana.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'Entonces nos toca a nosotros. Hay que reconstruir quién tuvo esa botella y en qué momento.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '¡Síganme los buenos!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Chapulín, la botella está para el otro lado.', pose: 'donramon_sweat', addEvidence: 'toxicologia_vino' }
      ]
    }
  ]
};
