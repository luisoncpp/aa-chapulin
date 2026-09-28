import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

spec_path = "docs/specs/case-5-el-tomo-trece.md"
with open(spec_path, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, l in enumerate(lines, 1):
    if "14.2" in l or ("fiscalia" in l.lower() and "despacho" in l.lower()):
        print(f"Line {i}: {l}")
        for j in range(i, min(len(lines), i + 70)):
            print(f"{j+1:4d}: {lines[j].rstrip()}")
        break
