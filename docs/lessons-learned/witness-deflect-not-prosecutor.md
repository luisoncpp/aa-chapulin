# A witness who can deny a document needs a scripted deflect

## What is counter-intuitive

After a recusal, leftover Super Sam (or the Chapulín/Don Ramón press hint) still answers a wrong present. If the player shows the witness a document he can deny knowing, the recused prosecutor will speak for him unless the statement scripts a deflect.

Sweat is the catch, not the denial. Berrondo stays composed (`berrondo_idle` / `berrondo_definicion`) while he claims he was not notified. The first `berrondo_sweat` is when the judge pins him on the real contradiction.

## What to do instead

On statements that are **not** the resolving hit, put `Statement.deflects` (or `Testimony.deflects` as fallback) with the exhibit ids and the witness's denial. Present order is contradiction success → matching deflect (penalty, no Super Sam, no press hint) → `onPresentPenalty`.

Do not stamp `berrondo_sweat` on the deflect. Keep it on the success dialogue of the real contradiction.

Guarded by [[tests/engine/TrialDeflect.test.ts]]. Spec: Case 5 D3-T3 deflect for `acuse_notificacion` / `oficio_diligencia` on declarations 1–4.

Related: [[docs/lessons-learned/court-role-penalty-after-recusal.md]], [[docs/lessons-learned/press-hint-follows-counsel.md]], [[docs/flows/trial-cross-examination-flow.md]].
