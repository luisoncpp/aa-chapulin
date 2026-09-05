# Location Cast Rotation Uses Day-Suffix IDs

**What to remember:** When a recurring hotel location changes resident NPCs between investigation days, add a **new location key** (`hotel_terraza_d2`, `hotel_lobby_d3`) instead of swapping `talkOptions` or `idlePose` on the same `investigation` entry.

`investigation` is one scene object per location id. Intro flags, hotspot progress, and move-menu labels are keyed by that id. Mutating the cast in place makes day-1 revisit dialogue refer to the wrong character and can softlock `unlockedByTalk` chains.

**Case 4 pattern:**

| Base scene | Day 1 id | Later id | Cast change |
|------------|----------|----------|-------------|
| Terrace bar | `hotel_terraza` | `hotel_terraza_d2` | Maruja → Chómpiras |
| Lobby | `hotel_lobby` | `hotel_lobby_d3` | Don Cecilio → Chimoltrufia |
| Detention | `detention` | `detention_d3` | Day-3 taquilla beat (same as Case 3 `_d3` revisit) |

Adjournment `unlockLocations` must list the suffixed id for the next day. See [[docs/architecture/case-scripting.md#Case 4 Assembly (case4)]].
