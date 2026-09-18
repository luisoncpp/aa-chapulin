// @Architecture(descriptionShort="Case 1 day 1 Tripaseca testimony and the first turnabout", type="data", icon="layers")
/**
 * Caso 1, Día 1 — Testimonio 2, El Tripaseca (§10.3) y GIRO 1 (§10.4).
 * Contiene la única declaración `unlockedBy` de todo el caso (decl. 5).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

/** GIRO 1: el arma no está en el museo. Cierra la successDialogue de D1-T2. */
const CASE1_GIRO_1: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Esta corte va a ordenar algo muy simple. Fiscalía: el inventario del museo.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '¿Para qué quiere el inventario, Your Honor?', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Para saber qué objeto de ese museo pesa como un saco de moneda y es flexible.', pose: 'judge_neutral' },
  { speaker: 'NARRADOR', text: 'El alguacil entrega un legajo. Super Sam lo hojea. La sala espera.', sfx: 'whoosh' },
  { speaker: 'SUPER SAM', text: '...Cuatrocientas doce piezas, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '¿Y?', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'La más pesada que se puede cargar es la chicharra. Un kilo doscientos. De oro macizo, con filigrana... de canto vivo.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'De canto vivo, señor juez. Con aristas. Y la herida no tiene ni una.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'En ese museo no hay un objeto que haya podido hacer esa herida.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Entonces el arma entró de la calle.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Entró de la calle, señor juez, en la mano de alguien, y volvió a salir en la mano de alguien. Porque tampoco apareció adentro.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'La sala estalla. El Juez golpea el mazo tres veces.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: '¡ORDEN!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Alguien caminó hasta ese museo cargando un saco de moneda metálica la noche del veintiocho de agosto.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(Alguien con un saco de moneda... a cinco minutos del museo... y con tanta prisa por cerrar el caso.)', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: '(No. Todavía no. Si lo digo hoy me lo tumban en tres segundos.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: 'Señor juez, la defensa tiene una sola pregunta y va dirigida a la fiscalía.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '¡¿A MÍ?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'A usted. Señor fiscal: usted trae al hombro, todos los días, desde que yo lo conozco, una bolsa de lona con el sello de la fiscalía llena de moneda de plata.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Hoy no la trae. ¿Dónde estaba esa bolsa la noche del veintiocho?', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_protesto' },
  { speaker: 'NARRADOR', text: 'Silencio absoluto.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: '...Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Fiscalía, conteste.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'La fiscalía no va a contestar esa pregunta.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '¡¿Cómo dice?!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Y la fiscalía... la fiscalía solicita un aplazamiento.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '(¿Qué?)', pose: 'donramon_shock' },
  { speaker: 'CHAPULIN', text: '(¡Don Ramón! ¡El fiscal que cobra por minuto acaba de pedir tiempo!)', pose: 'chapulin_panic', updateProfile: 'perfil_supersam' },
  { speaker: 'JUEZ', text: 'La corte concede el aplazamiento, y lo concede con disgusto.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Mañana esta corte quiere dos cosas: por dónde entró el ladrón y por dónde salió el arma.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Y una cosa más. La corte autoriza al acusado a acompañar a su defensa en las diligencias de mañana, bajo custodia del alguacil.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡¿Sabe usted lo que cuesta un traslado con custodia?!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Menos que dos días más de audiencia, señor fiscal.', pose: 'judge_thinking' },
  { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Usted no hizo nada, joven.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: '¡Pero lo iba a hacer!', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Se levanta la sesión.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Catorce meses de renta y acabo de pelearme con el fiscal más rápido de la ciudad.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '(Con permisito, dijo Monchito. Mañana le entro al patio de carga.)', pose: 'donramon_idle' }
];

const CASE1_D1_T2_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Señor juez, el testigo atribuyó ese "costalazo de fierros" al Chipote de mi cliente.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '"Costalazo de fierros". Metal suelto, mucho, y adentro de algo que lo aguanta.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Pero el Chipote chilla al apretarlo. El informe exige un objeto pesado, denso y sin aristas.', pose: 'donramon_slam', sfx: 'desk_slam', updateEvidence: 'informe_medico' },
  { speaker: 'DEFENSA', text: 'Con la ampliación urgente que pedí esta mañana: el calco de la herida corresponde a un objeto flexible, que se deformó al golpear. Y la trayectoria viene de arriba hacia abajo y por detrás.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿Flexible y pesado a la vez?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Un saco, señor juez. Un saco lleno de moneda metálica.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Murmullo en la galería.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: '...Pos yo nomás dije lo que oí.', pose: 'tripaseca_sweat', updateProfile: 'perfil_tripaseca' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡Un saco de monedas! ¡¿De dónde iba a sacar el acusado un saco de monedas?!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Ésa, señor fiscal, es la primera pregunta inteligente que hace usted en dos días.', pose: 'donramon_idle', updateProfile: 'perfil_chapulin' },
  { speaker: 'DEFENSA', text: 'Y hay otra cosa, señor juez. El golpe vino de arriba. El velador mide un metro noventa y dos con botas.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Mi cliente mide un metro sesenta. Con antenitas.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Un metro sesenta y dos!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'Un metro sesenta y dos, perdón.', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: '¡Cáspita! Para dar ese golpe, el acusado habría tenido que estar subido en algo.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'En algo como... un pedestal de madera a la altura de la cintura, señor juez.', pose: 'donramon_point', updateProfile: 'perfil_tripaseca' },
  { speaker: 'DEFENSA', text: '(Y de eso ya hablaremos. Todavía no. Primero el arma.)', pose: 'donramon_idle' },
  ...CASE1_GIRO_1
];

export const CASE1_TESTIMONY_2: Testimony = {
  title: 'Testimonio: Lo que vi por la ventana del callejón',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c1_d1t2_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Yo pasaba por el callejón de carga como a las nueve, por mis asuntos.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Qué asuntos lleva uno a un callejón de carga a las nueve de la noche?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Asuntos de comerciante, licenciado. Uno camina, uno ve, uno compra.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '¿Y qué compró usted esa noche?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Nada. Mal día.', pose: 'tripaseca_smug' },
        { speaker: 'SUPER SAM', text: '¡Objection! ¡Que un hombre camine de noche no es un crimen! ¡Yo camino de noche!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: 'Nadie ha dicho que lo sea, señor fiscal. Yo sólo estoy tomando el tiempo.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t2_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Por el ventanuco de la sala dos vi al colorado ese parado sobre el pedestal de la vitrina.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Ese ventanuco está a dos metros veinte del suelo del callejón. ¿Cómo vio usted para adentro?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Hay un tambo de basura abajo. Me trepé.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(Un tambo. Igualito que me dijo el profesor. Este hombre no está mintiendo sobre la ventana.)', pose: 'donramon_sweat' },
        { speaker: 'DEFENSA', text: 'Bien. ¿Y sobre qué dice usted que estaba parado mi cliente?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Sobre el pedestal de la vitrina. Ese de madera, como de la cintura de uno.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(Como de la cintura de uno... por un ventanuco de cuarenta centímetros, con el vidrio esmerilado y a oscuras.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '(Don Ramón... yo en mi vida me he subido a un pedestal. Me dan vértigo hasta las banquetas.)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Guárdeselo, joven. Todavía no sé qué hacer con eso.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t2_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Levantó el chipote y le dio al velador en la nuca. Un solo golpe, pero bien dado.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Descríbame el golpe. Sin adornos.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Uno solo. De arriba p\'abajo, en la nuca. El grandote ni volteó.', pose: 'tripaseca_smug' },
        { speaker: 'JUEZ', text: 'De arriba hacia abajo, dice el testigo.', pose: 'judge_thinking' },
        { speaker: 'TRIPASECA', text: 'De arriba p\'abajo. Y déjeme decirle otra cosa que no me han preguntado...', pose: 'tripaseca_smug' },
        { speaker: 'JUEZ', text: '¡La corte quiere oír eso! Testigo, agregue esa declaración a su testimonio.', sfx: 'gavel', pose: 'judge_gavel' }
      ]
    },
    {
      id: 'c1_d1t2_4',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'El velador se fue de boca y yo salí corriendo a buscar a la ley.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿A dónde corrió usted?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Al teléfono de la esquina. Marqué a la policía a las nueve con tres. Puede checarlo.', pose: 'tripaseca_smug' },
        { speaker: 'SUPER SAM', text: '¡Y yo estaba a cuatro cuadras! ¡Llegué en cuatro minutos! ¡FOUR! ¡Eso es servicio!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'Cuatro minutos. Qué suerte tuvo el museo con usted tan cerca, señor fiscal.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡No es suerte! ¡Es... es eficiencia!', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: '(Se tardó en contestar. Un cuarto de segundo, pero se tardó.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t2_5',
      unlockedBy: 'c1_d1t2_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Y ese chipote no sonó a juguete... mire, yo he oído golpes en mi vida. Sonó a costalazo de fierros.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! "Costalazo de fierros". Explíquemelo.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Pos ese chipote, licenciado. Sonó como cuando se le cae a uno una caja de tornillos. Chin, chin, chin. Fierros.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '¿Fierros?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Fierros. Y que conste que yo nomás digo lo que oí.', pose: 'tripaseca_smug' },
        { speaker: 'CHAPULIN', text: '(¡Don Ramón! ¡Mi chipote no hace "chin chin chin"! ¡Mi chipote hace "iiiik"!)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Ya lo oí, joven. Ya lo oí.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['informe_medico'],
        successDialogue: CASE1_D1_T2_SUCCESS
      }
    }
  ]
};
