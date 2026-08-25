// @Architecture(descriptionShort="Declarative stage geometry for characters and furniture", type="util", icon="layers")
/**
 * Stage Composition Frames
 *
 * Single source of truth for how tall a character is staged and where their body
 * meets the courtroom furniture. Every metric is a fraction of the stage box,
 * never a pixel, so future trials and locations reuse these frames unchanged and
 * survive any change to the stage resolution.
 *
 * Applied to the DOM as CSS custom properties consumed by [[style.css]].
 * Resolved once per dialogue line by [[./VisualEffects.ts]].
 */

import type { FurnitureType, PoseName } from '../../types/index.js';

export type StageFrameId = 'plain' | 'bench-stand' | 'bench-slam' | 'podium';

export interface StageFrame {
  /** Character sprite box height, as a fraction of stage height. */
  characterHeight: number;
  /** Character box bottom edge, as a fraction of stage height above the stage floor. */
  characterBaseline: number;
  /** Character stacking order. The furniture layer is 3; use 4 to paint palms over a counter. */
  characterLayer: number;
  /** Furniture box width, as a fraction of stage width. */
  furnitureWidth: number;
  /** Furniture box height, as a fraction of stage height. */
  furnitureHeight: number;
  /** Furniture box bottom edge, as a fraction of stage height above the stage floor. */
  furnitureBaseline: number;
  /**
   * True when the pose's hands are planted on the furniture. Such a frame must sink the
   * character far enough that the furniture's top edge covers the transparent notch
   * between the forearms, and must suppress the idle breathing float — a sprite that
   * drifts vertically cannot stay in contact with a static surface.
   */
  surfaceContact: boolean;
}

/** Furniture layer z-index in [[style.css]]. A character must exceed it to paint over a counter. */
// fallow-ignore-next-line unused-export -- staging contract consumed by tests/engine/StageLayout.test.ts
export const FURNITURE_LAYER = 3;

/**
 * Staging invariants every frame below preserves:
 *
 * - Character height stays near 0.62 of the stage so a 512px bust never overflows
 *   the top edge. Anything above ~0.70 crops the head.
 * - Both bench frames share one furniture box, so the desk never moves when the
 *   speaker changes pose. Only the character baseline differs.
 * - `bench-slam` sits low enough that the palms land mid-counter rather than on
 *   its far edge, and is the only frame that outranks {@link FURNITURE_LAYER}.
 * - The bench spans the full stage width, and that is load-bearing, not taste. The wood
 *   surface must be deep enough on screen to fit two things between its far edge and its
 *   gold trim: the notch coverage, and the palms. chapulin_slam.png puts 37.3px of stage
 *   between those two features, so a narrower bench (<0.9 width) makes the frame
 *   geometrically unsatisfiable — the palms land on the trim or the waist gaps open.
 */
// fallow-ignore-next-line unused-export -- staging contract consumed by tests/engine/StageLayout.test.ts
export const STAGE_FRAMES: Record<StageFrameId, StageFrame> = {
  plain: {
    characterHeight: 0.62,
    characterBaseline: 0.13,
    characterLayer: 2,
    furnitureWidth: 0,
    furnitureHeight: 0,
    furnitureBaseline: 0,
    surfaceContact: false
  },
  'bench-stand': {
    characterHeight: 0.62,
    characterBaseline: 0.34,
    characterLayer: 2,
    furnitureWidth: 1,
    furnitureHeight: 0.407,
    furnitureBaseline: 0.05,
    surfaceContact: false
  },
  'bench-slam': {
    // Tuned so the waist lands ON the counter's edge outline: covered by the desk (so the
    // see-through notch between the forearms shows no background) but not overlapping the
    // wood (so his torso does not paint on the surface). That target is only ~4px tall —
    // the thickness of the outline itself — so do not nudge this by eye.
    characterHeight: 0.62,
    characterBaseline: 0.376,
    characterLayer: 4,
    furnitureWidth: 1,
    furnitureHeight: 0.407,
    furnitureBaseline: 0.05,
    surfaceContact: true
  },
  podium: {
    characterHeight: 0.62,
    characterBaseline: 0.18,
    characterLayer: 2,
    furnitureWidth: 0.75,
    furnitureHeight: 0.42,
    furnitureBaseline: 0,
    surfaceContact: false
  }
};

// @Section(Frame Resolution)
/** Poses drawn with both palms planted on a surface, which must paint over the counter. */
function isSurfaceContactPose(pose: PoseName): boolean {
  return !!pose && pose.includes('slam');
}

export function resolveStageFrame(furniture: FurnitureType, pose: PoseName): StageFrameId {
  if (furniture === 'podium') return 'podium';
  if (furniture !== 'bench') return 'plain';
  return isSurfaceContactPose(pose) ? 'bench-slam' : 'bench-stand';
}

// @Section(CSS Custom Property Projection)
export function applyStageFrame(gameScreenEl: HTMLElement, frameId: StageFrameId): void {
  const frame = STAGE_FRAMES[frameId];
  const style = gameScreenEl.style;
  gameScreenEl.dataset.stageFrame = frameId;
  gameScreenEl.dataset.stageContact = String(frame.surfaceContact);
  style.setProperty('--char-height', toPercent(frame.characterHeight));
  style.setProperty('--char-baseline', toPercent(frame.characterBaseline));
  style.setProperty('--char-layer', String(frame.characterLayer));
  style.setProperty('--furniture-width', toPercent(frame.furnitureWidth));
  style.setProperty('--furniture-height', toPercent(frame.furnitureHeight));
  style.setProperty('--furniture-baseline', toPercent(frame.furnitureBaseline));
}

function toPercent(ratio: number): string {
  return `${(ratio * 100).toFixed(2)}%`;
}
