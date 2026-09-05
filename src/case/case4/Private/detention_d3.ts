// @Architecture(descriptionShort="Case 4 day 3 detention visit yielding extortion note", type="data", icon="layers")
/**
 * Case 4 Day 3 — Centro de Detención (`detention_d3`).
 * LAST location of day 3: `nota_amenaza` gates trial readiness (spec §6.4).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION_D3: InvestigationScene = {
  title: 'Centro de Detención — Tercer Día',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_aliviado',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 3:30 PM. Centro de Detención Preventiva.' },
    { speaker: 'DEFENSA', text: 'Botija, el químico descosió el forro secreto de la billetera de Cuajinais y halló una llavecita de taquilla de la estación de autobuses. El Sargento fue a abrirla de inmediato.', pose: 'donramon_idle', updateEvidence: 'billetera_cuajinais' },
    { speaker: 'BOTIJA', text: '¿Y qué guardaba el Cuajinais ahí, Don Ramón?', pose: 'botija_aliviado' },
    { speaker: 'SARGENTO', text: '¡El resguardo oficial de un telegrama de extorsión!', pose: 'pazguato_saludo', addEvidence: 'nota_amenaza' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! ¡El Cuajinais vino a cobrarle al falso conde!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '(Giro 2... Con esto destrozamos la coartada de Rufino en el juicio final.)', pose: 'donramon_point' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'BOTIJA', text: '¡Gracias, Don Ramón! ¡Ya casi puedo oler los churros de la esquina!', pose: 'botija_aliviado' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Cristal de Visitas',
      x: 86, y: 16, w: 12, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Todavía ni un recado del fiscal. Debe estar contando monedas.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_telegram',
      label: 'Sobre el telegrama de extorsión',
      dialogue: [
        { speaker: 'SARGENTO', text: '"Conde de Montemayor: o pagas mis $50,000 del collar de Cleopatra o la policía sabrá todo. Habitación 304."', pose: 'pazguato_decidido' },
        { speaker: 'BOTIJA', text: '¡Ese Cuajinais era un bribón, pero no merecía morir envenenado!', pose: 'botija_aliviado' },
        { speaker: 'DEFENSA', text: '(El móvil real: extorsión, no robo. Mañana lo presentamos en la apertura del juicio.)', pose: 'donramon_point' }
      ]
    }
  ]
};
