// @Architecture(descriptionShort="Case 2 Clotilde lab scene with valerian and wax mold", type="data", icon="layers")
/**
 * Case 2 Day 2 — Doña Clotilde's botanical laboratory.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE2_CLOTILDE: InvestigationScene = {
  title: 'Habitación 71 y Laboratorio Botánico',
  name: 'Casa de Doña Clotilde',
  bg: 'assets/bg_clotilde.webp',
  bgm: 'casa_clotilde',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '30 de Agosto, 11:30 AM. Casa de Doña Clotilde.' },
    { speaker: 'CLOTILDE', text: '¡Ay, mi Roro! ¡Qué dicha tenerte en mi humilde morada! ¿Quieres que te prepare una tacita de café o una infusión para los nervios?', pose: 'clotilde_flustered' },
    { speaker: 'DEFENSA', text: 'Este... gracias, Doña Clotilde, pero andamos investigando un aroma muy curioso. ¿Reconoce este frasco?', pose: 'donramon_sweat' },
    { speaker: 'CLOTILDE', text: '¡Por supuesto! Es mi fórmula secreta de Esencia Concentrada de Valeriana y Rosas. Un hombre muy elegante vino antier por la tarde, justo antes del robo, a comprarme tres frascos diciendo que tenía un insomnio terrible.', pose: 'clotilde_mysterious' },
    { speaker: 'CHAPULIN', text: '¿Un hombre elegante? ¿No recuerda quién era?', pose: 'chapulin_idle' },
    { speaker: 'CLOTILDE', text: 'Llevaba el sombrero calado y una bufanda que le tapaba media cara. Pero tenía unos modales muy refinados, nada que ver con la chusma.', pose: 'clotilde_mysterious' }
  ],
  hotspots: [
    {
      id: 'hotspot_frasco',
      label: 'Frascos de Esencia',
      x: 32, y: 14, w: 24, h: 32,
      dialogue: [
        { speaker: 'CLOTILDE', text: 'Tome una muestra, mi Roro. Provoca un sueño instantáneo de unos treinta minutos. ¡Es idéntica al aroma de su pañuelo!', pose: 'clotilde_idle', addEvidence: 'frasco_valeriana' }
      ]
    },
    {
      id: 'hotspot_basura',
      label: 'Basura y Cera',
      x: 30, y: 74, w: 22, h: 24,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Doña Clotilde, ¿le importaría si revisamos un poco? ¡Chapulín, mira esto!', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Es un trozo de cera de veladora con la forma de una llave!', pose: 'chapulin_idle', addEvidence: 'molde_cera' },
        { speaker: 'DEFENSA', text: '¡El misterioso comprador usó la cera de Doña Clotilde para hacer el molde de una llave cuando vino a comprar el sedante!', pose: 'donramon_point' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_peterete_visit',
      label: 'Sobre el comprador misterioso',
      dialogue: [
        { speaker: 'CLOTILDE', text: 'Vino muy elegante, con sombrero y bufanda. Pidió la esencia "para el insomnio" y se entretuvo junto a mis veladoras. ¡Nunca le vi la cara con claridad!', pose: 'clotilde_flustered' }
      ]
    }
  ]
};
