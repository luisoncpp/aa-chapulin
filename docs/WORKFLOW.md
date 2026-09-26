# Workflow

Work on this project falls into two categories: **engine work** (fixing bugs and implementing features in the engine's code) and **case content work** (changing what's inside of a case: dialogue, clues, scripts, assets, flow of the investigation/trial). They follow different rules — see "Working on case content" below.

Before trying to implement any feature or fix any bug, add the following to your tasks list:

* Read all the documentation that may be relevant for the given task.

* After reading it, fix the bug or implement the feature

* Run tests and lint to make sure it's still passing.

* Add tests for the new feature or bug fix

* Run `npx fallow audit` after implementing each new feature or doing each bug fix (engine work only — never run fallow on case content changes).

# Implementing new features

Before writing any code or reading any file, add this to your tasks list:

* Read all the documentation that may be relevant for the new feature.

* Ask the user about anything that it's not clear about the new feature.

* Suggest a plan, and ask the user if proceed with the implementation.

* Implement the plan.

* Check again if you followed the guidelines or if what you just written could be done in a simpler way with no trade-offs.

* If multiple files are going to be needed, consider creating a deep module.

* After implementing a new feature, documenting the architecture is mandatory. Be concise in the documentation, maximizing the information / token ratio (as it will probably be read by future agents and we don't like to waste their context)

* Consider documenting a new flow or clarify why no new flows are needed for the new feature.

# Fixing a bug

Before writing any code or reading any file, add this to your tasks list:

* Read all the documentation that may be relevant for the new bug.

* Write a regression test and make sure it fails before proceeding.

* Fix the implementation until the test passes.

* Make sure all the other tests and lint still passes.

* Update any change of behaviour in the architecture documentation.

* Include any unexpected discovery in lessons-learned

* Consider adding a new flow (Check again all the files that you had to read and why. Consider if a flow would have reduced the amount of files read, if so, add a new flow).

# Working on case content

Cases are content, not engine code, and must be treated differently. Add this to your tasks list when changing what's inside of a case:

* Read all the documentation that may be relevant for the case or the change.

* Make the change to the case content.

* Run lint and any existing case sanity tests to make sure nothing breaks.

* **Do not write a test to verify every change.** Case content does not need per-change tests the way engine code does.

* **Do not run `fallow audit`.** Fallow shouldn't run in cases.

* A case has three sources that must stay in sync: the **spec**, the **Spanish** version, and the **English** mirror. Any change made in one of them must be applied to the other two. Never change only one.

* After regenerating an image, audit it (calling **asset-audit**) and update its hotspots when present — this applies both to investigation backgrounds and to presentable evidence, since regenerated images rarely keep the same proportions and hotspot positions.

* Update architecture/flow documentation only if the change altered something structural (e.g. a new mechanic or flow used by the case), not for routine content edits.

## Testing rules for cases

* Cases **may** have tests, but only for sanity checks that avoid real problems:
  * No soft locks (e.g. the case can always reach an ending).
  * No broken references (dialogue, clues, characters, assets that don't exist).
  * Maybe (optional, not mandatory): that all clues are being used.
* Nothing else. If a test for a case doesn't fit one of those buckets, don't write it.
* There must never be a test that verifies another test's content (e.g. asserting that a test file contains specific text). That creates multiple sources of truth.

## Forbidden test patterns

* Tests that check equality of specific hardcoded values for variables are **forbidden** (e.g. duplicating CSS values, or hardcoding the same constant twice in the test). They test the implementation, not the functionality. Assert on behavior and outcomes instead.
