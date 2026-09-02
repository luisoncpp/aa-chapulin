// @Architecture(descriptionShort="Unit tests for dialogue queue, evidence, and location unlocks", type="test", icon="layers")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import { DialogueFlow } from '../../src/engine/Private/DialogueFlow.js';
import { DialogueHistory } from '../../src/engine/Private/DialogueHistory.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { Typewriter } from '../../src/engine/Private/Typewriter.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('DialogueFlow', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let flow: DialogueFlow;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    const midi = new MidiMusicComposer(soundEngine);
    const investigation = new InvestigationController({
      dom, state, script: CASE_SCRIPT, soundEngine, midiComposer: midi, onQueueDialogue: () => {}
    });
    flow = new DialogueFlow({
      dom,
      state,
      getScript: () => CASE_SCRIPT,
      soundEngine,
      midiComposer: midi,
      typewriter: new Typewriter(dom.dialogueTextEl, soundEngine),
      investigation,
      history: new DialogueHistory()
    });
  });

  it('records every rendered line in the message history', () => {
    flow.queueDialogue([{ speaker: 'DEFENSA', text: 'Uno.' }]);
    vi.runAllTimers();
    flow.handleAdvance();
    expect(flow.getHistory()).toEqual([{ speaker: 'DEFENSA', text: 'Uno.' }]);
  });

  it('keeps the message history when the pending queue is cleared', () => {
    flow.queueDialogue([{ speaker: 'DEFENSA', text: 'Uno.' }]);
    vi.runAllTimers();
    flow.clear();
    expect(flow.getHistory()).toHaveLength(1);
    flow.clearHistory();
    expect(flow.getHistory()).toHaveLength(0);
  });

  it('does not render when the queued array is empty', () => {
    flow.queueDialogue([]);
    expect(dom.speakerBoxEl.textContent).toBe('CHAPULÍN');
  });

  it('hides the advance arrow once the queue is exhausted', () => {
    flow.queueDialogue([
      { speaker: 'DEFENSA', text: 'Uno.' },
      { speaker: 'DEFENSA', text: 'Dos.' }
    ]);
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(false);
    vi.runAllTimers();
    flow.handleAdvance();
    vi.runAllTimers();
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(true);
  });

  it('keeps the advance arrow while a completion callback is still pending', () => {
    flow.queueDialogue([{ speaker: 'DEFENSA', text: 'Uno.' }], /*onComplete=*/ () => {});
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(false);
    vi.runAllTimers();
    flow.handleAdvance();
    vi.runAllTimers();
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(true);
  });

  it('hides the advance arrow for cross-examination statements rendered outside the queue', () => {
    flow.renderDialogueLine({ speaker: 'TRIPASECA', text: 'Yo lo vi.' });
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(true);
  });

  it('clears the speaker tag when a line omits speaker', () => {
    flow.renderDialogueLine({ speaker: '', text: '...' } as never);
    expect(dom.speakerBoxEl.textContent).toBe('');
  });

  it('hides the sprite for narrator lines without a pose', () => {
    dom.charSpriteEl.classList.remove('hidden');
    flow.renderDialogueLine({ speaker: 'NARRADOR', text: 'Noche.' });
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);
  });

  it('skips evidence notification when the item is already in inventory', () => {
    state.addEvidence('chipote_chillon');
    dom.gameNotificationEl.textContent = '';
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Ya lo tengo.',
      addEvidence: 'chipote_chillon'
    });
    expect(dom.gameNotificationEl.textContent).toBe('');
  });

  it('skips location unlock when the location is already open', () => {
    expect(state.unlockLocation('detention')).toBe(true);
    dom.gameNotificationEl.textContent = '';
    flow.renderDialogueLine({
      speaker: 'FLORINDA',
      text: 'Otra vez.',
      unlockLocation: 'detention'
    });
    expect(dom.gameNotificationEl.textContent).toBe('');
  });

  it('falls back to the location id when the scene has no name or title', () => {
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Nuevo sitio.',
      unlockLocation: 'boveda'
    });
    expect(dom.gameNotificationEl.textContent).toContain('boveda');
  });

  it('notifies when an owned court-record description is updated', () => {
    state.addEvidence('chipote_chillon');
    dom.gameNotificationEl.textContent = '';
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'SQUIIIIK!',
      updateEvidence: 'chipote_chillon'
    });
    expect(state.isEvidenceUpdated('chipote_chillon')).toBe(true);
    expect(dom.gameNotificationEl.textContent).toContain('actualizada');
  });

  it('treats a first-time description update as an add, not a second toast', () => {
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'SQUIIIIK!',
      updateEvidence: 'chipote_chillon'
    });
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.isEvidenceUpdated('chipote_chillon')).toBe(true);
    expect(dom.gameNotificationEl.textContent).toContain('Añadido');
    expect(dom.gameNotificationEl.textContent).not.toContain('actualizada');
  });

  it('skips the description-update notification when already revised', () => {
    state.addEvidence('chipote_chillon');
    expect(state.updateEvidence('chipote_chillon')).toBe(true);
    dom.gameNotificationEl.textContent = '';
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Otra vez.',
      updateEvidence: 'chipote_chillon'
    });
    expect(dom.gameNotificationEl.textContent).toBe('');
  });
});
