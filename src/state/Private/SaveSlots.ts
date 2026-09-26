// @Architecture(descriptionShort="Stores eight save slots and adopts the legacy single save", type="service", icon="database")
/**
 * Eight-slot browser envelope.
 * The legacy single-save key is copied into slot 0 on first read.
 */

import { isValidSaveData, migrateSave, type SaveData } from './SaveSchema.js';

// fallow-ignore-next-line unused-export
export const SAVE_STORAGE_KEY = 'ace_attorney_save_data';
// fallow-ignore-next-line unused-export
export const SAVE_SLOTS_KEY = 'ace_attorney_save_slots';
const SLOT_COUNT = 8;

export type SlotList = (SaveData | null)[];

export function readSlotList(storage: Storage): SlotList | null {
  try {
    const raw = storage.getItem(SAVE_SLOTS_KEY);
    if (raw != null) return parseEnvelope(raw);
    return adoptLegacy(storage);
  } catch {
    return null;
  }
}

export function saveToSlot(index: number, data: SaveData, storage: Storage): boolean {
  if (!inRange(index)) return false;
  try {
    const slots = readSlotList(storage);
    if (!slots) return false;
    slots[index] = data;
    return persist(storage, slots);
  } catch {
    return false;
  }
}

export function loadSlot(index: number, storage: Storage): SaveData | null {
  if (!inRange(index)) return null;
  const slots = readSlotList(storage);
  return slots ? slots[index] : null;
}

export function newestSlot(slots: SlotList): SaveData | null {
  return slots.reduce<SaveData | null>((best, slot) => {
    if (!slot) return best;
    if (!best || slot.timestamp > best.timestamp) return slot;
    return best;
  }, null);
}

export function deleteSlot(index: number, storage: Storage): boolean {
  if (!inRange(index)) return false;
  try {
    const slots = readSlotList(storage);
    if (!slots) return false;
    slots[index] = null;
    return persist(storage, slots);
  } catch {
    return false;
  }
}

export function clearSlots(storage: Storage): void {
  try {
    storage.removeItem(SAVE_SLOTS_KEY);
  } catch {
    // Ignored
  }
  try {
    storage.removeItem(SAVE_STORAGE_KEY);
  } catch {
    // Ignored
  }
}

function inRange(index: number): boolean {
  return Number.isInteger(index) && index >= 0 && index < SLOT_COUNT;
}

function blankSlots(): SlotList {
  return Array.from({ length: SLOT_COUNT }, () => null);
}

function persist(storage: Storage, slots: SlotList): boolean {
  try {
    storage.setItem(SAVE_SLOTS_KEY, JSON.stringify({ slots }));
    return true;
  } catch {
    return false;
  }
}

function parseEnvelope(raw: string): SlotList {
  try {
    const parsed = JSON.parse(raw) as { slots?: unknown };
    return normalize(parsed?.slots);
  } catch {
    return blankSlots();
  }
}

function normalize(raw: unknown): SlotList {
  const slots = blankSlots();
  if (!Array.isArray(raw)) return slots;
  for (let index = 0; index < SLOT_COUNT; index++) {
    slots[index] = accept(raw[index]);
  }
  return slots;
}

function accept(entry: unknown): SaveData | null {
  if (!isValidSaveData(entry)) return null;
  return migrateSave(entry);
}

function adoptLegacy(storage: Storage): SlotList {
  const slots = blankSlots();
  const raw = storage.getItem(SAVE_STORAGE_KEY);
  if (!raw) return slots;
  const migrated = accept(parseJson(raw));
  if (!migrated) return slots;
  slots[0] = migrated;
  if (!persist(storage, slots)) return slots;
  dropLegacy(storage);
  return slots;
}

function dropLegacy(storage: Storage): void {
  try {
    storage.removeItem(SAVE_STORAGE_KEY);
  } catch {
    // The envelope is already stored. A leftover legacy key is ignored once that key exists.
  }
}

function parseJson(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
