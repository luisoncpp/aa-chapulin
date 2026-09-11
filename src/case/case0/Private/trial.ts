// @Architecture(descriptionShort="Case 0 opening and three testimony data", type="data", icon="layers")
import type { ContradictionRule, DialogueLine, OpeningPresent, Testimony } from '../../../types/index.js';
import { CASE0_FOTO_POINT_TARGET } from './point_targets.js';
import { CASE0_LOBBY_INTRO, CASE0_T2_RECESS_AND_RESUMPTION } from './trial_lobby.js';

export const CASE0_TRIAL_INTRO: DialogueLine[] = [
  ...CASE0_LOBBY_INTRO,
  { bg: 'assets/bg_judge.webp', furniture: 'none', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala! Se abre la audiencia por el asalto al cobrador Nazario Cuenca.', sfx: 'gavel', bgm: 'trial' },
  { speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'Your Honor, este caso lo resolví en once minutos. ELEVEN! Un muchacho que debía dos meses de renta, un cobrador en el suelo y un maletín que voló. Time is money.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: '¿La defensa está lista? ...¿La defensa está presente?' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '¡Aquí, aquí! Perdón, señor juez, es que la puerta de la sala pesa más que mi cliente.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: '¡No contaban con mi asesoría legal!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Catorce meses de renta atrasada, Monchito. Si ganas esto, comes.)' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Antes de comenzar, la corte debe verificar que quien ocupa el estrado de la defensa es un litigante autorizado.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Eso quiere decir que te pide tu credencial! La prueba que te identifica está en el ACTA DEL JUICIO.' },
  { speaker: 'MODO EXAMINAR', text: 'En esta apertura, el ACTA DEL JUICIO se abrirá sola. Cuando se abra, selecciona la insignia y pulsa el botón ¡Presentar Prueba!', instant: true }
];

const tutorialPress: DialogueLine[] = [
  { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Presionar salió gratis! El testigo acaba de soltar un dato nuevo.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'La vivienda 4 tenía la chapa muy floja, cosa que un servidor nota profesionalmente.' }
];

export const CASE0_TESTIMONY_1: Testimony = {
  title: 'Testimonio: Lo que vi desde el patio', witness: 'Casimiro Lengua', bgm: 'cross_exam_moderato', statements: [
    { id: 'c0_t1_1', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Ese mediodía yo hacía mi ronda de ventas en la vecindad, tomo por tomo, puerta por puerta.', pressText: tutorialPress },
    { id: 'c0_t1_2', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'A la una en punto oí un golpe seco y un grito dentro de la vivienda 4.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Distinguí el golpe del grito. La hora la sostengo: fue la una en punto.' }
    ] },
    { id: 'c0_t1_3', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Me asomé desde el patio y vi salir corriendo al acusado con el maletín del cobrador en la mano.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Salir corriendo, sí; el maletín... lo vi de reojo.' }
    ], contradiction: {
      evidence: ['parte_detencion'],
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: '¡PROTESTO! ¡Ese maletín no aparece en ninguna parte de este expediente!', bgm: 'objection' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'El informe de detención dice que a las 14:15 mi cliente llevaba una barra de hielo, cuarenta centavos y un recibo. Del maletín, nada.' },
        { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Uno dice “con el maletín” por decir. Es una figura retórica. Sinécdoque, si me permite.' },
        { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Chanfle! ¿Y el grito también fue una sinécdoque?' },
        { speaker: 'JUEZ', pose: 'judge_shock', text: 'La corte concede que un objeto no localizado no acredita nada por sí solo. Pero esa hora se vuelve decisiva.' }
      ],
      followUp: {
        evidence: ['recibo_hielo'], prompt: '¿Dónde estaba el acusado a la una de la tarde?', successDialogue: [
          { speaker: 'DEFENSA', pose: 'donramon_point', text: '¡Aquí! El recibo de la hielería trae dos sellos: entró a las 13:05 y salió a las 13:55.' },
          { speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'El bloque no cabía, licenciado. Lo tuvieron que partir. Sin hielo no hay paleta, y sin paleta no hay renta.' },
          { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Dos cuadras se recorren corriendo, licenciado. Tomo tercero, “atletismo”.' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Corriendo, con un bloque de seis kilos y sin que el hielero lo viera salir. Usted vende enciclopedias, no milagros.' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Además, el informe médico ampliado indica que el golpe vino desde atrás y desde arriba.', updateEvidence: 'informe_lesiones' },
          { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡De atrás! ¡Como los cobradores de mi casero!' },
          { speaker: 'JUEZ', pose: 'judge_shock', text: 'La ventana del golpe sigue abierta, pero a la una en punto el acusado estaba haciendo fila en la hielería.' },
          { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡Entonces el testigo se equivocó de reloj! ¡Ajuste la hora y el caso sigue igual!' },
          { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Testigo, va a explicar cómo sabe que era la una en punto.' },
          { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Ahí está el detalle, Monchito. Nos acaban de regalar el segundo testimonio.' }
        ]
      }
    }},
    { id: 'c0_t1_4', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Corrí a la tienda, llamé a la policía y regresé a cuidar al pobre señor. Once minutos, si me permite la precisión.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Yo hice la llamada y la policía llegó a las 14:15.' }
    ] }
  ]
};

const CASE0_T2_BELL_CONTRADICTION: ContradictionRule = {
  evidence: ['foto_patio'], requiresExamine: 'foto_patio', pointTarget: CASE0_FOTO_POINT_TARGET,
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: '¡PROTESTO! ¡Esa campana no sonó, ni ese día ni el anterior!', bgm: 'objection' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: '¡El campanario! Está lleno de andamios y el hueco de la campana está vacío.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'Entonces habrá sido otro sonido parecido. Un sonido de naturaleza campanil.' },
    { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Dos claxonazos del camión del hielo, que pasa por esa esquina todos los días a las dos.' },
    { speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'Yo venía atrás del camión, licenciado. Llegué a las dos y cinco y ahí estaba el señor Nazario en el suelo.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: '¡Yo no moví nada! ¡Yo estaba vendiendo!' },
    { speaker: 'JUEZ', pose: 'judge_shock', text: 'Esta corte ya no tiene ningún testigo del momento del asalto.' },
    { speaker: 'SUPER SAM', pose: 'supersam_slam', cutin: 'objection_un_momento', sfx: 'desk_slam', text: '¡UN MOMENTO! Si no oyó el golpe a la una, ¿cómo sabía que el cobrador traía un maletín?' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se decreta un receso de veinte minutos. El alguacil revisará el maletín de muestras del testigo.', sfx: 'gavel' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: '¡Mi maletín es propiedad de la empresa! ¡Tomo octavo, "inviolabilidad"!' },
    ...CASE0_T2_RECESS_AND_RESUMPTION
  ]
};

export const CASE0_TESTIMONY_2: Testimony = {
  title: 'Testimonio: Cómo sé que era la una', witness: 'Casimiro Lengua', bgm: 'cross_exam_allegro', statements: [
    { id: 'c0_t2_1', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Un servidor no se equivoca de hora. Traigo dos relojes, uno por brazo, y los sincronizo cada mañana.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Los sincronizo con la campana de la escuela. Una comprobación perfectamente científica.' }
    ] },
    { id: 'c0_t2_2', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Pero además lo oí: a la una en punto sonó la campana de la escuela de enfrente. Una campanada, una hora.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Desde el patio se distinguen el lavadero, el tendedero y la escuela del fondo.' }
    ], contradiction: CASE0_T2_BELL_CONTRADICTION },
    { id: 'c0_t2_3', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Y justo con esa campanada vino el golpe. Por eso lo tengo grabado.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'La campana convierte la hora en una certeza, Your Honor.' }
    ], contradiction: CASE0_T2_BELL_CONTRADICTION },
    { id: 'c0_t2_4', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Desde donde yo estaba, en el patio, se oye todo. Es un patio con muy buena acústica.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Lavadero, tendedero, puerta cuatro: todo quedaba a la vista.' }
    ] }
  ]
};

export const CASE0_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Cómo llegó ese maletín a mi portafolio', witness: 'Casimiro Lengua', bgm: 'cross_exam_presto', statements: [
    { id: 'c0_t3_1', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Yo no robé nada, señor juez. Ese maletín me lo encontré tirado en el callejón de la vecindad.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'El callejón tiene una puerta verde y una canaleta rota. Puedo dibujarlo.' }
    ] },
    { id: 'c0_t3_2', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Lo levanté a las tres menos veinte, cuando la patrulla ya se había llevado al muchacho.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Es la tercera hora exacta que da hoy!' }
    ], contradiction: {
      evidence: ['parte_detencion'], successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: '¡PROTESTO! ¡Usted describió ese maletín veinticinco minutos antes de encontrarlo!', bgm: 'objection' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'En el anexo del informe de detención, a las 14:15, usted describió el color, el broche y que el sospechoso lo llevaba en la mano izquierda.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: '¡Y usted acaba de declarar que se lo encontró a las 14:40!', updateEvidence: 'parte_detencion' },
        { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Lo deduje. Un cobrador siempre trae maletín. Es inferencia lógica.' },
        { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡Ese agente es MI agente y escribe como los ángeles!' },
        { speaker: 'JUEZ', pose: 'judge_shock', text: 'O vio ese maletín antes, o lo describió sin verlo. Escoja.' }
      ], followUp: {
        evidence: ['tarjeta_enciclopedias'], prompt: '¿Qué dice el oficio del testigo sobre su presencia en la vecindad?', successDialogue: [
          { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_toma_eso', sfx: 'desk_slam', text: '¡Este señor no vende enciclopedias!', bgm: 'pursuit' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'La sociedad está disuelta desde 1971. No hay hoja de ruta, ni un solo pedido, y los tomos tienen el lomo roto.' },
          { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: '¡Uno se prepara! ¡Uno estudia el producto!' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Usted no toca puertas para vender. Las toca para saber cuáles se abren solas.' },
          { speaker: 'JUEZ', pose: 'judge_gavel', text: 'La corte ordena que se le tome declaración en calidad de investigado y que permanezca en el estrado.', sfx: 'gavel' },
          { speaker: 'NARRADOR', text: 'La secretaría incorpora el peritaje complementario: el calco corresponde a un objeto de base plana, borde recto y unos seis kilos.', updateEvidence: 'informe_lesiones' },
          { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'La fiscalía necesita saber con qué golpearon al cobrador y por qué entró a la vivienda 4.' },
          { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Nadie contaba con que el maletín trajera un tutorial de culpables!' }
        ]
      }
    }},
    { id: 'c0_t3_3', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Y jamás lo abrí. Lo iba a entregar en la delegación en cuanto terminara mi jornada.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'De todos modos ya venía vacío, se sentía ligerito.' }
    ] },
    { id: 'c0_t3_4', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Porque ese día yo trabajé como cualquier otro: mi ronda completa, puerta por puerta, tomo por tomo.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: '¡UN MOMENTO!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Veinte años de trayectoria editorial, señoría.' }
    ] }
  ]
};

export const CASE0_OPENING_PRESENT: OpeningPresent = {
  evidence: ['insignia_abogado'],
  prompt: '¿Qué acredita a la defensa ante esta corte?',
  successDialogue: [
    { speaker: 'DEFENSA', pose: 'donramon_idle', text: '¡Mi insignia! Está un poquito abollada, señor juez, pero yo también.' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Queda acreditada la defensa. Buen comienzo.', sfx: 'gavel' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Muy bien! La corte abrió el Acta automáticamente. Seleccionaste la insignia y pulsaste el botón ¡Presentar Prueba!' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Durante el interrogatorio, pulsa 📜 PRESENTAR para abrir el Acta. Allí elige una prueba y pulsa el botón ¡Presentar Prueba!' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'El corazón amarillo del botón ACTA DEL JUICIO abre el Acta.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Una prueba equivocada apaga uno de los cinco signos de exclamación verdes de la barra de arriba.' },
    { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '¿Y si se me acaban?' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Si se apagan todos, pierdes el juicio y tienes que empezarlo de nuevo.' },
    { speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡Objeción al tutorial! ¡Esto lleva cuatro minutos y nadie ha facturado nada!', sfx: 'desk_slam' },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La fiscalía expondrá su teoría. Después escucharemos al único testigo del caso.' },
    { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Sencillo, Your Honor. El acusado vive en la vivienda 4. El cobrador fue golpeado en la vivienda 4. El acusado estaba en la vivienda 4 cuando llegó la policía. Three for three!', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: '¡PROTESTO! ¡Con permisito, dijo Monchito!' },
    { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Mi cliente estaba ahí porque ahí vive, señor fiscal. Con ese razonamiento usted acusaría a la repisa.' },
    { speaker: 'JUEZ', pose: 'judge_thinking', text: 'La corte también quiere saber por qué la víctima no declara.' },
    { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Amnesia, Your Honor. Del golpe. Muy inconveniente para mi presupuesto.' },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Entonces el peso de este juicio lo carga un solo testigo. La defensa puede presionar sin gastar credibilidad, pero presentar una prueba sí cuesta. Úselas en consecuencia.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Y una más, Monchito: antes de presentar la Foto del Patio, selecciónala en el ACTA y pulsa EXAMINAR DETALLE para verla de cerca.' },
    { speaker: 'MODO EXAMINAR', text: 'Hazlo antes de presentar la foto: la vista ampliada te ayudará a encontrar el detalle correcto.', instant: true },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Testigo, diga su nombre y su ocupación.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Casimiro Lengua, para servirle: distribuidor autorizado de Enciclopedias El Saber Universal. Del latín encyclopaedia, “instrucción en círculo”.' },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Su testimonio, por favor. Únicamente lo que percibió.' }
  ]
};
