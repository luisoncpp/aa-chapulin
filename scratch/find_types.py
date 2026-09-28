import os

for root, dirs, files in os.walk("src"):
    for f in files:
        if f.endswith(".ts"):
            p = os.path.join(root, f)
            try:
                with open(p, "r", encoding="utf-8", errors="ignore") as fp:
                    txt = fp.read()
                    if "CharacterPose" in txt or "supersam_case1" in txt or "supersam_crossed" in txt:
                        print(p)
            except Exception as e:
                pass
