// @Architecture(descriptionShort="Renders cut-in overlays, screen shakes, flashes, and confetti", type="view", icon="layers")
/**
 * Visual Special Effects, Overlays, and Particle Synthesizer
 * Operates on DOM nodes for [[./GameEngine.ts]].
 */

import type { CutinName, DialogueLine, FurnitureType, PoseName } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { applyStageFrame, resolveStageFrame } from './StageLayout.js';
import { inferTrialBackground, resolveEffectivePose as resolveTrialSpeakerPose } from './TrialSpeakerStaging.js';

const FURNITURE_ASSETS: Record<Exclude<FurnitureType, 'none'>, string> = {
  podium: 'assets/court_podium.webp',
  bench: 'assets/court_bench.webp',
  'judge-bench': 'assets/court_judge_bench.webp'
};

export class VisualEffects {
  // @Section(Character Pose Staging)
  public static setPose(charSpriteEl: HTMLImageElement, poseName: PoseName): void {
    if (!poseName) return;
    charSpriteEl.src = `assets/${poseName}.webp`;
    charSpriteEl.classList.remove('hidden');
  }

  public static hideCharacter(charSpriteEl: HTMLImageElement): void { charSpriteEl.classList.add('hidden'); }

  // @Section(Courtroom Furniture Staging)
  public static setFurniture(
    furnitureSpriteEl: HTMLImageElement,
    furnitureContainerEl: HTMLElement,
    type: FurnitureType
  ): void {
    if (!type || type === 'none') {
      VisualEffects.hideFurniture(furnitureContainerEl);
      return;
    }
    furnitureSpriteEl.src = FURNITURE_ASSETS[type];
    furnitureContainerEl.dataset.furniture = type;
    furnitureContainerEl.classList.remove('hidden');
  }

  public static hideFurniture(furnitureContainerEl: HTMLElement): void {
    furnitureContainerEl.classList.add('hidden');
    furnitureContainerEl.dataset.furniture = 'none';
  }

  public static clearCourtroomPlate(dom: DomElements): void {
    VisualEffects.hideCharacter(dom.charSpriteEl);
    VisualEffects.hideFurniture(dom.courtFurnitureContainerEl);
    applyStageFrame(dom.gameScreen, 'plain');
  }

  public static inferTrialBackground(speaker?: string): string | null {
    return inferTrialBackground(speaker);
  }

  public static resolveBackground(line: DialogueLine, isTrialMode: boolean): string | null {
    if (line.bg) return line.bg;
    if (!isTrialMode) return null;
    return VisualEffects.inferTrialBackground(line.speaker);
  }

  public static resolveEffectivePose(line: DialogueLine, isTrialMode: boolean): PoseName | null {
    return resolveTrialSpeakerPose(line, /*isTrialMode=*/ isTrialMode);
  }

  public static updateStagingForLine(
    dom: DomElements,
    line: DialogueLine,
    isTrialMode: boolean
  ): void {
    const resolvedBg = VisualEffects.resolveBackground(line, isTrialMode);
    if (resolvedBg) {
      dom.bgEl.style.backgroundImage = `url('${resolvedBg}')`;
    }
    const bgHint = resolvedBg ?? dom.bgEl.style.backgroundImage;
    const effectivePose = VisualEffects.resolveEffectivePose(line, isTrialMode);
    const furniture = line.furniture ?? VisualEffects.inferFurniture(isTrialMode, bgHint);
    VisualEffects.setFurniture(dom.courtFurnitureSpriteEl, dom.courtFurnitureContainerEl, furniture);
    applyStageFrame(
      dom.gameScreen,
      resolveStageFrame(furniture, effectivePose),
      /*pose=*/ effectivePose
    );
  }

  // fallow-ignore-next-line complexity
  public static inferFurniture(isTrialMode: boolean, bg: string): FurnitureType {
    if (!isTrialMode) return 'none';
    if (bg.includes('bg_witness')) return 'podium';
    if (bg.includes('bg_defense') || bg.includes('bg_courtroom')) return 'bench';
    if (bg.includes('bg_judge')) return 'judge-bench';
    return 'none';
  }

  // @Section(Screen Shakes & Flashes)
  public static shakeScreen(gameScreen: HTMLElement, durationMs = 350): void {
    gameScreen.classList.add('screen-shake');
    setTimeout(/*removeShake*/ () => {
      gameScreen.classList.remove('screen-shake');
    }, /*delayInMs=*/ durationMs);
  }

  public static flashScreen(flashEl: HTMLElement): void {
    flashEl.classList.remove('hidden');
    flashEl.style.opacity = '0.9';
    setTimeout(/*fadeFlash*/ () => {
      flashEl.style.opacity = '0';
      setTimeout(/*hideFlash*/ () => {
        flashEl.classList.add('hidden');
      }, /*delayInMs=*/ 200);
    }, /*delayInMs=*/ 120);
  }

  // @Section(Dramatic Cut-in Overlays)
  public static showCutin(dom: DomElements, cutinName: CutinName): void {
    dom.cutinImgEl.src = `assets/${cutinName}.webp`;
    dom.cutinOverlayEl.classList.remove('hidden');
    dom.cutinOverlayEl.classList.add('cutin-animate');
    VisualEffects.shakeScreen(dom.gameScreen, /*durationMs=*/ 400);
    VisualEffects.flashScreen(dom.flashEl);

    setTimeout(/*hideCutin*/ () => {
      dom.cutinOverlayEl.classList.add('hidden');
      dom.cutinOverlayEl.classList.remove('cutin-animate');
    }, /*delayInMs=*/ 1100);
  }

  // @Section(Confetti Celebration)
  public static triggerConfetti(containerEl: HTMLElement): void {
    containerEl.classList.remove('hidden');
    const colors = ['#FFD700', '#FF0000', '#00E5FF', '#76FF03', '#FFFFFF'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 2.5}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      containerEl.appendChild(piece);
    }
  }

  public static clearConfetti(containerEl: HTMLElement): void {
    containerEl.replaceChildren();
    containerEl.classList.add('hidden');
  }
  public static showNotification(notifEl: HTMLElement, msg: string): void {
    notifEl.textContent = msg;
    notifEl.classList.remove('hidden');
    notifEl.classList.add('notif-slide');
    setTimeout(/*hideNotif*/ () => {
      notifEl.classList.add('hidden');
      notifEl.classList.remove('notif-slide');
    }, /*delayInMs=*/ 2800);
  }
}
