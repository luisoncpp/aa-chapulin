// @Architecture(descriptionShort="Case 4 day 2 basement boiler room with Sargento", type="data", icon="layers")
/**
 * Case 4 Day 2 — Sótano y Sala de Calderas (`hotel_sotano`).
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SOTANO_HOTSPOTS } from './hotel_sotano_hotspots.js';

export const CASE4_HOTEL_SOTANO: InvestigationScene = {
  title: 'Sótano - Sala de Calderas',
  name: 'Sótano',
  bg: 'assets/bg_hotel_sotano.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 9:30 AM. Sala de calderas en el sótano del Gran Hotel.' },
    { speaker: 'SARGENTO', text: '¡Mi Licenciado! Me escabullí mientras Super Sam fiscalizaba los tickets de la cafetería.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: '¿Qué arrojó el laboratorio sobre las manos de Botija?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: '¡Mire el dictamen del químico! Llevé los hisopos en mi bolsa del lonche.', pose: 'pazguato_saludo', addEvidence: 'residuos_manos' },
    { speaker: 'DEFENSA', text: '¿Y qué dice?', pose: 'donramon_point' },
    { speaker: 'SARGENTO', text: 'Novecientos noventa y ocho por ciento hollín mineral de carbón y azufre de caldera. Cero por ciento de pólvora o nitratos balísticos.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! ¡Eso es del trabajo honesto en la caldera, no de un trabuco!', pose: 'chapulin_point' }
  ],
  hotspots: SOTANO_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_revolver',
      label: 'Sobre el revólver en las cenizas',
      unlockedByHotspot: 'hotspot_caldera',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Olor a pólvora vieja y una bala percutida. Alguien lo arrojó por el tiro de la chimenea que baja de la Suite 304.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: '(Disparo post-mortem a través de la almohada... pero eso lo dirá el forense.)', pose: 'donramon_idle', unlockLocation: 'hotel_suite204' }
      ]
    }
  ]
};
