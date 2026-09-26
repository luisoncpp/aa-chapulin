// @Architecture(descriptionShort="Case 1 day 2 escape testimony, pointing 2 and turnabout 2", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Testimonio 3, El Tripaseca (§12.4), Señalamiento 2 y
 * GIRO 2 (§12.5), que entra directo al clímax.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE1_FOTO_POINT_TARGET } from './trial_day2_t3_points.js';

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
  { speaker: 'NARRADOR', text: 'La sala se queda muda.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization' },
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
  { speaker: 'DEFENSA', text: 'El croquis coloca la cámara junto al acceso, apuntando al espejo que cierra el tramo recto.', pose: 'donramon_point', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Esa pintura está en el tramo que queda detrás de la cámara. Sólo aparece al fondo porque el espejo devuelve la escena.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Usted colocó a mi cliente detrás de ese marco. Pero detrás del Chapulín se ve una pintura, no el acceso de carga.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Entonces, ¿dónde estaba?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Aquí, delante del espejo. Corría hacia él, alejándose del acceso de carga.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'La foto no demuestra una salida. Demuestra que a las nueve cruzó la franja iluminada del pasillo interior.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Escándalo en la galería', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'gavel' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'Y en la sala dos hay algo que dice lo mismo sin espejos de por medio, señor juez.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'La jaula del perico histórico quedó volcada hacia dentro desde el acceso del pasillo a la sala dos.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Y mi cliente declaró desde el primer día, antes de que nadie hablara de espejos, que dobló al entrar y volvió a girar hacia las salas.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'La foto y la jaula cuentan la misma trayectoria: alguien avanzando hacia dentro a las nueve en punto.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'FLORINDA', text: '¡Y me lo dejó apachurrado!', pose: 'florinda_crying' },
  { speaker: 'JUEZ', text: 'La corte lamenta lo del perico y agradece la corroboración.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Y hay una cosa más, y ésta es la que le pido a la corte que no olvide.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Miren las manos.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: '...', bg: 'assets/ampliacion_foto_crimen_manos.webp', furniture: 'none' },
  { speaker: 'DEFENSA', text: 'Las trae abiertas. Y vacías.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'A las nueve en punto de la noche del veintiocho, la única fotografía de este caso muestra a mi cliente entrando al museo con las manos vacías.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Usted no hizo nada, joven, usted iba corriendo.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: '¡Corría astutamente!', pose: 'chapulin_idle' },
  { speaker: 'TRIPASECA', text: '...Yo... yo vi lo que vi.', pose: 'tripaseca_sweat' },
  { speaker: 'SUPER SAM', text: '¡Your Honor! ¡Aunque entrara vacío, pudo agarrar la chicharra DESPUÉS!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¿En siete minutos, con un hombre desmayado en el suelo y sin que aparezca la pieza? La corte empieza a cansarse, fiscalía.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defensa: si la puerta y el patio no están en la foto, ¿qué encontró al registrar ese acceso?', pose: 'judge_thinking' }
];

const CASE1_D2_T3_FOLLOWUP: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Una camioneta que la policía dejó sin revisar, señor juez.', pose: 'donramon_point', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'Estaba en el patio de carga, junto al acceso por donde mi cliente entró.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Sin placas y cubierta con una lona encerada.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '¡Eso es...!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Eso es lo que pasa cuando un caso se cierra en cinco minutos, señor fiscal.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Esta mañana, con orden del juez, la defensa revisó ese acceso. Y junto a la llanta trasera encontró esto.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'Don Ramón levanta una bolsa de lona gruesa, vacía, con un sello estampado.', sfx: 'whoosh' },
  { speaker: 'JUEZ', text: 'Descríbala para el acta.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Bolsa de lona de ochenta y dos por cincuenta. Vacía. Tiznada por fuera con el mismo tizne de la lona encerada de esa camioneta.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Y con una moneda de plata atorada en la costura reventada.', pose: 'donramon_slam', sfx: 'desk_slam', updateEvidence: 'informe_medico' },
  { speaker: 'DEFENSA', text: 'El laboratorio comparó esa moneda con las partículas metálicas de la herida del velador.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Plata al noventa por ciento. La misma aleación.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'La galería se levanta. Alma Negra se agarra del brazo de la silla.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization' },
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
      text: 'Vi la foto que tomó la cámara del pasillo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Le vio usted la cara?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'La cara no. Vi lo colorado en la foto.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '"Lo colorado en la foto".', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Lo colorado corriendo, licenciado. ¿Cuánta gente colorada sale en una foto de noche en esta ciudad?', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Últimamente, más de la que uno se imagina.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'c1_d2t3_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'La cámara está junto al acceso. Y ahí viene él, desde el fondo, corriendo hacia ella. ¡Estaba saliendo!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Usted vio el pasillo, o interpretó la fotografía?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'La foto lo dice clarito. La cámara está en el acceso y él viene hacia ella.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '¿Y la chicharra?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'La traía contra el pecho. Ahí se le ve el bulto.', pose: 'tripaseca_smug' },
        { speaker: 'JUEZ', text: 'La corte agradecería no confundir un bulto con una pieza de oro.', pose: 'judge_thinking' },
        { speaker: 'TRIPASECA', text: 'Es que yo no ando pesando, señor juez. Yo ando vendiendo.', pose: 'tripaseca_smug' }
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
        pointTarget: CASE1_FOTO_POINT_TARGET,
        successDialogue: CASE1_D2_T3_SUCCESS,
        followUp: {
          evidence: ['bolsa_dolares'],
          prompt: '¿Qué se halló al registrar el acceso de carga que corresponda al arma del día uno?',
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
