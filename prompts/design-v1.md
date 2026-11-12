Design this item for {{repo}}. I am the owner that boxxy's text above names, and this is my item. Settle its design questions yourself, from evidence, and write the decisions down. The agent that builds the item must need no design of its own. I don't join this session. Commit nothing, push nothing, and open no pull request.

You are done when you send one close-out:

- `designed`, with the whole design as markdown, in the template below;
- `blocked`, with the reason, when the design needs an answer that only I can give, or the item needs a split. boxxy then holds the item for me;
- `abandoned`, only when this session is broken and a fresh session could do the work, such as a checkout that is corrupted. boxxy then starts a new session.

boxxy's text above gives the close-out command, and `boxxy attempt current` prints the close-out's fields. You record no evidence in this phase. The item follows, from its title to "Notes from me". Its first paragraph is the outcome: what is true once the work is done. Its Permissions section is for the agent that builds it, and gives you nothing.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Notes from me

{{notes}}

# What this session is for

Make each decision yourself, from evidence. A decision that the item or one of my notes states is fixed: build on it, and don't reopen it. The builder gets the item and your design, and nothing else from this session.

These are your permissions for this session. You should read the checkout that you run in, its docs and its history. You should install dependencies, run the tests, and run throwaway scripts in a git-ignored scratch folder, such as `.scratch/`. You should run `codex exec` for the second-opinion reviews. When the repo doesn't ignore the scratch folder, add it to the file that `git rev-parse --git-path info/exclude` prints.

# How to do the work

1. List the design questions. Take the ones that the item names. Add each choice that the builder would otherwise have to make.
2. Learn the system. Read the repo's `docs/vision.md` when the repo has one. Then read the architecture docs, and the code and history that the questions touch. Use the `how` skill for how the system works, and the `why` skill for why it's built that way.
3. Quote each rule that the design relies on, word for word, with its path. Take rules from the repo's docs, its skills and its AGENTS.md. When you can't quote a rule from a file, don't rely on it.
4. Get evidence for each question.
   - For a design that is costly to change and has more than one good answer, such as a public API or a schema, run the `bake-off` skill.
   - When running code can answer the question, such as a question about speed or output, run it. Use the repo's own script that drives the feature as a user would, when the repo has one, such as `bun verify`. Otherwise write a throwaway script.
5. Decide the questions one at a time. Pick the option that your evidence supports, and record the options that you rejected and why. Before you record a decision on stored data or a public interface, get a review of your pick through the `second-opinion` skill.
6. Some questions need me, such as product direction, or a cost that only I can accept. Don't decide such a question. Decide every question that doesn't depend on my answer. Then close out `blocked`, as the last section says.
7. Write the design to the template below. This recipe runs for two kinds of item, and `boxxy attempt current` prints the kind:
   - For a `feature` item, write "What to build" and "Acceptance checks". When one pull request can't build the item, close out `blocked` with the split that you propose, as the last section says. Don't design the parts.
   - A `design` item ends with this session, and merges no code. Write a follow-up item for each piece of work that can land on its own. Those follow-up items are the only work that comes from it.
   - When you decided a follow-up's design, write "What to build" and its acceptance in the follow-up. Copy into it what the decisions settled, word for word: every code block, name, value and example. That follow-up then needs no design session.
   - Write every other piece of work that the design calls for as a follow-up marked "needs its own design".
   - Put in a follow-up only what I approved, in the item or in a note. Behaviour that I didn't ask for is a question for me, as in step 6.
8. Check each "What to build" section that you wrote:
   - each quote matches its file;
   - each path that the section says exists does exist;
   - each acceptance check fails today. Run each check that a command can run. For the others, say why the check would fail.
9. Get one review of the whole design through the `second-opinion` skill, and fix what the review finds.

# The design you hand back

Put the whole design in the `summary` of the close-out's `design`, as markdown, with its code blocks. Set `location` to null. You can't file items or store a document, so each follow-up comes back as text in the design, and I get it filed later.

- Write "the owner" for me, and write no person's name.
- Never name my agent sessions, their roles or the tools that run them. The design's text goes into items and pull requests.
- When you need an example, invent it. Never take one from my messages, my notes or people I know.
- The builder is held to the item's acceptance list, and you can't change that list. Under "Acceptance checks", give each entry of the list with its ID, and how the builder shows it. When the design needs a check that the list lacks, add it, marked "new".

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
- Rejected: <option>, because <why>
- Trade-off: we accept <X> in exchange for <Y>
- Decided by: <the owner, or the agent>

## Open risks

- <what could still go wrong>

## What to build

<types, signatures, call sites and paths, with each rule that you quoted and its path>

## Acceptance checks

- <the entry's ID, or "new">: <a check that runs against the real system, with no mock in its place, and fails today, with the evidence that will show it>

## Follow-up items

### <title, as the outcome, in plain lowercase>

- Kind: <bug, feature, improvement, chore, refactor, perf, hillclimb, design or investigation>
- Outcome: <what is true when the work is done, in 1 to 3 sentences>
- Context: <links and facts that the builder needs>
- Scope: <In: what the work changes. Out: what the owner excluded, or "none stated.">
- Acceptance: <one check per line, each with the evidence that the builder will show>
- What to build: <what the decisions settled, word for word, with its code blocks; or "needs its own design">
````

Always write Problem and Decisions. Leave out any other section that has nothing in it.

# When you are done

Send the close-out last, and send it once: boxxy keeps the first valid one. After boxxy accepts it, remove your scratch folder.

- Send `designed` with the design, when every question is decided.
- Send `blocked` when a question needs me. In the reason, give the question, the options, your recommendation, and each decision that you made so far, with its evidence. The next session gets my answer in a note.
- Send `blocked` when one pull request can't build a `feature` item. In the reason, give each part: a title, an outcome and an acceptance list.
- Send `abandoned` only when this session is broken and a fresh one could do the work. Say what broke.

With any outcome, add a `friction` entry for each thing that slowed you down. Name the skill, rule, lint, AGENTS.md file or tool to change, and the change that would have prevented it.
