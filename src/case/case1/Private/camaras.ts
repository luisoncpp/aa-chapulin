// @Architecture(descriptionShort="Case 1 day 2 mirror corridor and camera room", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Pasillo del espejo y cuarto de cámaras (`cuarto_camaras`).
 * Spec §11.2. El hallazgo del espejo ocurre aquí, no en el estrado: lo que el
 * jugador todavía no sabe es qué cambia que la foto esté invertida.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_CAMARAS: InvestigationScene = {
  title: 'Pasillo del Espejo - Cuarto de Cámaras',
  name: 'Pasillo del Espejo',
  bg: 'assets/bg_pasillo_espejo.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'florinda_idle',
  intro: [
    { speaker: 'NARRADOR', text: '23 de agosto, 11:00 AM. Pasillo interior del museo. A un lado queda el acceso de carga; al frente, un espejo veneciano cierra el tramo recto.', bg: 'assets/bg_pasillo_espejo.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'FLORINDA', text: 'Otra vez ustedes.', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: 'Otra vez nosotros, señora. Traemos orden del juez.', pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: '...Pásenle. Pero no toquen el espejo, que es de 1770 y me costó tres años de presupuesto.', pose: 'florinda_idle' },
    { speaker: 'CHAPULIN', text: '¡Qué espejo tan grande! ¡Parece que el pasillo sigue!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '(Desde donde está la cámara, también.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_camara',
      label: 'Cámara de seguridad',
      x: 76, y: 1, w: 13, h: 16,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una caja metálica atornillada en lo alto, junto al acceso. Está desplazada a un lado y apunta al espejo.' },
        { speaker: 'DEFENSA', text: '¿Ésta es la cámara que tomó la foto?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Ésa. Se dispara sola cuando algo se mueve. Es carísima y no sirve para nada.', pose: 'florinda_idle' },
        { speaker: 'FLORINDA', text: 'Además sólo cubre una franja del pasillo. Si no cruzan la luz de esa lámpara, no retrata ni un elefante.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Tripaseca pudo salir pegado al muro y fuera del encuadre. Quien cruzara esa franja gastaba el último cuadro.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Está atornillada mirando hacia el espejo. La foto no es una vista directa del pasillo.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '¿Y para qué pusieron una cámara que ve un espejo?', pose: 'chapulin_panic' },
        { speaker: 'FLORINDA', text: '¡Porque el que la puso era el sobrino del tesorero y no sabía ni prender un foco!', pose: 'florinda_angry' }
      ]
    },
    {
      id: 'hotspot_foto',
      label: 'Sobre del revelado',
      x: 70, y: 75, w: 22, h: 21,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Sobre la mesita, junto a la bitácora del rollo, hay un sobre cerrado del laboratorio.' },
        { speaker: 'DEFENSA', text: 'Aquí debe estar la famosa foto. Antes de abrirla quiero saber por qué sólo revelaron un cuadro.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Porque sólo quedaba uno, licenciado. La explicación está clavada junto a la cámara.', pose: 'florinda_idle' }
      ]
    },
    {
      id: 'hotspot_bitacora_rollo',
      label: 'Bitácora del rollo',
      x: 88, y: 16, w: 11, h: 48,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Clavada junto a la cámara, una hoja con fechas y palomitas.' },
        { speaker: 'DEFENSA', text: '"Cambio de rollo: lunes." Y el último cambio fue el lunes 20.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Los lunes, porque los domingos hay más gente y se acaba más rápido.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Lunes 20. Para el martes 21 le quedaba un cuadro. Uno.)', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: '¿Y eso lo sabe alguien más?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Está clavado en la pared del pasillo, licenciado. Lo sabe quien se pare a leerlo.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Otra cosa que estaba a la vista de cualquiera que pagara un boleto.)', pose: 'donramon_sweat' },
        { speaker: 'NARRADOR', text: 'Doña Florinda abre el sobre del laboratorio y entrega el único cuadro revelado y ampliado.', addEvidence: 'foto_crimen' },
        { speaker: 'DEFENSA', text: 'Hora impresa: nueve en punto. Una figura corriendo. Colorada.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¡Ése soy yo!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'No se apure tanto en reconocerse, joven, que todavía no sabemos hacia dónde va usted en esa foto.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Y una cosa más antes de guardarla: esta foto existe porque a ese rollo le quedaba un cuadro.', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'El que sobró del lunes.', pose: 'florinda_idle', updateEvidence: 'foto_crimen' }
      ]
    },
    {
      id: 'hotspot_acceso_carga',
      label: 'Puerta a la galería',
      x: 36, y: 18, w: 7, h: 30,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una puerta a un lado. No cierra el tramo: hay que doblar al entrar para ver el espejo.' },
        { speaker: 'DEFENSA', text: '¿Ésta da al patio?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'A la galería. Las salas salen de este pasillo, antes de llegar al cristal.', pose: 'florinda_idle' },
        { speaker: 'CHAPULIN', text: '¡Por eso la puerta no sale en la foto!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '(Ni el patio. El cuadro es el reflejo de este tramo, no una vista de la calle.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_muro_ciego',
      label: 'Muro bajo la cámara',
      x: 66, y: 65, w: 16, h: 10,
      dialogue: [
        { speaker: 'NARRADOR', text: 'El banco corre pegado al muro, bajo la cámara, fuera de la franja que ilumina la lámpara.' },
        { speaker: 'DEFENSA', text: '¿Esto lo ve esa cámara?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Si no cruzan la luz, no retrata ni un elefante. Por eso digo que no sirve para nada.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Pegado a este muro se sale sin gastar el último cuadro.)', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'hotspot_espejo',
      label: 'Espejo veneciano',
      condition: (flags) =>
        Boolean(flags.examined_hotspot_camara) &&
        Boolean(flags.examined_hotspot_foto) &&
        Boolean(flags.examined_hotspot_bitacora_rollo),
      x: 49, y: 23, w: 21, h: 34,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Tres metros de cristal antiguo con marco tallado. Está al fondo del tramo recto, como si fuera otro corredor.' },
        { speaker: 'DEFENSA', text: 'Doña Florinda, ¿qué se ve en este espejo desde donde está la cámara?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Las salas salen de este tramo, antes del espejo. Lo del fondo es el cristal.', pose: 'florinda_idle' },
        { speaker: 'CHAPULIN', text: '¡Pues parece que el pasillo sigue!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Desde donde está la cámara, también.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: 'Entonces quien mire la foto puede confundir el espacio reflejado con un pasillo real.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'La puerta de carga queda a un lado, licenciado. Al entrar hay que doblar para llegar a este tramo.', pose: 'florinda_idle' },
        { speaker: 'NARRADOR', text: 'Doña Florinda entrega un plano del pasillo, el de cuando instalaron la cámara.', addEvidence: 'plano_pasillo' },
        { speaker: 'DEFENSA', text: '(Puerta y patio fuera del encuadre. Lo que la cámara conserva es el reflejo.)', pose: 'donramon_point', unlockLocation: 'clinica_d2' }
      ]
    }
  ],
  talkOptions: []
};
