// @Architecture(descriptionShort="Unit tests for character idle sprite resolution on scene revisit", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { resolveSceneIdlePose } from '../../src/engine/Private/InvestigationSceneTransition.js';
import { GameStateManager } from '../../src/state/index.js';
import type { InvestigationScene } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('Investigation Scene Revisit Idle Pose', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let soundEngineInstance: SoundEngine;
  let midiComposerInstance: MidiMusicComposer;
  let controller: InvestigationController;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);

    controller = new InvestigationController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (_dlg, cb) => {
        if (cb) cb();
      }
    });
  });

  describe('resolveSceneIdlePose', () => {
    it('returns explicit idlePose when defined on scene', () => {
      const scene: InvestigationScene = {
        title: 'Test',
        bg: 'bg.webp',
        bgm: 'investigation',
        speaker: 'NARRADOR',
        idlePose: 'florinda_idle',
        intro: [],
        hotspots: [],
        talkOptions: []
      };
      expect(resolveSceneIdlePose(scene, state)).toBe('florinda_idle');
    });

    it('returns null when scene specifies idlePose as null', () => {
      const scene: InvestigationScene = {
        title: 'Empty Scene',
        bg: 'bg.webp',
        bgm: 'suspense',
        speaker: 'NARRADOR',
        idlePose: null,
        intro: [],
        hotspots: [],
        talkOptions: []
      };
      expect(resolveSceneIdlePose(scene, state)).toBeNull();
    });

    it('resolves idlePose from active conditional intro matching flags', () => {
      const scene: InvestigationScene = {
        title: 'Dynamic Scene',
        bg: 'bg.webp',
        bgm: 'investigation',
        speaker: 'NARRADOR',
        idlePose: 'peterete_smug',
        intro: [
          {
            id: 'intro_phase1',
            condition: (f) => !f.solved,
            dialogue: [],
            idlePose: 'peterete_smug'
          },
          {
            id: 'intro_phase2',
            condition: (f) => !!f.solved,
            dialogue: [],
            idlePose: 'chompiras_idle'
          }
        ],
        hotspots: [],
        talkOptions: []
      };

      expect(resolveSceneIdlePose(scene, state)).toBe('peterete_smug');
      state.flags.solved = true;
      expect(resolveSceneIdlePose(scene, state)).toBe('chompiras_idle');
    });

    it('falls back to inferSceneDefaultPose when idlePose is undefined', () => {
      const scene = {
        title: 'Legacy Scene',
        bg: 'bg.webp',
        bgm: 'investigation',
        speaker: 'NARRADOR',
        intro: [{ speaker: 'FLORINDA', text: 'Hello', pose: 'florinda_fanning' as const }],
        hotspots: [],
        talkOptions: []
      } as InvestigationScene;
      expect(resolveSceneIdlePose(scene, state)).toBe('florinda_fanning');
    });
  });

  describe('InvestigationController Revisit & Staging Behavior', () => {
    it('restores florinda_idle when revisiting museum after visiting detention', () => {
      controller.startInvestigation('museum');
      state.unlockLocation('detention');
      controller.startInvestigation('detention');
      expect(dom.charSpriteEl.src).toContain('assets/chapulin_idle.webp');

      // Re-visit museum: should show florinda_idle, not Monchito or Chapulín
      controller.startInvestigation('museum');
      expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.webp');
      expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
    });

    it('hides character sprite in empty scenes with idlePose: null (e.g. Case 3 bodega)', () => {
      const case3Script = getCaseScript('es', 'case3');
      controller.setScript(case3Script);
      state.unlockedLocations.push('bodega_radio');

      controller.startInvestigation('bodega_radio');
      expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);
    });

    it('restores resident idle pose after hotspot dialogue finishes', () => {
      controller.startInvestigation('museum');
      controller.startExamineMode();
      expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);

      const pedestalHotspot = dom.hotspotsContainerEl.children[0] as HTMLElement;
      pedestalHotspot.click();

      // Dialogue completed via onQueueDialogue callback: should restore florinda_idle
      expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.webp');
      expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
    });

    it('restores resident idle pose after talk option dialogue finishes', () => {
      controller.startInvestigation('museum');
      controller.openTalkMenu();

      const modal = dom.talkOptionsModalEl;
      const firstBtn = modal.querySelector('button') as HTMLButtonElement;
      if (firstBtn) {
        firstBtn.click();
        expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.webp');
      }
    });

    it('restores resident idle pose on exiting examine mode without clicking hotspots', () => {
      controller.startInvestigation('museum');
      controller.startExamineMode();
      expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);

      controller.exitExamineMode();
      expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.webp');
      expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);
    });
  });
});
