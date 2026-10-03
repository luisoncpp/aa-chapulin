// @Architecture(descriptionShort="Checks illustrated tutorial queue transitions and stage preservation", type="test", icon="dialog")
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import { DialogueFlow } from '../../src/engine/Private/DialogueFlow.js';
import { DialogueHistory } from '../../src/engine/Private/DialogueHistory.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { Typewriter } from '../../src/engine/Private/Typewriter.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

function setupTutorial() {
  const dom = setupDomHarness();
  const state = new GameStateManager();
  const soundEngine = new SoundEngine();
  soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
  const midiComposer = new MidiMusicComposer(soundEngine);
  const typewriter = new Typewriter(dom.dialogueTextEl, soundEngine);
  const investigation = new InvestigationController({
    dom, state, script: CASE_SCRIPT, soundEngine, midiComposer, onQueueDialogue: () => {}
  });
  const flow = new DialogueFlow({
    dom, state, getScript: () => CASE_SCRIPT, soundEngine, midiComposer,
    typewriter, investigation, history: new DialogueHistory()
  });
  return { dom, state, soundEngine, typewriter, flow };
}

describe('tutorial dialogue lifecycle', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => { vi.clearAllTimers(); vi.useRealTimers(); });

  it.each(['MODO TUTORIAL', 'TUTORIAL MODE'])('shows %s instantly without moving the camera or displaying a pose', (speaker) => {
    const { dom, state, soundEngine, typewriter, flow } = setupTutorial();
    state.mode = 'TRIAL';
    dom.bgEl.style.backgroundImage = 'url("assets/bg_defense.webp")';
    dom.charSpriteEl.classList.remove('hidden');
    const priorBackground = dom.bgEl.style.backgroundImage;
    const blip = vi.spyOn(soundEngine, 'playTextBlip');
    flow.renderDialogueLine({ speaker, text: 'Ayuda', pose: 'chapulin_point' });
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(true);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);
    expect(dom.bgEl.style.backgroundImage).toBe(priorBackground);
    expect(dom.dialogueTextEl.textContent).toBe('Ayuda');
    expect(typewriter.isTyping).toBe(false);
    expect(blip).not.toHaveBeenCalled();
  });

  it.each(['MODO EXAMINAR', 'EXAMINE MODE'])('centers %s only in Case 0', (speaker) => {
    const { dom, state, flow } = setupTutorial();
    state.caseId = 'case0';
    flow.renderDialogueLine({ speaker, text: 'Ayuda', instant: true });
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(true);
    state.caseId = 'case1';
    dom.dialogueBoxEl.classList.add('examine-mode');
    flow.renderDialogueLine({ speaker, text: 'Explora', instant: true });
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(false);
    expect(dom.dialogueBoxEl.classList.contains('examine-mode')).toBe(true);
    expect(dom.dialogueTextEl.textContent).toBe('Explora');
  });

  it('keeps consecutive tutorials centered and restores the next speaker in one advance', () => {
    const { dom, flow } = setupTutorial();
    flow.queueDialogue([
      { speaker: 'MODO TUTORIAL', text: 'Uno', instant: true },
      { speaker: 'TUTORIAL MODE', text: 'Dos', instant: true },
      { speaker: 'DEFENSA', text: 'Sigo', pose: 'donramon_idle', instant: true }
    ]);
    flow.handleAdvance();
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(true);
    expect(dom.dialogueTextEl.textContent).toBe('Dos');
    flow.handleAdvance();
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(false);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
    expect(dom.charSpriteEl.src).toContain('donramon_idle');
    expect(dom.dialogueTextEl.textContent).toBe('Sigo');
    expect(flow.getHistory().map(entry => entry.text)).toEqual(['Uno', 'Dos', 'Sigo']);
  });

  it('removes the tutorial before invoking its queue completion callback', () => {
    const { dom, flow } = setupTutorial();
    const finished = vi.fn(() => {
      expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(false);
      expect(dom.dialogueTextEl.textContent).toBe('');
    });
    flow.queueDialogue([{ speaker: 'MODO TUTORIAL', text: 'Fin' }], finished);
    expect(flow.handleAdvance()).toBe(true);
    expect(finished).toHaveBeenCalledTimes(1);
    expect(flow.handleAdvance()).toBe(false);
  });

  it('removes the last standalone tutorial and cleans up queue resets', () => {
    const { dom, flow } = setupTutorial();
    flow.renderDialogueLine({ speaker: 'MODO TUTORIAL', text: 'Fin' });
    flow.handleAdvance();
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(false);
    flow.renderDialogueLine({ speaker: 'MODO TUTORIAL', text: 'Otro' });
    flow.clear();
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(false);
    expect(dom.dialogueTextEl.textContent).toBe('');
  });

  it('yields to a record notice and then restores the next dialogue', () => {
    const { dom, flow } = setupTutorial();
    flow.queueDialogue([
      { speaker: 'MODO TUTORIAL', text: 'Ayuda', addEvidence: 'chipote_chillon' },
      { speaker: 'DEFENSA', text: 'Sigo', pose: 'donramon_idle', instant: true }
    ]);
    flow.handleAdvance();
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(false);
    expect(dom.recordNoticeEl.classList.contains('hidden')).toBe(false);
    expect(dom.dialogueBoxEl.classList.contains('hidden')).toBe(true);
    flow.handleAdvance();
    expect(dom.recordNoticeEl.classList.contains('hidden')).toBe(true);
    expect(dom.dialogueBoxEl.classList.contains('hidden')).toBe(false);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
    expect(dom.dialogueTextEl.textContent).toBe('Sigo');
  });
});
