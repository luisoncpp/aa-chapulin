// @Architecture(descriptionShort="Case 4 llamado al estrado blocks before each testimony", type="data", icon="layers")
/**
 * Case 4 — "Llamado al estrado".
 * Cada bloque se anexa al diálogo que precede a su testimonio: la fiscalía llama al
 * testigo, el juez le pide nombre y ocupación, hay un remate de carácter y el juez
 * ordena declarar. Rufino vuelve en D3-T2, así que ese bloque es un rellamado corto.
 * Los bloques de apertura llevan `bg` porque el resto de sus `intro` también lo lleva;
 * los que se anexan a un `successDialogue` dejan que la cámara se infiera del `speaker`.
 */

import type { DialogueLine } from '../../../types/index.js';

/** D1-T1: Don Cecilio, gerente miope. Se anexa a CASE4_TRIAL_INTRO. */
export const CASE4_CALL_CECILIO: DialogueLine[] = [
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'La fiscalía llama al estrado al gerente del Gran Hotel Buena Vista. Y que sea rápido: esta corte cobra por hora y el testigo camina despacio.' },
  { bg: 'assets/bg_witness.webp', speaker: 'CECILIO', pose: 'cecilio_ciego', text: '¿Aquí? Con permiso... muy buenas tardes, señor juez.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_sweat', text: 'Yo soy el fiscal. El juez está allá arriba.' },
  { bg: 'assets/bg_witness.webp', speaker: 'CECILIO', pose: 'cecilio_shock', text: '¡Ah! Pues tiene usted una voz muy autoritaria para estar tan abajo.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Testigo, diga su nombre y su ocupación.' },
  { bg: 'assets/bg_witness.webp', speaker: 'CECILIO', pose: 'cecilio_idle', text: 'Cecilio Buenavista, propietario y gerente del Gran Hotel Buena Vista. Treinta y un años al frente de esa recepción, señor juez.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Treinta y un años viendo entrar gente. Lástima que nunca de cerca.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Proceda con su testimonio. Únicamente lo que percibió aquella noche.', sfx: 'gavel' }
];

/** D1-T2: el Sargento. Se anexa a CASE4_D1_T1_POINT_SUCCESS. */
export const CASE4_CALL_SARGENTO: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'Con gusto, counselor. La fiscalía llama al agente que levantó la escena. ¡Sargento, al estrado, y sin cobrar viáticos!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: '¡A sus órdenes! Vine caminando desde la delegación, mi fiscal. Viáticos ya no me quedan.', pose: 'pazguato_saludo' },
  { speaker: 'JUEZ', text: 'Diga su nombre y su ocupación, testigo.', pose: 'judge_neutral' },
  { speaker: 'SARGENTO', text: 'Refugio Pazguato, sargento de la delegación tercera. Aunque todos me dicen el Sargento, y así está bien: se tarda uno menos.', pose: 'pazguato_idle' },
  { speaker: 'CHAPULIN', text: '¡Yo le digo Sargento y él me dice el rojo! ¡Ya nos entendemos!', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Sargento, usted fue el primero en escribir lo que pasó en esa habitación. Cuéntelo tal como lo escribió.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Proceda. Su parte, y sólo su parte.', pose: 'judge_gavel', sfx: 'gavel' }
];

/** D2-T1: Maruja. Se anexa a CASE4_DAY2_INTRO. */
export const CASE4_CALL_MARUJA: DialogueLine[] = [
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'La fiscalía llama a la huésped de la 303. Y le advierto, señorita: el tiempo de esta corte no se abanica.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_coqueta', text: 'Ya voy, ya voy. Nadie se muere por esperar a una dama.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_abanico', text: '...Perdón. Hoy esa frase me salió peor que otras veces.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Diga su nombre y su ocupación ante este tribunal.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_idle', text: 'Maruja. Y en el Buena Vista me dicen la Sirena del Hotel.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso es un apodo, señorita. Le pregunté su ocupación.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_abanico', text: 'Huésped, señor juez. Llevo cuatro meses de huésped. Si eso no es una ocupación, no sé qué lo sea.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Queda asentado. Cuente a esta corte lo que vio aquella noche.', sfx: 'gavel' }
];

/** D2-T2: el Chómpiras. Se anexa a CASE4_D2_T1_RUTA_A_SUCCESS. */
export const CASE4_CALL_CHOMPIRAS: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Entonces contemos nosotros. ¿Quién movió el equipaje de aquella noche?', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'El botones, Your Honor. La fiscalía lo llama al estrado. Y que conste que este testigo no me cuesta un centavo: ya lo paga el hotel.', pose: 'supersam_point' },
  { speaker: 'CHOMPIRAS', text: '¿Yo? Ay, señor juez, si yo nomás subo y bajo cosas...', pose: 'chompiras_nervous' },
  { speaker: 'JUEZ', text: 'Su nombre y su ocupación, testigo.', pose: 'judge_neutral' },
  { speaker: 'CHOMPIRAS', text: 'El Chómpiras, para servirle. Botones y operador del montacargas del Gran Hotel Buena Vista. Con uniforme y todo, mírelo.', pose: 'chompiras_idle' },
  { speaker: 'DEFENSA', text: 'Y con libreta. Que es lo que a esta corte le ha hecho falta.', pose: 'donramon_idle' },
  { speaker: 'CHOMPIRAS', text: 'Ésa sí la traigo, mi licenciado. Fea, pero completita.', pose: 'chompiras_relieved' },
  { speaker: 'JUEZ', text: 'Proceda con su testimonio.', pose: 'judge_gavel', sfx: 'gavel' }
];

/** D3-T1: Rufino jura y miente sobre su título. Se anexa a CASE4_DAY3_INTRO. */
export const CASE4_CALL_RUFINO: DialogueLine[] = [
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'Pase al estrado el huésped de la Suite 204.' },
  { bg: 'assets/bg_witness.webp', speaker: 'RUFINO', pose: 'rufino_smug', text: 'Con mucho gusto. Uno colabora, aunque le arruinen las vacaciones.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Se le recuerda al testigo que declara bajo juramento. Diga su nombre y su ocupación.' },
  { bg: 'assets/bg_witness.webp', speaker: 'RUFINO', pose: 'rufino_monocle', text: 'Rufino Rufián y Montemayor, conde de Montemayor. De ocupación, ninguna: administro lo que heredé.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Bajo juramento. Lo dijo enterito, sin tragar saliva, mirando al juez.)' },
  { bg: 'assets/bg_defense.webp', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '(Yo también tengo un primo en Montemayor. Y no es conde de nada.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Queda asentado, señor conde. Exponga su intervención en estos hechos.', sfx: 'gavel' }
];

/** D3-T2: rellamado. Testigo ya presentado; no se repite el interrogatorio de identidad. */
export const CASE4_RECALL_RUFINO: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'Y ya que consta, Your Honor, que el testigo se quede donde está. Bajar y volver a subir ese estrado cuesta tiempo, y el tiempo...', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Es dinero. Ya nos lo sabemos, señor fiscal.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Este tribunal vuelve a llamar al estrado al señor Rufián. Continúa bajo el mismo juramento.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'RUFINO', text: '¿Otra vez mi nombre y mi ocupación, señoría?', pose: 'rufino_sweat' },
  { speaker: 'JUEZ', text: 'No hace falta. Esta corte se quedó con el primero.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Y con el segundo también. Ahora díganos qué eran usted y el señor Gómez el uno del otro antes de que ninguno pisara ese hotel.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Responda a la defensa, señor Rufián. Declare sobre esa relación.', pose: 'judge_gavel', sfx: 'gavel' }
];
