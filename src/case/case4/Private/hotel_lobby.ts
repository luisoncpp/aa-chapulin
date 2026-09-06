// @Architecture(descriptionShort="Case 4 day 1 hotel lobby with Don Cecilio", type="data", icon="layers")
/**
 * Case 4 Day 1 — Recepción (`hotel_lobby`), 10:00. Spec §7.2.
 * Rufino de paso; anillo visible sin amenaza. El folio se anexa siempre aquí.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY: InvestigationScene = {
  title: 'Gran Vestíbulo del Hotel Buena Vista',
  name: 'Gran Vestíbulo',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'cecilio_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'Gran Hotel Buena Vista. Recepción, 10:00 de la mañana.' },
    { speaker: 'CECILIO', text: 'Su recibo, señor conde. Y esta vez conté las cifras con los anteojos puestos.', pose: 'cecilio_idle' },
    { speaker: 'RUFINO', text: 'Una precaución que este establecimiento debería elevar a costumbre.', pose: 'rufino_smug' },
    { speaker: 'CECILIO', text: 'Buenos días. ¿En qué puedo servir a la señora y a su acompañante?', pose: 'cecilio_ciego' },
    { speaker: 'DEFENSA', text: 'La señora soy yo, por lo visto.', pose: 'donramon_sweat' },
    { speaker: 'CECILIO', text: 'Le ruego mil perdones. A dos metros yo distingo colores, no personas.', pose: 'cecilio_ciego' },
    { speaker: 'CHAPULIN', text: '¡Pues a mí me distinguió muy bien! ¡Rojo!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Licenciado Monchito, defensa. Venimos por los trabajos que hizo Botija durante la gala.', pose: 'donramon_idle' },
    { speaker: 'RUFINO', text: 'A mí me subió una botella y me ayudó con un baúl. Que conste en su cuadernito que fue puntual: la puntualidad es la cortesía de los que no tienen otra.', pose: 'rufino_monocle' },
    { speaker: 'CHAPULIN', text: '¿Y ese anillote también sirve para firmar?', pose: 'chapulin_point' },
    { speaker: 'RUFINO', text: 'Para sellar correspondencia, jovencito. La cabeza gira, para proteger el relieve.', pose: 'rufino_smug' },
    { speaker: 'NARRADOR', text: 'Rufino vuelve la cabeza del anillo hacia la palma y recoge el recibo sin darle importancia.' },
    { speaker: 'RUFINO', text: 'Estaré a disposición del tribunal. Uno colabora, aunque le arruinen las vacaciones.', pose: 'rufino_smug' },
    { speaker: 'DEFENSA', text: '(Conde, monóculo y anillo de oro. Y yo con una insignia abollada.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libro',
      label: 'Libro de Servicios',
      x: 52, y: 58, w: 15, h: 16,
      dialogue: [
        { speaker: 'CECILIO', text: 'El libro del turno: vino, porte y mantenimiento, con sus horas de entrega y recepción.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'hotspot_plano',
      label: 'Plano del Mostrador',
      x: 64, y: 58, w: 27, h: 24,
      dialogue: [
        { speaker: 'CECILIO', text: 'El plano del ala oeste. Guárdelo: puerta, biombo y corredores de servicio.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'hotspot_programa',
      label: 'Programa de la Gala',
      x: 47, y: 53, w: 8, h: 15,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Efectos sonoros escénicos gestionados por el hotel! Vaya fiesta.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Existieron efectos de gala. Dónde se usaron es otra historia.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'tres_ordenes',
      label: 'Las tres órdenes',
      dialogue: [
        { speaker: 'CECILIO', text: 'Lea las filas: botella V58-17 a la 204, porte B-17 a la 304 y mantenimiento de las 23:05.', pose: 'cecilio_idle' },
        { speaker: 'CECILIO', text: 'Esto es el libro del turno. Los originales firmados van archivados por folio, no aquí.', pose: 'cecilio_idle' },
        { speaker: 'CECILIO', text: 'El portero de servicio registra la recepción de equipaje. Si necesita cotejar firmas, pida los folios concretos.', pose: 'cecilio_idle', addEvidence: 'orden_servicios' }
      ]
    },
    {
      id: 'llegar_304',
      label: 'Por dónde se llega a la 304',
      dialogue: [
        { speaker: 'CECILIO', text: 'Puerta exterior, biombo y acceso al baño; corredores de servicio por fuera.', pose: 'cecilio_idle', addEvidence: 'plano_hotel' },
        { speaker: 'DEFENSA', text: '¿Y el montacargas?', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'No constituye un acceso directo a las suites. La cabina transporta solo equipaje.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'quien_solicito',
      label: 'Quién solicitó el trabajo',
      dialogue: [
        { speaker: 'CECILIO', text: 'Aquí está el folio original del mantenimiento, archivado por número.', pose: 'cecilio_idle' },
        { speaker: 'CECILIO', text: 'Papel de la 204, letra y firma del huésped, entregado en mano a las 22:45, con el nombre de Botija escrito por el propio solicitante y la hora 23:05.', pose: 'cecilio_idle', updateEvidence: 'orden_servicios' },
        { speaker: 'DEFENSA', text: 'Quien paga una suite pide servicios. Eso no demuestra homicidio.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'el_ruido',
      label: 'El ruido',
      dialogue: [
        { speaker: 'CECILIO', text: 'Oí un gran estampido y subí. La hora viene del reloj del salón, no de un diagnóstico.', pose: 'cecilio_idle', unlockLocation: 'hotel_suite' },
        { speaker: 'CECILIO', text: 'Les ruego darse prisa. Tengo el vestíbulo lleno de huéspedes esperando una explicación.', pose: 'cecilio_idle' },
        { speaker: 'CHAPULIN', text: 'Vísteme despacio, que no por mucho madrugar tengo prisa...', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Chapulín, ni siquiera nos estamos vistiendo.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'No, espéreme: no por mucho vestirse amanece más temprano... Bueno, la idea es esa.', pose: 'chapulin_idle' },
        { speaker: 'CECILIO', text: 'Qué barbaridad. Y yo que creía que el problema eran mis anteojos.', pose: 'cecilio_ciego' }
      ]
    }
  ]
};
