// @Architecture(descriptionShort="Isolated demo save slots with per-slot corruption recovery")
import type { DeductionSequence, DeductionSnapshot } from './Contract.js';
import { validSnapshot } from './Validation.js';
const KEY = 'ace_attorney_deduction_demo_slots_v1';
interface Slot { timestamp: number; snapshot: DeductionSnapshot }

export class DeductionSaves {
  constructor(private readonly sequence: DeductionSequence) {}
  public read(): (Slot | null)[] {
    try {
      const envelope: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]');
      const slots = Array.isArray(envelope) ? envelope : [];
      return Array.from({ length: 8 }, (_, i) => {
        const slot = slots[i];
        return slot && Number.isFinite(slot.timestamp) && validSnapshot(slot.snapshot, this.sequence) ? slot as Slot : null;
      });
    } catch { return Array.from({ length: 8 }, () => null); }
  }
  public write(index: number, snapshot: DeductionSnapshot): boolean {
    if (!Number.isInteger(index) || index < 0 || index > 7 || !validSnapshot(snapshot, this.sequence)) return false;
    try {
      const slots = this.read(); slots[index] = { timestamp: Date.now(), snapshot };
      localStorage.setItem(KEY, JSON.stringify(slots)); return true;
    } catch { return false; }
  }
}
