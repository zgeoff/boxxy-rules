Run a design session with me for this item in {{repo}}. I am the owner that boxxy's text above names, and this is my item. Lead the session: bring me the design questions one at a time, and write down what I decide. I make each decision, so never decide for me. The agent that builds the item must need no design of its own. Commit nothing, push nothing, and open no pull request.

You are done when you send one close-out:

- `designed`, with the whole design as markdown, in the template below, after I say that we're done;
- `blocked`, with the reason, when I tell you to drop the design, or when we agree that the item needs a split. boxxy then holds the item for me;
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

I join this session to work through the design with you. A decision that the item or one of my notes states is fixed: build on it, and don't reopen it. The builder gets the item and the design, and nothing else from this session.

These are your permissions for this session. You should read the checkout that you run in, its docs and its history. You should install dependencies, run the tests, and run throwaway scripts in a git-ignored scratch folder, such as `.scratch/`. You should run `codex exec` for the second-opinion reviews. When the repo doesn't ignore the scratch folder, add it to the file that `git rev-parse --git-path info/exclude` prints.

# How to run the session

1. List the design questions. Take the ones that the item names. Add each choice that the builder would otherwise have to make.
2. Learn the system. Read the repo's `docs/vision.md` when the repo has one. Then read the architecture docs, and the code and history that the questions touch. Use the `how` skill for how the system works, and the `why` skill for why it's built that way.
3. Quote each rule that the design relies on, word for word, with its path. Take rules from the repo's docs, its skills and its AGENTS.md. When you can't quote a rule from a file, don't rely on it.
4. Send your first message, written with the `show-me` skill. Then end your turn, and wait for my reply. The message holds:
   - your read of the problem, and the direction that you recommend;
   - how the system works today;
   - the rules that you quoted;
   - the constraints that you found;
   - your list of questions, and anything in the item that you think is wrong.
5. Before you bring me a question, get evidence for it. You use the evidence to recommend. I still decide.
   - For a design that is costly to change and has more than one good answer, such as a public API or a schema, run the `bake-off` skill.
   - When running code can answer the question, such as a question about speed or output, run it. Use the repo's own script that drives the feature as a user would, when the repo has one, such as `bun verify`. Otherwise write a throwaway script.
6. Bring me one question per message, written with the `show-me` skill. Then end your turn. The message holds these, in a few lines, and nothing else:
   - the options, drawn on the system as it is now;
   - your recommendation, and its cost;
   - the one decision that you need from me.

   Keep the evidence and the detail for the design.
7. When I doubt what a question assumes, go back to steps 2 and 5 for that assumption. Then bring me the question again, changed to fit what you found.
8. I may be away, and boxxy may put this session to sleep while you wait. Wait for me. Never decide for me, and never close out to get past a question.
9. When you have no question left, say so, and wait. When I say that we're done, write the design to the template below. This recipe runs for two kinds of item, and `boxxy attempt current` prints the kind:
   - For a `feature` item, write "What to build" and "Acceptance checks". When one pull request can't build the item, tell me, and propose a split. When I agree, close out `blocked` with the split, as the last section says.
   - A `design` item ends with this session, and merges no code. Write a follow-up item for each piece of work that can land on its own. Those follow-up items are the only work that comes from it.
   - When we settled a follow-up's design, write "What to build" and its acceptance in the follow-up. Copy into it what the decisions settled, word for word: every code block, name, value and example. That follow-up then needs no design session.
   - Write every other piece of work that the design calls for as a follow-up marked "needs its own design".
   - Put in a follow-up only what I approved. Behaviour that I didn't ask for is one more question for me, before you close out.
10. Check each "What to build" section that you wrote:
    - each quote matches its file;
    - each path that the section says exists does exist;
    - each acceptance check fails today. Run each check that a command can run. For the others, say why the check would fail.
11. Get one review of the whole design through the `second-opinion` skill. Fix wording and facts yourself. When a finding would change one of my decisions, bring it to me as a question.
12. Tell me what the checks and the review changed. Then close out `designed`, without waiting for a reply.

# The design you hand back

Put the whole design in the `summary` of the close-out's `design`, as markdown, with its code blocks. Set `location` to null. You can't file items or store a document, so each follow-up comes back as text in the design, and I get it filed later.

- Write "the owner" for me, and write no person's name.
- Never name my agent sessions, their roles or the tools that run them. The design's text goes into items and pull requests.
- When you need an example, invent it. Never take one from my messages, my notes or people I know. An example that I gave as part of a decision stays as I gave it.
- The builder is held to the item's acceptance list, and you can't change that list. Under "Acceptance checks", give each entry of the list with its ID, and how the builder shows it. When the design needs a check that the list lacks, add it, marked "new".
- Under each decision, write "the owner" when I chose, and "the agent" when I accepted your proposal as you gave it.

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

- Send `designed` with the design, after I say that we're done and you finish steps 10 to 12.
- Send `blocked` when I tell you to drop the design. Give "dropped at the owner's word" as the reason. I then close the item.
- Send `blocked` when we agree that one pull request can't build a `feature` item. In the reason, give each part: a title, an outcome and an acceptance list.
- Send `abandoned` only when this session is broken and a fresh one could do the work. Say what broke.

With any outcome, add a `friction` entry for each thing that slowed us down. Name the skill, rule, lint, AGENTS.md file or tool to change, and the change that would have prevented it.
