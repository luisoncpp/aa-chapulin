// @Architecture(descriptionShort="Case 5 day-3 El Chómpiras testimony", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 6, El Chómpiras (spec §15.2).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T1_HUACAL_DEFLECT, CASE5_D3_T1_MAQUINA_DEFLECT } from './trial_day3_deflect.js';
import { CASE5_D3_T1_HUACAL_SUCCESS, CASE5_D3_T1_INVENTARIO_SUCCESS } from './trial_day3_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_6: Testimony = {
  title: 'Testimonio: Lo que cargo en ese sótano',
  witness: 'El Chómpiras',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d3t1_1',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'Yo cargo huacales, señor juez. Los subo, los bajo, y los destapo con la pata de cabra cuando me lo mandan.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Desde cuándo trabajas ahí?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Desde el quince de septiembre, señor juez. Me lo consiguió el Sargento.', pose: 'chompiras_idle' },
        { speaker: 'SARGENTO', text: 'Le conseguí una solicitud, señor juez. El trabajo se lo ganó él solo.', pose: 'pazguato_decidido' },
        { speaker: 'CHOMPIRAS', text: 'Es la primera vez en mi vida que me pagan por cargar algo que no es mío y que sigue sin ser mío al final.', pose: 'chompiras_relieved' },
        { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'Risas suaves en la galería.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d3t1_2',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'El huacal nueve lo destapo los jueves, cuando llega el señor licenciado de negro.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Siempre los jueves?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Siempre. Yo ya hasta le tengo la pata de cabra lista.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '¿Y por qué los jueves?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Porque los jueves no hay público abajo y se puede trabajar. Me lo dijo él.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '(Y eso mismo declaró ayer bajo protesta. Punto por punto.)', pose: 'chapulin_idle' }
      ],
      deflect: { evidence: ['huacal_9'], dialogue: CASE5_D3_T1_HUACAL_DEFLECT }
    },
    {
      id: 'c5_d3t1_3',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'Y adentro no hay más que libros viejos y unos cajones de madera. Yo lo he visto abierto seis o siete veces.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Tú has visto qué hay en los cajones?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Tarjetitas, señor juez. Miles y miles de tarjetitas.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '¿Y no te dio curiosidad?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: '¡A mí la curiosidad me costó ocho meses de proceso, licenciado! ¡Yo ya no tengo curiosidad ni por el periódico!', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(Y aun así acaba de decirle a la corte lo que él cree que hay. Y se equivoca por defecto.)', pose: 'chapulin_idle' }
      ],
      deflect: { evidence: ['maquina_escribir'], dialogue: CASE5_D3_T1_MAQUINA_DEFLECT },
      contradiction: {
        evidence: ['inventario_1971'],
        successDialogue: CASE5_D3_T1_INVENTARIO_SUCCESS,
        followUp: {
          evidence: ['huacal_9'],
          prompt: '¿Qué fecha completa aparece en la tira de hasta arriba del huacal?',
          successDialogue: CASE5_D3_T1_HUACAL_SUCCESS
        }
      }
    },
    {
      id: 'c5_d3t1_4',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'El señor se sienta un ratito, escribe a máquina, y cuando termina yo se lo vuelvo a clavar y él le pega su papelito.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '«Le pega su papelito.» ¿Qué papelito?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Una tirita engomada, señor juez, de las de sellar. Trae su firma y su fecha.', pose: 'chompiras_idle' },
        { speaker: 'CHOMPIRAS', text: 'Él la escribe con pluma, la moja con la lengua y la pega encima de las otras. Siempre encima, nunca quitando.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '¿Y cuántas veces le has visto pegar una?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Pues... las que ha bajado. Seis o siete desde septiembre.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '¿La tapa está clavada?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'No, licenciado. Tiene cuatro cierres de palanca. La pata de cabra sólo levanta el labio porque la madera se hincha.', pose: 'chompiras_idle' },
        { speaker: 'CHOMPIRAS', text: 'Abrirla toma dos minutos. Cerrar los cuatro broches y poner la tira, dos minutos y medio. Lo sé porque la señorita Genoveva nos cronometra.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(Seis o siete en tres meses. Y son dos al mes. Las cuentas cuadran... salvo que alguna sobre.)', pose: 'chapulin_idle' }
      ]
    }
  ]
};
