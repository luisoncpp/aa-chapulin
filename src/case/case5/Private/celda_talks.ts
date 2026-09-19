// @Architecture(descriptionShort="Case 5 day 1 celda talk options and December 4 flashback", type="data", icon="layers")
/**
 * Caso 5, Día 1 — diálogos de la celda (`celda_c5`). Spec §10.1.
 */

import type { TalkOption } from '../../../types/index.js';

const DETENTION_BG = 'assets/bg_detention.webp';
const PASILLO_BG = 'assets/bg_archivo_pasillo7.webp';

const relatoFlashback: TalkOption['dialogue'] = [
  { speaker: 'NARRADOR', text: '4 de diciembre, 16:44. Pasillo 7 del Archivo Judicial.', bg: PASILLO_BG, furniture: 'none', bgm: 'suspense' },
  { speaker: 'CASIMIRO', text: 'Licenciado. Cuatro cuarenta y cuatro. Puntual usted, para ser de banqueta.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' },
  { speaker: 'DON RAMÓN', text: 'Señor Lengua.', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_idle' },
  { speaker: 'CASIMIRO', text: 'No lo mandé llamar para pedirle perdón. Eso lo hacen los que tienen tiempo.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'CASIMIRO', text: 'Lo mandé llamar porque usted es el único que me creyó capaz de leer.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'DON RAMÓN', text: 'Usted me dijo en el estrado que no había estudiado nada.', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_idle' },
  { speaker: 'CASIMIRO', text: 'Y es verdad. Yo no estudio: yo reconozco. Es otro oficio y paga peor.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' },
  { speaker: 'NARRADOR', text: 'El sentenciado abre su expediente en la página 214 y pone el dedo sobre una tarjeta pegada al papel.', bg: PASILLO_BG, furniture: 'none' },
  { speaker: 'CASIMIRO', text: 'Ésta me la decomisaron a mí en julio. Y en agosto, en el patio de un museo, apareció otra parecida. Salió periódico.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'CASIMIRO', text: 'Las dos las escribió la misma máquina, licenciado. Se lo digo yo, que me pasé nueve años tecleando en ella.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'DON RAMÓN', text: '¿Y dónde está esa máquina?', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_shock' },
  { speaker: 'CASIMIRO', text: 'Abajo. A doce metros de donde estamos sentados. Cuatro cuarenta y nueve.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' },
  { speaker: 'CASIMIRO', text: 'Le voy a decir una cosa y después ya no le digo más hasta que venga el actuario.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'CASIMIRO', text: 'A usted le vendieron la puerta de su propia casa, licenciado. Está fichada desde el sesenta y nueve.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'DON RAMÓN', text: '...¿Cómo dice?', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_shock' },
  { speaker: 'CUSTODIO', text: '¡Se acabó la visita! ¡Bajando!', bg: PASILLO_BG, furniture: 'none' },
  { speaker: 'CASIMIRO', text: 'Cuatro cincuenta y seis. Vaya usted con Dios. Yo aquí espero.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' }
];

export const CASE5_CELDA_TALKS: TalkOption[] = [
  {
    id: 'que_paso_4_dic',
    label: '¿Qué pasó el cuatro de diciembre?',
    dialogue: [
      { speaker: 'DON RAMÓN', text: 'Me llegó un citatorio el lunes. Que el señor Lengua pedía que yo estuviera en una diligencia de su apelación.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '¿El hombre al que usted venció pidió que usted fuera?', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'Eso mismo pensé yo. Fui por curiosidad y por educación, que es como se hacen casi todas las tonterías.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Firmé el libro de visitas a las cuatro cuarenta. Subí al pasillo siete. Ahí estaba, sentado en una mesa de consulta, con dos custodios en la reja.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '¿Y de qué hablaron?', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Doce minutos, joven. Se los voy a contar completos, porque es lo único que tengo.', pose: 'donramon_sweat' },
      ...relatoFlashback,
      { speaker: 'DEFENSA', text: '...¿Y usted se fue?', pose: 'chapulin_panic', bg: DETENTION_BG, furniture: 'none', bgm: 'detention_center' },
      { speaker: 'DON RAMÓN', text: 'Firmé mi salida a las cuatro cincuenta y ocho y me fui a la vecindad a que el casero no me viera llegar.', pose: 'donramon_sweat', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DON RAMÓN', text: 'A las nueve y media de la noche tenía a la policía en la puerta.', pose: 'donramon_idle', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DEFENSA', text: '¿Y de lo que le dijo? ¿Lo de la puerta de su casa?', pose: 'chapulin_idle', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DON RAMÓN', text: 'Pensé que era el señor Lengua siendo el señor Lengua. Hablando bonito para que uno se quede pensando.', pose: 'donramon_sweat', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DON RAMÓN', text: 'Llevo casi cuarenta horas pensando.', pose: 'donramon_sweat', bg: DETENTION_BG, furniture: 'none' }
    ]
  },
  {
    id: 'parte_detencion',
    label: 'Enséñeme el acta de detención',
    dialogue: [
      { speaker: 'NARRADOR', text: 'El alguacil desliza por la ranura una copia del acta de detención del 4 de diciembre.', sfx: 'click' },
      { speaker: 'DEFENSA', text: '(Detención a las nueve cuarenta de la noche. Inventario: una insignia de abogado, tres pesos, una libreta...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(...y un recibo de renta a su nombre. Diecisiete mensualidades. Pagadas.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '¡Don Ramón! ¡Aquí dice que usted pagó diecisiete meses de renta!', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Yo no pagué nada, joven.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'El lunes en la tarde el señor Barriga me detuvo en el patio, me dio un recibo y me dijo «gracias».', pose: 'donramon_sweat' },
      { speaker: 'DON RAMÓN', text: 'Me dijo «gracias», Chapulín. Nunca en diecisiete años me había dicho gracias. Yo creí que se estaba burlando.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '(Me quedo con el acta.)', pose: 'chapulin_idle', addEvidence: 'parte_detencion' },
      { speaker: 'NARRADOR', text: 'El alguacil desliza una segunda hoja, engrapada aparte: la hoja de relevo de custodia del Archivo.', sfx: 'click' },
      { speaker: 'DEFENSA', text: '(Cuatro firmas y cuatro horas. Rangel y Nieto salen de la reja a las cinco en punto...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(...y Cadena y Solís firman su entrada hasta las cinco y cuarto.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Quince minutos. Un papel con horas siempre sirve, y éste tiene un hueco.)', pose: 'chapulin_idle', addEvidence: 'hoja_relevo' }
    ]
  },
  {
    id: 'que_tenia_muerto',
    label: '¿Qué tenía el muerto en la mano?',
    dialogue: [
      { speaker: 'DON RAMÓN', text: 'Eso es lo que me tiene aquí.', pose: 'donramon_idle' },
      { speaker: 'NARRADOR', text: 'Entre las hojas del parte viene una fotografía pericial: una mano cerrada sobre un pedazo de cartulina.' },
      { speaker: 'DEFENSA', text: 'Es una esquina. Rota. Con letras de máquina.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«...cindad de la calle del Espanto 8, viv. 72.»', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Mi casa, joven. Con el número de mi vivienda.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '¡Pero si esto no prueba nada! ¡Cualquiera puede escribir un domicilio!', pose: 'chapulin_panic' },
      { speaker: 'DON RAMÓN', text: 'Cualquiera puede. Pero fíjese bien en el pedazo.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '(Está roto derechito. Sin arrugas. Un papel que se le arranca a alguien en un forcejeo queda estrujado, y éste está planchado.)', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'Guárdelo bien y mírelo de cerca en el Acta cuando tenga calma.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '(Lo guardo. Esto huele a trampa.)', pose: 'chapulin_idle', addEvidence: 'esquina_tarjeta' },
      { speaker: 'DON RAMÓN', text: 'Y váyase al Archivo Judicial, joven. Antes de que barran.', pose: 'donramon_idle', unlockLocation: 'archivo_vestibulo' },
      { speaker: 'DEFENSA', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Yo sí contaba, joven. Es lo único con lo que cuento.', pose: 'donramon_idle' }
    ]
  }
];
