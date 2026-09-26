---
name: explain-diff
description: Use when the user wants a document that explains a diff / MR / branch by its MOTIVATION rather than file-by-file — a holistic narrative of "the app did X, the external system/tech requires Y, so the change introduces Z in these flows." Produces a yaml-components (.yaml.md) doc aimed at a reviewer who knows the codebase but not the domain being introduced. Invoke with "/explain-diff [diff range or feature]".
argument-hint: "diff range or feature (e.g. 'develop...HEAD' or 'the EOS lobby branch')"
---

# Explain a diff by its motivation

Produce a **motivation-first** explainer of a diff: not "which file changed which
line," but *why the whole change exists*. The reader should come away
understanding the forces that shaped the diff, in the order they bite.

This is the sibling of a file-by-file MR walkthrough — reach for **this** skill
when the reviewer already understands the codebase but not the *domain/tech being
introduced* (a new SDK, protocol, external service, platform constraint). If they
instead need line-level accountability ("justify every changed line"), write a
file-by-file doc instead (or in addition).

The output is a hybrid Markdown file with YAML component blocks, so **you MUST use
the `yaml-components` skill** for the component syntax. Do not hand-guess block
shapes.

## The core idea

Most non-trivial diffs are a chain of *forced moves*: a goal meets a hard
requirement of some external system, which forces a change, which hits the next
requirement, and so on. The document's job is to make that chain visible so each
scattered edit reads as inevitable rather than arbitrary.

> The app was doing **X**. The goal was **G**. **EOS/Postgres/WebRTC/…** requires
> **R1, R2, R3**. So the change introduces **C1, C2, C3** at **these points in the
> flow**. These parts are deliberately left for later.

## Gather these inputs first (ask if missing)

Do not start writing until you have:

1. **The diff and its base.** Usually `git diff <base>...HEAD`. If the base branch
   is unclear, ask. Prefer the actual repo default (here: `develop`).
2. **The working-tree reality, not just commits.** Run `git status` and diff the
   working tree too. Branches drift — a feature you're about to explain may have
   been partly removed or reworked since it was committed. Explaining a stale
   state is the most common failure. (Real example: an "anonymous Device ID login"
   was committed, then deleted in the working tree; the whole "distinct PUID"
   narrative changed.)
3. **The reader's starting knowledge.** What do they already understand (the app,
   a subsystem) and what is *new to them* (the SDK/protocol/service)? Calibrate the
   primer to the gap. If unstated, ask one short question.
4. **The original motivating request(s), in order.** The best narratives are
   organized around what the human actually asked for ("first a ping between two
   accounts, then a minimal lobby"). Ask the user for this if it isn't obvious from
   the conversation — it becomes the spine of the document.

## Process

1. Invoke the **`yaml-components`** skill for component syntax.
2. Reconstruct the true end-state (steps 1–2 above). Read the actual current files
   where the diff is ambiguous; don't infer behavior from the diff alone.
3. Identify the **external system's requirements** that the diff is responding to.
   These are the load-bearing facts the reader is missing. Group the diff's changes
   under the requirement that forced each.
4. Write the doc following the structure below.
5. Save as `docs/done/<slug>-motivation.yaml.md` (this repo archives change
   rationale under `docs/done/`; confirm if a different location is wanted).
6. **Compilation is checked automatically.** A PostToolUse hook compiles every
   `.yaml.md` on Write/Edit and reports `YAML-MD compiled OK` or the exact error.
   **Rely on that** — do NOT run the compiler (`mdyaml2html`) by hand to check;
   only run it manually if the user explicitly wants a standalone `.html` companion.

## Document structure

Adapt, don't follow mechanically — but this backbone works:

1. **Framing notice** — one paragraph: the whole diff grew from *these* requests /
   this goal; almost every change is either something the external system forces or
   a thin UI to exercise it. Set the "nothing here touches X yet" boundary early.
2. **"<Domain> in one screen"** — a `data-grid` (piece · what it is · why the app
   needs it) that teaches just enough of the unfamiliar system to follow the rest.
   Close with a single sticky-nav notice stating the one mental model to hold.
3. **Where the app was before** — a `card`: the starting behavior, and what was
   missing or quietly inadequate. This is the baseline the reader anchors to.
4. **One section per goal** — the heart. For each goal:
   - A `flowchart` titled "why <simple goal> needed all this," with short node
     labels and a `details` sidebar (one entry per node) carrying the
     "requires → so we added" reasoning + a concrete `code`/symbol snippet.
   - A companion `data-grid` ("the requirement chain, in words"): two columns,
     *<system> forces this* → *so the change is*. This carries the detail the node
     labels can't.
   - Where a goal involved a painful debugging journey (config traps, protocol
     gotchas), a `timeline` of symptom → cause → fix reads far better than prose.
5. **Recurring patterns** — a `card` explaining once any pattern repeated across the
   diff (e.g. an async "box a context, pump until callback" idiom), so the reader
   reads it once instead of re-deriving it per file.
6. **What this deliberately does NOT do** — a warning `notice`. Scope boundaries are
   as important as the changes for a reviewer. Name deferred work, dev-only paths,
   and anything removed.
7. **Net-effect notice** — one closing paragraph: if the reader accepts the goals +
   the system's requirements, every change is one of those or a way to exercise it.

## Writing principles

- **Prioritize understanding over brevity.** This is for a human reviewer, not a
  future agent's context budget. It's fine to be longer if it's clearer.
- **Motivation before mechanism.** Lead every section with *why*; mention *what
  changed* only as the consequence. Never open with a file path.
- **Trace every change to a motivation.** If a change doesn't fit any goal/
  requirement, it goes in an explicit "out-of-scope / unexplained" list — do not
  silently drop it or invent a reason. Flag low-confidence readings as such and say
  what the user should confirm.
- **Teach the unfamiliar, skip the familiar.** Explain the new SDK/protocol; don't
  re-explain the app the reader already knows.
- **Name the honest trade-offs.** If the change took a pragmatic-but-imperfect path
  (a wrapper instead of a fix, a dev-only shortcut), say so and name the cleaner
  long-term option. Reviewers trust a doc that admits cost.
- **Use the human's own words for goals.** Their phrasing ("ping between two
  accounts") is the most legible spine.

## Component choices (quick guide)

- **`data-grid`** — the requirement chains, the domain primer, comparison tables.
  Two-column "forces → so we do" grids are the workhorse.
- **`flowchart`** with `details` — the forced-move chain per goal. Keep node
  `label`s to ~2–4 words (they're raw SVG text and overflow easily); push the
  sentence into the `details` sidebar (`title`/`meta`/`body`/`code`).
- **`timeline`** — debugging gauntlets / incident-style sequences (symptom → fix).
- **`card`** — the "before" state, recurring-pattern explainers.
- **`notice`** — framing, the one-mental-model reminder (`sticky-nav`), scope
  boundaries (`warning`), net-effect (`info`/`success`).
- **`module-map`** — only when a spatial component/flow picture genuinely helps.

## Gotchas (learned the hard way)

- **`flowchart` requires a `details` field** even if empty (`details: []`). Missing
  it fails compilation with "missing field `details`".
- **Block-scalar (`content: |`) indentation must be uniform.** The first content
  line sets the base indent; any later line indented *less* silently ends the
  scalar and breaks the YAML. In diff code-panels, make every line — context and
  `+`/`-` alike — share the same left column.
- **Escaping depends on context.** Inside YAML component fields most prose is
  Markdown; inside raw-text fields (SVG `<text>`, `code`, prompt-box) it is not.
  In *document prose* (outside YAML), a `\"` inside a backtick code span renders
  literally — write plain quotes. See the `yaml-components` skill's escaping table.
- **Don't manually compile to check.** The Write/Edit hook already reports compile
  status. Manual `mdyaml2html` runs are only for producing a shareable `.html`.
- **Flowchart node overlap** = labels too long. Shorten the label, move the meaning
  into `details` and the companion data-grid; adjust `x`/`width`/`viewBox` for
  spacing rather than cramming text.

## Reference

- A strong worked example of this exact style lives at
  `docs/done/eos-lobby-motivation.yaml.md` — read it before writing a new one.
- The file-by-file counterpart (when line-level accountability is wanted instead)
  is `docs/done/eos-lobby-mr-explained.yaml.md`.
