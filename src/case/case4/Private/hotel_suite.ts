// @Architecture(descriptionShort="Case 4 day 1 Suite 304 crime scene with Sargento", type="data", icon="layers")
/**
 * Case 4 Day 1 — Suite Presidencial 304 (`hotel_suite`).
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
    { speaker: 'NARRADOR', text: '25 de octubre, 11:45 AM. Suite Presidencial 304.' },
    { speaker: 'SARGENTO', text: '¡A la orden de la justicia, mi Licenciado! Sargento Refugio Pazguato custodiando la escena del crimen.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: '¿Super Sam no anda por aquí contando dólares?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'No, fue a la casa de cambio a redondear centavos. ¡Pero si me sorprende cooperando con la defensa, me descuenta el aguinaldo de los próximos tres años!', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¡No temas, leal custodio del orden! ¡La nobleza de tu deber te protege!', pose: 'chapulin_idle' }
  ],
  hotspots: SUITE304_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_victim',
      label: 'Sobre la víctima',
      dialogue: [
        { speaker: 'SARGENTO', text: 'El señor Gómez, alias El Cuajinais. Huésped de paso con credencial falsa. Lo encontramos sin vida junto a la chimenea.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '¿Y el servicio de bebidas en la mesita?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Copa rota, botella descorchada y cubeta de hielo. Todo asegurado para análisis químico.', pose: 'pazguato_saludo' }
      ]
    }
  ]
};
