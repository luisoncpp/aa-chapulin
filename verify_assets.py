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
for p in set(poses):
    filename = f'{p}.png'
    if filename not in existing_assets:
        print(f'WARNING: Missing pose asset: {filename}')

for c in set(cutins):
    filename = f'{c}.png'
    if filename not in existing_assets:
        print(f'WARNING: Missing cutin asset: {filename}')

for b in set(bgs):
    if b not in existing_assets:
        print(f'WARNING: Missing bg asset: {b}')

print("Check finished!")
