// @Architecture(descriptionShort="Renders cut-in overlays, screen shakes, flashes, and confetti", type="view", icon="layers")
/**
 * Visual Special Effects, Overlays, and Particle Synthesizer
 * Operates on DOM nodes for [[./GameEngine.ts]].
 */

import type { CutinName, DialogueLine, FurnitureType, PoseName } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { applyStageFrame, resolveStageFrame } from './StageLayout.js';

const FURNITURE_ASSETS: Record<'podium' | 'bench', string> = {
  podium: 'assets/court_podium.png',
  bench: 'assets/court_bench.png'
};

export class VisualEffects {
  // @Section(Character Pose Staging)
  public static setPose(charSpriteEl: HTMLImageElement, poseName: PoseName): void {
    if (!poseName) return;
    charSpriteEl.src = `assets/${poseName}.png`;
    charSpriteEl.classList.remove('hidden');
  }

  public static hideCharacter(charSpriteEl: HTMLImageElement): void {
    charSpriteEl.classList.add('hidden');
  }

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

  /**
   * Resolves furniture and the matching stage frame together: sprite scale and
   * surface contact are one composition decision, never two independent ones.
   */
  public static updateStagingForLine(
    dom: DomElements,
    line: DialogueLine,
    isTrialMode: boolean
  ): void {
    const furniture = line.furniture ?? VisualEffects.inferFurniture(line, isTrialMode, dom.bgEl.style.backgroundImage);
    VisualEffects.setFurniture(dom.courtFurnitureSpriteEl, dom.courtFurnitureContainerEl, furniture);
    applyStageFrame(dom.gameScreen, resolveStageFrame(furniture, line.pose ?? null));
  }

  private static inferFurniture(line: DialogueLine, isTrialMode: boolean, currentBg: string): FurnitureType {
    if (!isTrialMode) return 'none';
    const bg = line.bg ?? currentBg ?? '';
    if (bg.includes('bg_witness')) return 'podium';
    const isDefense = line.speaker === 'DEFENSA' || line.speaker === 'CHAPULIN' || line.speaker === 'CHAPULÍN';
    if (isDefense && line.pose) return 'bench';
    if (bg.includes('bg_defense')) return 'bench';
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
    dom.cutinImgEl.src = `assets/${cutinName}.png`;
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
