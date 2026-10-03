// @Architecture(descriptionShort="Validates dialogue checkpoints before restoring browser saves")
import type { DialogueContinuation, DialogueLine, DialogueSnapshot, PointTargetContradiction } from '../../types/index.js';

const simpleKinds = new Set(['none', 'intro', 'courtroom', 'statement', 'contradiction', 'advance',
  'sequence', 'present', 'choice', 'verdict', 'celebrate', 'complete', 'restart', 'investigation-intro', 'investigation-talk']);

function isLine(value: unknown): value is DialogueLine {
  return Boolean(value && typeof value === 'object' && typeof (value as DialogueLine).text === 'string');
}

function isLines(value: unknown): value is DialogueLine[] {
  return Array.isArray(value) && value.every(isLine);
}

function isPoint(value: unknown): value is PointTargetContradiction {
  if (!value || typeof value !== 'object') return false;
  const point = value as PointTargetContradiction;
  return typeof point.targetEvidenceId === 'string' && typeof point.promptQuestion === 'string' &&
    Array.isArray(point.zones) && point.zones.every(zone => zone && Array.isArray(zone.bounds) &&
      zone.bounds.length === 4 && zone.bounds.every(Number.isFinite) && isLines(zone.failureDialogue));
}

export function isContinuation(value: unknown, depth = 0): value is DialogueContinuation {
  if (depth > 32 || !value || typeof value !== 'object') return false;
  const next = value as DialogueContinuation;
  if (simpleKinds.has(next.kind)) return true;
  switch (next.kind) {
    case 'testimony': case 'climax-point': return Number.isInteger(next.index) && next.index >= 0;
    case 'press': case 'deduction': case 'investigation-hotspot': return typeof next.id === 'string';
    case 'dialogue': return isLines(next.lines) && isContinuation(next.next, depth + 1);
    case 'point': return isPoint(next.target) && isContinuation(next.next, depth + 1);
    default: return false;
  }
}

export function isDialogueSnapshot(value: unknown): value is DialogueSnapshot {
  if (!value || typeof value !== 'object') return false;
  const snapshot = value as DialogueSnapshot;
  return isLine(snapshot.current) && isLines(snapshot.remaining) && isContinuation(snapshot.next) &&
    Boolean(snapshot.notices) && Array.isArray(snapshot.notices.pending) &&
    [...snapshot.notices.pending, ...(snapshot.notices.current ? [snapshot.notices.current] : [])]
      .every(notice => notice && typeof notice.message === 'string' &&
        (notice.iconSrc === null || typeof notice.iconSrc === 'string'));
}
