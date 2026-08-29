// @Architecture(descriptionShort="Controls crime scene hotspots, examine mode, and talk menu", type="controller", icon="panel")
/**
 * Investigation Scene & Examine Mode Controller
 * Coordinates with [[./ModalManager.ts]] and [[./VisualEffects.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, Hotspot, LocationId, PoseName, TalkOption } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { VisualEffects } from './VisualEffects.js';

export interface InvestigationControllerDeps {
  dom: DomElements;
  state: GameStateManager;
  script: CaseScript;
  soundEngine: SoundEngine;
  midiComposer: MidiMusicComposer;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

export class InvestigationController {
  public isExamineActive = false;
  public currentLocationCharPose: PoseName = null;
  private readonly dom: DomElements;
  private readonly state: GameStateManager;
  private script: CaseScript;
  private readonly soundEngine: SoundEngine;
  private readonly midiComposer: MidiMusicComposer;
  private readonly onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;

  constructor(deps: InvestigationControllerDeps) {
    this.dom = deps.dom;
    this.state = deps.state;
    this.script = deps.script;
    this.soundEngine = deps.soundEngine;
    this.midiComposer = deps.midiComposer;
    this.onQueueDialogue = deps.onQueueDialogue;
  }

  // @Section(Investigation Scene Transition)
  public startInvestigation(location: LocationId = 'museum'): void {
    this.state.mode = 'INVESTIGATION';
    this.state.currentLocation = location;
    this.dom.investigationNavEl.classList.remove('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.dom.trialNavEl.classList.add('hidden');
    this.isExamineActive = false;
    this.dom.hotspotsContainerEl.classList.remove('visible-hotspots');
    this.dom.examineTooltipEl.classList.add('hidden');
    VisualEffects.hideFurniture(this.dom.courtFurnitureContainerEl);

    const scene = this.script.investigation[location];
    this.dom.locationBannerEl.textContent = scene.title;
    this.dom.bgEl.style.backgroundImage = `url('${scene.bg}')`;
    this.midiComposer.playTrack(scene.bgm);

    this.renderHotspots(scene.hotspots || []);
    this.onQueueDialogue(scene.intro);
  }

  // @Section(Hotspot Rendering & Clicks)
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

  // @Section(Examine Mode & Tooltips)
  public startExamineMode(): void {
    this.isExamineActive = true;
    this.dom.hotspotsContainerEl.classList.add('visible-hotspots');
    this.dom.investigationNavEl.classList.add('hidden');
    this.dom.examineNavEl.classList.remove('hidden');
    VisualEffects.hideCharacter(this.dom.charSpriteEl);
    VisualEffects.hideFurniture(this.dom.courtFurnitureContainerEl);

    this.dom.speakerBoxEl.textContent = i18n.t.examineTitle;
    this.onQueueDialogue([
      { speaker: i18n.t.examineTitle, text: i18n.t.examinePrompt }
    ]);
  }

  public exitExamineMode(): void {
    this.isExamineActive = false;
    this.dom.hotspotsContainerEl.classList.remove('visible-hotspots');
    this.dom.examineTooltipEl.classList.add('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.dom.investigationNavEl.classList.remove('hidden');
    VisualEffects.hideFurniture(this.dom.courtFurnitureContainerEl);

    if (this.currentLocationCharPose) {
      VisualEffects.setPose(this.dom.charSpriteEl, this.currentLocationCharPose);
    }
  }

  // @Section(Talk Dialog & Readiness)
  public openTalkMenu(): void {
    const scene = this.script.investigation[this.state.currentLocation];
    if (!scene || !scene.talkOptions) return;

    ModalManager.openTalkModal(this.dom, scene.talkOptions, (opt: TalkOption) => {
      this.onQueueDialogue(opt.dialogue, /*onComplete*/ () => {
        this.checkInvestigationProgress();
      });
    });
  }

  public openMoveMenu(): void {
    const destinations = this.state.unlockedLocations
      .map((locId) => {
        const scene = this.script.investigation[locId];
        if (!scene) return null;
        return {
          id: locId,
          name: scene.name ?? scene.title,
          isCurrent: locId === this.state.currentLocation
        };
      })
      .filter((d): d is NonNullable<typeof d> => d !== null);

    ModalManager.openMoveModal(this.dom, destinations, (locId: LocationId) => {
      this.startInvestigation(locId);
    });
  }

  public checkInvestigationProgress(): void {
    const isReady = this.state.checkTrialReadiness();
    const trialBtn = this.dom.btnInvTrial;
    if (!isReady || !trialBtn) return;
    trialBtn.classList.remove('disabled');
    trialBtn.classList.add('pulse-glow');
    VisualEffects.showNotification(this.dom.gameNotificationEl, i18n.t.notifTrialReady);
  }

  public setScript(script: CaseScript): void {
    this.script = script;
    if (this.state.mode === 'INVESTIGATION') {
      const scene = this.script.investigation[this.state.currentLocation];
      if (scene) {
        this.dom.locationBannerEl.textContent = scene.title;
        this.renderHotspots(scene.hotspots || []);
      }
    }
  }
}
