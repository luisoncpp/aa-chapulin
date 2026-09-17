// @Architecture(descriptionShort="Guards Case 1 evidence thumbnail identity", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = path.resolve(__dirname, '../..');

describe('Case 1 evidence thumbnail identity', () => {
  it('derives the grate icon from its detailed-view plate', () => {
    const processor = fs.readFileSync(path.join(ROOT, 'process_case1_assets.py'), 'utf8');

    expect(processor).toContain('def process_rejilla_icon()');
    expect(processor).toContain('if name == "rejilla_ducto":');
    expect(processor).toContain('build_plate("examine_rejilla_ducto")');
    expect(processor).toContain('for name in EVIDENCE_ICONS:');
  });
});
