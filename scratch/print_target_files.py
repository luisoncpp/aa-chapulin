import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

files_to_check = [
    "src/case/case5/Private/climax_epilogue.ts",
    "src/case/case5/Private/climax_epilogue_en.ts",
    "src/case/case5/Private/fiscalia_c5.ts",
    "src/case/case5/Private/fiscalia_c5_en.ts",
    "src/case/case5/Private/fiscalia_c5_talks.ts",
    "src/case/case5/Private/fiscalia_c5_talks_en.ts",
    "src/case/case5/Private/fiscalia_c5_hotspots.ts",
    "src/case/case5/Private/fiscalia_c5_hotspots_en.ts",
    "src/case/case5/Private/trial_day3_t2.ts",
    "src/case/case5/Private/trial_day3_t2_en.ts",
    "src/case/case5/Private/trial_day3_success.ts",
    "src/case/case5/Private/trial_day3_success_en.ts",
    "src/case/case5/Private/trial_day3_success_sam.ts",
    "src/case/case5/Private/trial_day3_success_sam_en.ts",
]

for p in files_to_check:
    print(f"\n=======================================================")
    print(f"FILE: {p}")
    print(f"=======================================================")
    with open(p, "r", encoding="utf-8", errors="ignore") as f:
        print(f.read())

