// @Architecture(descriptionShort="Case 3 day 3 detention visit yielding the forensic opinion", type="data", icon="layers")
/**
 * Case 3 Day 3 — Centro de Detención (`detention_d3`).
 * Runs BEFORE the precinct: it is the only source of the forensic opinion Don
 * Ramón quotes on the stand during GIRO 2, and it hands over no physical
 * evidence, so it can never be the day's last location (spec §6.4).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DETENTION_D3: InvestigationScene = {
  title: 'Centro de Detención — Tercer Día',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.jpg',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '18 de septiembre, 10:00 AM. Centro de Detención. Tercer día, el mismo banco de cemento.' },
    { speaker: 'DEFENSA', text: 'Doctor, su paciente despertó. El señor Barriga abrió los ojos esta mañana.', pose: 'donramon_idle' },
    { speaker: 'CHAPATIN', text: '...Ajá. Bueno. Ya era hora, con lo que cobro yo por cama.', pose: 'chapatin_conmovido' },
    { speaker: 'NARRADOR', text: '(Se seca los ojos con la bolsa de papel y jura que es el polvo.)' },
    { speaker: 'DEFENSA', text: 'Doctor, necesito su opinión profesional sobre una cosa. Un hombre amarrado veinte minutos, forcejeando...', pose: 'donramon_point' },
    { speaker: 'CHAPATIN', text: '...tendría las muñecas en carne viva. Y las rodillas raspadas. Y la garganta hecha trizas de gritar. Yo revisé a ese señor esa misma noche, jovencito: no tenía ni el rastro de una rozadura. Ni una.', pose: 'chapatin_enojado' },
    { speaker: 'DEFENSA', text: '¿Y por qué no lo dijo antes?', pose: 'donramon_shock' },
    { speaker: 'CHAPATIN', text: '¡Porque nadie me preguntó! ¡Todos estaban muy ocupados esposándome!', pose: 'chapatin_idle' },
    { speaker: 'CHAPULIN', text: '¡Monchito! ¡Ya tenemos con qué!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Tenemos cómo, Chapulín. Todavía nos falta demostrar QUIÉN. Y para eso necesito que al sargento le haya servido de algo la noche que se pasó en la basura.', pose: 'donramon_idle', unlockLocation: 'delegacion_d3' }
  ],
  hotspots: [
    {
      id: 'chapatin_spot',
      label: 'Doctor Chapatín',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'CHAPATIN', text: 'No me haga perder el tiempo. Vaya y gane ese juicio, jovencito.', pose: 'chapatin_conmovido' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_wrists',
      label: 'Sobre las muñecas de Aniceto',
      dialogue: [
        { speaker: 'CHAPATIN', text: 'Se lo repito: ni una rozadura. Quien se deja amarrar así... o es víctima, o es actor. Y yo no vi teatro esa noche. Vi un cuerpo limpio.', pose: 'chapatin_enojado' },
        { speaker: 'DEFENSA', text: '(Actor. La palabra que necesitaba.)', pose: 'donramon_point' }
      ]
    },
    {
      id: 'about_trial',
      label: 'Estamos listos para el juicio',
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Síganme los buenos!', pose: 'chapulin_idle' },
        { speaker: 'CHAPATIN', text: 'Y no me cobren de más. Ya pagué con tres días de celda.', pose: 'chapatin_idle' },
        { speaker: 'DEFENSA', text: 'Doctor... esta vez sí lo sacamos.', pose: 'donramon_idle' }
      ]
    }
  ]
};
