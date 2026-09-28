import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

spec_path = "docs/specs/case-5-el-tomo-trece.md"
with open(spec_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

for i, l in enumerate(text.splitlines(), 1):
    if "supersam" in l:
        print(f"{i:4d}: {l}")

