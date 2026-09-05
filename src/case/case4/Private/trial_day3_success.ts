// @Architecture(descriptionShort="Case 4 day-3 contradiction success and opening present", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — D3-T1, D3-T2 success and GIRO 2 opening present.
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE4_DAY3_OPENING_PRESENT_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Lean este resguardo de telegrama hallado en la taquilla de la víctima!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '"Conde de Montemayor: o pagas mis $50,000 del collar de Cleopatra o la policía sabrá todo. Habitación 304."', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡El Cuajinais no fue víctima de un robo casual por un fontanero! ¡Vino al Gran Hotel a extorsionar a Rufino Rufián por el botín del Museo de Marsella!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: '¡Calumnias de un plebeyo ignorante! ¿Dónde están sus pruebas de que yo abandoné el salón de juegos?', pose: 'rufino_sweat' }
];

export const CASE4_D3_T1_BOLETA_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡Mienta con más elegancia, falso conde! ¡Miren el reverso de esta boleta de baccarat certificada por el croupier!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: '¡¿Cómo?!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: 'De 10:30 a 11:30 PM hay sesenta minutos... ¡pero a las 11:10 PM usted solicitó un RECESO de quince minutos para tomar aire fresco!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡Un receso sellado entre las 11:10 y las 11:25 PM!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡En esos quince minutos bajó a su Suite 204 a las 11:12 PM a encender la mecha lenta en la tubería; a las 11:14 PM subió al tercer piso, vio la puerta emparejada por Botija, pasó el sedal por la rendija y traccionó el cerrojo de cadena para bloquear la recámara por dentro desde afuera; y bajó apresurado hacia el baccarat antes de que a las 11:15 PM estallara el cartucho de fogueo en la tubería!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What a scheme!', pose: 'supersam_sweat' },
  { speaker: 'RUFINO', text: '¡Pamplinas! ¡Aunque me haya tomado quince minutos de receso, eso no prueba nada! El difunto murió antes de las diez de la noche según su forense. ¡Yo jamás subí al tercer piso ni toqué el montacargas rústico del hotel para transportar a nadie a la Suite 304!', pose: 'rufino_sweat' },
  { speaker: 'SUPER SAM', text: 'Yes! ¡No hay registro alguno de que el Conde haya puesto un pie en la Suite 304!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: '¡Pues la maquinaria del hotel tiene memoria matemática y no olvida los kilogramos de un muerto!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

export const CASE4_D3_T1_REGISTRO_FOLLOWUP: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Examinen la bitácora automática del montacargas de servicio, señor Juez!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿La bitácora de tonelaje del montacargas?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡A las 10:20 PM, el ascensor fue accionado desde el segundo piso —donde está la Suite 204 de Rufino— marcando una carga pesada de 175 kilogramos hasta detenerse en el tercer piso!', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: '¡¿175 kilogramos?!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: '¡Hagamos cuentas claras! Rufino pesa 75 kilos, su gran baúl de viaje de cuero inglés pesa 20 kilos... ¡y el cuerpo inerte de Cuajinais pesaba exactamente 80 kilos! ¡75 más 20 más 80 da exactamente 175 kilogramos transportados a la Suite 304!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡Cielos santos! ¿Y qué ocurrió cinco minutos después?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'A las 10:25 PM, el montacargas sube del tercer piso directo a la azotea... ¡pero marcando únicamente 95 kilogramos! Rufino de 75 kilos y el baúl vacío de 20 kilos. ¡Los 80 kilos del cadáver fueron descargados en el tercer piso!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What an equation! ¡El bulto humano se quedó en la 304!', pose: 'supersam_sweat' },
  { speaker: 'RUFINO', text: '¡Mentira! ¡Una calumnia de números! ¡Nadie me vio en esa suite ni tocando a ese maleante!', pose: 'rufino_panic' }
];

export const CASE4_D3_T2_BAUL_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Dentro de su baúl de viaje hallado en la azotea se encontraron hebras de lana del traje de Cuajinais y polvo de carbón del montacargas!', sfx: 'desk_slam', bgm: 'pursuit', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: '¡E-Ese baúl... ese baúl pudo haber sido robado por cualquier botones descalzo!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: '¡Y para completar el cuadro, presentamos la copa de vino hallada junto al cadáver!', pose: 'donramon_point' }
];

export const CASE4_D3_T2_COPA_FOLLOWUP: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Esta copa demuestra que Cuajinais ingirió cianuro del Chateau Buena Vista 1958 servido por el falso conde!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: '¡Pamplinas! ¡Nadie en esta sala puede demostrar científicamente cómo entró el cianuro a esa botella si el corcho estaba sellado con mi lacre intacto!', pose: 'rufino_panic', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡Silencio en la sala! Licenciado Monchito: el testigo desafía a este tribunal. ¿Tiene la defensa en sus manos la prueba material que demuestra cómo se inoculó el veneno sin violar el corcho?', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'DEFENSA', text: '¡La defensa tiene la prueba decisiva que destruirá la coartada del falso conde!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];
