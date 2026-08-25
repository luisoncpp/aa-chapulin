// @Architecture(descriptionShort="Unit tests for main GameEngine coordinator and factory", type="test", icon="layout")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { GameEngine, createGameEngine } from '../../src/engine/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('GameEngine Coordinator', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let soundEngineInstance: SoundEngine;
  let midiComposerInstance: MidiMusicComposer;
  let engine: GameEngine;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);

    engine = new GameEngine({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance
    });
    engine.init();
  });

  it('starts the game on first advance or start click, and ignores subsequent start clicks', () => {
    expect(state.mode).toBe('INVESTIGATION');
    document.getElementById('btn-start-game')?.click();

    expect(soundEngineInstance.initialized).toBe(true);
    vi.advanceTimersByTime(400);
    expect(dom.startSplashOverlayEl.classList.contains('hidden')).toBe(true);
    expect(state.currentLocation).toBe('museum');

    // Duplicate start click is safely ignored
    expect(() => document.getElementById('btn-start-game')?.click()).not.toThrow();
  });

  it('starts game automatically if advance is clicked before start button', () => {
    const unstartedEngine = new GameEngine({
      dom,
      state,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance
    });
    unstartedEngine.handleAdvance();
    expect(state.currentLocation).toBe('museum');
  });

  it('advances dialogue step by step on handleAdvance', () => {
    document.getElementById('btn-start-game')?.click();
    vi.advanceTimersByTime(400);

    let queueFinished = false;
    const lines: DialogueLine[] = [
      { speaker: 'DEFENSA', text: 'Línea 1' },
      { speaker: 'FLORINDA', text: 'Línea 2', pose: 'florinda_angry' }
    ];

    engine.queueDialogue(lines, () => {
      queueFinished = true;
    });

    expect(dom.speakerBoxEl.textContent).toBe('DEFENSA');

    // Clicking advance skips typewriter animation
    engine.handleAdvance();
    expect(dom.dialogueTextEl.textContent).toBe('Línea 1');

    // Clicking advance moves to line 2
    engine.handleAdvance();
    engine.handleAdvance();
    expect(dom.dialogueTextEl.textContent).toBe('Línea 2');
    expect(dom.charSpriteEl.src).toContain('assets/florinda_angry.png');

    // Final advance triggers queue complete callback
    engine.handleAdvance();
    expect(queueFinished).toBe(true);

    // Further advance when queue is empty does not throw
    expect(() => engine.handleAdvance()).not.toThrow();
  });

  it('renders dialogue lines with background, BGM, SFX, cutin, and evidence awards', () => {
    const richLine: DialogueLine = {
      speaker: 'SUPER SAM',
      pose: 'supersam_slam',
      text: 'Time is money!',
      bg: 'assets/bg_courtroom.jpg',
      bgm: 'trial',
      sfx: 'gavel',
      cutin: 'objection_protesto',
      addEvidence: 'chipote_chillon'
    };

    engine.renderDialogueLine(richLine);

    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_courtroom.jpg');
    expect(midiComposerInstance.currentTrack).toBe('trial');
    expect(dom.speakerBoxEl.textContent).toBe('SUPER SAM');
    expect(dom.charSpriteEl.src).toContain('assets/supersam_slam.png');
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(dom.gameNotificationEl.textContent).toContain('Chipote Chillón');
  });

  it('handles empty line or lines with generic speaker without throwing', () => {
    expect(() => engine.renderDialogueLine(null as any)).not.toThrow();
    expect(() => engine.renderDialogueLine({ speaker: 'TESTIGO', text: 'Hola' })).not.toThrow();
  });

  it('triggers all SFX visual feedbacks (desk_slam, realization, damage)', () => {
    engine.renderDialogueLine({ speaker: 'JUEZ', text: '', sfx: 'desk_slam' });
    expect(dom.gameScreen.classList.contains('screen-shake')).toBe(true);

    engine.renderDialogueLine({ speaker: 'JUEZ', text: '', sfx: 'realization' });
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);

    engine.renderDialogueLine({ speaker: 'JUEZ', text: '', sfx: 'damage' });
    expect(dom.gameScreen.classList.contains('screen-shake')).toBe(true);
  });

  it('handles court record open and modal present dispatch', () => {
    document.getElementById('btn-start-game')?.click();
    document.getElementById('btn-court-record')?.click();

    expect(dom.courtRecordModalEl.classList.contains('hidden')).toBe(false);
    dom.presentBtnEl.click();
    expect(dom.courtRecordModalEl.classList.contains('hidden')).toBe(true);

    // Presenting without selection does not throw
    (engine as any).selectedEvidenceId = null;
    expect(() => (engine as any).handlePresentFromModal()).not.toThrow();
  });

  it('creates GameEngine using factory function createGameEngine', () => {
    const created = createGameEngine({ dom, state });
    expect(created).toBeInstanceOf(GameEngine);

    const defaultCreated = createGameEngine();
    expect(defaultCreated).toBeInstanceOf(GameEngine);
  });

  it('stages courtroom furniture dynamically on dialogue rendering', () => {
    state.mode = 'TRIAL';

    // Witness speaking at witness stand -> shows podium
    engine.renderDialogueLine({
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Yo no fui',
      bg: 'assets/bg_witness.jpg'
    });
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_podium.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);

    // Defense speaking with pose -> shows defense bench
    engine.renderDialogueLine({
      speaker: 'DEFENSA',
      pose: 'chapulin_point',
      text: '¡Protesto!'
    });
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_defense.jpg');
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtFurnitureContainerEl.dataset.furniture).toBe('bench');
    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-stand');

    // Investigation mode -> hides furniture
    state.mode = 'INVESTIGATION';
    engine.renderDialogueLine({
      speaker: 'CHAPULIN',
      pose: 'chapulin_idle',
      text: 'En la sala de visitas',
      bg: 'assets/bg_detention.jpg'
    });
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
  });

  it('starts trial directly with full evidence and audio on startTrialDebug', () => {
    engine.startTrialDebug();
    vi.advanceTimersByTime(400);

    expect(soundEngineInstance.initialized).toBe(true);
    expect(dom.startSplashOverlayEl.classList.contains('hidden')).toBe(true);
    expect(state.mode).toBe('TRIAL');
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.hasEvidence('pastillas_chiquitolina')).toBe(true);
    expect(state.hasEvidence('antenitas_vinil')).toBe(true);
    // Trial controls remain hidden while intro dialogue plays
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(true);

    // Advance all intro lines to reach cross-examination
    for (let i = 0; i < CASE_SCRIPT.trial.intro.length; i++) {
      engine.handleAdvance(); // skips typewriter
      engine.handleAdvance(); // advances line
    }
    // Now testimony 1 is active -> trial controls are revealed
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);
  });

  it('starts trial directly when clicking debug trial button', () => {
    dom.btnStartTrialDebug.click();
    vi.advanceTimersByTime(400);

    expect(state.mode).toBe('TRIAL');
    expect(state.flags.ready_for_trial).toBe(true);
    // Controls should be hidden while intro dialogue is running
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(true);
  });


  it('triggers debug trial on init if URL contains trial query param', () => {
    const originalLocation = window.location;
    delete (window as any).location;
    window.location = { search: '?mode=trial', hash: '' } as any;

    const autoDebugEngine = new GameEngine({
      dom,
      state: new GameStateManager(),
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance
    });
    autoDebugEngine.init();
    vi.advanceTimersByTime(400);

    window.location = originalLocation;
  });

  it('maintains consistent courtroom backgrounds and furniture throughout a multi-speaker trial dialogue sequence', () => {
    engine.startTrialDebug();
    vi.advanceTimersByTime(400);

    const trialSequence: DialogueLine[] = [
      { speaker: 'DEFENSA', text: '¡PROTESTO!', cutin: 'objection_protesto' },
      { speaker: 'DEFENSA', pose: 'donramon_point', text: '¡El testimonio es contradictorio!' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Time is money!' },
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Prosiga con su argumento.' },
      { speaker: 'TRIPASECA', pose: 'tripaseca_sweat', text: '¡Glup!' }
    ];

    engine.queueDialogue(trialSequence);

    // 1. DEFENSA shout -> defense stand, Don Ramon and bench visible
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_defense.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.charSpriteEl.src).toContain('assets/donramon_idle.png');
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);

    // 2. DEFENSA with pose -> defense stand, bench and point pose
    engine.handleAdvance(); // finish typewriter
    engine.handleAdvance(); // next line
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_defense.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.charSpriteEl.src).toContain('assets/donramon_point.png');

    // 3. SUPER SAM -> courtroom / prosecution stand, no furniture
    engine.handleAdvance();
    engine.handleAdvance();
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_courtroom.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);

    // 4. JUEZ -> judge stand, no furniture
    engine.handleAdvance();
    engine.handleAdvance();
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_judge.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);

    // 5. TRIPASECA -> witness stand, podium
    engine.handleAdvance();
    engine.handleAdvance();
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_witness.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_podium.png');
  });
});
