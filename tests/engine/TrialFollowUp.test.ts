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
});
