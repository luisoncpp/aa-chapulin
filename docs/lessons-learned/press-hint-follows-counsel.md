# Press hint speaker follows who is counsel

## Context
After two wrong presents on a testimony that still has hidden statements, the engine replaces the prosecutor penalty with a one-line press hint. The default line is Chapulín pointing at Don Ramón (`i18n.t.pressHint` starts "¡Don Ramón!").

## What Was Learned

### 1. The hint is a bench-role line, not a character gag
When the player-lawyer is Chapulín, a scold that opens "¡Don Ramón!" treats the accused as counsel. The client on the defense bench should address the current lawyer. Hardcoding the defendant-hero as speaker leaks Cases 0–4's seating into a swapped trial.

### 2. Optional `CaseScript.pressHint` keeps Cases 0–4 stable
Omit the field to keep Chapulín → Don Ramón. Set `DialogueLine[]` when counsel is not Don Ramón. Do not rewrite `i18n.t.pressHint`; that string is the default for the original bench.
