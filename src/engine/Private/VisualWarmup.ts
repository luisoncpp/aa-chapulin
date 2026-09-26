// @Architecture(descriptionShort="Prefetches scene and courtroom bitmaps before they are staged", type="util", icon="download")
/**
 * Starts browser fetches so the first decoded cut of a scene is more likely to
 * paint without waiting on a CDN round trip.
 */

import type {
  CaseScript, DialogueLine, InvestigationScene, PointTargetContradiction, Testimony, TrialDay
} from '../../types/index.js';
import { invalidateStagingCommit } from './StageCommit.js';
import { warmUrls } from './ImageDecode.js';
import { getActiveTrial } from './TrialDayRouter.js';

const COURTROOM_URLS = [
  'assets/bg_defense.webp',
  'assets/bg_courtroom.webp',
  'assets/bg_judge.webp',
  'assets/bg_gallery.webp',
  'assets/bg_witness.webp',
  'assets/court_podium.webp',
  'assets/court_bench.webp',
  'assets/court_judge_bench.webp'
];

export function prepareSceneVisuals(scene: InvestigationScene): void {
  invalidateStagingCommit();
  warmSceneVisuals(scene);
}

function warmSceneVisuals(scene: InvestigationScene): void {
  const urls = new Set<string>([scene.bg]);
  addIntro(scene.intro, urls);
  addSceneDialogues(scene.hotspots, urls);
  addSceneDialogues(scene.talkOptions, urls);
  warmUrls([...urls]);
}

function addSceneDialogues(
  options: InvestigationScene['hotspots'] | InvestigationScene['talkOptions'],
  urls: Set<string>
): void {
  for (const option of options || []) addLines(option.dialogue, urls);
}

function addIntro(intro: InvestigationScene['intro'] | undefined, urls: Set<string>): void {
  if (!intro) return;
  for (const item of intro) {
    if ('dialogue' in item) {
      addLines(item.dialogue, urls);
      continue;
    }
    addLineUrls(item, urls);
  }
}

export function warmTrialVisuals(script: CaseScript, trialDay: TrialDay): void {
  const urls = new Set<string>(COURTROOM_URLS);
  addTrialVisuals(script, trialDay, urls);
  warmUrls([...urls]);
}

function addTrialVisuals(script: CaseScript, trialDay: TrialDay, urls: Set<string>): void {
  const trial = getActiveTrial(script, trialDay);
  addLines(trial.intro, urls);
  addTestimonies(trial.testimonies, urls);
  addLines(trial.openingPresent?.successDialogue, urls);
  addLines(script.trial.climax.dialogue, urls);
  addLines(script.trial.climax.verdict, urls);
  addLines(script.trial.climax.epilogue?.dialogue, urls);
  addClimaxStages(script.trial.climax.stages, urls);
}

function addTestimonies(testimonies: Testimony[], urls: Set<string>): void {
  for (const testimony of testimonies) addTestimony(testimony, urls);
}

function addClimaxStages(
  stages: CaseScript['trial']['climax']['stages'],
  urls: Set<string>
): void {
  for (const stage of stages ?? []) {
    addLines(stage.successDialogue, urls);
    addPointTarget(stage.pointTarget, urls);
  }
}

// fallow-ignore-next-line complexity
function addTestimony(testimony: Testimony | undefined, urls: Set<string>): void {
  if (!testimony?.statements) return;
  for (const statement of testimony.statements) {
    if (statement.pose) urls.add(`assets/${statement.pose}.webp`);
    addLines(statement.pressText, urls);
    const contradiction = statement.contradiction;
    if (!contradiction) continue;
    addLines(contradiction.successDialogue, urls);
    addPointTarget(contradiction.pointTarget, urls);
    if (contradiction.followUp) {
      addLines(contradiction.followUp.successDialogue, urls);
      addPointTarget(contradiction.followUp.pointTarget, urls);
      for (const step of contradiction.followUp.sequence ?? []) {
        addLines(step.successDialogue, urls);
        addLines(step.choice?.successDialogue, urls);
        addLines(step.choice?.failDialogue, urls);
      }
    }
  }
}

function addPointTarget(target: PointTargetContradiction | undefined, urls: Set<string>): void {
  if (!target) return;
  if (target.imageAsset) urls.add(target.imageAsset);
  addLines(target.successDialogue, urls);
  addPointTarget(target.next, urls);
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
