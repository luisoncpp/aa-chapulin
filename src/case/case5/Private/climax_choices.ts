// @Architecture(descriptionShort="Case 5 climax choice prompt — antenitas trap", type="data", icon="layers")
/**
 * Case 5 climax — Elección «Lo que las antenitas no pueden probar» (spec §18.4).
 */

import type { ChoicePrompt } from '../../../types/index.js';

export const CASE5_CLIMAX_CHOICES: ChoicePrompt[] = [
  {
    id: 'no_robado',
    question: '¿Qué se desprende de la adjudicación que Berrondo reconoció y del inventario del huacal nueve?',
    options: [
      { id: 'descompuestas', label: 'Que las antenitas estaban descompuestas y por eso el remate no vale.' },
      { id: 'no_robado', label: 'Que el cedulario fue adquirido por remate y permanece en depósito, no que Berrondo sea inocente del homicidio.' },
      { id: 'vacio', label: 'Que el huacal estaba vacío y no había bienes que adjudicar.' },
      { id: 'inocente', label: 'Que la adquisición lícita del cedulario vuelve inocente a Berrondo de todo delito.' }
    ],
    correctId: 'no_robado',
    failDialogue: [
      { speaker: 'DEFENSA', text: '(No. Estoy haciendo que las antenitas contesten una pregunta que deben contestar los documentos.)', pose: 'chapulin_panic' },
      { speaker: 'SECRETARIO', text: 'Esa respuesta no distingue lo que el remate y el inventario prueban de lo que no prueban.', sfx: 'damage' },
      { speaker: 'DON RAMÓN', text: '(Joven. Piense en los papeles, no en las antenitas.)', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: '(Pregúntese qué pudo comprar ese señor por tres pesos. Y qué no demuestra esa compra.)', pose: 'donramon_idle' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Señor juez, la defensa quiere hacer constar una cosa que le da vergüenza.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'El miércoles bajé a ese sótano. Me quedé mirando mis antenitas, esperando que me dieran una respuesta.', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Pero en esta corte no voy a presentar su quietud como prueba. Tengo su declaración sobre el remate y el inventario del depósito.', pose: 'chapulin_idle' },
      { speaker: 'SECRETARIO', text: '¡Entonces el remate exculpa al licenciado Berrondo!' },
      { speaker: 'DON RAMÓN', text: 'No, señor secretario.', pose: 'donramon_idle' },
      { speaker: 'NARRADOR', text: 'Don Ramón se pone de pie en el banquillo.', bgm: 'suspense' },
      { speaker: 'JUEZ', text: 'El acusado tiene la palabra.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DON RAMÓN', text: 'Yo llevo cuatro días oyendo hablar de ese huacal y no había entendido nada hasta hace un minuto.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'No hace falta que vibren las antenitas, señor juez. Lo que hay en el huacal no fue robado; Berrondo reconoció la compra por tres pesos y el inventario confirma que los originales siguen depositados.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Once mil cuatrocientas siete tarjetas archivadas con el domicilio, el sueldo, lo que hay de valor y cómo cierra la puerta de cada familia.', pose: 'donramon_shock' },
      { speaker: 'DON RAMÓN', text: 'Y todas se las dieron ellas mismas. Sentaditas en su sala, con el vendedor enfrente, contentas de que les fiaran los tomos.', pose: 'donramon_idle' },
      { speaker: 'NARRADOR', text: 'Silencio absoluto en la sala.', bgm: 'suspense' },
      { speaker: 'DON RAMÓN', text: 'Ese señor no necesitó robar esas tarjetas, señor juez. Ése es el asunto.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Ese fichero es suyo: lo compró en un remate por tres pesos. Y, sin embargo, los originales siguen en el depósito judicial, bajo su propia firma.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Que lo comprara legalmente no lo vuelve inocente, señor juez. Ésa es la prueba de cómo pudo vender la información durante once años sin que nadie lo detuviera.', pose: 'donramon_shock' },
      { speaker: 'JUEZ', text: '...Que se asiente íntegra la intervención del acusado.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DEFENSA', text: '(Don Ramón...)', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: '(Ya cállese, joven, que me está saliendo bien.)', pose: 'donramon_idle' },
      { speaker: 'JUEZ', text: 'Señorita Peñaloza: su carpeta de vales, al secretario.', pose: 'judge_neutral' },
      { speaker: 'JUEZ', text: 'Esta corte ordena que se traiga a esta sala el cajón «Donceles a Espanto» del cedulario del huacal nueve.', sfx: 'gavel', bgm: 'pursuit', pose: 'judge_gavel' },
      { speaker: 'BERRONDO', text: '¡Señor juez, ese cajón tiene mil trescientas tarjetas! ¡Nos va a tomar la noche entera!', pose: 'berrondo_panic' },
      { speaker: 'JUEZ', text: 'Está ordenado por calle, licenciado. Usted mismo lo declaró.', pose: 'judge_neutral' },
      { speaker: 'JUEZ', text: 'Y esta corte tiene la suerte de contar hoy con alguien que sabe exactamente qué calle buscar.', pose: 'judge_thinking' },
      { speaker: 'JUEZ', text: 'Acusado: dicte usted su domicilio al secretario.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DON RAMÓN', text: '...Vecindad de la calle del Espanto número ocho, vivienda setenta y dos.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Ciudad de México.', pose: 'donramon_sweat' },
      { speaker: 'NARRADOR', text: 'El secretario recorre el cajón con el dedo durante cuarenta segundos. La sala no respira.', bgm: 'suspense' },
      { speaker: 'SECRETARIO', text: '...La tengo, señor juez.', addEvidence: 'ficha_domicilio' },
      { speaker: 'JUEZ', text: 'Defensa: preséntela usted, que se la ganó.', sfx: 'gavel', pose: 'judge_gavel' }
    ]
  }
];
