// @Architecture(descriptionShort="Applies dialogue grants and queues Court Record notices")
import { i18n } from '../../i18n/index.js';
import type { DialogueLine, EvidenceId, LocationId, ProfileId } from '../../types/index.js';
import type { DialogueFlowDeps } from './DialogueFlow.js';
import type { RecordNoticeQueue } from './RecordNoticeQueue.js';

export class DialogueProgress {
  constructor(private readonly deps: DialogueFlowDeps, private readonly notices: RecordNoticeQueue) {}
  public apply(line: DialogueLine): void {
    this.grantEvidenceIfPresent(line.addEvidence);
    this.updateEvidenceIfPresent(line.updateEvidence);
    this.grantProfileIfPresent(line.addProfile);
    this.updateProfileIfPresent(line.updateProfile);
    this.unlockLocationIfPresent(line.unlockLocation);
    this.setProgressFlagIfPresent(line.setFlag);
  }

  private grantEvidenceIfPresent(evidenceId?: EvidenceId): void {
    if (!evidenceId) return;
    const added = this.deps.state.addEvidence(evidenceId);
    if (!added) return;
    const item = this.deps.state.allEvidence[evidenceId];
    this.notices.push({ iconSrc: item.icon, message: i18n.t.notifEvidenceAdded(item.name) });
  }

  // fallow-ignore-next-line complexity
  private updateEvidenceIfPresent(evidenceId?: EvidenceId): void {
    if (!evidenceId) return;
    const alreadyHeld = this.deps.state.hasEvidence(evidenceId);
    if (!alreadyHeld) this.grantEvidenceIfPresent(evidenceId);
    const updated = this.deps.state.updateEvidence(evidenceId);
    if (!alreadyHeld || !updated) return;
    const item = this.deps.state.allEvidence[evidenceId];
    this.notices.push({ iconSrc: item.icon, message: i18n.t.notifEvidenceUpdated(item.name) });
  }

  private grantProfileIfPresent(profileId?: ProfileId): void {
    if (!profileId) return;
    if (!this.deps.state.addProfile(profileId)) return;
    const item = this.deps.state.profiles.catalog[profileId];
    if (item) this.notices.push({ iconSrc: item.icon, message: i18n.t.notifProfileAdded(item.name) });
  }

  // fallow-ignore-next-line complexity
  private updateProfileIfPresent(profileId?: ProfileId): void {
    if (!profileId) return;
    const alreadyHeld = this.deps.state.hasProfile(profileId);
    if (!alreadyHeld) this.grantProfileIfPresent(profileId);
    const updated = this.deps.state.updateProfile(profileId);
    if (!alreadyHeld || !updated) return;
    const item = this.deps.state.profiles.catalog[profileId];
    if (item) this.notices.push({ iconSrc: item.icon, message: i18n.t.notifProfileUpdated(item.name) });
  }

  // fallow-ignore-next-line complexity
  private unlockLocationIfPresent(locationId?: LocationId): void {
    if (!locationId) return;
    const unlocked = this.deps.state.unlockLocation(locationId);
    if (!unlocked) return;
    const scene = this.deps.getScript().investigation[locationId];
    const locName = scene?.name ?? scene?.title ?? locationId;
    this.notices.push({ iconSrc: null, message: i18n.t.notifLocationUnlocked(locName) });
  }

  private setProgressFlagIfPresent(flag?: string): void {
    if (flag) this.deps.state.flags[flag] = true;
  }

}
