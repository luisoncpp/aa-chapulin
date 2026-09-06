// @Architecture(descriptionShort="Case 4 day 1 Suite 304 crime scene with Sargento", type="data", icon="layers")
/**
 * Case 4 Day 1 — Suite 304 (`hotel_suite`), 11:00. Spec §7.3.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE304_HOTSPOTS } from './hotel_suite_hotspots.js';

export const CASE4_HOTEL_SUITE: InvestigationScene = {
  title: 'Suite Presidencial 304',
  name: 'Suite 304',
  bg: 'assets/bg_hotel_suite.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '25 de octubre, 11:00 AM. Suite Presidencial 304.' },
    { speaker: 'SARGENTO', text: '¡A sus órdenes, mi licenciado! Sargento Refugio Pazguato, de la policía... por ahora.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: '¿Por ahora?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Es que el fiscal Super Sam me descuenta la quincena cada vez que dejo pasar a una defensa. Ya van dos.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¿Y entonces por qué nos deja pasar?', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'Porque llevo veinte años viéndoles la cara a los asesinos, y ese señor gordito no tiene esa cara. Tiene cara de que le duelen los pies.', pose: 'pazguato_decidido' },
    { speaker: 'SARGENTO', text: 'Eso sí: aquí cada objeto tiene su número. Si mueven uno, me avisan.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: '¿Y esa libreta?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Mi lista de las cosas que no debo perder.', pose: 'pazguato_idle' },
    { speaker: 'CHAPULIN', text: '¿Y dónde apunta si pierde la lista?', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: '...No me complique el procedimiento, Chapulín.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Vamos por lo que usted vio, Sargento. Lo que usted cree que pasó lo discutimos al rato.', pose: 'donramon_idle' }
  ],
  hotspots: SUITE304_HOTSPOTS,
  talkOptions: [
    {
      id: 'solicitar_cotejo',
      label: 'Solicitar el cotejo',
      condition: (flags) => Boolean(flags.examined_hotspot_cuerpo) && Boolean(flags.examined_hotspot_almohada),
      dialogue: [
        { speaker: 'DEFENSA', text: 'Quiero que comparen esta almohada con la herida. No me basta con que las dos tengan un agujero.', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Lo pido por escrito ahora mismo. El primer parte salió antes de que terminaran esos exámenes.', pose: 'pazguato_saludo', unlockLocation: 'hotel_terraza' },
        { speaker: 'DEFENSA', text: '¿Y no le van a descontar otra quincena por eso?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Sí. Pero un parte mal hecho me lo descuentan de la conciencia, y ahí no hay quincena que alcance.', pose: 'pazguato_decidido' },
        { speaker: 'CHAPULIN', text: '¡Más vale preguntar ahora que...!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Con un refrán por mañana tenemos, Chapulín.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Iba a decir "equivocarnos después".', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Ah. Pues sí.', pose: 'donramon_idle' }
      ]
    }
  ]
};
