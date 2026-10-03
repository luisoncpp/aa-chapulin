// @Architecture(descriptionShort="Serializable dialogue continuations and presentation checkpoints")
import type { DialogueLine, PointTargetContradiction } from './script.js';

export type DialogueContinuation =
  | { kind: 'none' | 'intro' | 'courtroom' | 'statement' | 'contradiction' | 'advance' |
      'sequence' | 'present' | 'choice' | 'verdict' | 'celebrate' | 'complete' | 'restart' |
      'investigation-intro' | 'investigation-talk' }
  | { kind: 'testimony'; index: number }
  | { kind: 'press' | 'investigation-hotspot' | 'deduction'; id: string }
  | { kind: 'dialogue'; lines: DialogueLine[]; next: DialogueContinuation }
  | { kind: 'point'; target: PointTargetContradiction; next: DialogueContinuation }
  | { kind: 'climax-point'; index: number };

export interface DialogueSnapshot {
  current: DialogueLine;
  remaining: DialogueLine[];
  next: DialogueContinuation;
  notices: { pending: { iconSrc: string | null; message: string }[];
    current?: { iconSrc: string | null; message: string } };
}

export type DialogueQueue = (lines: DialogueLine[], onComplete?: (() => void) | null,
  continuation?: DialogueContinuation) => void;
