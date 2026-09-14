// @Architecture(descriptionShort="Case 1 day 2 escape testimony, pointing 2 and turnabout 2", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Testimonio 3, El Tripaseca (§12.4), Señalamiento 2 y
 * GIRO 2 (§12.5), que entra directo al clímax.
 */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';

const FAIL_PECHO: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado, la corte le pidió el pecho de ese hombre.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Lo que usted señala puede importar, y la corte se lo va a admitir más tarde. Ahora no es lo que le pregunté.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Otro punto menos! ¡A este paso la defensa me sale gratis!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, acuérdese de lo que dijo el testigo: las dos letras. Mírelas de cerca.' }
];

const FOTO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'foto_crimen',
  promptQuestion: 'Señala en la lámina: ¿qué tiene de raro el pecho de ese hombre?',
  imageAsset: 'assets/examine_foto_crimen.webp',
  zones: [
    { id: 'emblema_pecho', bounds: [43, 30, 63, 50], isCorrect: true, failureDialogue: [] },
    { id: 'manos', bounds: [35, 50, 68, 67], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'puerta_fondo', bounds: [25, 20, 45, 58], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'marco_espejo', bounds: [0, 0, 100, 10], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'piso_pasillo', bounds: [0, 68, 100, 100], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'foto_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_PECHO }
  ]
};

/** GIRO 2: el museo no se estudió, se compró. Cierra el `followUp` de D2-T3. */
const CASE1_GIRO_2: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'La corte va a hacer un recuento antes de resolver, porque este juicio se le ha volteado tres veces.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'El acusado entró por una puerta con la chapa vencida, con las manos vacías, a las nueve en punto.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Otra persona entró inmediatamente después del cierre, encogida dentro de una vitrina, con un saco de moneda en la mano.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Esa persona creció, reventó el cristal, quedó paralizada por la propia pieza, golpeó al velador que la sorprendió, recogió sus monedas y salió por el patio de carga.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defensa: ¿tiene esta corte algo más que un relato?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Tiene cuatro datos, señor juez. Y le pido permiso para ponerlos uno junto a otro, porque separados no dicen nada.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Concedido.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Uno. Quien entró sabía que la chapa de la puerta de carga estaba vencida desde marzo.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Dos. Sabía la medida exacta de una rejilla de dieciocho por veinticuatro que no aparece en ningún plano público.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Tres. Sabía que el velador pasaba a la sala dos a las veintiuna cero cero, porque eso está escrito en una libreta que cuelga de un clavo.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Cuatro. Sabía que a esa cámara le quedaba un solo cuadro de rollo, porque el calendario de cambios está clavado en la pared del pasillo.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '...Cuatro datos.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Cuatro datos que no se ven desde un callejón, señor juez. Ni desde un tambo de basura. Ni en una noche.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Cuatro datos que están adentro del museo, a la vista de cualquiera que pague dos pesos de boleto y se tome su tiempo.', pose: 'donramon_idle' },
  { speaker: 'NARRADOR', text: 'Don Ramón se quita el sombrero y lo deja sobre la mesa.', sfx: 'whoosh' },
  { speaker: 'DEFENSA', text: 'Señor juez, yo llevo dos días pensando que este caso era un robo que salió mal.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Y no. Este robo salió exactamente como estaba escrito.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_protesto', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Alguien se sentó, juntó las cuatro cosas, y se las dio hechas al que entró.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'La sala se queda muda.', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'Licenciado Don Ramón.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Señor juez.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Esta corte no admite insinuaciones, y usted lleva media hora insinuando.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Si usted sostiene que había otra persona parada sobre ese pedestal, dígale a esta corte quién. Con nombre. Y respóndalo con el Acta, no con adjetivos.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Ahí está. Me lo está pidiendo él. No lo estoy sacando yo.)', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '(Don Ramón... si nos equivocamos ahorita, nos quedamos sin nada.)', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: '(Si nos equivocamos ahorita, joven, yo me quedo sin nada. Usted se queda sin veinte años.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '...Con permisito, dijo Monchito.', pose: 'donramon_idle' }
];

const CASE1_D2_T3_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡AQUÍ! ¡El corazón del pecho, señor juez!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'El testigo declaró "ce, hache". Pero en esta fotografía las letras dicen HACHE, CE.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'La ampliación llena la pantalla. El emblema se lee "HC".', sfx: 'realization', bgm: 'objection' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¡Están al revés!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: '¡Está mal revelada! ¡Voltearon el negativo en el laboratorio!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'El negativo está bien, señor fiscal. Lo que está al revés es la habitación.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Señor juez: esa cámara está atornillada mirando al muro del pasillo. Y en ese muro hay un espejo veneciano de tres metros.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'La cámara no fotografió el vestíbulo. Fotografió el espejo.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Entonces todo lo que hay en esa foto...', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Está invertido. Las letras, y también la dirección.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Ese hombre no corría hacia la puerta grande, señor juez. Corría en sentido contrario: venía entrando por la puerta de carga.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Escándalo en la galería. El Juez tarda cuatro martillazos en callarla.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'Y en la sala dos hay algo que dice lo mismo sin espejos de por medio, señor juez.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'La jaula del perico histórico quedó volcada justo en la línea que va de la puerta de carga al cuerpo del velador.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Y mi cliente declaró desde el primer día, antes de que nadie hablara de espejos, que tropezó con ella al entrar.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'El reflejo y la jaula cuentan la misma trayectoria: alguien entrando por el patio a las nueve en punto.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'FLORINDA', text: '¡Y me lo dejó apachurrado!', pose: 'florinda_crying' },
  { speaker: 'JUEZ', text: 'La corte lamenta lo del perico y agradece la corroboración.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Y hay una cosa más, y ésta es la que le pido a la corte que no olvide.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Miren las manos.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'En la ampliación, las dos manos del hombre van abiertas y vacías, a la altura de la cintura, como corre cualquiera que corre.' },
  { speaker: 'DEFENSA', text: 'Las trae abiertas. Y vacías.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'A las nueve en punto de la noche del veintiuno, la única fotografía de este caso muestra a mi cliente entrando al museo con las manos vacías.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Usted no hizo nada, joven, usted iba corriendo.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: '¡Corría astutamente!', pose: 'chapulin_idle' },
  { speaker: 'TRIPASECA', text: '...Yo... yo vi lo que vi.', pose: 'tripaseca_sweat' },
  { speaker: 'SUPER SAM', text: '¡Your Honor! ¡Aunque entrara vacío, pudo agarrar la chicharra DESPUÉS!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¿En siete minutos, con un hombre desmayado en el suelo y sin que aparezca la pieza? La corte empieza a cansarse, fiscalía.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defensa: si esa foto muestra el pasillo de carga, entonces muestra también el patio. ¿Qué más hay en ese reflejo?', pose: 'judge_thinking' }
];

const CASE1_D2_T3_FOLLOWUP: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Al fondo del reflejo, señor juez, hay un rectángulo de luz: la puerta de carga, abierta de par en par a las nueve de la noche.', pose: 'donramon_point', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'Y contra esa luz se recorta la caja de redilas de una camioneta estacionada en el patio.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Una camioneta sin placas que lleva dos días ahí, porque nadie la registró jamás.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '¡Eso es...!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Eso es lo que pasa cuando un caso se cierra en cinco minutos, señor fiscal.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Esta mañana, con orden del juez, la defensa entró a ese patio. Y junto a la llanta trasera de esa camioneta encontró esto.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'Don Ramón levanta una bolsa de lona gruesa, vacía, con un sello estampado.', sfx: 'whoosh' },
  { speaker: 'JUEZ', text: 'Descríbala para el acta.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Bolsa de lona de ochenta y dos por cincuenta. Vacía. Tiznada por fuera con el mismo tizne de la lona encerada de esa camioneta.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Y con una moneda de plata atorada en la costura reventada.', pose: 'donramon_slam', sfx: 'desk_slam', updateEvidence: 'informe_medico' },
  { speaker: 'DEFENSA', text: 'El laboratorio comparó esa moneda con las partículas metálicas de la herida del velador.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Plata al noventa por ciento. La misma aleación.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'La galería se levanta. Alma Negra se agarra del brazo de la silla.', sfx: 'realization' },
  { speaker: 'ALMA NEGRA', text: '¡Ésas! ¡Ésas fueron las que oí rodar, por mil demonios!', pose: 'almanegra_shock' },
  { speaker: 'JUEZ', text: '¡El arma del delito ha sido identificada!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Que quede asentado: al velador Alma Negra lo golpearon con esta bolsa de lona llena de moneda de plata, y esta bolsa salió del museo por la puerta de carga.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'La corte observa además que la bolsa lleva estampado el sello de la Fiscalía.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: '...La fiscalía reparte bolsas como ésa. Para viáticos. Para muchas cosas.', pose: 'supersam_sweat' },
  { speaker: 'SUPER SAM', text: 'La fiscalía no tiene nada más que decir sobre esa bolsa.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '...La corte lo lamenta.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(Y ahí se queda. No hay con qué obligarlo, y él lo sabe.)', pose: 'donramon_idle' },
  ...CASE1_GIRO_2
];

export const CASE1_TESTIMONY_5: Testimony = {
  title: 'Testimonio: Cómo huyó el ladrón',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'c1_d2t3_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Cuando me bajé del tambo y salí corriendo, alcancé a verlo por el zaguán del vestíbulo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Le vio usted la cara?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'La cara no. Vi lo colorado.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '"Lo colorado".', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Lo colorado corriendo, licenciado. ¿Cuánta gente colorada anda corriendo de noche en esta ciudad?', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Últimamente, más de la que uno se imagina.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'c1_d2t3_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Iba derechito a la puerta grande, con la chicharra apretada contra el pecho. Se le veía el bulto.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Cómo distinguió usted una chicharra contra un pecho, de noche y a treinta metros?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Por el bulto. Se le hacía bulto.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '¿Bulto de qué tamaño?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Pos... de chicharra.', pose: 'tripaseca_sweat' },
        { speaker: 'JUEZ', text: 'La corte agradecería una medida y no una adivinanza.', pose: 'judge_thinking' },
        { speaker: 'TRIPASECA', text: 'Es que yo no ando midiendo, señor juez. Yo ando vendiendo.', pose: 'tripaseca_smug' }
      ]
    },
    {
      id: 'c1_d2t3_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Y la cámara lo agarró. Una sola foto, pero ahí se le ve clarito el corazoncito ese que trae en el pecho.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Descríbame ese "corazoncito".', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'El corazón amarillo con las dos letras. Todo mundo lo conoce. Ce, hache.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Ce, hache.', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Ce, hache. Como se llama el señor.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(Dijo "ce, hache". Lo dijo él, no yo. Que quede en el acta y que lo oiga todo el mundo.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '(¡Don Ramón! ¡Yo traigo las letras en ese orden desde 1970!)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Ya sé, joven. Ése es exactamente el punto.)', pose: 'donramon_point' }
      ],
      contradiction: {
        evidence: ['foto_crimen'],
        pointTarget: FOTO_POINT_TARGET,
        successDialogue: CASE1_D2_T3_SUCCESS,
        followUp: {
          evidence: ['bolsa_dolares'],
          prompt: '¿Qué se halló junto a esa camioneta que corresponda al arma del día uno?',
          successDialogue: CASE1_D2_T3_FOLLOWUP
        }
      }
    },
    {
      id: 'c1_d2t3_4',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Yo no me inventé nada, señor juez. Ahí está el retrato. Véanlo ustedes.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Usted insiste mucho en que veamos la foto.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Pues claro. Es lo único que no puede mentir, ¿no?', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'En eso, señor Tripaseca, estamos completamente de acuerdo.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡La fiscalía pide que se proyecte la ampliación! ¡Que se vea de una vez y cerremos!', pose: 'supersam_point', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: '(Gracias, señor fiscal. En serio.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
