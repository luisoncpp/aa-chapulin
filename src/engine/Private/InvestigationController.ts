// @Architecture(descriptionShort="Controls crime scene hotspots, examine mode, and talk menu", type="controller", icon="panel")
import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, Hotspot, LocationId, PoseName, TalkOption } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { renderHotspots } from './HotspotLayer.js';
import {
  applySceneIdlePose,
  buildMoveDestinations,
  resolveSceneIdlePose,
  resolveSceneIntro,
  setupScenePresentation
} from './InvestigationSceneTransition.js';
import { resetTrialButton, updateTrialButtonProgress } from './InvestigationTrialButton.js';
import { ModalManager } from './ModalManager.js';
import { notifyNewlyUnlocked, visibleTalkOptions } from './TalkOptionUnlock.js';
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

  public restoreSceneIdlePose(): void {
    const scene = this.script.investigation[this.state.currentLocation];
    this.currentLocationCharPose = resolveSceneIdlePose(scene, this.state);
    applySceneIdlePose(this.dom, this.currentLocationCharPose);
  }

  // @Section(Investigation Scene Transition)
  // fallow-ignore-next-line complexity
  public startInvestigation(location: LocationId = 'museum', deferIntro = false): void {
    this.state.mode = 'INVESTIGATION';
    this.state.currentLocation = location;
    this.isFirstTimeDialogue = false;
    this.isExamineActive = false;
    const scene = this.script.investigation[location];
    setupScenePresentation(this.dom, scene, this.midiComposer);
    this.renderHotspots(scene?.hotspots || []);

    const intro = resolveSceneIntro(scene, this.state);
    if (intro) {
      this.currentLocationCharPose = null;
      if (deferIntro) return;
      this.state.markIntroPlayed(intro.id);
      this.onQueueDialogue(intro.dialogue, /*onComplete*/ () => {
        this.restoreSceneIdlePose();
      });
      return;
    }

    this.restoreSceneIdlePose();
  }

  public queueCurrentIntro(): void {
    const scene = this.script.investigation[this.state.currentLocation];
    if (!scene) return;
    const intro = resolveSceneIntro(scene, this.state);
    if (!intro) return;
    this.state.markIntroPlayed(intro.id);
    this.onQueueDialogue(intro.dialogue, /*onComplete*/ () => {
      this.restoreSceneIdlePose();
    });
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
    this.soundEngine.playClick();
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
      this.restoreSceneIdlePose();
      this.notifyUnlockedTalk();
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
    this.restoreSceneIdlePose();
  }

  // @Section(Talk Dialog & Readiness)
  public openTalkMenu(): void {
    if (this.isFirstTimeDialogue) return;
    const scene = this.script.investigation[this.state.currentLocation];
    if (!scene?.talkOptions) return;

    const options = visibleTalkOptions(scene.talkOptions, this.state);
    ModalManager.openTalkModal(this.dom, options, (opt: TalkOption) => {
      this.state.markTalkCompleted(opt.id);
      this.onQueueDialogue(opt.dialogue, /*onComplete*/ () => {
        this.restoreSceneIdlePose();
        this.notifyUnlockedTalk();
        this.checkInvestigationProgress();
      });
    });
  }

  private notifyUnlockedTalk(): void {
    notifyNewlyUnlocked(this.script.investigation[this.state.currentLocation]?.talkOptions, {
      dom: this.dom, state: this.state, soundEngine: this.soundEngine
    });
  }

  public openMoveMenu(): void {
    if (this.isFirstTimeDialogue) return;
    const destinations = buildMoveDestinations(
      this.state.unlockedLocations, this.script.investigation, this.state.currentLocation
    );
    ModalManager.openMoveModal(this.dom, destinations, (locId: LocationId) => this.startInvestigation(locId));
  }

  public checkInvestigationProgress(): void {
    updateTrialButtonProgress(this.dom.btnInvTrial, this.state.checkTrialReadiness(), this.dom.gameNotificationEl);
  }

  public resetTrialLaunchButton(): void {
    resetTrialButton(this.dom.btnInvTrial);
  }

  public setScript(script: CaseScript): void {
    this.script = script;
    if (this.state.mode !== 'INVESTIGATION') return;
    const scene = this.script.investigation[this.state.currentLocation];
    if (scene) {
      this.dom.locationBannerEl.textContent = scene.title;
      this.renderHotspots(scene.hotspots || []);
    }
  }
}
