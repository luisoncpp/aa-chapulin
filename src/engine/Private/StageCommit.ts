// @Architecture(descriptionShort="Atomic decoded cuts for sprites, plates, and furniture", type="util", icon="layers")
/**
 * Holds the last complete stage shot until the next line's bitmaps are decoded,
 * then paints pose, background, furniture, and frame in one turn.
 */

import type { DialogueLine } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { decodeUrl } from './ImageDecode.js';
import { VisualEffects } from './VisualEffects.js';

const FURNITURE_URLS = {
  podium: 'assets/court_podium.webp',
  bench: 'assets/court_bench.webp'
} as const;

let commitGeneration = 0;
let idle: Promise<void> = Promise.resolve();

export function invalidateStagingCommit(): void {
  commitGeneration += 1;
}

// fallow-ignore-next-line unused-export -- tests/engine/StageCommit.test.ts awaits the pending cut
export function whenStagingIdle(): Promise<void> {
  return idle;
}

export function presentDialogueVisuals(
  dom: DomElements,
  line: DialogueLine,
  isTrialMode: boolean
): void {
  const generation = ++commitGeneration;
  const pose = VisualEffects.resolveEffectivePose(line, isTrialMode);
  if (!pose) VisualEffects.hideCharacter(dom.charSpriteEl);
  const apply = /*paintDecodedShot*/ () => {
    if (generation !== commitGeneration) return;
    if (pose) VisualEffects.setPose(dom.charSpriteEl, pose);
    VisualEffects.updateStagingForLine(dom, line, isTrialMode);
  };
  const waits = collectLineUrls(dom, line, isTrialMode).map(decodeUrl);
  scheduleCommit(waits, apply);
}

function scheduleCommit(waits: Array<Promise<void> | null>, apply: () => void): void {
  const pending = waits.filter((wait): wait is Promise<void> => wait !== null);
  if (pending.length === 0) {
    apply();
    idle = Promise.resolve();
    return;
  }
  idle = Promise.all(pending).then(apply);
}

// fallow-ignore-next-line complexity
function collectLineUrls(
  dom: DomElements,
  line: DialogueLine,
  isTrialMode: boolean
): string[] {
  const pose = VisualEffects.resolveEffectivePose(line, isTrialMode);
  const bg = VisualEffects.resolveBackground(line, isTrialMode);
  const urls: string[] = [];
  if (bg) urls.push(bg);
  if (pose) urls.push(`assets/${pose}.webp`);
  const furnitureUrl = furnitureAssetUrl(line, isTrialMode, bg ?? dom.bgEl.style.backgroundImage);
  if (furnitureUrl) urls.push(furnitureUrl);
  return urls;
}

function furnitureAssetUrl(
  line: DialogueLine,
  isTrialMode: boolean,
  bgHint: string
): string | null {
  const furniture = line.furniture ?? VisualEffects.inferFurniture(isTrialMode, bgHint);
  if (furniture !== 'podium' && furniture !== 'bench') return null;
  return FURNITURE_URLS[furniture];
}
