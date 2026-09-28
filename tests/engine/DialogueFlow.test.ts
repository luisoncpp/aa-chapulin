// @Architecture(descriptionShort="Unit tests for dialogue queue, evidence, and location unlocks", type="test", icon="layers")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
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
  let soundEngine: SoundEngine;
  let typewriter: Typewriter;
  let flow: DialogueFlow;
  let midi: MidiMusicComposer;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    midi = new MidiMusicComposer(soundEngine);
    const investigation = new InvestigationController({
      dom, state, script: CASE_SCRIPT, soundEngine, midiComposer: midi, onQueueDialogue: () => {}
    });
    typewriter = new Typewriter(dom.dialogueTextEl, soundEngine);
    flow = new DialogueFlow({
      dom,
      state,
      getScript: () => CASE_SCRIPT,
      soundEngine,
      midiComposer: midi,
      typewriter,
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

  it('stops the music on a silence cue until the next line cues a track', () => {
    flow.renderDialogueLine({ speaker: 'DEFENSA', text: 'Uno.', bgm: 'pursuit' });
    flow.renderDialogueLine({ speaker: 'DEFENSA', text: '¡TOMA ESO!', bgm: 'silence' });
    expect(midi.isPlaying).toBe(false);
    midi.resumePlayback();
    expect(midi.isPlaying).toBe(false);
    flow.renderDialogueLine({ speaker: 'DEFENSA', text: 'Dos.', bgm: 'truth' });
    expect(midi.currentTrack).toBe('truth');
  });

  it('sets a progress flag when its dialogue marker is shown', () => {
    flow.renderDialogueLine({ speaker: 'JUEZ', text: 'Se le tiene por separado.', setFlag: 'case5_super_sam_recused' });
    expect(state.flags.case5_super_sam_recused).toBe(true);
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

  it('renders instant lines without starting the typewriter or chirping', () => {
    const blipSpy = vi.spyOn(soundEngine, 'playTextBlip');

    flow.renderDialogueLine({
      speaker: 'CHAPULÍN',
      text: '🔍 Mueve el cursor y haz clic sobre los objetos para investigar.',
      instant: true
    });

    expect(dom.dialogueTextEl.textContent).toBe(
      '🔍 Mueve el cursor y haz clic sobre los objetos para investigar.'
    );
    expect(blipSpy).not.toHaveBeenCalled();
    expect(typewriter.isTyping).toBe(false);
  });

  it('clears the speaker tag when a line omits speaker', () => {
    flow.renderDialogueLine({ speaker: '', text: '...' } as never);
    expect(dom.speakerBoxEl.textContent).toBe('');
  });

  it('clears the speaker tag when a line has no text', () => {
    flow.renderDialogueLine({ speaker: 'NARRADOR', text: '', instant: true });
    expect(dom.speakerBoxEl.textContent).toBe('');
  });

  it('hides the sprite for narrator lines without a pose', () => {
    dom.charSpriteEl.classList.remove('hidden');
    flow.renderDialogueLine({ speaker: 'NARRADOR', text: 'Noche.' });
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);
  });

  it('triggers confetti when a dialogue line requests it', () => {
    flow.renderDialogueLine({ speaker: 'NARRADOR', text: '', instant: true, confetti: true });

    expect(dom.confettiContainerEl.children).toHaveLength(80);
    expect(dom.dialogueTextEl.textContent).toBe('');
    expect(dom.speakerBoxEl.textContent).toBe('');
  });

  const noticeText = () => document.getElementById('record-notice-text')!.textContent ?? '';
  const noticeIcon = () => document.getElementById('record-notice-icon') as HTMLImageElement;
  const noticeShown = () => !dom.recordNoticeEl.classList.contains('hidden');
  /** Finishes typing the current line and presses advance once. */
  const finishLineAndAdvance = () => {
    vi.runAllTimers();
    return flow.handleAdvance();
  };

  it('holds a Court Record notice until the player advances past the line', () => {
    dom.charSpriteEl.classList.remove('hidden');
    flow.queueDialogue([
      { speaker: 'DEFENSA', text: 'Mira esto.', pose: 'donramon_idle', addEvidence: 'chipote_chillon' },
      { speaker: 'DEFENSA', text: 'Sigo.', pose: 'donramon_idle' }
    ]);
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    vi.runAllTimers();
    expect(noticeShown()).toBe(false);
    expect(dom.gameNotificationEl.classList.contains('hidden')).toBe(true);

    expect(flow.handleAdvance()).toBe(true);
    expect(noticeShown()).toBe(true);
    expect(noticeText()).toContain(state.allEvidence.chipote_chillon.name);
    expect(noticeIcon().getAttribute('src')).toBe(state.allEvidence.chipote_chillon.icon);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);
    expect(dom.dialogueBoxEl.classList.contains('hidden')).toBe(true);

    expect(flow.handleAdvance()).toBe(true);
    expect(noticeShown()).toBe(false);
    expect(dom.dialogueBoxEl.classList.contains('hidden')).toBe(false);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
    expect(flow.getHistory().map((entry) => entry.text)).toEqual(['Mira esto.', 'Sigo.']);
  });

  it('shows one card per Court Record change, in order, with the character wording for profiles', () => {
    state.beginNewCase(getCaseScript('es', 'case1'));
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Dos cosas.',
      addEvidence: 'chipote_chillon',
      addProfile: 'perfil_tripaseca'
    });
    finishLineAndAdvance();
    expect(noticeText()).toContain('Acta del Juicio');
    flow.handleAdvance();
    expect(noticeShown()).toBe(true);
    expect(noticeText()).toContain('Acta de Personajes');
    expect(noticeIcon().getAttribute('src')).toBe(state.profiles.catalog.perfil_tripaseca!.icon);
    expect(flow.handleAdvance()).toBe(false);
    expect(noticeShown()).toBe(false);
  });

  it('runs the completion callback in the same press that dismisses the last card', () => {
    const onComplete = vi.fn();
    flow.queueDialogue([{ speaker: 'DEFENSA', text: 'Fin.', addEvidence: 'chipote_chillon' }], onComplete);
    finishLineAndAdvance();
    expect(onComplete).not.toHaveBeenCalled();
    expect(flow.handleAdvance()).toBe(true);
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(noticeShown()).toBe(false);
  });

  it('keeps the advance arrow while a notice is still due after the last line', () => {
    flow.queueDialogue([{ speaker: 'DEFENSA', text: 'Fin.', addEvidence: 'chipote_chillon' }]);
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(false);
    expect(finishLineAndAdvance()).toBe(true);
    expect(flow.handleAdvance()).toBe(false);
    expect(dom.dialogueArrowEl.classList.contains('hidden')).toBe(true);
  });

  it('restores the stage when the queue is cleared while a card is up', () => {
    dom.charSpriteEl.classList.remove('hidden');
    flow.renderDialogueLine({ speaker: 'DEFENSA', text: 'Uno.', pose: 'donramon_idle', addEvidence: 'chipote_chillon' });
    finishLineAndAdvance();
    flow.clear();
    expect(noticeShown()).toBe(false);
    expect(dom.dialogueBoxEl.classList.contains('hidden')).toBe(false);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
  });

  it('skips evidence notification when the item is already in inventory', () => {
    state.addEvidence('chipote_chillon');
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Ya lo tengo.',
      addEvidence: 'chipote_chillon'
    });
    expect(finishLineAndAdvance()).toBe(false);
    expect(noticeShown()).toBe(false);
  });

  it('does not announce returning Act 3 characters as new Court Record entries', () => {
    state.beginNewCase(getCaseScript('es', 'case3'));

    flow.renderDialogueLine({
      speaker: 'DON RAMON',
      text: 'Presentación del defensor.',
      addProfile: 'perfil_donramon'
    });

    expect(state.hasProfile('perfil_donramon')).toBe(true);
    finishLineAndAdvance();
    expect(noticeShown()).toBe(false);
  });

  it('skips location unlock when the location is already open', () => {
    expect(state.unlockLocation('detention')).toBe(true);
    flow.renderDialogueLine({
      speaker: 'FLORINDA',
      text: 'Otra vez.',
      unlockLocation: 'detention'
    });
    finishLineAndAdvance();
    expect(noticeShown()).toBe(false);
  });

  it('hides the icon on location unlock cards so the scene plate is not spoiled', () => {
    flow.renderDialogueLine({ speaker: 'DEFENSA', text: 'Al museo.', unlockLocation: 'museo_sala2' });
    finishLineAndAdvance();
    expect(noticeShown()).toBe(true);
    expect(noticeIcon().classList.contains('hidden')).toBe(true);
    expect(noticeIcon().getAttribute('src')).toBeNull();
    expect(noticeText()).toContain(CASE_SCRIPT.investigation.museo_sala2!.name);
  });

  it('falls back to the location id when the scene has no name or title', () => {
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Nuevo sitio.',
      unlockLocation: 'boveda'
    });
    finishLineAndAdvance();
    expect(noticeText()).toContain('boveda');
  });

  it('notifies when an owned court-record description is updated', () => {
    state.addEvidence('chipote_chillon');
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'SQUIIIIK!',
      updateEvidence: 'chipote_chillon'
    });
    expect(state.isEvidenceUpdated('chipote_chillon')).toBe(true);
    finishLineAndAdvance();
    expect(noticeText()).toContain('actualizada');
  });

  it('treats a first-time description update as an add, not a second notice', () => {
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'SQUIIIIK!',
      updateEvidence: 'chipote_chillon'
    });
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.isEvidenceUpdated('chipote_chillon')).toBe(true);
    finishLineAndAdvance();
    expect(noticeText()).toContain('Añadido');
    expect(flow.handleAdvance()).toBe(false);
    expect(noticeShown()).toBe(false);
  });

  it('skips the description-update notification when already revised', () => {
    state.addEvidence('chipote_chillon');
    expect(state.updateEvidence('chipote_chillon')).toBe(true);
    flow.renderDialogueLine({
      speaker: 'DEFENSA',
      text: 'Otra vez.',
      updateEvidence: 'chipote_chillon'
    });
    finishLineAndAdvance();
    expect(noticeShown()).toBe(false);
  });
});
