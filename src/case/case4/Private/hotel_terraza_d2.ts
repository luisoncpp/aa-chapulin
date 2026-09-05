// @Architecture(descriptionShort="Case 4 day 2 terrace bar with Chómpiras rotation", type="data", icon="layers")
/**
 * Case 4 Day 2 — Terraza Bar (`hotel_terraza_d2`) — character rotation.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA_D2: InvestigationScene = {
  title: 'Terraza Bar "El Chapuzón"',
  name: 'Terraza Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 1:00 PM. Terraza Bar. Maruja no está; en la barra, un botones desgarbado sorbe un refresco de naranja con popote.' },
    { speaker: 'CHOMPIRAS', text: '¡Ay, Madrecita mía! ¡No me pegue con el mazo, que de niño me caí de una barda y me quedó tierna la cabeza!', pose: 'chompiras_nervous' },
    { speaker: 'DEFENSA', text: '¡¿Chómpiras?! ¡¿Qué demonios haces tú trabajando en este palacio de millonarios?!', pose: 'donramon_shock' },
    { speaker: 'CHOMPIRAS', text: '¡Don Ramón! ¡Qué milagro que no lo veo huyendo de la renta de los dieciséis meses! Estoy chambeando de botones y elevadorista del montacargas.', pose: 'chompiras_nervous' },
    { speaker: 'CHAPULIN', text: '¡Alabado sea el trabajo honesto! Dime, buen amigo: ¿qué movimientos extraños viste anoche en los elevadores?', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_barra',
      label: 'Mostrador del Bar',
      x: 2, y: 36, w: 60, h: 40,
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Aquí me escondo cuando el gerente pasa. ¡Un refresco de naranja y a seguir chambeando!', pose: 'chompiras_relieved' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_elevator',
      label: 'El montacargas de servicio',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'A las 10:20 PM la bitácora registró carga pesada de unos 175 kilos: del piso 2 al piso 3. ¡Rufino más baúl más... bueno, usted me entiende!', pose: 'chompiras_nervous', addEvidence: 'registro_montacargas' },
        { speaker: 'CHOMPIRAS', text: 'A las 10:25 PM, carga ligera de 95 kilos: del piso 3 directo a la azotea. ¡El baúl volvió vacío!', pose: 'chompiras_relieved' },
        { speaker: 'DEFENSA', text: '(175 menos 95... ¡ochenta kilos se quedaron en el tercer piso!)', pose: 'donramon_shock', sfx: 'realization', unlockLocation: 'delegacion' }
      ]
    },
    {
      id: 'about_count',
      label: '¿Viste al Conde de Montemayor?',
      unlockedByTalk: 'about_elevator',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Lo vi caminar apurado hacia el salón de juegos alrededor de las 10:30 PM oliendo a cera caliente y tabaco fino.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '(Cera caliente... como lacre derretido.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
