/**
 * Investigation Scene & Examine Mode Controller
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, Hotspot, LocationId, TalkOption } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { VisualEffects } from './VisualEffects.js';

export class InvestigationController {
  public isExamineActive = false;
  public currentLocationCharPose: string | null = null;

  constructor(
    private readonly dom: DomElements,
    private readonly state: GameStateManager,
    private readonly script: CaseScript,
    private readonly soundEngine: SoundEngine,
    private readonly midiComposer: MidiMusicComposer,
    private readonly onQueueDialogue: (dialogue: any[], onComplete?: () => void) => void
  ) {}

  public startInvestigation(location: LocationId = 'museum'): void {
    this.state.mode = 'INVESTIGATION';
    this.state.currentLocation = location;
    this.dom.investigationNavEl.classList.remove('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.dom.trialNavEl.classList.add('hidden');
    this.isExamineActive = false;
    this.dom.hotspotsContainerEl.classList.remove('visible-hotspots');
    this.dom.examineTooltipEl.classList.add('hidden');

    const scene = this.script.investigation[location];
    this.dom.locationBannerEl.textContent = scene.title;
    this.dom.bgEl.style.backgroundImage = `url('${scene.bg}')`;
    this.midiComposer.playTrack(scene.bgm);

    this.renderHotspots(scene.hotspots || []);
    this.onQueueDialogue(scene.intro);
  }

  public renderHotspots(hotspots: Hotspot[]): void {
    this.dom.hotspotsContainerEl.innerHTML = '';
    hotspots.forEach((h) => {
      const spot = document.createElement('div');
      spot.className = 'hotspot-area';
      spot.style.left = `${h.x}%`;
      spot.style.top = `${h.y}%`;
      spot.style.width = `${h.w}%`;
      spot.style.height = `${h.h}%`;
      spot.title = h.label;

      spot.addEventListener('mouseenter', () => {
        if (!this.isExamineActive) return;
        this.dom.examineTooltipEl.textContent = `🔍 ${h.label}`;
        this.dom.examineTooltipEl.classList.remove('hidden');
      });
      spot.addEventListener('mouseleave', () => {
        this.dom.examineTooltipEl.classList.add('hidden');
      });
      spot.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleHotspotClick(h);
      });
      this.dom.hotspotsContainerEl.appendChild(spot);
    });
  }

  private handleHotspotClick(h: Hotspot): void {
    this.soundEngine.playRealization();
    this.dom.examineTooltipEl.classList.add('hidden');
    this.exitExamineMode();
    this.onQueueDialogue(h.dialogue, /*onComplete*/ () => {
      this.checkInvestigationProgress();
    });
  }

  public startExamineMode(): void {
    this.isExamineActive = true;
    this.dom.hotspotsContainerEl.classList.add('visible-hotspots');
    this.dom.investigationNavEl.classList.add('hidden');
    this.dom.examineNavEl.classList.remove('hidden');
    VisualEffects.hideCharacter(this.dom.charSpriteEl);

    this.dom.speakerBoxEl.textContent = 'MODO EXAMINAR';
    this.onQueueDialogue([
      { speaker: 'MODO EXAMINAR', text: '🔍 Mueve el cursor y haz clic sobre los objetos para investigar.' }
    ]);
  }

  public exitExamineMode(): void {
    this.isExamineActive = false;
    this.dom.hotspotsContainerEl.classList.remove('visible-hotspots');
    this.dom.examineTooltipEl.classList.add('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.dom.investigationNavEl.classList.remove('hidden');

    if (this.currentLocationCharPose) {
      VisualEffects.setPose(this.dom.charSpriteEl, this.currentLocationCharPose as any);
    }
  }

  public openTalkMenu(): void {
    const scene = this.script.investigation[this.state.currentLocation];
    if (!scene || !scene.talkOptions) return;

    ModalManager.openTalkModal(this.dom, scene.talkOptions, (opt: TalkOption) => {
      this.onQueueDialogue(opt.dialogue, /*onComplete*/ () => {
        this.checkInvestigationProgress();
      });
    });
  }

  public toggleLocation(): void {
    const nextLoc: LocationId = this.state.currentLocation === 'museum' ? 'detention' : 'museum';
    this.startInvestigation(nextLoc);
  }

  public checkInvestigationProgress(): void {
    const isReady = this.state.checkTrialReadiness();
    const trialBtn = document.getElementById('btn-inv-trial');
    if (!isReady || !trialBtn) return;
    trialBtn.classList.remove('disabled');
    trialBtn.classList.add('pulse-glow');
    VisualEffects.showNotification(this.dom.gameNotificationEl, '¡Has reunido todas las pruebas! ¡Puedes iniciar el Juicio!');
  }
}
