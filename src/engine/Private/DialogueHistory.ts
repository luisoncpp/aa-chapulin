// @Architecture(descriptionShort="Capped in-memory backlog of displayed dialogue lines", type="service", icon="layers")
/**
 * Session dialogue backlog for the message history modal.
 * Fed from the single render choke point in [[./DialogueFlow.ts]] and rendered by
 * [[./ModalManager.ts]]. Session-only: never serialized by [[./EnginePersistence.ts]].
 */

export interface HistoryEntry {
  speaker: string;
  text: string;
}

const MAX_ENTRIES = 150;

export class DialogueHistory {
  private log: HistoryEntry[] = [];

  /**
   * Cross-examination statements are re-rendered whenever the player walks the
   * testimony back and forth, so an identical consecutive line is a re-view of
   * the same beat, not a new one.
   */
  public record(entry: { speaker?: string; text?: string }): void {
    const text = entry.text ?? '';
    if (!text) return;
    const speaker = entry.speaker ?? '';
    const last = this.log[this.log.length - 1];
    if (last && last.speaker === speaker && last.text === text) return;
    this.log.push({ speaker, text });
    if (this.log.length > MAX_ENTRIES) this.log.shift();
  }

  public entries(): readonly HistoryEntry[] {
    return [...this.log];
  }

  public clear(): void {
    this.log = [];
  }
}
