// @Architecture(descriptionShort="Tests Present-and-Point hit math, success, and miss penalty", type="test", icon="dialog")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import {
  bindPresentPoint,
  findHitZone,
  isInsideBounds,
  percentFromStageClick,
  POINT_STAGE_HEIGHT,
  POINT_STAGE_WIDTH,
  resolvePointClick,
  resolvePointImage
} from '../../src/engine/Private/PresentPoint.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, PointTargetContradiction } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const POINT: PointTargetContradiction = {
  targetEvidenceId: 'foto_crimen',
  promptQuestion: '¿Dónde está el hielo derretido?',
  imageAsset: 'assets/examine_foto.webp',
  zones: [
    { id: 'hit', bounds: [56, 46, 76, 70], isCorrect: true, failureDialogue: [] },
    {
      id: 'miss',
      bounds: [0, 0, 100, 100],
      isCorrect: false,
      failureDialogue: [{ speaker: 'JUEZ', text: 'Eso no demuestra nada.' }]
    }
  ]
};

describe('PresentPoint bounds math', () => {
  it('treats bounds as inclusive percent boxes and prefers the correct zone', () => {
    expect(isInsideBounds([56, 46, 76, 70], 56, 46)).toBe(true);
    expect(isInsideBounds([56, 46, 76, 70], 76, 70)).toBe(true);
    expect(isInsideBounds([56, 46, 76, 70], 10, 10)).toBe(false);
    expect(findHitZone(POINT.zones, 60, 50)?.id).toBe('hit');
    expect(findHitZone(POINT.zones, 10, 10)?.id).toBe('miss');
  });

  it('converts stage clicks to percents of the 640×360 overlay', () => {
    const pct = percentFromStageClick(320, 180, { left: 0, top: 0, width: POINT_STAGE_WIDTH, height: POINT_STAGE_HEIGHT });
    expect(pct.x).toBe(50);
    expect(pct.y).toBe(50);
  });

  it('falls back from imageAsset to detailedView to examine_<id>.webp', () => {
    expect(resolvePointImage(POINT)).toBe('assets/examine_foto.webp');
    const noAsset = { ...POINT, imageAsset: undefined };
    expect(resolvePointImage(noAsset, { id: 'foto_crimen', name: 'Foto', icon: '', desc: '', detailedView: { imageAsset: 'assets/custom.webp', caption: '' } })).toBe('assets/custom.webp');
    expect(resolvePointImage(noAsset)).toBe('assets/examine_foto_crimen.webp');
  });
});

describe('PresentPoint overlay flow', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let controller: TrialController;
  let queued: DialogueLine[][];
  let pending: Array<(() => void) | undefined>;
  let realization: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    dom = setupDomHarness();
    state = new GameStateManager();
    queued = [];
    pending = [];
    const sound = new SoundEngine();
    sound.init(new FakeAudioContext() as unknown as AudioContext);
    realization = vi.spyOn(sound, 'playRealization');
    const script = JSON.parse(JSON.stringify(CASE_SCRIPT)) as CaseScript;
    script.trial.testimony1.statements[1].contradiction = {
      evidence: ['chipote_chillon'],
      successDialogue: [{ speaker: 'DEFENSA', text: '¡La cubeta está derretida!' }],
      pointTarget: POINT
    };
    controller = new TrialController({
      dom,
      state,
      script,
      soundEngine: sound,
      midiComposer: new MidiMusicComposer(sound),
      onQueueDialogue: (dlg, cb) => {
        queued.push(dlg);
        pending.push(cb);
      },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 1;
  });

  it('opens the overlay on a matching present and succeeds on the correct zone', () => {
    controller.handlePresentEvidence('chipote_chillon');
    expect(dom.presentPointOverlayEl?.classList.contains('hidden')).toBe(false);
    expect(dom.presentPointPromptEl?.textContent).toBe(POINT.promptQuestion);
    expect(dom.presentPointImageEl?.src).toContain('examine_foto.webp');
    resolvePointClick(60, 50);
    expect(realization).toHaveBeenCalled();
    expect(dom.presentPointOverlayEl?.classList.contains('hidden')).toBe(true);
    expect(queued.some((d) => d.some((l) => l.text.includes('cubeta')))).toBe(true);
  });

  it('applies a penalty on a miss and reopens the overlay after fail dialogue', () => {
    controller.handlePresentEvidence('chipote_chillon');
    resolvePointClick(10, 10);
    expect(state.health).toBe(4);
    expect(queued.some((d) => d.some((l) => l.text.includes('no demuestra')))).toBe(true);
    expect(dom.presentPointOverlayEl?.classList.contains('hidden')).toBe(true);
    pending[0]!();
    expect(dom.presentPointOverlayEl?.classList.contains('hidden')).toBe(false);
  });

  it('restarts the trial when a point miss exhausts health', () => {
    state.health = 1;
    controller.handlePresentEvidence('chipote_chillon');
    resolvePointClick(10, 10);
    expect(queued.some((d) => d.some((l) => l.text.includes('CULPABLE')))).toBe(true);
    expect(dom.presentPointOverlayEl?.classList.contains('hidden')).toBe(true);
  });

  it('maps a stage click through bindPresentPoint onto the correct zone', () => {
    bindPresentPoint(dom);
    controller.handlePresentEvidence('chipote_chillon');
    const stage = dom.presentPointStageEl!;
    stage.getBoundingClientRect = () => ({
      left: 0, top: 0, width: 640, height: 360, right: 640, bottom: 360, x: 0, y: 0, toJSON: () => ({})
    });
    stage.dispatchEvent(new MouseEvent('click', { clientX: 384, clientY: 180, bubbles: true }));
    expect(queued.some((d) => d.some((l) => l.text.includes('cubeta')))).toBe(true);
  });
});
