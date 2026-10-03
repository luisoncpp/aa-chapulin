// @Architecture(descriptionShort="Fictional bilingual deduction fixture independent of cases")
import type { DeductionSequence, Localized } from '../deduction/index.js';
const t = (es: string, en: string): Localized => ({ es, en });

export const demoSequence: DeductionSequence = {
  defender: 'donramon',
  id: 'demo-reloj-del-taller-v1',
  author: t('Don Ramón', 'Don Ramón'),
  entry: t('La acusación dice que el paquete salió a las ocho. Tengo los recibos delante... pero algo no cuadra con ese reloj.',
    'The prosecution says the parcel left at eight. I have the receipts right here... but something about that clock does not add up.'),
  conclusion: t('EL PAQUETE SALIÓ\nANTES DE LAS OCHO', 'THE PARCEL LEFT\nBEFORE EIGHT'),
  continuation: t('Señoría, el reloj del taller adelantaba quince minutos. El recibo de las ocho corresponde a las siete cuarenta y cinco. Solicito que contrastemos esa hora con el registro de salida.',
    'Your Honor, the workshop clock was fifteen minutes fast. The eight o’clock receipt corresponds to seven forty-five. I ask the court to compare that time with the departure log.'),
  records: [
    { id: 'receipt', kind: 'evidence', name: t('Recibo del paquete', 'Parcel receipt'),
      description: t('La encargada anotó 20:00 copiando el reloj del taller. Firmó al entregar el paquete al mensajero. No usó otro reloj.',
        'The clerk wrote 20:00 using the workshop clock. She signed when she handed the parcel to the courier. She used no other clock.') },
    { id: 'clock', kind: 'evidence', name: t('Revisión del reloj', 'Clock inspection'),
      description: t('A las 19:30 oficiales, el reloj del taller marcaba 19:45. La revisión confirma que mantuvo ese adelanto toda la tarde.',
        'At the official time of 19:30, the workshop clock read 19:45. The inspection confirms it kept that offset all afternoon.') },
    { id: 'log', kind: 'evidence', name: t('Registro de salida', 'Departure log'),
      description: t('El control de la calle usa la hora oficial. Registra al mensajero con el paquete a las 19:47. La acusación sostiene que el paquete no salió antes de las 20:00.',
        'The street checkpoint uses official time. It logged the courier with the parcel at 19:47. The prosecution claims the parcel did not leave before 20:00.') },
    { id: 'clerk', kind: 'person', name: t('Encargada del taller', 'Workshop clerk'),
      description: t('Entregó el paquete y firmó el recibo. Explicó que tomó la hora del reloj de pared del taller.',
        'She handed over the parcel and signed the receipt. She explained that she copied the workshop wall clock.') }
  ],
  steps: [
    { id: 'source', premise: t('La encargada firmó el recibo al entregar el paquete. Anotó las ocho mirando el reloj del taller. El control de la calle sí usaba la hora oficial.',
        'The clerk signed when she handed over the parcel. She wrote eight after looking at the workshop clock. The street checkpoint used official time.'),
      question: t('¿Qué hora debemos comprobar antes de comparar los documentos?', 'Which time must we check before comparing the documents?'),
      options: [
        { id: 'street', label: t('La del control de la calle', 'The street checkpoint time'),
          rejection: t('Ese control usaba la hora oficial. La hora que todavía depende de otro reloj es la del recibo.',
            'That checkpoint used official time. The receipt is the time that still depends on another clock.') },
        { id: 'workshop', label: t('La del reloj del taller', 'The workshop clock time') }
      ], correctId: 'workshop',
      connection: t('Las ocho del recibo vienen del reloj del taller. Antes de compararlas con el registro de la calle, tengo que saber si ese reloj daba la hora correcta.',
        'The eight on the receipt came from the workshop clock. Before comparing it with the street log, I need to know whether that clock was correct.'),
      memory: { recordId: 'receipt', aspect: t('La hora fue copiada del reloj del taller.', 'The time was copied from the workshop clock.') } },
    { id: 'offset', premise: t('La revisión es clara. A las siete y media oficiales, el reloj marcaba las siete cuarenta y cinco. Y estuvo así toda la tarde.',
        'The inspection is clear. At the official time of seven-thirty, the clock read seven forty-five. It stayed that way all afternoon.'),
      question: t('¿Qué nos dice esa diferencia sobre el reloj del taller?', 'What does that difference tell us about the workshop clock?'),
      options: [
        { id: 'slow', label: t('Atrasaba quince minutos', 'It was fifteen minutes slow'),
          rejection: t('Un reloj atrasado mostraría una hora anterior. Este marcaba las siete cuarenta y cinco cuando aún eran las siete y media.',
            'A slow clock would show an earlier time. This one read seven forty-five when it was still seven-thirty.') },
        { id: 'correct', label: t('Marcaba la hora correcta', 'It showed the correct time'),
          rejection: t('Las dos lecturas no coinciden. La revisión compara ese reloj con la hora oficial, no con otro reloj del taller.',
            'The two readings do not match. The inspection compares that clock with official time, not another workshop clock.') },
        { id: 'fast', label: t('Adelantaba quince minutos', 'It was fifteen minutes fast') }
      ], correctId: 'fast',
      connection: t('El reloj estaba quince minutos adelantado. El recibo no acredita las ocho oficiales: a cada hora escrita con ese reloj hay que restarle quince minutos.',
        'The clock was fifteen minutes fast. The receipt does not establish eight in official time: every time copied from that clock needs fifteen minutes subtracted.'),
      memory: { recordId: 'clock', aspect: t('19:30 oficiales → 19:45 en el taller', '19:30 official → 19:45 in the workshop') } },
    { id: 'real-time', premise: t('Al entregar el paquete, el reloj marcaba las ocho. Ya sé que adelantaba quince minutos. El mensajero pasó por el control a las siete cuarenta y siete.',
        'When the parcel was handed over, the clock read eight. I know it was fifteen minutes fast. The courier passed the checkpoint at seven forty-seven.'),
      question: t('¿A qué hora oficial se entregó el paquete?', 'At what official time was the parcel handed over?'),
      options: [
        { id: '2015', label: t('A las 20:15', 'At 20:15'), rejection: t('Sumar quince minutos haría aún más tarde la entrega. Para corregir un reloj adelantado debo restar su adelanto.',
          'Adding fifteen minutes would make the handover even later. To correct a fast clock I must subtract its offset.') },
        { id: '1945', label: t('A las 19:45', 'At 19:45') },
        { id: '2000', label: t('A las 20:00', 'At 20:00'), rejection: t('Esa es la lectura del reloj, no la hora oficial. Todavía falta corregir los quince minutos de adelanto.',
          'That is the clock reading, not official time. The fifteen-minute offset still needs correcting.') },
        { id: '1947', label: t('A las 19:47', 'At 19:47'), rejection: t('Esa es la hora del control en la calle. El recibo corresponde a la entrega anterior, dentro del taller.',
          'That is the street checkpoint time. The receipt concerns the earlier handover inside the workshop.') }
      ], correctId: '1945',
      connection: t('Las ocho menos quince son las siete cuarenta y cinco. Dos minutos después, el registro sitúa al mensajero en la calle. Los documentos encajan: el paquete ya había salido antes de las ocho.',
        'Eight minus fifteen minutes is seven forty-five. Two minutes later, the log places the courier in the street. The documents fit: the parcel had already left before eight.'),
      memory: { recordId: 'log', aspect: t('El control usa la hora oficial.', 'The checkpoint uses official time.') } }
  ]
};
