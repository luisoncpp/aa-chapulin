# CRITICAL STARTUP INSTRUCTION
Before you write any code, create any plans, or run any commands, you MUST read the following documentation files to understand the project workflow and architecture. Do not proceed without reading them:

@docs/live/glossary.md

@docs/GUIDELINES.md

@docs/WORKFLOW.md

@docs/architecture/README.md

@docs/lessons-learned/README.md

@docs/flows/README.md

@docs/UPDATE.md

# Python Environment & Sandbox Rules
- When running Python scripts or commands, ALWAYS use `python <script>` with `BypassSandbox: false`.
- The sandbox environment is preconfigured with Python 3.14 (including Pillow, numpy, etc.) accessible directly via `python`.
- Do NOT invoke `py` (the Windows launcher invokes a system path that fails in sandbox).
- Do NOT request user permission to run Python with `BypassSandbox: true`. Python works directly in standard sandbox mode.
