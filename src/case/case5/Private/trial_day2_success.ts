// @Architecture(descriptionShort="Case 5 day-2 contradiction success, point target, GIRO 2", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Barriga/Berrondo successes, Señalamiento 1, GIRO 2 (spec §13).
 * Point-zone bounds measured on `examine_expediente_serie.webp` (five dated panels).
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const PLATE_CINCO = 'assets/plate_cinco_papeles.webp';

const PANEL_FAIL = (text: string): DialogueLine[] => [
  { speaker: 'JUEZ', pose: 'judge_thinking', text, sfx: 'damage' }
];

export const POINT_EXPEDIENTE_SERIE: PointTargetContradiction = {
  targetEvidenceId: 'expediente_serie',
  promptQuestion: 'Señala el papel que ya describe el producto que este testigo admite vender.',
  imageAsset: 'assets/examine_expediente_serie.webp',
  zones: [
    { id: 'panel_a', bounds: [1, 12, 20, 92], isCorrect: false, failureDialogue: PANEL_FAIL('Esa tarjeta identifica a la sociedad disuelta, licenciado. Nos lleva hasta el cedulario, pero no describe el producto vendido.') },
    { id: 'panel_b', bounds: [20, 12, 39, 92], isCorrect: true, failureDialogue: [] },
    { id: 'panel_c', bounds: [39, 12, 58, 92], isCorrect: false, failureDialogue: PANEL_FAIL('Esas compras prepararon otro delito, pero no son información salida del cedulario. Vuelva a mirar.') },
    { id: 'panel_d', bounds: [58, 12, 78, 92], isCorrect: false, failureDialogue: PANEL_FAIL('Aniceto pagó doce mil pesos para desempeñar el micrófono. Es un gasto de preparación, no el producto que este testigo vende.') },
    { id: 'panel_e', bounds: [78, 12, 99, 92], isCorrect: false, failureDialogue: PANEL_FAIL('Ese papel registra un reparto que quedó sin pagar. No contiene datos de una casa ni de una puerta.') }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡La ficha del museo, señor juez!', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Seis renglones con la chapa, la rejilla, la ronda del velador y hasta un servicio de cierre.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Eso no es el recuerdo de un testigo. Es información doméstica convertida en un producto para quien quiere entrar.', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: '¿Y los otros cuatro paneles?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: 'Dan contexto sobre preparación, dinero y botín. No prueban que este testigo los vendiera, y no voy a fingir que lo prueban.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Pero el panel A nombra a la sociedad disuelta, el panel B muestra una ficha operativa, y el propio testigo admite que administra ese cedulario y vende copias.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'La sala entera se inclina hacia adelante.', sfx: 'realization', bgm: 'pursuit' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'Doce de julio. Una tarjeta de una sociedad disuelta desde 1971, en el bolsillo de un hombre que reconocía puertas.' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'Veintiuno de agosto. Una ficha mecanografiada de seis renglones: la chapa, la rejilla, la ronda escrita del velador, y un servicio de cierre.' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'Veintiocho de agosto y quince de septiembre. Compras para preparar dos delitos: herramientas en un estanquillo y doce mil pesos pagados para recuperar un micrófono.' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'Veinticuatro de octubre. Un collar robado cuyo reparto nunca se pagó, y por el que dos hombres se mataron.' },
    { speaker: 'DEFENSA', text: 'Señor juez, no voy a decir que cinco casos prueban un solo vendedor. No lo prueban.', pose: 'chapulin_idle', bgm: 'objection' },
    { speaker: 'DEFENSA', text: 'Pero el panel A identifica a *El Saber Universal*, y el panel B contiene exactamente la clase de información que el testigo admite vender.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'El catálogo de ese negocio son once mil cuatrocientas tarjetas que están en el sótano de este juzgado.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_protesto' },
    { speaker: 'DEFENSA', text: 'Eso no prueba homicidio. Sí justifica que la corte inspeccione el huacal antes de aceptar que el vínculo es casualidad.', pose: 'chapulin_idle' },
    { speaker: 'NARRADOR', text: 'La galería se levanta entera. El Juez golpea el mazo cinco veces.', sfx: 'gavel' },
    { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN EN LA SALA!', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡Your Honor, vender no es matar! ¡Ni siquiera es robar!', pose: 'supersam_slam', sfx: 'desk_slam' },
    { speaker: 'SUPER SAM', text: '¡Aunque le hayan vendido una ficha a cuatro delincuentes, cada uno de ellos planeó y ejecutó lo suyo! ¡Los cuatro están condenados y los cuatro son culpables!', pose: 'supersam_point' },
    { speaker: 'DEFENSA', text: '...Y yo no he dicho lo contrario, señor fiscal.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Comprarle una herramienta a alguien no le quita a nadie la autoría de lo que hizo con ella.', pose: 'chapulin_idle' },
    { speaker: 'BERRONDO', text: 'Señor juez, agradezco esa precisión de la defensa más de lo que puedo decir.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Y agrego tres cosas, numeradas, y me callo.', pose: 'berrondo_definicion' },
    { speaker: 'BERRONDO', text: 'Primera. Todo lo que la defensa acaba de describir es lícito y yo lo he declarado antes de que ella lo descubriera.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Segunda. No hay una sola prueba de que yo haya vendido la ficha del museo, y la defensa lo sabe.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Tercera. Aunque la hubiera, vender información sigue sin ser delito en este país.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Puede esta corte censurarme moralmente. No puede procesarme.', pose: 'berrondo_idle' },
    { speaker: 'JUEZ', text: '...La corte concede las tres, licenciado, y lo hace con el estómago revuelto.', pose: 'judge_thinking', updateProfile: 'perfil_berrondo' },
    { speaker: 'DEFENSA', text: '¡Señor juez!', pose: 'chapulin_panic' },
    { speaker: 'JUEZ', text: 'Licenciado, si yo condenara hoy a alguien por un patrón, mañana condenarían a su cliente por el mismo procedimiento.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'Un móvil y una oportunidad no son una autoría. En esta sala eso vale para todos o no vale para nadie.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: '(...Tiene razón. Otra vez tiene razón alguien que no es yo.)', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'Pero esta corte sí puede hacer una cosa.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Se ordena la inspección judicial del huacal nueve del depósito de bienes del Archivo Judicial, mañana a las nueve horas.', sfx: 'gavel', bgm: 'pursuit', pose: 'judge_gavel' },
    { speaker: 'JUEZ', text: 'Con presencia del síndico, del ministerio público, de la defensa y de la policía judicial.', pose: 'judge_neutral' },
    { speaker: 'BERRONDO', text: 'Estaré ahí a las nueve menos cuarto, señor juez, con la llave y con el inventario.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'No tengo absolutamente nada que esconder.', pose: 'berrondo_idle' },
    { speaker: 'NARRADOR', text: 'Y lo dice sin una sola gota de sudor, porque es verdad.', bgm: 'suspense' },
    { speaker: 'DEFENSA', text: '(Es verdad. Ése es el problema. Todo lo que ha dicho hoy es verdad.)', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'Se levanta la sesión.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DON RAMÓN', text: '(Joven.)', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: '(Cuando un hombre le dice a un juez que no tiene nada que esconder, casi siempre miente.)', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: '(Y cuando no miente, es peor: quiere decir que lo que tiene es legal.)', pose: 'donramon_sweat' }
  ]
};

export const CASE5_D2_T1_NOTA_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, esa nota está escrita a máquina, en tercera persona y sobre el propio deudor.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '«A cargo del C. Ramón Valdés.» Nadie paga su propia renta «a cargo» de sí mismo.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y «se ruega expedir el recibo correspondiente». Señor Barriga: ¿cómo le escribe a usted mi cliente?', pose: 'chapulin_point' },
  { speaker: 'BARRIGA', text: 'En la envoltura de una torta, señor juez.', pose: 'barriga_idle' },
  { speaker: 'BARRIGA', text: 'Y con faltas.', pose: 'barriga_enojado' },
  { speaker: 'NARRADOR', text: 'Risas en la galería.', sfx: 'realization' },
  { speaker: 'DON RAMÓN', text: 'Son faltas de tiempo, no de ortografía.', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '¡Mi cliente no tiene máquina de escribir, señor juez! ¡Mi cliente no tiene mesa donde ponerla!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡Se renta una máquina por dos pesos la hora en cualquier papelería!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '¡Y se aprende a escribir «se ruega» en cualquier papelería también!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'La corte concede que quien redactó esa nota no es el inquilino.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Y la corte quiere saber qué escribió en el recibo el hombre que recibió el dinero.', pose: 'judge_thinking' }
];

export const CASE5_D2_T1_RECIBO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'El recibo lo escribió el señor Barriga con su propia mano el veintinueve de noviembre.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y en el concepto puso, textualmente: «Recibí de tercero no identificado, a cuenta del inquilino.»', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡Cáspita! El propio testigo asentó que no pudo identificar a quien dejó el dinero.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Eso no demuestra todavía quién pagó, señor juez. Demuestra que el recibo no acredita un pago personal de Don Ramón.', pose: 'chapulin_idle' },
  { speaker: 'BARRIGA', text: '¡Pues claro que lo asenté! ¡Yo seré casero, pero no soy mentiroso!', pose: 'barriga_enojado' },
  { speaker: 'BARRIGA', text: 'Si el señor Ramón me hubiera pagado, yo hubiera escrito «recibí del señor Ramón», ¡y hubiera puesto un dibujito!', pose: 'barriga_shock' },
  { speaker: 'DEFENSA', text: 'Señor Barriga, escribió usted la mejor prueba de esta defensa hace ocho días y sin saberlo.', pose: 'chapulin_idle' },
  { speaker: 'BARRIGA', text: '...¿De veras?', pose: 'barriga_shock' },
  { speaker: 'DEFENSA', text: 'De veras.', pose: 'chapulin_idle' },
  { speaker: 'BARRIGA', text: 'Uy. Entonces no me cobre la consulta.', pose: 'barriga_idle' },
  { speaker: 'SUPER SAM', text: '¡OBJECTION!', sfx: 'desk_slam', cutin: 'objection_un_momento', pose: 'supersam_slam' },
  { speaker: 'SUPER SAM', text: '¡Your Honor! ¡Si un tercero pagó esa renta, entonces el acusado tiene un CÓMPLICE!', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: '¡Alguien que le pagó diecisiete meses cinco días antes del homicidio! ¡Eso no lo exculpa: eso lo empeora!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '(...Y tiene razón. Tiene razón y no me gusta nada.)', pose: 'chapulin_panic' },
  { speaker: 'JUEZ', text: 'La corte concede el punto a la fiscalía.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Un tercero pagó. Esta corte quiere saber quién, y quiere saberlo hoy.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'El testigo puede retirarse.', pose: 'judge_neutral' },
  { speaker: 'NARRADOR', text: 'En la mesa de la fiscalía, el hombre de la leontina se pone de pie.', bgm: 'suspense' },
  { speaker: 'BERRONDO', text: 'Señor juez. Con la venia de esta corte y el permiso del señor fiscal.', pose: 'berrondo_idle' },
  { speaker: 'SUPER SAM', text: '¿Licenciado?', pose: 'supersam_sweat' },
  { speaker: 'BERRONDO', text: 'Llevo dos días oyendo a la defensa rodear mi nombre sin pronunciarlo, y eso es malo para todos: para ella, para la corte y para mí.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Solicito rendir declaración voluntaria. Renuncio por este acto a mi carácter de coadyuvante mientras declare.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '¡Licenciado, nadie lo ha acusado de nada!', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'Todavía no, señor juez. Prefiero contestar antes que ser contestado.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(...Se abrió él solito la puerta que el juez me cerró en la cara.)', pose: 'chapulin_panic' },
  { speaker: 'DON RAMÓN', text: '(Joven. Cuidado.)', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: '(Un hombre que se sube al estrado sin que lo llamen es un hombre que ya sabe qué le van a preguntar.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Que pase el licenciado Berrondo. Nombre, ocupación y protesta.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: 'Fulgencio Berrondo Ontiveros. Abogado postulante desde 1955, síndico de concursos desde 1963.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Protesto decir verdad, y agrego que en veintisiete años de ejercicio no he tenido una sola nota en mi expediente.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'La corte lo ha verificado esta mañana, y es cierto. Declare usted.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D2_T2_LIBRO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, el testigo acaba de decir «salí a las dieciséis cincuenta».', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Ese libro no tiene columna de salida.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¿Cómo dice?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Tiene dos columnas, señor juez, y están impresas: «hora de entrada» y «hora de devolución de gafete».', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Lo que este libro registra a las dieciséis cincuenta no es que alguien saliera del edificio. Es que alguien entregó un gafete en una ventanilla.', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'Murmullo en la galería.', sfx: 'realization' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡Es la misma cosa! ¡Uno entrega el gafete y se va!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Uno normalmente se va, señor fiscal. Eso no es lo mismo que constar.', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'El licenciado tiene razón.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '¿Perdón?', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'Digo que el licenciado tiene razón, señor juez, y se lo agradezco.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Yo declaré «salí» y debí declarar «devolví el gafete». Es una imprecisión mía y rectifico.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Salí por el patio de maniobras, que es donde dejo el automóvil. Nadie lleva registro de ese portón porque no hay nada que registrar.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(Me dio la razón. Me dio la razón y me quitó todo.)', pose: 'chapulin_panic', updateProfile: 'perfil_berrondo' },
  { speaker: 'JUEZ', text: 'Queda rectificada la declaración. Y la corte sigue sin saber quién pagó esa renta.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defensa: ¿tiene usted algo que ligue a este testigo con el dinero, o vamos a seguir discutiendo columnas?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(Sargento, espero que no haya dormido por algo.)', pose: 'chapulin_idle' }
];

export const CASE5_D2_T2_EXPEDIENTE_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Señor juez, la policía judicial compiló anoche cinco expedientes de este año. Cinco casos distintos, cinco culpables distintos, cinco barrios distintos.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y en los cinco hay un papel que nadie supo explicar.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Que se ponga a la vista de esta corte.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_DAY2_OPENING_PRESENT_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Casimiro Lengua, señor juez.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Sentenciado en julio por el asalto al cobrador Nazario Cuenca. Lo acusó la fiscalía que hoy comparece y lo venció el abogado que hoy está sentado en el banquillo.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Su condena no está en discusión y esta defensa no va a pedir que se revise. Era culpable y lo sigue siendo.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '¿Y qué hacía en el Archivo?', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Había ofrecido al ministerio público entregar un fichero a cambio de reducción de pena.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y pidió que estuviera presente el único abogado que lo había vencido.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¿Por qué pediría eso un hombre?', pose: 'judge_thinking' },
  { speaker: 'DON RAMÓN', text: 'Porque era el único que no le tenía miedo, señor juez.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'A la gente como el señor Lengua le tienen miedo, o lástima, o asco. Nunca nada más respeto.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Que se asiente.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Conmovedor. La fiscalía llama al testigo que cobró esa renta.', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: 'Señor Zenón Barriga y Pesado, arrendador.', pose: 'supersam_point' },
  { speaker: 'BARRIGA', text: 'Presente. Y quiero aclarar de una vez que yo no quería venir.', pose: 'barriga_enojado' },
  { speaker: 'JUEZ', text: 'Nadie quiere venir, señor Barriga. Su testimonio.', sfx: 'gavel', pose: 'judge_gavel' }
];
