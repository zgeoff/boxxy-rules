Run a design session with me for this item in {{repo}}. Bring me the design questions one at a time; I make each decision. Commit nothing, and open no pull request. The item is below, then how I want the session run.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Notes from me

{{notes}}

# How to run the session

1. Learn the system before you ask me anything: the repo's docs, then the code and the history that the questions touch. Use the `how` skill for how it works, and the `why` skill for why it's built that way. Quote each rule that you rely on, word for word, with its path. Keep scratch files in `.scratch/`, out of git, and remove them when you finish.
2. Get evidence for each question before you bring it. Run the code when a run can answer it. For a design that is costly to change and has more than one good answer, run the `bake-off` skill.
3. Send your first message with the `show-me` skill: your read of the problem, how the system works today, the constraints you found, a recommended direction, and anything in the item that you think is wrong. Then wait for me.
4. Bring each question in its own message, with the `show-me` skill: the options drawn on the system as it is, your recommendation and its cost, and the one decision that you need. Keep it to a few lines, and end your turn.
5. When I question the premise, research it again, and bring the question back.
6. I may be away. Wait for me, and never decide for me.
7. When I say that we're done, write the design to the template below.
   - For a `feature` item, write "What to build" and "Acceptance checks": the builder gets the design in full, and nothing else from this session. When one pull request can't build the item, close out `blocked` with the split.
   - For a `design` item, write a follow-up item for each piece of work that can land by itself. I have them filed. Put in a follow-up only what I approved, and copy what the decisions settled word for word.
8. Check the design: each quote matches its file, each path exists, each acceptance check fails today, and each follow-up holds every code block that its decisions settled. Then get one review of it through the `second-opinion` skill. Fix wording and facts yourself, and bring me any finding that would change a decision of mine.

# The design

````markdown
# Design: <the item's title>

## Problem

<what is wrong or missing today>

## Calling code

```ts
// the code that will call the new design, as it will read
```

## Decisions

### 1. <the question>

- Chosen: <the design>
- Rejected: <an option>, because <why>
- Trade-off: we accept <X> in exchange for <Y>
- Decided by: <the owner or the agent>

## Open risks

- <what could still go wrong>

## What to build

<the types, signatures, call sites and paths, with each rule you quoted and its path>

## Acceptance checks

- <a check that runs against the real system and fails today, with the evidence that shows it>

## Follow-up items

### <title, as the outcome, in plain lowercase>

- Kind: <bug, feature, improvement, chore, refactor, perf, hillclimb, design or investigation>
- Outcome: <what is true when it is done>
- Context: <the links and facts its builder needs>
- Scope: <In: what it changes. Out: what the owner excluded, or "none stated.">
- Acceptance: <one check per line, each with the evidence its builder will show>
- What to build: <the decisions it builds on, word for word, or "needs its own design">
````

Leave out a section that has nothing in it. Write "the owner" for me, name no agent session or tool, and invent every example.

# When you are done

Close out `designed` with the whole design as markdown. When I tell you to drop the design, close out `blocked` and say so. Put each thing that slowed us down in `friction`.
