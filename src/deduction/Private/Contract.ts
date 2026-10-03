// @Architecture(descriptionShort="Stable bilingual narrative and resumable deduction state")
export type Localized = { es: string; en: string };
export type Phase = 'entry' | 'premise' | 'question' | 'rejected' | 'travel' | 'connection' | 'conclusion' | 'returned';
export interface DeductionOption {
  id: string;
  label: Localized;
  rejection?: Localized;
}
export interface DeductionRecord {
  id: string;
  kind: 'evidence' | 'person';
  name: Localized;
  description: Localized;
  image?: string;
}
export interface DeductionSequence {
  id: string;
  defender: 'donramon' | 'chapulin';
  author: Localized;
  entry: Localized;
  conclusion: Localized;
  continuation: Localized;
  records: DeductionRecord[];
  steps: {
    id: string;
    premise: Localized;
    question: Localized;
    options: DeductionOption[];
    correctId: string;
    connection: Localized;
    memory?: { recordId: string; aspect: Localized; indispensable?: boolean };
  }[];
}
export interface HistoryEntry {
  phase: Phase | 'hypothesis';
  step: number;
  optionId: string | null;
}
export interface DeductionSnapshot {
  version: 1;
  sequenceId: string;
  phase: Phase;
  step: number;
  accepted: string[];
  selectedId: string | null;
  focusId: string;
  language: 'es' | 'en';
  history: HistoryEntry[];
}
