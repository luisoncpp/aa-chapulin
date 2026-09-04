// @Architecture(descriptionShort="Case 3 day 1 plaza kermés with Aniceto proverb plant", type="data", icon="layers")
/**
 * Case 3 Day 1 — Plaza de la Kermés (`plaza_kermes`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_KERMES: InvestigationScene = {
  title: 'Plaza de la Kermés',
  name: 'Plaza de la Kermés',
  bg: 'assets/bg_kermes.webp',
  bgm: 'kermes',
  speaker: 'NARRADOR',
  idlePose: 'jirafales_idle',
  intro: [
    { speaker: 'NARRADOR', text: '16 de septiembre, 3:00 PM. Plaza de la Kermés, con los papeles de colores todavía colgados.' },
    { speaker: 'FLORINDA', text: '¡Otra vez usted! ¿Ahora a quién defiende, a la chusma o a los caseros?', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: 'A un doctor de ochenta años, doña Florinda.', pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: '...Setenta y nueve. Se lo pregunté una vez y casi me mata con la bolsa.', pose: 'florinda_idle' },
    { speaker: 'JIRAFALES', text: 'Yo di el Grito a las once en punto, Licenciado. A las once y tres minutos, las bocinas de la estación transmitieron ese alarido espantoso. Lo oímos DOS MIL personas.', pose: 'jirafales_smoking' },
    { speaker: 'ANICETO', text: 'Muy buenas tardes tengan todos ustedes... Aniceto Rebollar, veinticinco años al servicio de esta vecindad. Perdonen si aún hablo despacito: anoche estuve amordazado veinte minutos que se me hicieron una eternidad.', pose: 'aniceto_idle' },
    { speaker: 'CHAPULIN', text: '¡Pobre señor! Pero no se apure, que perro que ladra... no muerde, porque no puede hacer las dos cosas al mismo tiempo.', pose: 'chapulin_idle' },
    { speaker: 'ANICETO', text: 'Permítame, joven: es "perro que ladra no muerde". La dicción, ante todo. Veinticinco años corrigiendo micrófonos, ya es enfermedad.', pose: 'aniceto_thinking' },
    { speaker: 'DEFENSA', text: '(Este señor corrige hasta a un superhéroe. Qué manía.)', pose: 'donramon_sweat' }
  ],
  hotspots: [
    {
      id: 'hotspot_bocinas',
      label: 'Bocinas de la Plaza',
      x: 82, y: 6, w: 16, h: 52,
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Esas bocinas repiten TODO lo que sale al aire de XEVC. Sin filtro y sin piedad.', pose: 'jirafales_idle' }
      ]
    },
    {
      id: 'hotspot_kiosco',
      label: 'Kiosco de la Plaza',
      x: 2, y: 8, w: 30, h: 56,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Todavía huele a cohete y a buñuelo. Aquí oyó todo el barrio el grito.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_programa',
      label: 'Su programa de anoche',
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Tenga usted mi libreto, Licenciado. Ahí está minuto por minuto todo lo que se anunció por estas bocinas.', pose: 'jirafales_idle', addEvidence: 'programa_kermes' },
        { speaker: 'DEFENSA', text: '¿Minuto por minuto, profesor?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! ¡Un maestro de ceremonias sin minutario es un charlatán con micrófono!', pose: 'jirafales_angry' },
        { speaker: 'DEFENSA', text: '(Nueve cuarenta: el aviso del niño perdido. Papeles que no le sirven a nadie. Como todos los que me tocan a mí.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'about_barriga_plaza',
      label: '¿Vieron al Señor Barriga anoche?',
      dialogue: [
        { speaker: 'FLORINDA', text: '¡Claro que lo vimos! A las 9:40 todavía estaba vivo y en esta plaza, ayudándonos a buscar a Quico.', pose: 'florinda_idle' },
        { speaker: 'QUICO', text: '¡Cállate, cállate, que me desesperas!' },
        { speaker: 'NARRADOR', text: '(La voz de Quico llega desde fuera de cuadro, detrás de un puesto.)' },
        { speaker: 'JIRAFALES', text: 'El Señor Barriga nos ayudó con el aviso por las bocinas. Cachetes muy grandes, dije. ¡Y no me equivoqué!', pose: 'jirafales_smoking' }
      ]
    },
    {
      id: 'about_aniceto',
      label: 'Sobre don Aniceto',
      dialogue: [
        { speaker: 'FLORINDA', text: 'Es el hombre más querido del barrio. Veinticinco años de voz de oro. ¡Ni se le ocurra sospechar de él!', pose: 'florinda_angry' },
        { speaker: 'ANICETO', text: 'Usted es muy amable, doña Florinda. Yo sólo quiero que atrapen a quien me dejó amarrado como un long play.', pose: 'aniceto_idle' },
        { speaker: 'DEFENSA', text: '(Nadie mira dos veces a este señor. Anotado... por si acaso.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
