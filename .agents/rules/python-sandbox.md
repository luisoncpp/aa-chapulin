---
trigger: always_on
description: Instructions for running Python scripts in the sandbox environment
---

# Python Execution in Sandbox

- Always invoke Python using `python <script>` with `BypassSandbox: false`.
- The user environment has a sandboxed Python 3.14 installation configured (with Pillow, numpy, etc.).
- Never use `py` launcher, as it resolves to an elevated system executable that triggers Access Denied under AppContainer sandboxing.
- Never ask the user for `BypassSandbox: true` permission to run Python.
