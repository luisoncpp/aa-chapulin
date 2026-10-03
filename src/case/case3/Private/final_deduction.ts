// @Architecture(descriptionShort="Bilingual Case 3 reasoning behind Aniceto's voice trap", type="data", icon="bolt")
import type { DeductionSequence, Localized } from '../../../deduction/index.js';
const t = (es: string, en: string): Localized => ({ es, en });

export const CASE3_FINAL_DEDUCTION: DeductionSequence = {
  id: 'case3-aniceto-voice-trap-v1', defender: 'donramon',
  author: t('Don Ramón', 'Don Ramón'),
  entry: t('La cinta conserva una voz que Aniceto niega como suya. No puedo pedirle que coopere. Tengo que hacer que él mismo revele lo que sabe.',
    'The tape preserves a voice Aniceto denies is his. I cannot ask him to cooperate. I have to make him reveal what he knows himself.'),
  conclusion: t('HAY QUE HACERLO\nCORREGIR AL CHAPULÍN', 'MAKE HIM CORRECT\nCHAPULÍN'),
  continuation: t('No hace falta que Aniceto acepte hablar. Basta con que no pueda dejar pasar una frase mal dicha.',
    'Aniceto does not have to agree to speak. He only has to be unable to let a misquoted line pass.'),
  records: [
    { id: 'cartucho', kind: 'evidence', name: t('Cartucho recuperado', 'Recovered cartridge'),
      description: t('La cinta del sketch "El Casero Cascarrabias" conserva la voz que imita al Señor Barriga.',
        'The "El Casero Cascarrabias" sketch tape preserves the voice imitating Señor Barriga.') },
    { id: 'aniceto', kind: 'person', name: t('Don Aniceto Rebollar', 'Don Aniceto Rebollar'),
      description: t('En la kermés corrigió al Chapulín al decir mal un refrán. Lleva veinticinco años cuidando la dicción en la estación.',
        'At the kermés he corrected Chapulín after he misquoted a saying. He has spent twenty-five years minding diction at the station.') }
  ],
  steps: [
    {
      id: 'voice-proof',
      premise: t('La cinta ya está en el Acta y la voz imita al Señor Barriga. Aniceto puede negarse a declarar o a repetirla por voluntad propia.',
        'The tape is already in the Court Record, and the voice imitates Señor Barriga. Aniceto can refuse to testify or repeat it willingly.'),
      question: t('¿Qué podemos demostrar sin depender de su cooperación?',
        'What can we prove without depending on his cooperation?'),
      options: [
        { id: 'confession', label: t('Conseguir que firme una confesión', 'Get him to sign a confession'),
          rejection: t('Una confesión depende de que quiera hablar. Necesitamos una reacción que no pueda contener.',
            'A confession depends on him choosing to speak. We need a reaction he cannot hold back.') },
        { id: 'voice', label: t('Que la voz de la cinta es la suya', 'That the voice on the tape is his') },
        { id: 'prints', label: t('Que sus huellas están en el micrófono', 'That his fingerprints are on the microphone'),
          rejection: t('Las huellas no identifican la voz de la cinta. El micrófono ya ayuda con el método, pero falta probar quién hablaba.',
            'Fingerprints cannot identify the voice on the tape. The microphone already helps with the method; we still need to prove who spoke.') }
      ],
      correctId: 'voice',
      connection: t('La grabación conserva la imitación. Aniceto tiene que repetirla aquí para que la sala compare ambas voces.',
        'The recording preserves the imitation. Aniceto has to repeat it here so the court can compare the voices.'),
      memory: { recordId: 'cartucho', aspect: t('El cartucho conserva el audio del sketch.', 'The cartridge preserves the sketch audio.') }
    },
    {
      id: 'provoke-correction',
      premise: t('Aniceto se negó a hablar. En la kermés no pudo dejar pasar un refrán mal dicho por el Chapulín, incluso fuera del aire.',
        'Aniceto refused to speak. At the kermés, he could not let Chapulín misquote a saying, even off the air.'),
      question: t('¿Cómo hacemos que corrija una frase durante la demostración?',
        'How can we make him correct a line during the demonstration?'),
      options: [
        { id: 'request', label: t('Pedirle amablemente que imite la voz', 'Politely ask him to imitate the voice'),
          rejection: t('Ya dijo que no. Una petición le deja decidir si habla.', 'He already refused. A request still lets him decide whether to speak.') },
        { id: 'threat', label: t('Amenazarlo con una pena mayor', 'Threaten him with a harsher sentence'),
          rejection: t('La amenaza tampoco garantiza que hable, y no demuestra cómo suena la voz de la cinta.',
            'A threat still cannot guarantee he will speak, and it does not demonstrate how the taped voice sounds.') },
        { id: 'misquote', label: t('Poner el sketch y hacer que el Chapulín diga mal la frase', 'Play the sketch and have Chapulín misquote its line') }
      ],
      correctId: 'misquote',
      connection: t('El Chapulín se equivocará al repetir la frase. Aniceto no podrá resistirse a corregirlo.',
        'Chapulín will get the line wrong when he repeats it. Aniceto will not be able to resist correcting him.'),
      memory: { recordId: 'aniceto', aspect: t('Aniceto corrige la dicción incluso cuando no está al aire.', 'Aniceto corrects diction even when he is off air.') }
    }
  ]
};
