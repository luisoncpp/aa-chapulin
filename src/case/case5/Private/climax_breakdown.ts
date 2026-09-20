// @Architecture(descriptionShort="Case 5 climax Berrondo breakdown dialogue", type="data", icon="layers")
/**
 * Case 5 climax — Ruptura de Berrondo (spec §18.7).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_CLIMAX_BREAKDOWN: DialogueLine[] = [
  { speaker: 'BERRONDO', text: '......', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'Yo no heredé un archivo muerto.', pose: 'berrondo_breakdown', bgm: 'pursuit', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: '¡Yo lo mantuve vivo!', pose: 'berrondo_breakdown', sfx: 'desk_slam', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'NARRADOR', text: 'El licenciado Berrondo se levanta de la mesa de la fiscalía. Se le cae la cadena de oro del chaleco y no la recoge.', sfx: 'realization' },
  { speaker: 'BERRONDO', text: '¡Once mil cuatrocientas familias le abrieron la puerta a un vendedor y le contaron todo lo que tenían!', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: '¡Yo no fui a ninguna casa! ¡Yo no toqué ninguna puerta! ¡Yo no le puse la mano encima a nadie en veintisiete años!', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DEFENSA', text: 'Hasta el sábado.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: '¡Ese hombre iba a decir mi nombre!', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'NARRADOR', text: 'Silencio absoluto.', bgm: 'suspense' },
  { speaker: 'BERRONDO', text: '...Ese hombre iba a decir mi nombre.', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'Y no me acordaba de él.', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'Estuve dos horas el sábado en la noche buscándolo en una fotografía de mil novecientos sesenta y nueve, y no me acordaba de él.', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DON RAMÓN', text: 'Él sí se acordaba de usted, licenciado.', pose: 'donramon_idle' },
  { speaker: 'NARRADOR', text: 'Don Ramón habla desde el banquillo, sin levantar la voz.', bgm: 'suspense' },
  { speaker: 'DON RAMÓN', text: 'Hablaba igualito que usted.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Definía palabras que nadie le preguntaba. Citaba tomos. Decía «un servidor».', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Yo creí desde julio que era una manía de vendedor de enciclopedias.', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: 'Y resulta que era usted.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Ese señor se aprendió su manera de hablar en una asamblea de liquidación, en mil novecientos setenta y uno, y la trajo puesta once años.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Fue lo único que le quedó del trabajo que usted le quitó.', pose: 'donramon_shock' },
  { speaker: 'BERRONDO', text: '......', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'JUEZ', text: 'Licenciado Berrondo.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Esta corte va a asentar el delito por el que queda usted a disposición del ministerio público.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: '¿Tiene algo que declarar?', pose: 'judge_neutral' },
  { speaker: 'BERRONDO', text: '...Homicidio.', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'Del latín homo, hombre. Y caedere...', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'NARRADOR', text: 'El licenciado Berrondo se queda con la boca abierta.', bgm: 'suspense' },
  { speaker: 'BERRONDO', text: '...caedere...', pose: 'berrondo_breakdown', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'NARRADOR', text: 'No sigue.' },
  { speaker: 'NARRADOR', text: 'Por primera vez en veintisiete años, el licenciado Fulgencio Berrondo no encuentra una palabra.', sfx: 'realization' },
  { speaker: 'DON RAMÓN', text: 'Matar.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Se dice matar, licenciado.', pose: 'donramon_idle' },
  { speaker: 'NARRADOR', text: 'Berrondo se sienta. Se queda mirando la cadena de oro en el piso y no la recoge.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: 'Que se lleven al detenido.', sfx: 'gavel', pose: 'judge_gavel' }
];
