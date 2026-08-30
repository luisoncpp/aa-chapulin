// @Architecture(descriptionShort="Case 3 day 1 detention visit with Chapatín talks", type="data", icon="layers")
/**
 * Case 3 Day 1 — Centro de Detención (`detention`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DETENTION: InvestigationScene = {
  title: 'Centro de Detención - Sala de Visitas',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.jpg',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '16 de septiembre, 9:00 AM. Centro de Detención de la Ciudad.' },
    { speaker: 'DEFENSA', text: 'Buenos días, doctor. Soy el Licenciado Monchito, su abogado defensor.', pose: 'donramon_idle' },
    { speaker: 'CHAPATIN', text: '¡Yo no pedí abogado! ¡Los abogados son como las radiografías: carísimos y nunca se entiende nada!', pose: 'chapatin_enojado' },
    { speaker: 'CHAPULIN', text: '¡Calma, doctorcito! ¡Que no panda el cúnico! Venimos a ayudarlo.', pose: 'chapulin_idle' },
    { speaker: 'CHAPATIN', text: '¡Y usted quién es, el del disfraz!', pose: 'chapatin_bolsa', sfx: 'chipote' },
    { speaker: 'NARRADOR', text: '(El doctor le acomoda un bolsazo de papel al Chapulín en plena antenita.)' },
    { speaker: 'CHAPULIN', text: '¡Ay! ¡Se aprovechan de mi nobleza!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: '(Ochenta años, dos kilos de mal humor y una bolsa de papel. Este cliente me va a salir más caro que la renta.)', pose: 'donramon_sweat' }
  ],
  hotspots: [
    {
      id: 'chapatin_spot',
      label: 'Doctor Chapatín',
      x: 24, y: 14, w: 34, h: 54,
      dialogue: [
        { speaker: 'CHAPATIN', text: '¿Qué me ve? ¿Nunca había visto a un médico inocente?', pose: 'chapatin_enojado' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Teléfono de Visitas',
      x: 86, y: 16, w: 12, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Ni un recado del fiscal. Debe estar contando monedas.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_cabina',
      label: '¿Qué pasó anoche en la cabina?',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'Oí el grito por las bocinas de la plaza. Subí corriendo — bueno, corriendo lo que uno corre a mi edad, que no es de su incumbencia — y me lo encontré tirado. Le busqué el pulso y le empecé a dar primeros auxilios. Entonces entró el gendarme ese y me esposó por salvarle la vida a un hombre.', pose: 'chapatin_enojado' },
        { speaker: 'DEFENSA', text: '¿Movió usted el trofeo?', pose: 'donramon_idle' },
        { speaker: 'CHAPATIN', text: 'Lo quité de en medio para arrodillarme. ¡O querían que le hiciera masaje cardíaco haciendo equilibrio!', pose: 'chapatin_bolsa' }
      ]
    },
    {
      id: 'about_alibi',
      label: '¿Dónde estuvo entre las 10:40 y las 11:03?',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'No le importa.', pose: 'chapatin_enojado' },
        { speaker: 'DEFENSA', text: 'Doctor, con todo respeto, eso es exactamente lo que lo va a mandar veinte años a la cárcel.', pose: 'donramon_point' },
        { speaker: 'CHAPATIN', text: 'Entonces me voy veinte años. Un médico que suelta la lengua no es médico, es chismoso.', pose: 'chapatin_idle' },
        { speaker: 'CHAPULIN', text: '(Monchito... está encubriendo a alguien.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Y ese alguien es su paciente. Apunte, Chapulín: la coartada existe, pero está bajo secreto profesional.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'about_barriga_fight',
      label: 'Sobre su pleito con el Señor Barriga',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'Me quería subir la renta del consultorio un cuarenta por ciento. Le grité. Él me gritó. Nos gritamos. Así llevamos once años y ninguno se ha muerto... hasta anoche.', pose: 'chapatin_enojado', unlockLocation: 'cabina_radio' }
      ]
    }
  ]
};
