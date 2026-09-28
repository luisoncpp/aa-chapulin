import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

spec_path = "docs/specs/case-5-el-tomo-trece.md"
with open(spec_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

lines = text.splitlines()
print(f"Total lines in spec: {len(lines)}")

for i, l in enumerate(lines, 1):
    if any(k in l.lower() for k in ["super sam", "supersam", "bolsa", "bagless"]):
        print(f"{i:4d}: {l}")
