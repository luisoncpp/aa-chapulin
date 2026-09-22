// @Architecture(descriptionShort="Tests chained follow-up presents after a contradiction", type="test", icon="dialog")
import { describe, expect, it, beforeEach } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialFollowUp', () => {
  let controller: TrialController;
  let queued: DialogueLine[][];
  let courtRecordOpened = false;
  let state: GameStateManager;

  beforeEach(() => {
    const dom = setupDomHarness();
    state = new GameStateManager();
    queued = [];
    courtRecordOpened = false;
    const sound = new SoundEngine();
    sound.init(new FakeAudioContext() as unknown as AudioContext);
    const script = JSON.parse(JSON.stringify(CASE_SCRIPT)) as CaseScript;
    script.trial.testimony1.statements[1].contradiction = {
      evidence: ['chipote_chillon'],
      successDialogue: [{ speaker: 'DEFENSA', text: 'Primera prueba.' }],
      followUp: {
        evidence: ['informe_medico'],
        prompt: '¿Cuál es la segunda prueba?',
        successDialogue: [{ speaker: 'DEFENSA', text: 'Segunda prueba.' }]
      }
    };
    controller = new TrialController({
      dom,
      state,
      script,
      soundEngine: sound,
      midiComposer: new MidiMusicComposer(sound),
      onQueueDialogue: (dlg, cb) => {
        queued.push(dlg);
        if (cb) cb();
      },
      onRenderLine: () => {},
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpened = isTrialPresent;
      }
    });
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 1;
  });

  it('reopens the court record for follow-up after the first success dialogue', () => {
    controller.handlePresentEvidence('chipote_chillon');
    expect(queued.some((d) => d.some((l) => l.text.includes('Primera')))).toBe(true);
    expect(courtRecordOpened).toBe(true);
    expect(controller.currentTestimony).toBe(controller.script.trial.testimony1);
    expect(controller.isAwaitingEvidence()).toBe(true);
    expect(controller.getPresentPrompt()).toBe('¿Cuál es la segunda prueba?');
  });

  it('advances testimony after the follow-up present and penalizes a wrong item', () => {
    controller.handlePresentEvidence('chipote_chillon');
    courtRecordOpened = false;
    controller.handlePresentEvidence('insignia_abogado');
    expect(state.health).toBe(4);
    expect(courtRecordOpened).toBe(true);
    controller.handlePresentEvidence('informe_medico');
    expect(queued.some((d) => d.some((l) => l.text.includes('Segunda')))).toBe(true);
    expect(controller.currentTestimony).toBe(controller.script.trial.testimony2);
  });

  it('updates follow-up prompt on script language rebind', () => {
    controller.handlePresentEvidence('chipote_chillon');
    expect(controller.getPresentPrompt()).toBe('¿Cuál es la segunda prueba?');
    const newScript = JSON.parse(JSON.stringify(controller.script)) as CaseScript;
    newScript.trial.testimony1.statements[1].contradiction!.followUp!.prompt = 'What is the second piece of evidence?';
    controller.setScript(newScript);
    expect(controller.getPresentPrompt()).toBe('What is the second piece of evidence?');
  });

  it('walks an ordered follow-up sequence through a choice and a profile', () => {
    const rule = controller.script.trial.testimony1!.statements[1].contradiction!;
    rule.followUp = {
      successDialogue: [],
      sequence: [
        {
          evidence: ['informe_medico'],
          prompt: 'Present the index.',
          successDialogue: [{ speaker: 'JUEZ', text: 'Index accepted.' }]
        },
        {
          choice: {
            id: 'plan',
            question: 'Plan or improvise?',
            options: [{ id: 'planear', label: 'Plan.' }, { id: 'esperar', label: 'Improvise.' }],
            correctId: 'planear',
            successDialogue: [{ speaker: 'JUEZ', text: 'Plan accepted.' }],
            failDialogue: [{ speaker: 'JUEZ', text: 'Try again.' }]
          },
          successDialogue: []
        },
        {
          profileTarget: ['perfil_genoveva'],
          prompt: 'Present Genoveva.',
          successDialogue: [{ speaker: 'JUEZ', text: 'Sequence complete.' }]
        }
      ]
    };

    controller.handlePresentEvidence('chipote_chillon');
    controller.handlePresentEvidence('informe_medico');
    expect(controller.getPresentPrompt()).toBe('Plan or improvise?');
    controller.handleSelectChoice('esperar');
    expect(state.health).toBe(5);
    expect(controller.getPresentPrompt()).toBe('Plan or improvise?');
    controller.handleSelectChoice('planear');
    expect(controller.getPresentPrompt()).toBe('Present Genoveva.');
    expect(controller.isAwaitingProfile()).toBe(true);
    controller.handlePresentProfile('perfil_genoveva');
    expect(queued.some((d) => d.some((l) => l.text === 'Sequence complete.'))).toBe(true);
  });
});
