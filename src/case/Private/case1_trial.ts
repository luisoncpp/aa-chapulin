// @Architecture(descriptionShort="Defines courtroom intro and witness testimonies 1 and 2", type="data", icon="layers")
/**
 * Case 1 Courtroom Trial Script (Intro, Testimony 1 & Testimony 2)
 * Consumed by [[src/engine/Private/TrialController.ts]].
 */

import type { DialogueLine, Testimony } from '../../types/index.js';

// @Section(Courtroom Intro Dialogue)
export const TRIAL_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala! Se abre la sesión del tribunal superior.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_neutral', text: '¿Está lista la fiscalía para presentar sus cargos?' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor! La fiscalía está más que lista para liquidar este caso en tiempo récord.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'El acusado fue atrapado in fraganti con el arma agresora en la escena del crimen. ¡Exijo veredicto culpable en 3 minutos!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡La defensa está lista, Su Señoría! ¡Y demostraremos la inocencia del Chapulín Colorado!', sfx: 'desk_slam' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Muy bien. Que el testigo principal de la fiscalía pase al estrado.' }
];

// @Section(Testimony 1: Assault Weapon)
export const TESTIMONY_1: Testimony = {
  title: 'Testimonio del Testigo: El Asalto en el Museo',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt1_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Yo soy una blanca paloma. A las 9:00 PM yo estaba cenando tranquilamente en el centro.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿En qué restaurante exactamente estaba cenando, señor Tripaseca?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: "Eh... en la churrería 'El Chavo'. Me comí 40 churros... ¡no tengo que darle explicaciones a usted!", pose: 'tripaseca_sweat' }
      ]
    },
    {
      id: 'stmt1_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Vi con mis propios ojos cómo el Chapulín noqueó al guardia Alma Negra de un feroz golpe con su letal Chipote Chillón.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Dice que vio el impacto claramente?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: '¡Claro! ¡Ese martillo rojo es un arma de destrucción masiva capaz de quebrar vigas de acero!', pose: 'tripaseca_smug' }
      ],
      contradiction: {
        evidence: ['chipote_chillon', 'informe_medico'],
        successDialogue: [
          { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: '¡Con permisito, dijo Monchito! ¡Su testimonio se desmorona por completo, señor Tripaseca!', pose: 'donramon_point' },
          { speaker: 'SUPER SAM', text: 'What?! ¿De qué está hablando el defensor?', pose: 'supersam_point' },
          { speaker: 'DEFENSA', text: "¡Observe detenidamente el 'Chipote Chillón'! ¡Es de vinil blando y hueco! Al golpear hace esto...", sfx: 'chipote', pose: 'donramon_idle' },
          { speaker: 'JUEZ', text: '¡Vaya sonido tan simpático! Me recuerda a los juguetes de mi nieto.', pose: 'judge_thinking' },
          { speaker: 'DEFENSA', text: '¡El Informe Médico demuestra que Alma Negra sufrió un traumatismo por un impacto con MONEDAS METÁLICAS DENSAS!', sfx: 'realization', pose: 'donramon_slam' },
          { speaker: 'TRIPASECA', text: '¡Glup! ¡E-esperen un segundo!', pose: 'tripaseca_sweat' },
          { speaker: 'SUPER SAM', text: 'Wait! ¡Nadie mencionó que el guardia tuviera la cabeza tan dura!', pose: 'supersam_slam', sfx: 'desk_slam' },
          { speaker: 'JUEZ', text: 'Ciertamente... es imposible que ese martillo de juguete noqueara a un pirata curtido. ¡Testigo, aclare esto de inmediato!', pose: 'judge_gavel', sfx: 'gavel' }
        ]
      }
    },
    {
      id: 'stmt1_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Luego el ladrón rompió los candados de la vitrina con una palanca y salió con la Chicharra de Oro.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿No había un sistema de alarma en la vitrina?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: '¡Para un maleante como él, las alarmas no son nada!', pose: 'tripaseca_smug' }
      ]
    }
  ]
};

// @Section(Testimony 2: Escape Route)
export const TESTIMONY_2: Testimony = {
  title: 'Testimonio del Testigo: La Fuga de la Escena',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt2_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Está bien, tal vez el guardia tropezó con una moneda... ¡pero vi al ladrón entrar por la puerta y romper la vitrina desde afuera!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'La puerta principal estaba cerrada con llave según el registro policial.', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: '¡Pues habrá forzado la cerradura con sus mañas de superhéroe!', pose: 'tripaseca_sweat' }
      ],
      contradiction: {
        evidence: ['pastillas_chiquitolina'],
        successDialogue: [
          { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: '¡Nadie forzó ninguna cerradura ni rompió el cristal desde afuera!', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: "¡En el suelo de la vitrina encontramos restos de 'Pastillas de Chiquitolina' junto al ducto de ventilación!", sfx: 'realization', pose: 'donramon_idle' },
          { speaker: 'JUEZ', text: '¿Pastillas de Chiquitolina? ¿Las famosas píldoras que reducen el tamaño de una persona?', pose: 'judge_shock' },
          { speaker: 'DEFENSA', text: '¡Exacto! El verdadero ladrón ingirió una pastilla, se redujo al tamaño de un ratón, entró por la rejilla del ducto y rompió el cristal desde ADENTRO.', pose: 'donramon_slam', sfx: 'desk_slam' },
          { speaker: 'TRIPASECA', text: '¡Aaaargh! ¡Maldita sea mi suerte!', pose: 'tripaseca_panic' },
          { speaker: 'SUPER SAM', text: 'Objection! ¡Aunque haya usado pastillas mágicas, la foto de seguridad muestra al Chapulín huyendo hacia la salida!', pose: 'supersam_point' }
        ]
      }
    },
    {
      id: 'stmt2_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_sweat',
      text: '¡La foto de seguridad tomada a las 9:00 PM lo prueba todo! ¡Se ve al Chapulín corriendo hacia la salida del museo!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Está seguro de la dirección en la que corría el sospechoso?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: '¡Iba directo a la calle principal para perderse en la noche!', pose: 'tripaseca_smug' }
      ],
      contradiction: {
        evidence: ['foto_crimen'],
        successDialogue: [
          { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: '¡Miren de cerca el pecho del sospechoso en la fotografía de seguridad!', pose: 'donramon_point' },
          { speaker: 'JUEZ', text: "Un momento... el corazón amarillo no dice 'CH'... ¡dice 'HC'!", pose: 'judge_shock' },
          { speaker: 'DEFENSA', text: '¡La cámara no fotografió directamente al sujeto! Capturó su reflejo en el gran espejo veneciano del pasillo.', sfx: 'realization', pose: 'donramon_idle' },
          { speaker: 'DEFENSA', text: '¡Lo que significa que el ladrón NO estaba corriendo hacia la salida principal, sino hacia el estacionamiento privado de carga!', pose: 'donramon_slam', sfx: 'desk_slam' },
          { speaker: 'TRIPASECA', text: '¡NOOOOOOOOO! ¡¿Cómo supiste lo de mi camioneta en el callejón?!', pose: 'tripaseca_breakdown' }
        ]
      }
    }
  ]
};
