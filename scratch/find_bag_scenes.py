import os
import sys
import re

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

print("=== SCANNING FOR BAG / BOLSA MENTIONS & SAM SCENES IN CASE 5 ===")

# 1. Check spec
spec_file = "docs/specs/case-5-el-tomo-trece.md"
if os.path.exists(spec_file):
    with open(spec_file, "r", encoding="utf-8", errors="ignore") as f:
        spec = f.read()
    print("\n--- SPEC REFERENCES TO SAM'S BAG ---")
    for i, line in enumerate(spec.splitlines(), 1):
        if any(w in line.lower() for w in ["bolsa", "super sam", "supersam", "bagless"]):
            if any(w in line.lower() for w in ["silla", "chair", "olvid", "dej", "oficina", "despacho", "fiscal", "pasillo", "espera", "testimonio", "sin bolsa", "no bag", "left"]):
                print(f"Spec line {i}: {line.strip()[:140]}")

# 2. Check all case 5 src files
case5_dir = "src/case/case5"
for root, dirs, files in os.walk(case5_dir):
    for f in sorted(files):
        if f.endswith(".ts"):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8", errors="ignore") as file:
                lines = file.readlines()
            for i, line in enumerate(lines, 1):
                if any(w in line.lower() for w in ["bolsa", "bag", "chair", "silla", "lobby", "espera", "dejé", "olvid", "fiscalia", "fiscalía"]):
                    if "sam" in line.lower() or "super" in line.lower() or "supersam" in line.lower() or any(
                        "sam" in lines[max(0, i-4+k)].lower() for k in range(8) if max(0, i-4+k) < len(lines)
                    ):
                        print(f"\n{p}:{i}")
                        for j in range(max(0, i-3), min(len(lines), i+3)):
                            print(f"  {j+1}: {lines[j].strip()}")

