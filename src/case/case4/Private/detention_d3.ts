// @Architecture(descriptionShort="Case 4 day 3 detention visit with Botija talks", type="data", icon="layers")
/**
 * Case 4 Day 3 — Detención (`detention_d3`), 12:00. Spec §11.3.
 * Escena de personaje: ninguna entrega; abre delegacion_d3 al terminar.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION_D3: InvestigationScene = {
  title: 'Centro de Detención — Tercer Día',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_nervioso',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 12:00 PM. Centro de Detención Preventiva.' },
    { speaker: 'BOTIJA', text: 'Ya me contaron. Que subí un baúl con un muerto adentro.', pose: 'botija_nervioso' },
    { speaker: 'DEFENSA', text: 'Sí.', pose: 'donramon_idle' },
    { speaker: 'BOTIJA', text: 'Y yo firmé el recibo. Con mi nombre y con mi letra.', pose: 'botija_llorando' },
    { speaker: 'CHAPULIN', text: 'Firmaste un trabajo. Eso fue lo que te dieron a firmar.', pose: 'chapulin_point' },
    { speaker: 'BOTIJA', text: 'Toda la vida quise un trabajo donde me pidieran firmar.', pose: 'botija_nervioso' },
    { speaker: 'CHIMOLTRUFIA', text: 'Y lo tuviste. Lo que pasa es que te lo usaron.', pose: 'chimoltrufia_idle' },
    { speaker: 'CHAPULIN', text: '¡Que no panda el cúnico! Todavía nos queda una audiencia.', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: '...¿Usted siempre habla así?', pose: 'botija_nervioso' },
    { speaker: 'CHAPULIN', text: 'Siempre. Y siempre me entienden. Tarde, pero me entienden.', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 20, y: 10, w: 60, h: 65,
      dialogue: [
        { speaker: 'BOTIJA', text: 'Pregunten lo que quieran. Ya no escondo nada.', pose: 'botija_nervioso' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Cristal de Visitas',
      x: 88, y: 15, w: 10, h: 45,
      dialogue: [
        { speaker: 'DEFENSA', text: 'El fiscal sigue sin mandar recados.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'despues_botella',
      label: 'Después de la botella',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Desde las 21:26: caldera con Chómpiras, dos avisos de planta y el porte de las 22:20.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: '(Coincide con las fichas del sótano y el testimonio del botones. No estuvo solo en ningún tramo largo.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'el_anillo',
      label: 'El anillo',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Nunca lo tuve en la mano ni me lo prestaron. Recuerdo que el huésped giró la cabeza del anillo al firmar.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: '(Un recuerdo, no una acusación.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'verguenza',
      label: 'Lo que te da vergüenza',
      condition: (flags) => Boolean(flags.talk_despues_botella) && Boolean(flags.talk_el_anillo),
      dialogue: [
        { speaker: 'BOTIJA', text: 'Me da vergüenza mi expediente, y que mi mujer creyera que había vuelto al oficio. Por eso escondí la cartera.', pose: 'botija_llorando' },
        { speaker: 'CHIMOLTRUFIA', text: 'Yo nunca creí que hubieras matado a nadie.', pose: 'chimoltrufia_idle' },
        { speaker: 'BOTIJA', text: 'Pero sí creíste que había aceptado el trabajo del Cuajinais.', pose: 'botija_nervioso' },
        { speaker: 'CHIMOLTRUFIA', text: 'Lo pensé dos días. Y me dio más coraje pensarlo que preguntártelo.', pose: 'chimoltrufia_confundida' },
        { speaker: 'BOTIJA', text: 'Le dije que no. Le dije que no delante de todo el pasillo.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: 'Eso lo oyó gente. Y por eso el fiscal cree que discutieron por dinero.', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'Discutimos porque no quise. Es la primera vez que me acusan de algo por decir que no.', pose: 'botija_llorando' },
        { speaker: 'DEFENSA', text: 'Vamos a la delegación a cerrar la cadena.', pose: 'donramon_point', unlockLocation: 'delegacion_d3' }
      ]
    }
  ]
};
