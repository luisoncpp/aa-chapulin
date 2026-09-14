// @Architecture(descriptionShort="Guards Case 1 day-one no-bag Super Sam poses", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { CASE1_TESTIMONY_1, CASE1_TRIAL_INTRO } from '../../src/case/case1/Private/trial_day1.js';
import { CASE1_TESTIMONY_1_EN, CASE1_TRIAL_INTRO_EN } from '../../src/case/case1/Private/trial_day1_en.js';
import { CASE1_TESTIMONY_2 } from '../../src/case/case1/Private/trial_day1_t2.js';
import { CASE1_TESTIMONY_2_EN } from '../../src/case/case1/Private/trial_day1_t2_en.js';
import type { DialogueLine, PoseName, Testimony } from '../../src/types/index.js';

const ROOT = path.resolve(__dirname, '../..');
const ASSET = path.join(ROOT, 'assets', 'supersam_case1_slam.webp');

function collectPoses(lines: DialogueLine[], poses: PoseName[] = []): PoseName[] {
  for (const line of lines) {
    if (line.pose) poses.push(line.pose);
  }
  return poses;
}

function collectTestimonyPoses(testimony: Testimony): PoseName[] {
  const poses: PoseName[] = [];
  for (const statement of testimony.statements) {
    if (statement.pose) poses.push(statement.pose);
    collectPoses(statement.pressText ?? [], poses);
    collectPoses(statement.contradiction?.successDialogue ?? [], poses);
    collectPoses(statement.contradiction?.followUp?.successDialogue ?? [], poses);
  }
  return poses;
}

describe('Case 1 Super Sam no-bag trial pose', () => {
  it('keeps a separate no-bag slam asset for day one', () => {
    expect(fs.existsSync(ASSET)).toBe(true);
  });

  it('uses the no-bag slam during Case 1 day one in both languages', () => {
    const poses = [
      ...collectPoses(CASE1_TRIAL_INTRO),
      ...collectPoses(CASE1_TRIAL_INTRO_EN),
      ...collectTestimonyPoses(CASE1_TESTIMONY_1),
      ...collectTestimonyPoses(CASE1_TESTIMONY_1_EN),
      ...collectTestimonyPoses(CASE1_TESTIMONY_2),
      ...collectTestimonyPoses(CASE1_TESTIMONY_2_EN),
    ];
    expect(poses).toContain('supersam_case1_slam');
    expect(poses).not.toContain('supersam_slam');
  });
});
