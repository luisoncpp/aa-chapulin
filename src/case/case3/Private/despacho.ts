// @Architecture(descriptionShort="Case 3 day 2 Barriga office crime-scene hotspots", type="data", icon="layers")
/**
 * Case 3 Day 2 — Despacho del Señor Barriga (`despacho_barriga`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DESPACHO: InvestigationScene = {
  title: 'Despacho del Señor Barriga',
  name: 'Despacho Barriga',
  bg: 'assets/bg_despacho.jpg',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '17 de septiembre, 9:30 AM. Despacho de la administración, con sellos judiciales en la puerta.' },
    { speaker: 'ANICETO', text: 'Adelante, Licenciado. Me pidieron abrir yo, por ser el tesorero de la kermés... aunque le confieso que me tiemblan las manos al entrar aquí.', pose: 'aniceto_terciopelo' },
    { speaker: 'DEFENSA', text: '¿Usted lleva las cuentas del fondo?', pose: 'donramon_idle' },
    { speaker: 'ANICETO', text: 'Las llevo, las firmo y las lloro. Veinticinco años. Esta estación se sostiene con cariño y con cables amarrados.', pose: 'aniceto_terciopelo' },
    { speaker: 'CHAPULIN', text: '¡Qué bárbaro! Con razón dicen que el que mucho abarca... poco aprieta el cinturón.', pose: 'chapulin_thinking' },
    { speaker: 'ANICETO', text: '"El que mucho abarca, poco aprieta", joven. Sin cinturón. Discúlpeme, es que no puedo evitarlo.', pose: 'aniceto_thinking' }
  ],
  hotspots: [
    {
      id: 'hotspot_escritorio',
      label: 'Bajo el Escritorio',
      x: 22, y: 48, w: 30, h: 24,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Aquí está el ojo que le faltaba a los lentes!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Y el tapete es de lana roja. Las fibras del informe médico salieron de aquí. Esta es la escena del crimen de verdad.', pose: 'donramon_point', sfx: 'realization', updateEvidence: 'lentes_barriga' }
      ]
    },
    {
      id: 'hotspot_pedestal',
      label: 'Pedestal de Terciopelo',
      x: 62, y: 22, w: 20, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Pedestal vacío... cerco de polvo del tamaño exacto de la base octagonal. La placa dice: "A Aniceto Rebollar, 25 años de La Voz de Oro".', pose: 'donramon_idle', updateEvidence: 'microfono_oro' },
        { speaker: 'ANICETO', text: '...Sí. Es mío. Qué cosa tan fea, que me lo hayan usado para eso.', pose: 'aniceto_thinking' },
        { speaker: 'DEFENSA', text: '(Su trofeo estaba en el despacho. Y apareció en la cabina. O sea que subió al carrito junto con el señor Barriga.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_caja',
      label: 'Caja Fuerte y Cenicero',
      x: 8, y: 28, w: 22, h: 38,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Se robaron una hoja y se la fumaron!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Se la quemaron, Chapulín. Alguien no quería que se leyera lo del 12 de septiembre... y ese alguien sabía la combinación.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'libro_verde', unlockLocation: 'clinica_chapatin' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_tesoro',
      label: 'Sobre el Fondo de la Kermés',
      dialogue: [
        { speaker: 'ANICETO', text: 'El Libro Verde lo firmaba yo. Cada peso, cada peso faltante... y anoche arrancaron la hoja que más dolía.', pose: 'aniceto_terciopelo' },
        { speaker: 'DEFENSA', text: '(¿Quién más conocía la combinación de esa caja?)', pose: 'donramon_idle' }
      ]
    }
  ]
};
