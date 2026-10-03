# Dialogue completion is progression

A testimony can stay active while its contradiction dialogue plays a recess, grants evidence and recalls the next witness. Saving only the testimony index brings the player back to a contradiction already solved. Investigation intro and talk flags have the opposite failure: they are set before dialogue finishes, so restoring those flags can skip unread lines and their evidence grants.

Persist the displayed line and remaining dialogue together with a serializable completion action. Rebuild the callback on load, and render the current line without applying its updates again. Keep pending questions, point overlays and record notices with the checkpoint; none can be inferred reliably from the trial phase. Cancel delayed work from the abandoned scene when loading.

Old saves cannot recover a dialogue cursor they never stored. Keep their checkpoint fallback while new saves record enough information to finish the original action. See [[docs/flows/save-load-flow.md]] and [[tests/engine/DialogueSaveLoad.test.ts]].
