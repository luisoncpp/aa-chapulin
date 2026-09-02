/**
 * Complete Interactive Case Script & Dialogue Database
 * "Caso 1: El Juicio del Escuadrón Colorado" (Turnabout of the Red Grasshopper)
 */

const CASE_SCRIPT = {
    // -------------------------------------------------------------
    // INVESTIGATION SCENES
    // -------------------------------------------------------------
    investigation: {
        museum: {
            title: "Museo de Antigüedades y Curiosidades - Escena del Crimen",
            bg: "assets/bg_museum.webp",
            bgm: "investigation",
            speaker: "NARRADOR",
            intro: [
                { speaker: "NARRADOR", text: "21 de Agosto, 9:30 PM. Museo de Curiosidades.", pose: null },
                { speaker: "DEFENSA", text: "La legendaria 'Chicharra Paralizadora de Oro' ha sido sustraída de su vitrina protegida...", pose: null },
                { speaker: "FLORINDA", text: "¡Ay, Dios mío! ¡Qué escándalo! ¡Toda la chusma del vecindario está hablando de esto!", pose: "florinda_angry", sfx: "text" },
                { speaker: "DEFENSA", text: "(Doña Florinda es la curadora del museo... y parece más molesta que de costumbre.)", pose: null }
            ],
            hotspots: [
                {
                    id: "pedestal",
                    label: "Vitrina Destrozada & Pedestal",
                    x: 44, y: 22, w: 18, h: 48,
                    dialogue: [
                        { speaker: "DEFENSA", text: "La vitrina central está hecha añicos... El vidrio está esparcido hacia afuera.", sfx: "realization" },
                        { speaker: "DEFENSA", text: "¡Espera un segundo! ¿Qué es esto brillando en la base del pedestal?", sfx: "text" },
                        { speaker: "DEFENSA", text: "¡Son 'Pastillas de Chiquitolina'! ¿Por qué estarían regadas aquí cerca del ducto de ventilación?", sfx: "realization", addEvidence: "pastillas_chiquitolina" },
                        { speaker: "FLORINDA", text: "¡Esas pastillas las dejó caer el sospechoso antes de huir!", pose: "florinda_idle" }
                    ]
                },
                {
                    id: "armor",
                    label: "Guardia Alma Negra & Armadura",
                    x: 3, y: 25, w: 18, h: 50,
                    dialogue: [
                        { speaker: "DEFENSA", text: "El pirata Alma Negra, guardia del museo, está sentado con una compresa de hielo en la cabeza.", sfx: "text" },
                        { speaker: "DEFENSA", text: "Examinemos el informe médico preliminar de los paramédicos...", sfx: "text" },
                        { speaker: "DEFENSA", text: "'El sujeto presenta contusión craneal severa producida por un impacto metálico denso, probablemente monedas pesadas en un costal.'", sfx: "realization", addEvidence: "informe_medico" },
                        { speaker: "DEFENSA", text: "(¿Impacto metálico? Pero la fiscalía asegura que fue atacado con un Chipote Chillón...)", sfx: "text" }
                    ]
                },
                {
                    id: "security_cam",
                    label: "Cámara de Seguridad & Tragaluz",
                    x: 58, y: 8, w: 15, h: 32,
                    dialogue: [
                        { speaker: "DEFENSA", text: "La cámara de seguridad frontal capturó una fotografía borrosa a las 9:00 PM en punto.", sfx: "text" },
                        { speaker: "DEFENSA", text: "Muestra a una persona con capucha roja y antenas corriendo... pero algo luce muy extraño en su pecho.", sfx: "realization", addEvidence: "foto_crimen" },
                        { speaker: "DEFENSA", text: "(El emblema del pecho tiene las letras 'HC' invertidas. ¿Por qué razón?)", sfx: "text" }
                    ]
                },
                {
                    id: "treasure_chest",
                    label: "Cofre y Farol de Curiosidades",
                    x: 74, y: 48, w: 22, h: 38,
                    dialogue: [
                        { speaker: "DEFENSA", text: "Un cofre de madera antiguo y un farol de aceite.", sfx: "text" },
                        { speaker: "FLORINDA", text: "¡Ese cofre contenía monedas de colección pirata, pero están intactas! El ladrón sólo buscaba la Chicharra de Oro.", pose: "florinda_idle" }
                    ]
                }
            ],
            talkOptions: [
                {
                    id: "about_crime",
                    label: "¿Qué ocurrió con la Chicharra de Oro?",
                    dialogue: [
                        { speaker: "FLORINDA", text: "¡Estaba yo terminando de regar las plantas cuando sonó un estruendo en la sala principal!", pose: "florinda_shock" },
                        { speaker: "FLORINDA", text: "Corrí hacia aquí y vi a un hombre vestido de rojo con un enorme martillo saltando por el tragaluz.", pose: "florinda_idle" },
                        { speaker: "DEFENSA", text: "¿Pudo verle la cara con claridad?", pose: null },
                        { speaker: "FLORINDA", text: "¡Por supuesto! Tenía dos antenas amarillas moviéndose frenéticamente. ¡No hay duda!", pose: "florinda_angry" }
                    ]
                },
                {
                    id: "about_suspect",
                    label: "Sobre el sospechoso detenido",
                    dialogue: [
                        { speaker: "FLORINDA", text: "El fiscal Super Sam llegó en tres minutos diciendo 'Time is money!' y ordenó su arresto inmediato.", pose: "florinda_idle" },
                        { speaker: "FLORINDA", text: "El Chapulín estaba atrapado de cabeza dentro de una jaula para loros del siglo XVIII.", pose: "florinda_idle" },
                        { speaker: "DEFENSA", text: "(Típico del Chapulín... siempre calculando fríamente sus movimientos.)", pose: null }
                    ]
                }
            ]
        },

        detention: {
            title: "Centro de Detención - Sala de Visitas",
            bg: "assets/bg_detention.webp",
            bgm: "suspense",
            speaker: "CHAPULIN",
            intro: [
                { speaker: "CHAPULIN", text: "¡Oh! Y ahora, ¿quién podrá defenderme?!", pose: "chapulin_panic", sfx: "text" },
                { speaker: "DEFENSA", text: "¡Tranquilo, Chapulín! ¡Yo asumiré tu defensa en el tribunal!", pose: null },
                { speaker: "CHAPULIN", text: "¡Síganme los buenos! Digo... menos mal. Ya me estaba acostumbrando al menú de pan y agua.", pose: "chapulin_idle" }
            ],
            hotspots: [
                {
                    id: "chapulin_spot",
                    label: "El Chapulín Colorado",
                    x: 20, y: 15, w: 32, h: 60,
                    dialogue: [
                        { speaker: "CHAPULIN", text: "¡Mis movimientos están fríamente calculados... excepto cuando me encierran en una celda!", pose: "chapulin_idle" },
                        { speaker: "DEFENSA", text: "El Chapulín te entrega sus 'Antenitas de Vinil' para que las uses como prueba.", sfx: "realization", addEvidence: "antenitas_vinil" }
                    ]
                },
                {
                    id: "phone_spot",
                    label: "Teléfono de Visitas",
                    x: 76, y: 28, w: 14, h: 36,
                    dialogue: [
                        { speaker: "DEFENSA", text: "El auricular del teléfono de la sala de visitas.", sfx: "text" },
                        { speaker: "CHAPULIN", text: "Traté de llamar a los bomberos, pero la operadora me cobró en dólares. ¡Seguro fue Super Sam!", pose: "chapulin_panic" }
                    ]
                },
                {
                    id: "table_spot",
                    label: "Mesa de Acero & Martillo",
                    x: 35, y: 62, w: 50, h: 22,
                    dialogue: [
                        { speaker: "DEFENSA", text: "Sobre la mesa está el 'Chipote Chillón' decomisado por la policía.", sfx: "text" },
                        { speaker: "DEFENSA", text: "Al examinarlo de cerca, compruebas que es completamente de vinil y goma blanda.", sfx: "chipote", addEvidence: "chipote_chillon" }
                    ]
                }
            ],
            talkOptions: [
                {
                    id: "chapulin_story",
                    label: "¿Qué hacías en el museo?",
                    dialogue: [
                        { speaker: "CHAPULIN", text: "Estaba yo cenando una torta de jamón cuando mis antenitas de vinil comenzaron a vibrar a las 8:45 PM.", pose: "chapulin_idle" },
                        { speaker: "CHAPULIN", text: "¡Detectaron la presencia del enemigo! Así que me teletransporté de inmediato... o bueno, tomé un taxi.", pose: "chapulin_idle" },
                        { speaker: "CHAPULIN", text: "Al llegar, la vitrina ya estaba rota y Alma Negra estaba inconsciente. ¡Alguien me tendió una trampa!", pose: "chapulin_panic" },
                        { speaker: "DEFENSA", text: "Las 'Antenitas de Vinil' tienen un registro de la hora de alarma: 8:45 PM.", sfx: "realization", addEvidence: "antenitas_vinil" }
                    ]
                },
                {
                    id: "chapulin_weapon",
                    label: "¿Atacaste al guardia con tu martillo?",
                    dialogue: [
                        { speaker: "CHAPULIN", text: "¡¿Yo?! ¡Jamás! ¡El Chipote Chillón es un instrumento noble para defender a los indefensos!", pose: "chapulin_slam", sfx: "desk_slam" },
                        { speaker: "CHAPULIN", text: "¡Míralo tú mismo! Es de goma y plástico inflable.", pose: "chapulin_idle" },
                        { speaker: "DEFENSA", text: "Al apretarlo, emite un cómico chillido: ¡SQUIIIIK!", sfx: "chipote", addEvidence: "chipote_chillon" },
                        { speaker: "DEFENSA", text: "(Es físicamente imposible fracturar un cráneo con esto... ¡Tengo una prueba sólida!)", sfx: "realization" }
                    ]
                }
            ]
        }
    },

    // -------------------------------------------------------------
    // COURTROOM TRIAL SCRIPT
    // -------------------------------------------------------------
    trial: {
        intro: [
            { bg: "assets/bg_judge.webp", speaker: "JUEZ", pose: "judge_gavel", text: "¡Silencio en la sala! Se abre la sesión del tribunal superior.", sfx: "gavel", bgm: "trial" },
            { bg: "assets/bg_judge.webp", speaker: "JUEZ", pose: "judge_neutral", text: "¿Está lista la fiscalía para presentar sus cargos?" },
            { bg: "assets/bg_courtroom.webp", speaker: "SUPER SAM", pose: "supersam_slam", text: "Time is money, Your Honor! La fiscalía está más que lista para liquidar este caso en tiempo récord.", sfx: "desk_slam" },
            { bg: "assets/bg_courtroom.webp", speaker: "SUPER SAM", pose: "supersam_point", text: "El acusado fue atrapado in fraganti con el arma agresora en la escena del crimen. ¡Exijo veredicto culpable en 3 minutos!" },
            { bg: "assets/bg_defense.webp", speaker: "DEFENSA", pose: "chapulin_slam", text: "¡La defensa está lista, Su Señoría! ¡Y demostraremos la inocencia del Chapulín Colorado!", sfx: "desk_slam" },
            { bg: "assets/bg_judge.webp", speaker: "JUEZ", pose: "judge_neutral", text: "Muy bien. Que el testigo principal de la fiscalía pase al estrado." }
        ],

        // TESTIMONY 1: TRIPASECA'S ALIBI & ASSAULT
        testimony1: {
            title: "Testimonio del Testigo: El Asalto en el Museo",
            witness: "El Tripaseca",
            bgm: "cross_exam_moderato",
            statements: [
                {
                    id: "stmt1_1",
                    speaker: "TRIPASECA",
                    pose: "tripaseca_smug",
                    text: "Yo soy una blanca paloma. A las 9:00 PM yo estaba cenando tranquilamente en el centro.",
                    pressText: [
                        { speaker: "DEFENSA", text: "¡UN MOMENTO!", cutin: "objection_un_momento", sfx: "whoosh" },
                        { speaker: "DEFENSA", text: "¿En qué restaurante exactamente estaba cenando, señor Tripaseca?" },
                        { speaker: "TRIPASECA", text: "Eh... en la churrería 'El Chavo'. Me comí 40 churros... ¡no tengo que darle explicaciones a usted!", pose: "tripaseca_sweat" }
                    ]
                },
                {
                    id: "stmt1_2",
                    speaker: "TRIPASECA",
                    pose: "tripaseca_smug",
                    text: "Vi con mis propios ojos cómo el Chapulín noqueó al guardia Alma Negra de un feroz golpe con su letal Chipote Chillón.",
                    pressText: [
                        { speaker: "DEFENSA", text: "¡UN MOMENTO!", cutin: "objection_un_momento", sfx: "whoosh" },
                        { speaker: "DEFENSA", text: "¿Dice que vio el impacto claramente?" },
                        { speaker: "TRIPASECA", text: "¡Claro! ¡Ese martillo rojo es un arma de destrucción masiva capaz de quebrar vigas de acero!", pose: "tripaseca_smug" }
                    ],
                    contradiction: {
                        evidence: ["chipote_chillon", "informe_medico"],
                        successDialogue: [
                            { cutin: "objection_protesto", speaker: "DEFENSA", text: "¡PROTESTO!", sfx: "whoosh", bgm: "objection" },
                            { speaker: "DEFENSA", text: "¡Su testimonio se desmorona por completo, señor Tripaseca!", pose: "chapulin_point" },
                            { speaker: "SUPER SAM", text: "What?! ¿De qué está hablando el defensor novato?", pose: "supersam_point" },
                            { speaker: "DEFENSA", text: "¡Observe detenidamente el 'Chipote Chillón'! ¡Es de vinil blando y hueco! Al golpear hace esto...", sfx: "chipote" },
                            { speaker: "JUEZ", text: "¡Vaya sonido tan simpático! Me recuerda a los juguetes de mi nieto.", pose: "judge_thinking" },
                            { speaker: "DEFENSA", text: "¡El Informe Médico demuestra que Alma Negra sufrió un traumatismo por un impacto con MONEDAS METÁLICAS DENSAS!", sfx: "realization" },
                            { speaker: "TRIPASECA", text: "¡Glup! ¡E-esperen un segundo!", pose: "tripaseca_sweat" },
                            { speaker: "SUPER SAM", text: "Wait! ¡Nadie mencionó que el guardia tuviera la cabeza tan dura!", pose: "supersam_slam", sfx: "desk_slam" },
                            { speaker: "JUEZ", text: "Ciertamente... es imposible que ese martillo de juguete noqueara a un pirata curtido. ¡Testigo, aclare esto de inmediato!", pose: "judge_gavel", sfx: "gavel" }
                        ]
                    }
                },
                {
                    id: "stmt1_3",
                    speaker: "TRIPASECA",
                    pose: "tripaseca_smug",
                    text: "Luego el ladrón rompió los candados de la vitrina con una palanca y salió con la Chicharra de Oro.",
                    pressText: [
                        { speaker: "DEFENSA", text: "¡UN MOMENTO!", cutin: "objection_un_momento", sfx: "whoosh" },
                        { speaker: "DEFENSA", text: "¿No había un sistema de alarma en la vitrina?" },
                        { speaker: "TRIPASECA", text: "¡Para un maleante como él, las alarmas no son nada!", pose: "tripaseca_smug" }
                    ]
                }
            ]
        },

        // TESTIMONY 2: THE LOCKED DISPLAY & ESCAPE
        testimony2: {
            title: "Testimonio del Testigo: La Fuga de la Escena",
            witness: "El Tripaseca",
            bgm: "cross_exam_allegro",
            statements: [
                {
                    id: "stmt2_1",
                    speaker: "TRIPASECA",
                    pose: "tripaseca_smug",
                    text: "Está bien, tal vez el guardia tropezó con una moneda... ¡pero vi al ladrón entrar por la puerta y romper la vitrina desde afuera!",
                    pressText: [
                        { speaker: "DEFENSA", text: "¡UN MOMENTO!", cutin: "objection_un_momento", sfx: "whoosh" },
                        { speaker: "DEFENSA", text: "La puerta principal estaba cerrada con llave según el registro policial." },
                        { speaker: "TRIPASECA", text: "¡Pues habrá forzado la cerradura con sus mañas de superhéroe!", pose: "tripaseca_sweat" }
                    ],
                    contradiction: {
                        evidence: ["pastillas_chiquitolina"],
                        successDialogue: [
                            { cutin: "objection_protesto", speaker: "DEFENSA", text: "¡PROTESTO!", sfx: "whoosh", bgm: "objection" },
                            { speaker: "DEFENSA", text: "¡Nadie forzó ninguna cerradura ni rompió el cristal desde afuera!", pose: "chapulin_point" },
                            { speaker: "DEFENSA", text: "¡En el suelo de la vitrina encontramos restos de 'Pastillas de Chiquitolina' junto al ducto de ventilación!", sfx: "realization" },
                            { speaker: "JUEZ", text: "¿Pastillas de Chiquitolina? ¿Las famosas píldoras que reducen el tamaño de una persona?", pose: "judge_shock" },
                            { speaker: "DEFENSA", text: "¡Exacto! El verdadero ladrón ingirió una pastilla, se redujo al tamaño de un ratón, entró por la rejilla del ducto y rompió el cristal desde ADENTRO.", pose: "chapulin_slam", sfx: "desk_slam" },
                            { speaker: "TRIPASECA", text: "¡Aaaargh! ¡Maldita sea mi suerte!", pose: "tripaseca_panic" },
                            { speaker: "SUPER SAM", text: "Objection! ¡Aunque haya usado pastillas mágicas, la foto de seguridad muestra al Chapulín huyendo hacia la salida!", pose: "supersam_point" }
                        ]
                    }
                },
                {
                    id: "stmt2_2",
                    speaker: "TRIPASECA",
                    pose: "tripaseca_sweat",
                    text: "¡La foto de seguridad tomada a las 9:00 PM lo prueba todo! ¡Se ve al Chapulín corriendo hacia la salida del museo!",
                    pressText: [
                        { speaker: "DEFENSA", text: "¡UN MOMENTO!", cutin: "objection_un_momento", sfx: "whoosh" },
                        { speaker: "DEFENSA", text: "¿Está seguro de la dirección en la que corría el sospechoso?" },
                        { speaker: "TRIPASECA", text: "¡Iba directo a la calle principal para perderse en la noche!", pose: "tripaseca_smug" }
                    ],
                    contradiction: {
                        evidence: ["foto_crimen"],
                        successDialogue: [
                            { cutin: "objection_toma_eso", speaker: "DEFENSA", text: "¡TOMA ESO!", sfx: "whoosh", bgm: "pursuit" },
                            { speaker: "DEFENSA", text: "¡Miren de cerca el pecho del sospechoso en la fotografía de seguridad!", pose: "chapulin_point" },
                            { speaker: "JUEZ", text: "Un momento... el corazón amarillo no dice 'CH'... ¡dice 'HC'!", pose: "judge_shock" },
                            { speaker: "DEFENSA", text: "¡La cámara no fotografió directamente al sujeto! Capturó su reflejo en el gran espejo veneciano del pasillo.", sfx: "realization" },
                            { speaker: "DEFENSA", text: "¡Lo que significa que el ladrón NO estaba corriendo hacia la salida principal, sino hacia el estacionamiento privado de carga!", pose: "chapulin_slam", sfx: "desk_slam" },
                            { speaker: "TRIPASECA", text: "¡NOOOOOOOOO! ¡¿Cómo supiste lo de mi camioneta en el callejón?!", pose: "tripaseca_breakdown" }
                        ]
                    }
                }
            ]
        },

        // FINAL CLIMAX: EXPOSING THE CULPRIT & RECOVERING THE GOLDEN CHICHARRA
        climax: {
            dialogue: [
                { speaker: "SUPER SAM", text: "Hold it right there! Si Tripaseca es el ladrón... ¿dónde está la Chicharra de Oro en este preciso instante?!", pose: "supersam_point", sfx: "desk_slam" },
                { speaker: "JUEZ", text: "¡Tiene razón el fiscal! Para dictar sentencia, la defensa debe presentar la prueba concluyente de dónde se oculta el tesoro.", pose: "judge_thinking" },
                { speaker: "DEFENSA", text: "(Es mi última oportunidad. Las Antenitas de Vinil están detectando la presencia del enemigo... ¡justo en el estrado del testigo!)", pose: null }
            ],
            presentTarget: ["antenitas_vinil", "bolsa_dolares"],
            verdict: [
                { cutin: "objection_protesto", speaker: "DEFENSA", text: "¡PROTESTO!", sfx: "whoosh", bgm: "pursuit" },
                { speaker: "DEFENSA", text: "¡Mis Antenitas de Vinil están vibrando con fuerza máxima apuntando al bolsillo de Tripaseca!", pose: "chapulin_point" },
                { speaker: "CHAPULIN", text: "¡No contaban con mi astucia! ¡Y menos con mis antenitas!", pose: "chapulin_idle" },
                { speaker: "DEFENSA", text: "¡Oficial, revise el forro de la chaqueta del testigo!", sfx: "realization" },
                { speaker: "JUEZ", text: "¡Alguacil! ¡Proceda a la inspección!", pose: "judge_gavel", sfx: "gavel" },
                { speaker: "NARRADOR", text: "*¡¡¡PIII-POOOO!!!* (La Chicharra Paralizadora de Oro cae al suelo y resuena en toda la sala)", sfx: "chicharra" },
                { speaker: "TRIPASECA", text: "¡¡¡MALDICIIIIIIÓN!!! ¡¡¡CONFIEEEEESOOOOOO!!! ¡¡¡YO ME ROBÉ LA CHICHARRA Y LE PAGUÉ A SAM CON DÓLARES FALSOS!!!", pose: "tripaseca_breakdown" },
                { speaker: "SUPER SAM", text: "WHAAAAT?! ¡¿DÓLARES FALSOS?! ¡¡¡MY MONEY IS RUINED, OH NOOOOO!!!", pose: "supersam_breakdown" },
                { speaker: "JUEZ", text: "¡Visto y comprobado! Este tribunal ha llegado a un veredicto definitivo e incuestionable.", pose: "judge_gavel", sfx: "gavel" },
                { cutin: "objection_culpable", speaker: "JUEZ", text: "¡INOCENTE!", sfx: "whoosh", bgm: "victory" },
                { speaker: "CHAPULIN", text: "¡Se aprovechan de mi nobleza! ¡Pero la justicia siempre triunfa! ¡¡¡SÍGANME LOS BUENOS!!!", pose: "chapulin_point" },
                { speaker: "DEFENSA", text: "¡Caso Cerrado!", pose: null }
            ]
        }
    }
};

window.CASE_SCRIPT = CASE_SCRIPT;
