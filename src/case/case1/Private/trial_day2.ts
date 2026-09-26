// @Architecture(descriptionShort="Case 1 day 2 opening and Alma Negra's testimony", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Apertura con `openingPresent` de persona (§12.1) y
 * Testimonio 1, Alma Negra (§12.2).
 */

import type { DialogueLine, OpeningPresent, Testimony } from '../../../types/index.js';
import { CASE1_CALL_ALMA_NEGRA, CASE1_CALL_TRIPASECA_D2_T2 } from './witness_calls.js';

export const CASE1_DAY2_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: '30 de agosto, 2:00 PM. Tribunal Superior - Sala de Espera.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'Your Honor, la fiscalía sostiene su acusación completa y pide que este juicio termine hoy.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Ya volvió a traer la bolsa al hombro. Nuevecita, además.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Ayer esta corte pidió dos cosas: por dónde entró el ladrón y por dónde salió el arma.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'La defensa pide llamar a un testigo propio. Es la primera vez en este juicio.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Antes de permitirlo, esta corte necesita saber a quién va a llamar y por qué esa persona está en condiciones de declarar.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Don Ramón! ¡Esa respuesta no es una prueba, es una persona!' }
];

export const CASE1_DAY2_OPENING_PRESENT: OpeningPresent = {
  profileTarget: ['perfil_almanegra'],
  prompt: '¿A quién llama la defensa, y por qué puede declarar?',
  successDialogue: CASE1_CALL_ALMA_NEGRA
};

const CASE1_D2_T1_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Don Alma Negra, con todo respeto: su ronda no era secreta. Estaba escrita.', pose: 'donramon_point' },
  { speaker: 'ALMA NEGRA', text: '¡Pues claro que está escrita! ¡En mi libreta!', pose: 'almanegra_shock' },
  { speaker: 'DEFENSA', text: 'En su libreta, sí. Y su libreta, ¿dónde pasa la noche?', pose: 'donramon_idle' },
  { speaker: 'ALMA NEGRA', text: '...Colgada de un clavo. En la caseta.', pose: 'almanegra_sweat' },
  { speaker: 'DEFENSA', text: 'La caseta de la entrada, señor juez. Por donde pasa todo el que compra un boleto de dos pesos.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '"Veinte cuarenta y cinco: bodega de proa. Veintiuna cero cero: bodega de popa." Con letra grande, para no fallar.', pose: 'donramon_point' },
  { speaker: 'ALMA NEGRA', text: '¡Por mil demonios!', pose: 'almanegra_shock' },
  { speaker: 'JUEZ', text: 'Que quede asentado: cualquier visitante del museo podía conocer, palabra por palabra, el horario exacto del velador.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡¿Y eso qué prueba?! ¡Prueba que el velador es descuidado!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Prueba que el ladrón sabía a qué hora estaría solo. Y que no lo adivinó: lo leyó.', pose: 'donramon_point', updateProfile: 'perfil_almanegra' },
  { speaker: 'JUEZ', text: 'La corte concede el punto a la defensa. Pero sigue faltando lo importante: por qué ese hombre seguía en la sala cuando llegó el velador.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Un ladrón con la pieza en la mano corre. No se agacha a recoger monedas. Defensa, ¿tiene algo?', pose: 'judge_neutral' }
];

const CASE1_D2_T1_FOLLOWUP: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Tengo la cédula de la pieza robada, señor juez. Y la respuesta está en el renglón que nadie leyó.', pose: 'donramon_idle', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: '"Chicharra Paralizadora de Oro. Montada sobre base de resonancia."', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Explíquese.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Que si usted la levanta de su base, suena. Y el que la oye se queda tieso alrededor de un minuto. Por eso está bajo cristal y no bajo llave: el propio museo la usaba de alarma.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'El Juez se queda con el mazo a media altura.', sfx: 'chicharra' },
  { speaker: 'JUEZ', text: '¡¿Está usted diciendo que el ladrón se paralizó a sí mismo?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Estoy diciendo que la levantó a las nueve menos cinco y se quedó ahí parado, sin poder mover un dedo, durante un minuto largo.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Y que en ese minuto entró corriendo un velador de un metro noventa y dos.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! ¡Le fue a caer encima justo cuando se le acababa el efecto!', pose: 'chapulin_panic' },
  { speaker: 'ALMA NEGRA', text: 'Por mil demonios. Yo creí que había llegado tarde... y llegué justo.', pose: 'almanegra_shock' },
  { speaker: 'DEFENSA', text: 'Llegó usted justo, don Alma Negra. Ése es el problema de toda esta historia: todo el mundo llegó justo, menos mi cliente.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'La corte entiende entonces la secuencia dentro de la sala. Lo que no entiende es cómo llegó ese hombre a la sala.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'El museo estaba cerrado con la única llave que existe. Fiscalía: explique la entrada.', sfx: 'gavel', pose: 'judge_gavel' },
  ...CASE1_CALL_TRIPASECA_D2_T2
];

export const CASE1_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Lo que oí antes de caer',
  witness: 'Alma Negra',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c1_d2t1_1',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'Mi ronda es mía y de nadie más. Nadie sabe por dónde ando ni a qué hora. Por eso a mí no me sorprende ni el diablo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Ni la curadora sabe su ronda?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'Ni la curadora. Un velador que anuncia su ronda es un velador que ya no sirve.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Y usted cómo la lleva, de memoria?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'De memoria y de orden, grumete. Cuarenta años de guardias no se olvidan.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(De memoria. Ajá.)', pose: 'donramon_sweat' },
        { speaker: 'SUPER SAM', text: '¡Excellent witness! ¡Un hombre de orden! ¡Ojalá mis agentes fueran así!', pose: 'supersam_point' }
      ],
      contradiction: {
        evidence: ['bitacora_ronda'],
        successDialogue: CASE1_D2_T1_SUCCESS,
        followUp: {
          evidence: ['chicharra_oro'],
          prompt: '¿Por qué el ladrón no pudo huir de inmediato?',
          successDialogue: CASE1_D2_T1_FOLLOWUP
        }
      }
    },
    {
      id: 'c1_d2t1_2',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'Esa noche iba yo en la bodega de proa cuando oí reventar el cristal en la bodega de popa.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿A qué hora oyó el cristal?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'Nueve menos cinco. Lo sé porque me faltaban cinco minutos para pasar a la bodega de popa.', pose: 'almanegra_vendado' },
        { speaker: 'JUEZ', text: '¿Cinco minutos antes de que le tocara entrar a la sala dos?', pose: 'judge_thinking' },
        { speaker: 'ALMA NEGRA', text: 'Cinco minutos antes, señor juez. Por eso me agarró corriendo y no caminando.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Cinco minutos antes de la hora. Si el que estaba adentro esperaba entrar y salir antes de las nueve, le falló el reloj por poquito.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d2t1_3',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'Corrí hasta la vitrina rota. Estaba oscuro; no distinguí a nadie. Me volví hacia la puerta para pedir ayuda y me dieron por detrás.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Usted dice que no vio nada. ¿Qué sintió, entonces?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: '¿Que qué sentí? Pues el chipote de la cabeza, grumete, ¿qué quiere que sienta?', pose: 'almanegra_shock' },
        { speaker: 'DEFENSA', text: 'Antes del golpe. Al entrar a la sala. Bajo las botas.', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: '...Vidrio. Crujió vidrio bajo mis botas apenas crucé la puerta.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Apenas cruzó la puerta?', pose: 'donramon_shock' },
        { speaker: 'ALMA NEGRA', text: 'Apenas. Dos pasos adentro y ya estaba yo pisando vidrio.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Dos pasos adentro. Y la vitrina está a seis metros de esa puerta.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '(¡El vidrio llegó bien lejos, Don Ramón!)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Bien lejos y para el lado que no debía. Guárdeselo, joven.)', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Y después de pisar ese vidrio?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Llegué hasta la vitrina. Como no veía a nadie, me volví hacia la puerta para pedir ayuda. Ahí me apagaron las luces.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Llegó al pedestal y le dio la espalda. Así dejó la nuca frente a quien estuviera arriba.)', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'c1_d2t1_4',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'Pero lo oí. Cuando me dieron, oí dinero. Monedas cayendo al piso. Un montón de monedas.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Cuénteme esas monedas.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'Cayeron, rodaron y brincaron, grumete. Y después...', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Después?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Después alguien las juntó. Una por una. Yo estaba tirado con la oreja en el piso y lo oí juntarlas, moneda por moneda, un buen rato.', pose: 'almanegra_shock' },
        { speaker: 'NARRADOR', text: 'Murmullo en la galería.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization' },
        { speaker: 'JUEZ', text: '¡Cáspita! ¿El agresor se quedó a recoger monedas del suelo con un hombre desmayado a sus pies?', pose: 'judge_shock' },
        { speaker: 'ALMA NEGRA', text: 'Con un hombre desmayado y con la puerta abierta, señor juez. Ése no tenía prisa... o no podía tenerla.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(O no podía tenerla.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
