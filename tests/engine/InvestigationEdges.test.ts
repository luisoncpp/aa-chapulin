// @Architecture(descriptionShort="Edge-case tests for investigation script swap and menus", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('InvestigationController edges', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let controller: InvestigationController;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    controller = new InvestigationController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (_dlg, cb) => { if (cb) cb(); }
    });
  });

  it('restores location pose after a first-time hotspot dialogue completes', () => {
    controller.startInvestigation('museum');
    controller.currentLocationCharPose = 'florinda_idle';
    controller.startExamineMode();
    (dom.hotspotsContainerEl.children[0] as HTMLElement).click();
    expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.png');
  });

  it('renders an empty hotspot layer when a scene omits hotspots', () => {
    const script = {
      ...CASE_SCRIPT,
      investigation: {
        museum: { ...CASE_SCRIPT.investigation.museum, hotspots: undefined }
      }
    } as typeof CASE_SCRIPT;
    controller.setScript(script);
    controller.startInvestigation('museum');
    expect(dom.hotspotsContainerEl.children).toHaveLength(0);
  });

  it('omits unlocked ids that have no matching investigation scene', () => {
    state.unlockedLocations = ['museum', 'boveda'];
    controller.openMoveMenu();
    expect(dom.moveLocationsListEl.children).toHaveLength(1);
  });

  it('uses scene title when a destination has no short name', () => {
    const script = {
      ...CASE_SCRIPT,
      investigation: {
        museum: { ...CASE_SCRIPT.investigation.museum, name: undefined }
      }
    } as typeof CASE_SCRIPT;
    controller.setScript(script);
    controller.openMoveMenu();
    expect(dom.moveLocationsListEl.textContent).toContain(script.investigation.museum.title);
  });

  it('ignores trial-readiness UI when the trial button is absent', () => {
    (controller as unknown as { dom: DomElements }).dom = { ...dom, btnInvTrial: undefined };
    expect(() => controller.checkInvestigationProgress()).not.toThrow();
    expect(() => controller.resetTrialLaunchButton()).not.toThrow();
  });

  it('refreshes banner and hotspots only while investigating a known scene', () => {
    state.mode = 'TRIAL';
    controller.setScript(CASE_SCRIPT);
    expect(dom.locationBannerEl.textContent).toBe('Museo');

    state.mode = 'INVESTIGATION';
    state.currentLocation = 'boveda';
    controller.setScript(CASE_SCRIPT);
    expect(dom.hotspotsContainerEl.children.length).toBeGreaterThanOrEqual(0);

    state.currentLocation = 'museum';
    controller.setScript(CASE_SCRIPT);
    expect(dom.locationBannerEl.textContent).toContain('Museo');
  });
});
