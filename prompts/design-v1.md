Design this item for {{ repo }}: settle its design questions from evidence. Leave the agent that builds it no product, architecture or systems decision to make. I don't join this session. Commit nothing, and open no pull request. The item is below, then how I want the work done.

# {{ title }}

{{ outcome }}
{%- if body %}

{{ body }}
{%- endif %}
{%- if acceptance %}

## Acceptance

{{ acceptance }}
{%- endif %}
{%- if notes %}

## Notes

{{ notes }}
{%- endif %}

# How to do the work

1. Learn the system: the repo's docs, then the code and the history that the questions touch. Use the `how` skill for how it works, and the `why` skill for why it's built that way. Quote each rule that you rely on, word for word, with its path. Keep scratch files in `.scratch/`, out of git, and remove them when you finish.
2. List the design questions: the ones the item names, and each choice that the builder would otherwise have to make. What the item or my notes already decide is fixed.
3. Get evidence for each question. Run the code when a run can answer it. For a design that is costly to change and has more than one good answer, such as a public API or a schema, run the `bake-off` skill.
4. Decide each question, and record the options you rejected and why. Before a decision that is hard to undo, get a review of your pick through the `second-opinion` skill.
5. When neither the item nor my notes settles a question about what the project does, its architecture patterns, its stack or how cautious it is, decide it too, and mark it "Decided by: the agent". I review each one after delivery. A wrong call shows me which guidance failed.
6. Write the design to the template below.
   - Follow the `code-style` and `testing` skills in each code sketch, name and acceptance check. The builder copies what you write, and the pull request review checks it against those skills.
   - For a `feature` item, write "What to build", and write the acceptance checks: each one runs against the real system and fails today, and names its evidence, as the `work-items` skill's Acceptance section says. The builder gets the design and the checks, and nothing else from this session. When one pull request can't build the item, close out `blocked` with the split.
   - For a `design` item, write a follow-up item for each piece of work that can land by itself. I have them filed. When one piece must merge before another, say so in the follow-up's "Blocks" line, so that I file it with that order and nothing is built before the work it waits on. Put in a follow-up only what I approved, and copy what the decisions settled word for word.
7. Check the design: each quote matches its file, each path exists, each acceptance check fails today, and each follow-up holds every code block that its decisions settled. Then get one review of it through the `second-opinion` skill, and fix what it finds.

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
- Decided by: <the item, the owner's notes, or the agent>

## Open risks

- <what could still go wrong>

## What to build

<the types, signatures, call sites and paths, with each rule you quoted and its path>

## Follow-up items

### <title, as the outcome, in plain lowercase>

- Kind: <bug, feature, improvement, chore, refactor, perf, hillclimb, design or investigation>
- Outcome: <what is true when it is done>
- Context: <the links and facts its builder needs>
- Scope: <In: what it changes. Out: what the owner excluded, or "none stated.">
- Acceptance: <one check per line, each naming the check that proves it>
- What to build: <the decisions it builds on, word for word, or "needs its own design">
- Blocks: <this item, or the title of each other follow-up, that must wait until this one merges; or "nothing">
````

Leave out a section that has nothing in it. Write "the owner" for me, name no agent session or tool, and invent every example.

# When you are done

Close out `designed` with the whole design as markdown. For a `feature` item, send the acceptance checks in `result.set.acceptance`: they replace the item's acceptance list. Put each thing that slowed you down in `friction`.
