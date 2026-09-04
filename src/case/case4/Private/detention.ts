// @Architecture(descriptionShort="Case 4 day 1 detention visit with Botija talks", type="data", icon="layers")
/**
 * Case 4 Day 1 — Centro de Detención (`detention`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION: InvestigationScene = {
  title: 'Centro de Detención - Sala de Visitas',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_nervioso',
  intro: [
    { speaker: 'NARRADOR', text: '25 de octubre, 9:00 AM. Centro de Detención Preventiva.' },
    { speaker: 'DEFENSA', text: '¡Buenos días, vecino! Aquí está el Licenciado Monchito en persona, listo para sacarte de este atolladero.', pose: 'donramon_idle' },
    { speaker: 'BOTIJA', text: '¡Don Ramón! ¡Dígame que no me van a refundir en las Islas Marías! ¡Yo soy un hombre de bien, se lo juro por los ojos zarcos de mi Chimoltrufia adorada!', pose: 'botija_llorando' },
    { speaker: 'CHAPULIN', text: '¡Calma, no te sulfures! ¡Que no panda el cúnico! ¡El Chapulín Colorado acude para velar por los inocentes y desamparados!', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: 'Gracias, Chapulín... pero con mis ciento veinte kilos, de desamparado tengo muy poco. ¡Mire mis manos, Don Ramón! ¡El fiscal gringo jura que disparé un trabuco!', pose: 'botija_nervioso' },
    { speaker: 'DEFENSA', text: '(Tiene las manos más negras que llanta de tractor... Esto pinta más feo que mi recibo de la renta de dieciséis meses.)', pose: 'donramon_sweat' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'BOTIJA', text: '¡No me mire así, Don Ramón! ¡Yo no maté a nadie!', pose: 'botija_llorando' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Cristal de Visitas',
      x: 86, y: 16, w: 12, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Ni un recado del fiscal. Debe estar contando monedas.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_suite304',
      label: '¿Por qué estabas en la Suite 304?',
      dialogue: [
        { speaker: 'BOTIJA', text: 'A las 10:45 PM estuve raspando el hollín del tiro de la caldera en el sótano hasta las 11:10 PM. Don Cecilio me mandó a revisar la válvula de purga del radiador de la 304 porque silbaba vapor hirviendo.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'Subí con mi ropa de trabajo a las 11:12 PM. Abrí con mi llave maestra y dejé la puerta emparejada para que circulara el aire... ¡y vi al Cuajinais tirado en la alfombra junto a la chimenea!', pose: 'botija_llorando' },
        { speaker: 'DEFENSA', text: '¿Y por qué te metiste al canasto de la ropa sucia?', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: '¡Por puro pánico! A las 11:14 PM escuché pasos en el pasillo. Pensé: "Si me pescan aquí con mis antecedentes de carterista, me clavan el difunto".', pose: 'botija_nervioso' }
      ]
    },
    {
      id: 'about_wallet',
      label: 'Sobre la billetera del Cuajinais',
      unlockedByTalk: 'about_suite304',
      dialogue: [
        { speaker: 'BOTIJA', text: 'A las 11:13 PM la vi tirada en la alfombra. La levanté para ver la credencial... ¡y en eso oí pasos! Se me quedó en el bolsillo del puro susto, ¡pero no le toqué un solo centavo!', pose: 'botija_llorando', addEvidence: 'billetera_cuajinais' },
        { speaker: 'DEFENSA', text: '(Doscientos pesos intactos... Eso no huele a robo.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_chain',
      label: '¿Tú pasaste la cadena de la puerta?',
      dialogue: [
        { speaker: 'BOTIJA', text: '¡Jamás en la vida! Yo abrí con mi llave maestra y dejé la puerta sólo emparejada. Si yo hubiera querido atrincherarme, ¡le echo llave doble y pongo un ropero enfrente!', pose: 'botija_nervioso', unlockLocation: 'hotel_lobby' },
        { speaker: 'CHAPULIN', text: '¡Hay que hablar con el gerente del hotel!', pose: 'chapulin_point' }
      ]
    }
  ]
};
