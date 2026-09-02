// @Architecture(descriptionShort="Geometry tests for reusable stage composition frames", type="test", icon="layers")
/**
 * These tests resolve the frame ratios into stage pixels and assert the composition
 * rules that the screenshots exposed: no cropped heads, and palms landing on the
 * counter's top surface instead of its far edge.
 */

import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  applyStageFrame,
  FURNITURE_LAYER,
  resolveStageFrame,
  STAGE_FRAMES,
  type StageFrameId
} from '../../src/engine/Private/StageLayout.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const STAGE_W = 960;
const STAGE_H = 540;

/**
 * Source pixel geometry of assets/court_bench.webp. The asset is cropped so its
 * first row IS the desk's far-edge outline, which is why surfaceTop is ~0: the
 * container's top edge and the hand-contact line are the same line. Any rows
 * above that outline would paint a flat strip in front of the character.
 */
const BENCH_SRC = { w: 1060, h: 641, surfaceTop: 3, surfaceBottom: 90 };

/**
 * Content bounds inside the 512x512 chapulin_slam.png frame, as fractions of the
 * sprite box: antennae tips at the top, planted palms at the bottom, and the row at
 * which the transparent notch between the forearms opens. The notch is see-through, so
 * the furniture's far edge must sit above it or the room shows through his waist.
 */
const SLAM_SPRITE = { contentTop: 70 / 512, palmsBottom: 505 / 512, waistNotchTop: 448 / 512 };

/** Every sprite is a 512x512 square, so the contain-fitted box side equals its height. */
function characterBox(frameId: StageFrameId): { top: number; side: number } {
  const frame = STAGE_FRAMES[frameId];
  const side = frame.characterHeight * STAGE_H;
  const bottom = STAGE_H - frame.characterBaseline * STAGE_H;
  return { top: bottom - side, side };
}

/** Absolute stage Y of the bench's top wood surface, after the cover-fit crop. */
function benchSurface(frameId: StageFrameId): { top: number; bottom: number } {
  const frame = STAGE_FRAMES[frameId];
  const boxW = frame.furnitureWidth * STAGE_W;
  const boxH = frame.furnitureHeight * STAGE_H;
  const scale = Math.max(boxW / BENCH_SRC.w, boxH / BENCH_SRC.h);
  const boxTop = STAGE_H - frame.furnitureBaseline * STAGE_H - boxH;
  return {
    top: boxTop + BENCH_SRC.surfaceTop * scale,
    bottom: boxTop + BENCH_SRC.surfaceBottom * scale
  };
}

describe('StageLayout composition frames', () => {
  it('resolves a frame from furniture plus pose', () => {
    expect(resolveStageFrame('bench', 'chapulin_slam')).toBe('bench-slam');
    expect(resolveStageFrame('bench', 'donramon_slam')).toBe('bench-slam');
    expect(resolveStageFrame('bench', 'supersam_slam')).toBe('bench-slam');
    expect(resolveStageFrame('bench', 'chapulin_idle')).toBe('bench-stand');
    expect(resolveStageFrame('bench', 'donramon_idle')).toBe('bench-stand');
    expect(resolveStageFrame('bench', 'donramon_shock')).toBe('bench-stand');
    expect(resolveStageFrame('bench', null)).toBe('bench-stand');
    expect(resolveStageFrame('podium', 'tripaseca_smug')).toBe('podium');
    expect(resolveStageFrame('none', 'chapulin_slam')).toBe('plain');
  });

  it('keeps every staged character fully inside the stage', () => {
    for (const frameId of Object.keys(STAGE_FRAMES) as StageFrameId[]) {
      const box = characterBox(frameId);
      const headTop = box.top + SLAM_SPRITE.contentTop * box.side;
      expect(headTop, `${frameId} crops the head above the stage`).toBeGreaterThan(0);
      expect(box.top + box.side, `${frameId} pushes the sprite below the stage`).toBeLessThanOrEqual(STAGE_H);
    }
  });

  it('lands slam palms on the bench top surface, not on its far edge', () => {
    const box = characterBox('bench-slam');
    const palms = box.top + SLAM_SPRITE.palmsBottom * box.side;
    const surface = benchSurface('bench-slam');

    expect(palms).toBeGreaterThan(surface.top);
    expect(palms).toBeLessThan(surface.bottom);

    // Concrete clearance, not a ratio: the palms must not creep onto the gold trim, and
    // the surface must stay deep enough to also fit the waist-notch coverage below.
    expect(palms - surface.top).toBeGreaterThan(5);
    expect(surface.bottom - palms).toBeGreaterThan(5);
  });

  it('lands the waist on the counter edge outline, neither above nor on the wood', () => {
    const box = characterBox('bench-slam');
    const waist = box.top + SLAM_SPRITE.waistNotchTop * box.side;
    const frame = STAGE_FRAMES['bench-slam'];
    // The bench is opaque from its very first row, so its box top is where coverage starts.
    const deskTop = STAGE_H - frame.furnitureBaseline * STAGE_H - frame.furnitureHeight * STAGE_H;
    const woodTop = benchSurface('bench-slam').top;

    // Above deskTop: the room shows through the see-through notch under his waist.
    // Below woodTop: his torso paints on top of the wood, as if his belly lay on the desk.
    expect(waist, 'waist above the counter — background shows through').toBeGreaterThanOrEqual(deskTop);
    expect(waist, 'waist overlaps the wood — torso paints on the surface').toBeLessThanOrEqual(woodTop);
  });

  it('marks contact frames so the idle float can be suppressed', () => {
    // A drifting sprite cannot stay in contact with a static surface, so surface contact
    // and painting over the furniture must always agree.
    for (const [id, frame] of Object.entries(STAGE_FRAMES)) {
      expect(frame.surfaceContact, `${id}`).toBe(frame.characterLayer > FURNITURE_LAYER);
    }
    expect(STAGE_FRAMES['bench-slam'].surfaceContact).toBe(true);
  });

  it('holds the bench still when only the pose changes', () => {
    const slam = STAGE_FRAMES['bench-slam'];
    const stand = STAGE_FRAMES['bench-stand'];
    expect(slam.furnitureWidth).toBe(stand.furnitureWidth);
    expect(slam.furnitureHeight).toBe(stand.furnitureHeight);
    expect(slam.furnitureBaseline).toBe(stand.furnitureBaseline);
    expect(slam.characterHeight).toBe(stand.characterHeight);
  });

  it('lets only surface-contact poses paint over the furniture layer', () => {
    expect(STAGE_FRAMES['bench-slam'].characterLayer).toBeGreaterThan(FURNITURE_LAYER);
    expect(STAGE_FRAMES['bench-stand'].characterLayer).toBeLessThan(FURNITURE_LAYER);
    expect(STAGE_FRAMES.podium.characterLayer).toBeLessThan(FURNITURE_LAYER);
    expect(STAGE_FRAMES.plain.characterLayer).toBeLessThan(FURNITURE_LAYER);
  });

  it('projects the frame onto the stage as CSS custom properties', () => {
    const dom = setupDomHarness();
    applyStageFrame(dom.gameScreen, 'bench-slam');

    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-slam');
    expect(dom.gameScreen.dataset.stageContact).toBe('true');
    expect(dom.gameScreen.style.getPropertyValue('--char-height')).toBe('62.00%');
    expect(dom.gameScreen.style.getPropertyValue('--char-baseline')).toBe('37.60%');
    expect(dom.gameScreen.style.getPropertyValue('--char-layer')).toBe('4');
    expect(dom.gameScreen.style.getPropertyValue('--furniture-width')).toBe('100.00%');
    expect(dom.gameScreen.style.getPropertyValue('--furniture-height')).toBe('45.70%');
    expect(dom.gameScreen.style.getPropertyValue('--furniture-baseline')).toBe('0.00%');
  });

  it('stages Doctor Chapatín shorter so the witness podium is not swallowed', () => {
    const dom = setupDomHarness();
    applyStageFrame(dom.gameScreen, 'podium', 'chapatin_enojado');
    const chapatinHeight = parseFloat(dom.gameScreen.style.getPropertyValue('--char-height'));
    // Shorter than the 62% cast default, but not so short he reads as a child: his ink
    // fills the same share of the 512 canvas as every other bust.
    expect(chapatinHeight).toBeCloseTo(52.7, 1);
    expect(chapatinHeight).toBeGreaterThan(50);
    expect(chapatinHeight).toBeLessThan(62);
    expect(dom.gameScreen.style.getPropertyValue('--char-baseline')).toBe('18.00%');

    applyStageFrame(dom.gameScreen, 'podium', 'aniceto_idle');
    expect(dom.gameScreen.style.getPropertyValue('--char-height')).toBe('62.00%');
    expect(dom.gameScreen.style.getPropertyValue('--char-baseline')).toBe('18.00%');
  });

  it('aligns plain frame character baseline with the dialogue box top edge', () => {
    // Dialogue box sits 15px from bottom with 120px height (top edge at 135px / 540px = 25%)
    const dialogueBoxTopRatio = (15 + 120) / STAGE_H;
    expect(STAGE_FRAMES.plain.characterBaseline).toBeCloseTo(dialogueBoxTopRatio, 4);
  });

  it('does not apply position transitions to character container to avoid sliding on shot cuts', () => {
    const cssContent = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
    const charContainerRule = cssContent.match(/#character-container\s*\{([^}]+)\}/)?.[1] ?? '';
    expect(charContainerRule).not.toMatch(/transition:[^;]*(bottom|height|top|transform)/);
  });

  it('does not fade furniture opacity across camera cuts', () => {
    const cssContent = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
    const furnitureRule = cssContent.match(/#court-furniture-container\s*\{([^}]+)\}/)?.[1] ?? '';
    expect(furnitureRule).not.toMatch(/transition:/);
  });
});
