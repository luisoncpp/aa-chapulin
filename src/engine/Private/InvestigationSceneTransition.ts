// @Architecture(descriptionShort="Manages scene presentation staging and intro dialogue resolution", type="util", icon="panel")
/**
 * Investigation Scene Transition & Intro Resolution
 * Helper functions for [[./InvestigationController.ts]].
 */

import type { MidiMusicComposer } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type {
  DialogueLine,
  GameFlags,
  InvestigationScene,
  LocationId,
  PoseName,
  SceneIntro
} from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { VisualEffects } from './VisualEffects.js';
import { prepareSceneVisuals } from './VisualWarmup.js';

export interface ResolvedIntro {
  id: string;
  dialogue: DialogueLine[];
}

export function setupScenePresentation(
  dom: DomElements,
  scene: InvestigationScene,
  midiComposer: MidiMusicComposer
): void {
  prepareSceneVisuals(scene);
  VisualEffects.clearCourtroomPlate(dom);
  dom.dialogueBoxEl.classList.remove('examine-mode');
  dom.gameScreen.classList.remove('examine-mode');
  dom.investigationNavEl.classList.remove('hidden');
  dom.examineNavEl.classList.add('hidden');
  dom.trialNavEl.classList.add('hidden');
  dom.hotspotsContainerEl.classList.remove('visible-hotspots');
  dom.examineTooltipEl.classList.add('hidden');
  dom.speakerBoxEl.textContent = '';
  dom.dialogueTextEl.textContent = '';
  dom.dialogueArrowEl.classList.add('hidden');
  dom.locationBannerEl.textContent = scene.title;
  dom.bgEl.style.backgroundImage = `url('${scene.bg}')`;
  midiComposer.playTrack(scene.bgm);
}

// fallow-ignore-next-line complexity
export function resolveSceneIdlePose(
  scene?: InvestigationScene,
  state?: GameStateManager
): PoseName | null {
  if (!scene) return null;
  if (state && isConditionalIntroList(scene.intro)) {
    const conditionalPose = resolveConditionalIdlePose(scene.intro, state.flags);
    if (conditionalPose !== undefined) return conditionalPose;
  }
  return scene.idlePose !== undefined ? scene.idlePose : inferSceneDefaultPose(scene);
}

export function applySceneIdlePose(dom: DomElements, idlePose: PoseName | null): void {
  if (idlePose) {
    VisualEffects.setPose(dom.charSpriteEl, idlePose);
    return;
  }
  VisualEffects.hideCharacter(dom.charSpriteEl);
}

// fallow-ignore-next-line complexity
function resolveConditionalIdlePose(
  intros: SceneIntro[],
  flags: GameFlags
): PoseName | undefined {
  for (let i = intros.length - 1; i >= 0; i--) {
    const entry = intros[i];
    if (!entry.condition || entry.condition(flags)) {
      if (entry.idlePose !== undefined) return entry.idlePose;
      break;
    }
  }
  return undefined;
}

// fallow-ignore-next-line complexity
function inferSceneDefaultPose(scene?: InvestigationScene): PoseName | null {
  if (!scene?.intro) return null;
  const lines = extractIntroDialogueLines(scene.intro);
  for (let i = lines.length - 1; i >= 0; i--) {
    const pose = lines[i]?.pose;
    if (pose) return pose;
  }
  return null;
}

// fallow-ignore-next-line complexity
export function resolveSceneIntro(
  scene: InvestigationScene,
  state: GameStateManager
): ResolvedIntro | null {
  if (!scene?.intro) return null;
  if (isConditionalIntroList(scene.intro)) {
    return resolveConditionalIntro(scene.intro, state);
  }
  const defaultId = `${state.caseId}_d${state.trialDay}_${state.currentLocation}`;
  if (state.isIntroPlayed(defaultId)) return null;
  return { id: defaultId, dialogue: scene.intro };
}

export function buildMoveDestinations(
  unlockedLocations: LocationId[],
  investigation: Record<string, InvestigationScene>,
  currentLocation: LocationId
) {
  return unlockedLocations
    .map((locId) => {
      const scene = investigation[locId];
      if (!scene) return null;
      return {
        id: locId,
        name: scene.name ?? scene.title,
        isCurrent: locId === currentLocation
      };
    })
    .filter((d): d is NonNullable<typeof d> => d !== null);
}

function isConditionalIntroList(intro: InvestigationScene['intro']): intro is SceneIntro[] {
  if (!Array.isArray(intro) || intro.length === 0) return false;
  return typeof intro[0] === 'object' && 'dialogue' in intro[0];
}

// fallow-ignore-next-line complexity
function resolveConditionalIntro(
  intros: SceneIntro[],
  state: GameStateManager
): ResolvedIntro | null {
  for (const entry of intros) {
    if (entry.condition && !entry.condition(state.flags)) continue;
    if (!state.isIntroPlayed(entry.id)) {
      return { id: entry.id, dialogue: entry.dialogue };
    }
  }
  return null;
}

// fallow-ignore-next-line complexity
function extractIntroDialogueLines(intro: InvestigationScene['intro']): DialogueLine[] {
  if (!Array.isArray(intro) || intro.length === 0) return [];
  if (isConditionalIntroList(intro)) {
    return intro[0]?.dialogue ?? [];
  }
  return intro as DialogueLine[];
}
