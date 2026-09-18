// @Architecture(descriptionShort="Case 5 day 1 detention cell investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 1 — Centro de Detención, celda (`celda_c5`). Spec §10.1.
 * Chapulín habla como DEFENSA; Don Ramón es el acusado.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_CELDA_TALKS } from './celda_talks.js';

export const CASE5_CELDA: InvestigationScene = {
  title: 'Centro de Detención - Celda',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'donramon_idle',
  intro: [
    { speaker: 'NARRADOR', text: '6 de diciembre, 8:40 AM. Centro de Detención de la Ciudad.', bg: 'assets/bg_detention.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'DON RAMÓN', text: '...Buenos días, joven.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '¡Don Ramón! ¡Que no panda el cúnico! ¡Vine en cuanto me avisaron!', pose: 'chapulin_point', sfx: 'whoosh' },
    { speaker: 'DON RAMÓN', text: 'Tardaste once horas.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'Es que me avisaron hace once horas.', pose: 'chapulin_idle' },
    { speaker: 'DON RAMÓN', text: 'Ah. Entonces vas mejorando.', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: 'Don Ramón está sentado del otro lado del cristal. Trae el mismo saco de siempre y no trae el sombrero.' },
    { speaker: 'DON RAMÓN', text: 'Me acusan de homicidio calificado, Chapulín. Del señor Casimiro Lengua.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '¡¿El de las enciclopedias?! ¡Pero si usted lo metió al bote en julio!', pose: 'chapulin_panic' },
    { speaker: 'DON RAMÓN', text: 'Por eso, joven. Por eso.', pose: 'donramon_sweat' },
    { speaker: 'DON RAMÓN', text: 'Y el fiscal dice que tengo motivo, oportunidad y una tarjeta con mi domicilio en la mano del muerto.', pose: 'donramon_sweat' },
    { speaker: 'DON RAMÓN', text: 'Yo he defendido a cinco personas en mi vida. A un paletero, a un grillo, a un ratero, a un doctor y a un plomero.', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: 'Y ahora...', pose: 'donramon_shock' },
    { speaker: 'DON RAMÓN', text: '¿Y ahora quién podrá defenderme?', pose: 'donramon_shock' },
    { speaker: 'DEFENSA', text: '¡YOOOOO!', pose: 'chapulin_idle', sfx: 'whoosh' },
    { speaker: 'NARRADOR', text: 'Silencio. Don Ramón no se ríe.' },
    { speaker: 'DON RAMÓN', text: 'Ya sé, joven. Ya sé que es usted.', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: 'Es que yo era el que decía esa frase del otro lado del cristal.', pose: 'donramon_sweat' },
    { speaker: 'DEFENSA', text: '(Chanfle.)', pose: 'chapulin_idle' },
    { speaker: 'DON RAMÓN', text: 'Tenga.', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: 'Por la ranura del cristal pasa una insignia de abogado, abollada de un lado.', sfx: 'click' },
    { speaker: 'DON RAMÓN', text: 'Está un poquito abollada, pero charolea bonito. Sin eso no lo dejan pasar de la reja.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'Don Ramón, yo no soy licenciado.', pose: 'chapulin_panic' },
    { speaker: 'DON RAMÓN', text: 'Yo tampoco, joven, y llevo cinco juicios.', pose: 'donramon_idle', addEvidence: 'insignia_abogado' },
    {
      speaker: 'DEFENSA',
      text: '(Tres fichas en el Acta de Personajes. Mi cliente, yo, y el pobre señor que ya no puede declarar.)',
      pose: 'chapulin_idle',
      addProfile: 'perfil_donramon'
    },
    { speaker: 'DEFENSA', text: '(Yo también voy ahí.)', pose: 'chapulin_idle', addProfile: 'perfil_chapulin' },
    { speaker: 'DEFENSA', text: '(Y el señor Lengua, pobre.)', pose: 'chapulin_point', addProfile: 'perfil_casimiro' },
    { speaker: 'MODO TUTORIAL', text: 'El corazón amarillo del ACTA DEL JUICIO tiene dos pestañas: PRUEBAS y PERSONAS. En PERSONAS se guarda lo que sabes de cada quien y se actualiza sola.', instant: true }
  ],
  hotspots: [
    {
      id: 'hotspot_cristal',
      label: 'Cristal de visitas',
      x: 8, y: 8, w: 58, h: 58,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Vidrio rayado, bocina muerta y un letrero de «prohibido fumar» con una quemadura encima.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'hotspot_donramon',
      label: 'Don Ramón',
      x: 52, y: 38, w: 22, h: 28,
      dialogue: [
        { speaker: 'DON RAMÓN', text: 'No me mire así, joven. Yo también estoy pensando.', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: CASE5_CELDA_TALKS
};
