import os
import glob
import re

case5_dir = "src/case/case5"
files = []
for root, dirs, filenames in os.walk(case5_dir):
    for f in filenames:
        if f.endswith(".ts"):
            files.append(os.path.join(root, f))

print("=== DETAILED SCAN OF ALL CASE 5 DIALOGUE LINES WITH SUPER SAM ===")
for path in sorted(files):
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as file:
            content = file.read()
            if "SUPER SAM" in content or "supersam" in content or "fiscalia" in path.lower():
                lines = content.splitlines()
                # print context
                in_dialogue = False
                cur_line_info = []
                for i, line in enumerate(lines, 1):
                    if any(k in line for k in ["speaker: 'SUPER SAM'", "pose: 'supersam", "pose: 'sam", "idlePose: 'supersam", "idlePose: 'sam"]):
                        # print surrounding 5 lines
                        start = max(0, i - 3)
                        end = min(len(lines), i + 3)
                        print(f"\n--- {path}:{i} ---")
                        for j in range(start, end):
                            print(f"{j+1:4d}: {lines[j]}")
    except Exception as e:
        print(f"Error {path}: {e}")
