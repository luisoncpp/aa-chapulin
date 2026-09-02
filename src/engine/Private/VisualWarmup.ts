// @Architecture(descriptionShort="Prefetches scene and courtroom bitmaps before they are staged", type="util", icon="download")
/**
 * Starts browser fetches so the first decoded cut of a scene is more likely to
 * paint without waiting on a CDN round trip.
 */

import type { CaseScript, DialogueLine, InvestigationScene, Testimony, TrialDay } from '../../types/index.js';
import { invalidateStagingCommit } from './StageCommit.js';
import { warmUrls } from './ImageDecode.js';
import { getActiveTrial } from './TrialDayRouter.js';

const COURTROOM_URLS = [
  'assets/bg_defense.webp',
  'assets/bg_courtroom.webp',
  'assets/bg_judge.webp',
  'assets/bg_witness.webp',
  'assets/court_podium.webp',
  'assets/court_bench.webp'
];

export function prepareSceneVisuals(scene: InvestigationScene): void {
  invalidateStagingCommit();
  warmSceneVisuals(scene);
}

// fallow-ignore-next-line complexity
function warmSceneVisuals(scene: InvestigationScene): void {
  const urls = new Set<string>([scene.bg]);
  addLines(scene.intro, urls);
  for (const hotspot of scene.hotspots || []) addLines(hotspot.dialogue, urls);
  for (const option of scene.talkOptions || []) addLines(option.dialogue, urls);
  warmUrls([...urls]);
}

export function warmTrialVisuals(script: CaseScript, trialDay: TrialDay): void {
  const urls = new Set<string>(COURTROOM_URLS);
  const trial = getActiveTrial(script, trialDay);
  addLines(trial.intro, urls);
  addTestimony(trial.testimony1, urls);
  addTestimony(trial.testimony2, urls);
  warmUrls([...urls]);
}

// fallow-ignore-next-line complexity
function addTestimony(testimony: Testimony | undefined, urls: Set<string>): void {
  if (!testimony?.statements) return;
  for (const statement of testimony.statements) {
    if (statement.pose) urls.add(`assets/${statement.pose}.webp`);
  }
}

function addLines(lines: DialogueLine[] | undefined, urls: Set<string>): void {
  if (!lines) return;
  for (const line of lines) addLineUrls(line, urls);
}

function addLineUrls(line: DialogueLine, urls: Set<string>): void {
  if (line.bg) urls.add(line.bg);
  if (line.pose) urls.add(`assets/${line.pose}.webp`);
  if (line.cutin) urls.add(`assets/${line.cutin}.webp`);
}
