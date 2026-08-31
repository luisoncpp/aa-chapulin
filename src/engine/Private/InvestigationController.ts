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
import { renderHotspots } from './HotspotLayer.js';
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
  public isFirstTimeDialogue = false;
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
  public startInvestigation(location: LocationId = 'museum', deferIntro = false): void {
    this.state.mode = 'INVESTIGATION';
    this.state.currentLocation = location;
    this.isFirstTimeDialogue = false;
    this.dom.dialogueBoxEl.classList.remove('examine-mode');
    this.dom.gameScreen.classList.remove('examine-mode');
    this.dom.investigationNavEl.classList.remove('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.dom.trialNavEl.classList.add('hidden');
    this.isExamineActive = false;
    this.currentLocationCharPose = null;
    this.dom.hotspotsContainerEl.classList.remove('visible-hotspots');
    this.dom.examineTooltipEl.classList.add('hidden');
    const scene = this.script.investigation[location];
    VisualEffects.clearCourtroomPlate(this.dom);
    this.dom.speakerBoxEl.textContent = scene.speaker || '';
    this.dom.dialogueTextEl.textContent = '';
    this.dom.locationBannerEl.textContent = scene.title;
    this.dom.bgEl.style.backgroundImage = `url('${scene.bg}')`;
    this.midiComposer.playTrack(scene.bgm);

    this.renderHotspots(scene.hotspots || []);
    if (deferIntro) return;
    this.onQueueDialogue(scene.intro);
  }

  public queueCurrentIntro(): void {
    const scene = this.script.investigation[this.state.currentLocation];
    if (!scene) return;
    this.onQueueDialogue(scene.intro);
  }

  // @Section(Hotspot Rendering & Clicks)
  public renderHotspots(hotspots: Hotspot[]): void {
    renderHotspots(hotspots, {
      container: this.dom.hotspotsContainerEl,
      tooltipEl: this.dom.examineTooltipEl,
      isExamineActive: () => this.isExamineActive,
      onClick: (h) => this.handleHotspotClick(h)
    });
  }

  private handleHotspotClick(h: Hotspot): void {
    const isRepeated = this.state.isHotspotExamined(h.id);
    this.soundEngine.playRealization();
    this.dom.examineTooltipEl.classList.add('hidden');
    this.exitExamineMode();
    if (!isRepeated) {
      this.dom.investigationNavEl.classList.add('hidden');
      this.isFirstTimeDialogue = true;
    }
    this.onQueueDialogue(h.dialogue, /*onComplete*/ () => {
      this.isFirstTimeDialogue = false;
      this.state.markHotspotExamined(h.id);
      this.dom.investigationNavEl.classList.remove('hidden');
      if (this.currentLocationCharPose) {
        VisualEffects.setPose(this.dom.charSpriteEl, this.currentLocationCharPose);
      }
      this.checkInvestigationProgress();
    });
  }

  // @Section(Examine Mode & Tooltips)
  public startExamineMode(): void {
    if (this.isFirstTimeDialogue) return;
    this.isExamineActive = true;
    this.dom.hotspotsContainerEl.classList.add('visible-hotspots');
    this.dom.dialogueBoxEl.classList.add('examine-mode');
    this.dom.gameScreen.classList.add('examine-mode');
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
    this.dom.dialogueBoxEl.classList.remove('examine-mode');
    this.dom.gameScreen.classList.remove('examine-mode');
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
    if (this.isFirstTimeDialogue) return;
    const scene = this.script.investigation[this.state.currentLocation];
    if (!scene || !scene.talkOptions) return;

    ModalManager.openTalkModal(this.dom, scene.talkOptions, (opt: TalkOption) => {
      this.onQueueDialogue(opt.dialogue, /*onComplete*/ () => {
        this.checkInvestigationProgress();
      });
    });
  }

  public openMoveMenu(): void {
    if (this.isFirstTimeDialogue) return;
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
    if (!trialBtn) return;
    trialBtn.classList.toggle('disabled', !isReady);
    trialBtn.classList.toggle('pulse-glow', isReady);
    trialBtn.disabled = !isReady;
    if (isReady) {
      VisualEffects.showNotification(this.dom.gameNotificationEl, i18n.t.notifTrialReady);
    }
  }

  public resetTrialLaunchButton(): void {
    if (!this.dom.btnInvTrial) return;
    this.dom.btnInvTrial.classList.add('disabled');
    this.dom.btnInvTrial.classList.remove('pulse-glow');
    this.dom.btnInvTrial.disabled = true;
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
