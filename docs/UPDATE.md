# Documentation Update Instructions

Use this document as a generic checklist for keeping project documentation aligned with the current state of the codebase.

The goal is not to document every code change. The goal is to record the changes that affect how future contributors understand, use, extend, or operate the project.

## When to update documentation

Update the documentation when a change affects at least one of these areas:

* product behavior
* architecture or module boundaries
* public APIs, contracts, or data shapes
* setup, deployment, or operational workflows
* developer workflows or project conventions
* user-facing flows
* known limitations, assumptions, or trade-offs

Do not create noisy documentation updates for:

* purely internal refactors with no behavioral impact
* low-level implementation details that are obvious from the code and not useful as long-term knowledge

## Update principle

Documentation must explain stable intent, not transient implementation trivia.

Prefer documenting:

* why a change exists
* what behavior changed
* what constraints now matter
* where the new responsibility lives
* what future contributors must preserve

Avoid documenting:

* step-by-step code narration
* temporary workarounds without context
* duplicate explanations that already exist elsewhere

## Minimum update checklist

For every meaningful feature, bug fix, or architectural change:

* update the relevant design or requirements document if product behavior changed
* update architecture documentation if responsibilities, boundaries, or data flow changed
* update flow documentation if the sequence of actions or decisions changed
* update status or planning documents if roadmap state changed
* record notable surprises, constraints, or pitfalls in lessons learned when they can save future time

## How to choose the target document

Use the smallest document that matches the change.

### Design or requirements

Update this when the answer to "what should the system do?" has changed.

Examples:

* a new user-visible feature
* changed validation rules
* a new non-functional requirement
* a changed success criterion

### Architecture

Update this when the answer to "how is responsibility divided?" has changed.

Examples:

* new modules or subsystems
* changed ownership of logic
* changed storage model or integration boundaries
* new invariants that other code must respect

### Flows

Update this when the answer to "what sequence happens during this scenario?" has changed.

Examples:

* a new end-to-end user journey
* an important error-handling path
* a multi-step backend interaction
* a workflow that required reading multiple files to understand

### Status or planning

Update this when the answer to "what is done, in progress, or planned?" has changed.

Examples:

* a feature moved from planned to implemented
* a large task changed scope
* a plan was replaced or split
* plans completed must be moved to `docs/plans/done`

### Lessons learned

Update this when the answer to "what should future contributors avoid or remember?" has changed.

Examples:

* a hidden dependency caused wasted time
* a tooling limitation changed the implementation approach
* a recurring mistake was discovered
* an assumption turned out to be wrong

## Writing rules

* Prefer concise statements over long prose.
* Write for a future contributor with no memory of the current task.
* Record decisions and constraints, not just outcomes.
* Avoid project-specific shorthand unless it is already defined elsewhere.
* Prefer examples only when they reduce ambiguity.
* Keep documents easy to scan with short sections and direct headings.

## Quick review before finishing

Before closing a task, verify:

* the documentation still matches the implemented behavior
* the change was recorded in the correct document, not duplicated everywhere
* obsolete statements were removed or updated
* future contributors can understand the decision without reading the full task history

## Rule of thumb

If a future contributor would otherwise need to inspect multiple files, reconstruct intent from commits, or repeat the same discovery work, the documentation should be updated.

# Groups Format (`*.group.md`)

In CodeChart, architectural boundaries, hierarchies, and module groupings are defined using `*.group.md` files located in project directories.

## File Format

Each group file consists of optional **YAML frontmatter** followed by a **Markdown body** (`descriptionLong`):

```markdown
---
id: ui_components
label: UI Components
color: "#3b82f6"
icon: layout
facades:
  - index.ts
match:
  - "**/*.tsx"
  - "!**/*.test.tsx"
descriptionShort: "Reusable UI primitives and component library"
---

# UI Components

Long-form architectural description of this group, explaining responsibilities,
design patterns, and subsystem boundaries.
```

## Frontmatter Configuration

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique group identifier (defaults to folder path or filename). |
| `label` | string | Display name on the canvas and in menus. |
| `color` | string | Hex color used for node borders, headers, and accents. |
| `icon` | string | Optional icon name. |
| `facades` | string[] | Entrypoint modules (defaults to `index.ts` / `index.tsx` if present). |
| `match` | string[] | Glob patterns or `/regex/` claiming modules (relative to group directory). |
| `files` | string[] | Explicit list of file paths belonging to this group. |
| `groups` | string[] | Child group IDs for composition groups (parent-child nesting). |
| `exclude` | string[] | Exclusion globs subtracted from the group's claims. |
| `disconnected` | boolean | If `true`, hides all connections to/from this group by default. |
| `disconnectedModules` | string[] | Relative module paths whose connections are hidden by default. |
| `architectureDoc` | string | Repo-relative path to extended markdown doc displayed at L2 zoom. |
| `descriptionShort` | string | Summary text for tooltips and cards (defaults to 1st paragraph of body). |
| `ignore` | string[] | Root-only glob patterns ignored during project analysis. |

## Expected Description Lengths

- **`descriptionShort`** (frontmatter):
  - **Length**: **5–12 words**, roughly **35–70 characters** (never exceed ~90 chars).
  - **Style**: Verb-first or noun phrase stating what it does (no trailing period, no filler like "This module..."). Rendered on compact canvas cards.
- **`descriptionLong`** (markdown body):
  - **Length**: **2–4 sentences**, roughly **40–120 words**.
  - **Content**: Plain prose covering (1) responsibility, (2) public surface/facade, (3) private internals, and (4) cross-cutting interactions.

## Membership Claims & Overlap Rules

- **Nested Groups vs Partial Overlap**: Multiple groups can claim the same file **only when they are nested** (a nested explicit child group supersedes an ancestor's folder ownership; the innermost group wins). **Partial overlap** between competing, non-nested explicit groups is forbidden and produces `configError:overlap:<module>`. Cross-cutting claims require the folder owner to cede files via `exclude`.
- **Folder Ownership**: A group without `match`, `files`, or `groups` automatically claims all files in its directory.
- **Sibling Facades**: A group in `domain/widget/` can own `domain/widget.ts` using `match: ["../widget.ts", "**"]` and `facades: ["../widget.ts"]`.
- **YAML Escaping**: Always quote string values containing `#` (e.g. `descriptionShort: "See [[#Section]]"`) to avoid YAML comment syntax.


# Architecture Tags (`@Architecture`)

In CodeChart, source modules can define local architectural metadata directly at the top of the file using `@Architecture(...)` comment annotations.

## Placement & Format

- Place the tag at the **very first line** of the source file (before imports and declarations).
- Only the **first** `@Architecture(...)` block in the file is read.
- Use standard single-line comments (`//` or `#`) or block comments (`/* ... */`).

```ts
// @Architecture(descriptionShort="Redux-like store managing state changes")
```

## Supported Keys

| Key | Purpose | Expected Value |
|---|---|---|
| `descriptionShort` | Summary shown on canvas cards and in inspector. | **5–12 words** (~35–70 chars, max ~90 chars). No trailing period. |
| `descriptionLong` | Extended context for inspector (optional). | **1–2 sentences** (~200 chars max). |
| `type` | Optional role badge on node header. | `Module`, `controller`, `util`, `hook`, `service`, etc. |
| `icon` | Decorative icon on canvas card. | One of: `cube`, `wrench`, `gear`, `bolt`, `hook`, `database`, `layers`, `panel`, `dialog`, `sidebar`, `app-window`, `plug`, `share`, `layout`, `globe`. |
| `group` | Explicit group ID override. | Group identifier (prefer configuring in `*.group.md`). |

## Description Length Rules

- **`descriptionShort`** (Recommended for all modules):
  - **Length**: **5–12 words**, roughly **35–70 characters** (never exceed ~90 chars).
  - **Style**: Verb-first or concise noun phrase stating what the module does (present tense, no trailing period, no filler like "This file..." or "This module...").
- **`descriptionLong`** (Optional context):
  - **Length**: **1–2 sentences**, roughly **20–40 words** (max ~200 characters).
  - **Usage**: Used only when extra nuance is needed for the inspection panel. Most modules only need `descriptionShort`.

## Multi-Language Examples

### TypeScript / JavaScript
```ts
// @Architecture(descriptionShort="Single choke point for network access", icon="globe")
import { ApiClient } from "./client";
```

### Rust
```rust
// @Architecture(descriptionShort="Pure graph builder enforcing containment invariants")
use crate::contract::ProjectGraph;
```

### C++ / C#
```cpp
// @Architecture(descriptionShort="Manages actor lifecycle and replication state")
#include "GameState.h"
```

## Parsing Rules

- **Quotes**: Quote values containing commas or spaces (e.g., `descriptionShort="Graph canvas renderer"`).
- **Unknown Keys**: Unrecognized keys are ignored safely without causing parse errors.
- **Precedence**: Module tags take precedence for individual node labels, while `*.group.md` defines boundary containers.

# Wiki Links

Wiki links allow instant navigation between files, sections, and symbols in CodeChart using clickable `[[target]]` syntax inside comments and markdown documentation.

## Syntax Forms

| Syntax | Description | Example |
|---|---|---|
| `[[path]]` | Opens the target file in a preview frame. | `[[src/state/store.ts]]` |
| `[[path\|Label]]` | Opens the target file with custom display text. | `[[src/state/store.ts\|State Store]]` |
| `[[path#Section]]` | Opens the target file and jumps to the specified section or heading. | `[[docs/architecture.md#Data Model]]` |
| `[[#Section]]` | Jumps to a section within the current file. | `[[#Implementation Details]]` |
| `[[filename.ts]]` | Bare filename matching via module path suffix. | `[[store.ts]]` |

## Contexts & Recognition Rules

- **In Source Code**: Wiki links are recognized **only inside comment tokens** (`// ...`, `/* ... */`, `# ...`). Literal `[[...]]` brackets in program logic (e.g. nested arrays) are ignored.
- **In Markdown Files**: Wiki links are recognized anywhere within the text.

## Section Anchors

When a `#Section` fragment is provided, CodeChart locates the target heading or marker:

- **In Markdown**: Matches ATX headings (e.g., `# Header`, `## Subheader`).
- **In Source Code**: Matches `@Section(Name)` annotations inside comments (e.g., `// @Section(Validation Logic)`).
- **Matching Rules**: Section matching is case-insensitive, and spaces and hyphens are treated as equivalent (e.g., `#data-model` matches `## Data Model`).
- If the specified section is not found, the file opens at the top without error.

## Path Resolution

- **Relative Paths**: `./` and `../` resolve relative to the directory of the file containing the link.
- **Bare Names**: A bare name like `[[store.ts]]` resolves to the matching module suffix in the project.
- **Project-Relative Paths**: Other paths resolve starting from the project root directory (escapes above project root are rejected).
