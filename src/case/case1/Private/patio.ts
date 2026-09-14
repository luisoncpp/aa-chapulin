// @Architecture(descriptionShort="Case 1 day 2 loading yard with the unplated truck", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Patio de carga (`patio_carga`). Spec §11.1.
 * `hotspot_barda` desbloquea `cuarto_camaras` y exige la guantera y la bolsa.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_PATIO: InvestigationScene = {
  title: 'Patio de Carga del Museo',
  name: 'Patio de Carga',
  bg: 'assets/bg_patio_carga.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chapulin_idle',
  intro: [
    { speaker: 'NARRADOR', text: '23 de agosto, 8:30 AM. Patio de carga del Museo de las Curiosidades. Bardado, con una sola puerta y una camioneta cubierta con lona.', bg: 'assets/bg_patio_carga.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'CHAPULIN', text: '¡Aire libre! ¡Qué bonito se ve el mundo cuando a uno lo dejan salir con dos policías!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Joven, no se emocione, que si se me pierde me quedo sin cliente y sin honorarios.', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: '¡Que no panda el cúnico, licenciado! Yo nunca me pierdo. Nada más llego tarde.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Por aquí entró usted la otra noche.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'Por aquí mero. Empujé la puerta y se abrió solita.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Y nadie —nadie— revisó este patio en dos días. Porque el caso ya estaba cerrado a los cinco minutos.)', pose: 'donramon_shock' }
  ],
  hotspots: [
    {
      id: 'hotspot_camioneta',
      label: 'Camioneta cubierta con lona',
      x: 52, y: 27, w: 42, h: 48,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una camioneta de redilas bajo una lona encerada. Sin placas, delante ni atrás.' },
        { speaker: 'DEFENSA', text: 'Sin placas. Ni adelante ni atrás, ni calcomanía, ni número de motor legible.', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '¿Entonces de quién es?', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'De nadie, joven. Ése es el chiste de quitarle las placas a una camioneta.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Y en el informe de detención lo dice clarito: "vehículos del predio, sin registrar". Nadie la abrió. Nadie la tocó.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¿Y si la abrimos nosotros?', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Con la orden del juez en la mano, joven. Que yo seré pobre pero no tonto.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_guantera',
      label: 'Guantera de la camioneta',
      condition: (flags) => Boolean(flags.examined_hotspot_camioneta),
      x: 52, y: 38, w: 12, h: 25,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Dentro de la guantera: un trapo, media cajetilla de cigarros y una tarjeta mecanografiada.' },
        { speaker: 'DEFENSA', text: '...Una tarjeta. A máquina.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Seis renglones. Medidas, horarios y una frase al final que no entiendo.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '¡Léala, licenciado!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Aquí no, joven. Esto lo leo delante del juez o no lo leo.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Y está impresa al reverso de un papel membretado. "Enciclopedias El Saber Universal, Sociedad Anónima". Alguien le está dando la vuelta al papel viejo para no gastar.)', pose: 'donramon_sweat', addEvidence: 'ficha_museo' }
      ]
    },
    {
      id: 'hotspot_bolsa',
      label: 'Bolsa de lona junto a la llanta',
      x: 83, y: 58, w: 15, h: 20,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Tirada entre la llanta y la barda, una bolsa de lona gruesa, vacía, con un sello estampado.' },
        { speaker: 'DEFENSA', text: '(Sello de la Fiscalía. "Time is Money".)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '¡Chanfle! ¡Ésa es la bolsa del fiscal!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Vacía. Ni un billete, ni una moneda.', pose: 'donramon_idle' },
        { speaker: 'NARRADOR', text: 'Don Ramón le da la vuelta a la bolsa y algo brilla en la costura.', sfx: 'whoosh' },
        { speaker: 'DEFENSA', text: '...Una. Una moneda de plata atorada en la costura. Y la lona está tiznada por fuera.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '¡Tizne! ¡Como el de la lona de la camioneta!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Exactamente como el de la lona de la camioneta.', pose: 'donramon_idle', addEvidence: 'bolsa_dolares' }
      ]
    },
    {
      id: 'hotspot_puerta',
      label: 'Puerta de carga',
      x: 0, y: 13, w: 29, h: 57,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una puerta metálica de dos hojas. La chapa está floja y el pestillo no engancha.' },
        { speaker: 'DEFENSA', text: 'Vencida desde marzo, dijo la curadora.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Y no está forzada. Ni una marca, ni un rayón. Porque no hacía falta forzarla: nomás se empuja.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '¡Yo la empujé y dijo "pásele"!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Ya sé, joven. Y eso es justo lo que no me gusta: que cualquiera podía empujarla. Usted, yo, y el que le pegó al velador.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_rejilla_exterior',
      label: 'Rejilla, cara exterior',
      x: 22, y: 76, w: 17, h: 12,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Del lado del patio, la rejilla del ducto de la sala 2, al ras del suelo.' },
        { speaker: 'DEFENSA', text: 'La misma rejilla de ayer, vista por fuera. Dieciocho por veinticuatro.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Tornillos con la pintura entera. Pero la esquina de abajo de la malla está floja, como si alguien la hubiera doblado hacia arriba y la hubiera acomodado de regreso.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: 'Licenciado, por ahí no pasa ni un gato.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'No, joven. Por ahí no pasa ni un gato.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Ni un gato. Pero un ratón sí.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '¿Un ratón?', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Todavía nada, joven. Todavía nada.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_barda',
      label: 'Barda del patio',
      condition: (flags) =>
        Boolean(flags.examined_hotspot_guantera) && Boolean(flags.examined_hotspot_bolsa),
      x: 42, y: 13, w: 21, h: 20,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Barda de tabique de dos metros, con vidrios rotos encementados arriba... salvo en un tramo de metro y medio.' },
        { speaker: 'DEFENSA', text: 'Aquí faltan los vidrios. Y hay una huella de zapato en el enjarre.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '¡Del cuarenta y dos!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '¿Cómo sabe?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Porque yo calzo del treinta y ocho y no llego ni a la mitad.', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Del cuarenta y dos. Ya es algo. Pero una huella sin dueño no acusa a nadie.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Vámonos al cuarto de las cámaras, joven. Quiero ver la famosa fotografía.', pose: 'donramon_idle', unlockLocation: 'cuarto_camaras' }
      ]
    }
  ],
  talkOptions: []
};
