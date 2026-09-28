import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

case5_dir = "src/case/case5/Private"
files = sorted([os.path.join(case5_dir, f) for f in os.listdir(case5_dir) if f.endswith(".ts") and not f.endswith("_en.ts")])

for filepath in files:
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    if "SUPER SAM" in content or "supersam" in content:
        print(f"\n==================================================")
        print(f"FILE: {os.path.basename(filepath)}")
        print(f"==================================================")
        for i, line in enumerate(content.splitlines(), 1):
            if any(k in line for k in ["speaker: 'SUPER SAM'", "pose: 'supersam", "idlePose: 'supersam", "SUPER SAM"]):
                print(f"{i:4d}: {line.strip()}")

