# @Architecture(descriptionShort="Validates script asset references against physical files", type="validator", icon="wrench")
"""
Static Asset Integrity Validator
Verifies character poses, cut-in placards, and background references in case scripts.
"""

import os
import re

# @Section(Asset Reference Regex Scanner)
sources = []
for root, _, files in os.walk('src/case'):
    for f in files:
        if f.endswith('.ts'):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as src:
                sources.append(src.read())

if os.path.exists('js/case_script.js'):
    with open('js/case_script.js', 'r', encoding='utf-8') as f:
        sources.append(f.read())

script_content = "\n".join(sources)

poses = re.findall(r'pose:\s*["\']([^"\']+)["\']', script_content)
cutins = re.findall(r'cutin:\s*["\']([^"\']+)["\']', script_content)
bgs = re.findall(r'assets/([^"\']+\.(?:jpg|png))', script_content)

print('Referenced poses:', set(poses))
print('Referenced cutins:', set(cutins))
print('Referenced bgs:', set(bgs))

# @Section(Physical Asset Validation)
existing_assets = set(os.listdir('assets'))
missing_assets = []
for p in set(poses):
    filename = f'{p}.png'
    if filename not in existing_assets:
        missing_assets.append(filename)

for c in set(cutins):
    filename = f'{c}.png'
    if filename not in existing_assets:
        missing_assets.append(filename)

for b in set(bgs):
    if b not in existing_assets:
        missing_assets.append(b)

if missing_assets:
    print(f'WARNING: Missing assets: {missing_assets}')
else:
    print('All referenced assets exist on disk.')

# @Section(Sprite Cleanliness Quality Check)
from PIL import Image
import numpy as np
from scipy import ndimage

cleanliness_errors = []
for p in set(poses):
    filepath = os.path.join('assets', f'{p}.png')
    if not os.path.exists(filepath):
        continue
    img = Image.open(filepath)
    arr = np.array(img)
    if arr.shape[2] < 4:
        continue
    alpha = arr[:, :, 3]
    fg = alpha > 0
    eroded = ndimage.binary_erosion(fg, structure=np.ones((3, 3)))
    perimeter = fg & ~eroded

    r = arr[perimeter, 0].astype(int)
    g = arr[perimeter, 1].astype(int)
    b = arr[perimeter, 2].astype(int)
    purplish = (r > g + 15) & (b > g + 15) & (r > 35) & (b > 35)

    if np.sum(purplish) > 0:
        cleanliness_errors.append(f'{p}.png has {np.sum(purplish)} purple fringe pixels')

    # Check for unkeyed solid magenta holes in foreground
    rf, gf, bf = arr[fg, 0], arr[fg, 1], arr[fg, 2]
    dist_fg = np.sqrt((rf.astype(float) - 255.0) ** 2 + gf.astype(float) ** 2 + (bf.astype(float) - 255.0) ** 2)
    solid_magenta = np.sum((dist_fg < 100) | ((rf > 200) & (bf > 200) & (gf < 60)))
    if solid_magenta > 0:
        cleanliness_errors.append(f'{p}.png has {solid_magenta} unkeyed solid magenta pixels')

    # Check for outer border margin lines (top, left, right 3px)
    edge_noise = np.sum(alpha[:3, :] > 0) + np.sum(alpha[:, :3] > 0) + np.sum(alpha[:, -3:] > 0)
    if edge_noise > 0:
        cleanliness_errors.append(f'{p}.png has {edge_noise} border edge noise pixels')

if cleanliness_errors:
    print('Quality issues found:', cleanliness_errors)
else:
    print('All character sprites passed cleanliness quality verification!')

print('Asset check finished!')
