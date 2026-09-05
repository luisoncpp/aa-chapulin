// @Architecture(descriptionShort="Case 4 day 3 lobby with Chimoltrufia rotation", type="data", icon="layers")
/**
 * Case 4 Day 3 — Gran Vestíbulo (`hotel_lobby_d3`) — character rotation.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY_D3: InvestigationScene = {
  title: 'Gran Vestíbulo del Hotel Buena Vista',
  name: 'Gran Vestíbulo',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chimoltrufia_idle',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 11:00 AM. Don Cecilio viajó de urgencia a la capital; La Chimoltrufia atiende el mostrador empuñando un plumero con fiereza.' },
    { speaker: 'CHIMOLTRUFIA', text: '¡Ay, qué la canción! ¡Como digo una cosa, digo otra! ¡A mí nadie me viene a decir que mi Botijita envenenó a ningún cristiano!', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHAPULIN', text: '¡Sosiéguese, doña Chimoltrufia! ¡Se aprovechan de su nobleza!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '¿Limpiaste hoy temprano la suite de Rufino Rufián?', pose: 'donramon_idle' },
    { speaker: 'CHIMOLTRUFIA', text: '¡Claro que sí, Don Ramón! Ese catrín relamido se fue al juzgado dejando el cesto de la basura repleto.', pose: 'chimoltrufia_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_recepcion',
      label: 'Mostrador de Recepción',
      x: 46, y: 40, w: 44, h: 42,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: '¡Aquí limpio yo mientras el gerente atiende a los inversionistas! ¡Como digo una cosa, digo otra!', pose: 'chimoltrufia_confundida' }
      ]
    },
    {
      id: 'hotspot_candelabro',
      label: 'Candelabro de Cristal',
      x: 42, y: 8, w: 16, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Brilla igual que el primer día. Sigue sin servir de nada.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_trash',
      label: 'Lo que encontraste en la basura',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Encontré este anillo de oro manchado de cera roja... ¡y una boleta del salón de baccarat! Creía que lo iba a tirar al incinerador, ¡pero yo tengo ojo de perito valuador!', pose: 'chimoltrufia_shock', addEvidence: 'boleta_baccarat' },
        { speaker: 'CHIMOLTRUFIA', text: 'Y el anillo con escudo heráldico también lo rescaté. ¡Para limpiarlo bien con mi plumero!', pose: 'chimoltrufia_idle', addEvidence: 'sello_lacre' },
        { speaker: 'DEFENSA', text: '(Receso de quince minutos en el baccarat... ¡La coartada de Rufino se resquebraja!)', pose: 'donramon_shock', sfx: 'realization', unlockLocation: 'hotel_azotea' }
      ]
    }
  ]
};
