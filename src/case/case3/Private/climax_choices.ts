// @Architecture(descriptionShort="Spanish Case 3 climax choice prompts", type="data", icon="layers")
/**
 * Case 3 climax multiple-choice prompts (voice trap + proverb trap).
 */

import type { ChoicePrompt } from '../../../types/index.js';

export const CASE3_CLIMAX_CHOICES: ChoicePrompt[] = [
  {
    id: 'prove_voice',
    question: '¿Qué le falta a la defensa para cerrar el caso?',
    options: [
      { id: 'signed_confession', label: 'Su confesión firmada' },
      { id: 'prove_voice', label: 'Probar que la voz del cartucho es la suya' },
      { id: 'trophy_prints', label: 'Las huellas en el trofeo' }
    ],
    correctId: 'prove_voice',
    failDialogue: [
      { speaker: 'DEFENSA', text: '¡Pues... que confiese, señor Juez! ¡Que confiese ya!', pose: 'donramon_sweat' },
      { speaker: 'ANICETO', text: 'Con mucho gusto confieso... que estoy indignado.', pose: 'aniceto_terciopelo' },
      { speaker: 'JUEZ', text: 'Licenciado, este tribunal no funciona con buenos deseos. ¡Penalización!', pose: 'judge_gavel', sfx: 'damage' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Falta una sola cosa, señor Juez: que esta sala oiga al señor Rebollar hablar con la voz del señor Barriga.', pose: 'donramon_point' },
      { speaker: 'ANICETO', text: '¡Jamás! ¡No pienso abrir la boca!', pose: 'aniceto_panic' },
      { speaker: 'JUEZ', text: 'Y no está obligado a hacerlo. ¿Cómo piensa lograrlo, Licenciado?', pose: 'judge_thinking' }
    ]
  },
  {
    id: 'proverb_trap',
    question: '¿Cómo hacemos que "La Voz de Oro" hable con la voz del Señor Barriga delante del tribunal?',
    options: [
      { id: 'ask_politely', label: 'Pedírselo amablemente' },
      { id: 'threaten_jail', label: 'Amenazarlo con la cárcel' },
      { id: 'proverb_trap', label: 'Poner el sketch... y decir mal su frase famosa' }
    ],
    correctId: 'proverb_trap',
    failDialogue: [
      { speaker: 'DEFENSA', text: '¿No nos haría usted una vocecita, por favorcito?', pose: 'donramon_sweat' },
      { speaker: 'ANICETO', text: 'Licenciado, tengo veinticinco años de carrera y usted tiene una insignia abollada.', pose: 'aniceto_terciopelo' },
      { speaker: 'JUEZ', text: '¡No haga usted payasadas en mi tribunal!', pose: 'judge_gavel', sfx: 'damage' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Chapulín. La cinta del sketch. Y hágame usted un favor... dígala como usted dice los refranes.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡Con muchísimo gusto! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: '(Suena la cinta. La voz del "Casero Cascarrabias" arranca su frase famosa... y el Chapulín le baja el volumen y la completa él.)' },
      { speaker: 'CHAPULIN', text: '"¡TENÍA QUE SER... EL CHANGO DEL OCHO!"', sfx: 'chipote', pose: 'chapulin_slam' },
      { speaker: 'NARRADOR', text: '(Silencio.)' },
      { speaker: 'NARRADOR', text: '(Don Aniceto Rebollar, veinticinco años al aire, cierra los ojos. Le tiembla el labio. No puede. No puede dejarlo pasar.)' },
      { speaker: 'ANICETO', text: '¡¡¡ES "EL CHAVO DEL OCHO", ANIMAL!!! ¡¡¡"TE-NÍ-A QUE SER EL CHAVO DEL OCHO"!!!', sfx: 'realization', bgm: 'objection', pose: 'aniceto_breakdown' },
      { speaker: 'NARRADOR', text: '(Lo grita con la voz del Señor Barriga. Exacta. Redonda. Idéntica al cartucho. Dos mil personas la oyeron el 15 de septiembre y ciento veinte la oyen ahora.)' },
      { speaker: 'NARRADOR', text: '(Don Aniceto se queda con la boca abierta, oyéndose a sí mismo rebotar en las paredes del tribunal.)' },
      { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'Gracias, don Aniceto. Acaba usted de confesar con su mejor voz.', sfx: 'whoosh', pose: 'donramon_point' },
      { speaker: 'ANICETO', text: 'Veinticinco años...', bgm: 'pursuit', pose: 'aniceto_breakdown' },
      { speaker: 'ANICETO', text: '¡Veinticinco años levantando esa estación con las uñas! ¡Pagándole la luz con mi sueldo! ¡Amarrando los cables con mecate!', pose: 'aniceto_breakdown' },
      { speaker: 'ANICETO', text: '¡Y ese trofeo era lo ÚNICO que me quedaba de mí! ¡Lo empeñé para pagar el transmisor y me lo rescaté con lo que había, porque el fondo iba a devolverlo, lo iba a devolver completito!', pose: 'aniceto_breakdown' },
      { speaker: 'BARRIGA', text: 'Aniceto... me hubieras pedido el dinero. Te lo doy. Te lo hubiera dado.', pose: 'barriga_vendado' },
      { speaker: 'ANICETO', text: '¡NO! ¡Tú ibas a decir mi nombre! ¡MI NOMBRE! ¡Al aire! ¡En MI estación! ¡Después de que esta vecindad me quiso veinticinco años!', pose: 'aniceto_breakdown' },
      { speaker: 'ANICETO', text: '¡Y sabía que el doctor iba a subir corriendo! ¡Lo sabía! ¡Es médico! ¡Los médicos siempre corren!', sfx: 'damage', pose: 'aniceto_breakdown' },
      { speaker: 'NARRADOR', text: '(Empieza a hablar con la voz de Barriga. Luego con la de Doña Florinda. Luego con la del Profesor. Luego con la del propio Juez. Veinticinco años de voces saliéndosele todas juntas por la misma garganta.)' },
      { speaker: 'ANICETO', text: '"...Aquí XEVC... La Voz de la Vecindad... transmitiendo para usted... desde... desde..."', pose: 'aniceto_breakdown' },
      { speaker: 'NARRADOR', text: '(Se abraza al Micrófono de Oro y se queda callado. Por primera vez en veinticinco años, callado de verdad.)' },
      { speaker: 'SUPER SAM', text: 'OH NOOO! ¡Tres días! ¡THREE DAYS! ¡Mis honorarios! ¡Mi bono! ¡Mi hora de la comida!', sfx: 'damage', pose: 'supersam_breakdown' },
      { speaker: 'JUEZ', text: '¡Orden! Habiendo quedado establecido el método, el móvil y el autor... este tribunal emite su veredicto.', pose: 'judge_gavel', sfx: 'gavel' },
      { cutin: 'objection_inocente', speaker: 'JUEZ', text: '¡Declaro al acusado, el Doctor Chapatín... INOCENTE!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' },
      { speaker: 'NARRADOR', text: '(Cae confeti sobre la sala. El doctor lo mira con desconfianza, como si fuera a cobrárselo alguien.)' },
      { speaker: 'CHAPATIN', text: '...Hmpf. Ya era hora.', pose: 'chapatin_conmovido' },
      { speaker: 'CHAPULIN', text: '¡Síganme los buenos!', pose: 'chapulin_point' }
    ]
  }
];
