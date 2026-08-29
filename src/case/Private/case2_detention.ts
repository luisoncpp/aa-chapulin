// @Architecture(descriptionShort="Case 2 detention visit with Chómpiras talk trees", type="data", icon="layers")
/**
 * Case 2 Day 1 — Detention Center investigation scene.
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_DETENTION: InvestigationScene = {
  title: 'Centro de Detención - Sala de Visitas',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.jpg',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '29 de Agosto, 10:00 AM. Centro de Detención de la Ciudad.' },
    { speaker: 'DEFENSA', text: 'Bueno, aquí estamos. Según la policía, el sospechoso es un peligroso asaltante internacional...', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Calma, Monchito! ¡Que no panda el cúnico! Mis antenitas de vinil me dicen que el acusado es inofensivo... o muy despistado.', pose: 'chapulin_idle' },
    { speaker: 'CHOMPIRAS', text: '¡Buaaaa! ¡Yo no fui, jefecito! ¡Yo no me robé ningún chanfle de nada! ¡Lo único que me he robado son dos panes de dulce y ya los devolví mordidos!', pose: 'chompiras_crying' },
    { speaker: 'DEFENSA', text: '(Vaya facha de genio criminal... se parece a mí cuando llega el casero.)', pose: 'donramon_sweat' },
    { speaker: 'DEFENSA', text: 'A ver, muchacho, cálmate. Soy el Licenciado Monchito, tu abogado defensor, y vengo con el Chapulín Colorado.', pose: 'donramon_point', addEvidence: 'chanfle_oro' },
    { speaker: 'CHOMPIRAS', text: '¡El Chapulín Colorado! ¡No contaban con mi astucia! Digo... ¡con la suya!', pose: 'chompiras_relieved' }
  ],
  hotspots: [
    {
      id: 'chompiras_spot',
      label: 'El Chómpiras',
      x: 22, y: 16, w: 36, h: 50,
      dialogue: [
        { speaker: 'CHOMPIRAS', text: '¡Jefecito, yo sólo lustraba botas! ¡Le juro por esta lata vacía que me dio el señor Peterete!', pose: 'chompiras_nervous' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Teléfono de Visitas',
      x: 86, y: 16, w: 13, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'El auricular de visitas. Super Sam ya dejó un recado: "Time is money. Plead guilty."', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_vault',
      label: '¿Qué hacías dentro de la bóveda?',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Pues verá, el señor Peterete me dijo que me daría 50 pesos si le lustraba unas botas de plata en el sótano. Me dio mi latita de grasa vacía y me dejó encerrado.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '¿Y la palanca que tenías en la mano?', pose: 'donramon_idle' },
        { speaker: 'CHOMPIRAS', text: '¡Ah, esa palanca! Yo no la llevaba... Me quedé jetón por un humo con olor a rosas que salía de la rejilla, y cuando desperté con la alarma ya la tenía entre las manos.', pose: 'chompiras_crying', addEvidence: 'palanca_rota' },
        { speaker: 'CHAPULIN', text: '¡Eso confirma que te la plantaron mientras dormías!', pose: 'chapulin_point' }
      ]
    },
    {
      id: 'about_peterete',
      label: 'Sobre el señor Peterete',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Es un señor muy fino y elegante. Dice que es el jefe de seguridad de la hacienda y perito valuador. Trae un sombrero muy bonito y siempre me ayuda a no caer en malos pasos.', pose: 'chompiras_idle' },
        { speaker: 'CHAPULIN', text: '¡Sospechosa amabilidad! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_point', unlockLocation: 'boveda' }
      ]
    }
  ]
};
