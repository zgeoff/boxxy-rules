Design this item for {{repo}}: settle its design questions from evidence, so that the agent that builds it has no design choice left to make. I don't join this session. Commit nothing, and open no pull request. The item is below, then how I want the work done.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Notes from me

{{notes}}

# How to do the work

1. Learn the system: the repo's docs, then the code and the history that the questions touch. Use the `how` skill for how it works, and the `why` skill for why it's built that way. Quote each rule that you rely on, word for word, with its path.
2. List the design questions: the ones the item names, and each choice that the builder would otherwise have to make. What the item or my notes already decide is fixed.
3. Get evidence for each question. Run the code when a run can answer it. For a design that is costly to change and has more than one good answer, such as a public API or a schema, run the `bake-off` skill.
4. Decide each question, and record the options you rejected and why. Before a decision that is hard to undo, get a review of your pick through the `second-opinion` skill.
5. When a question needs me, such as product direction or a cost that only I can accept, decide what doesn't depend on it. Then close out `blocked` with the question, the options, your recommendation and the decisions so far.
6. Write the design to the template below.
   - For a `feature` item, write "What to build" and "Acceptance checks": the builder gets the design in full, and nothing else from this session. When one pull request can't build the item, close out `blocked` with the split.
   - For a `design` item, write a follow-up item for each piece of work that can land by itself. I have them filed. Put in a follow-up only what I approved, and copy what the decisions settled word for word.
7. Check the design: each quote matches its file, each path exists, and each acceptance check fails today. Then get one review of it through the `second-opinion` skill, and fix what it finds.

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

Leave out a section that has nothing in it. Write "the owner" for me, and invent every example.

# When you are done

Close out `designed` with the whole design as markdown. Put each thing that slowed you down in `friction`.
