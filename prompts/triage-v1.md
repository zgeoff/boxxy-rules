Triage this item for {{repo}}. I am the owner that boxxy's text above names, and this is my item. Shape it so that an agent can build from it alone, and set its kind. Change no code, and open no pull request.

You are done when you send one close-out:

- `accepted`, with the kind, the item's body and the acceptance list;
- `declined`, with the reason, when the item needs me. boxxy then holds the item until I answer or close it;
- `duplicate`, when the item or a note of mine says that it repeats another item.

Avoid these mistakes: an item that leaves out an action its builder needs, an item that gains behaviour I never asked for, and a question to me that the item or my notes already answer.

boxxy's text above gives the close-out command, and `boxxy attempt current` prints the close-out's fields. You record no evidence in this phase. The item follows, from its title to "Notes from me". An empty section means that the item holds nothing there. Its first paragraph is the outcome: what is true once the work is done.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Notes from me

{{notes}}

# What triage is for

The agent that designs or builds this item has none of your context and none of mine. The item is its whole brief. Put every fact that it needs in the item.

# How to do the work

1. Learn what the item touches. Read the code and the repo's docs. Read the pull requests of the last few weeks that touch the same files.
2. When the item reports wrong behaviour, try to reproduce it. Do this only when a reproduction takes a few minutes and writes nothing outside your checkout. Keep the command and its output for the item's body.
   - When the reproduction would cost more than that, skip it, and say so in the body.
   - When you ran it, the bug did not show, and the item gives no steps to reproduce it, close out `declined` and say what you ran.
3. Check that the work is not done already. When a merged pull request does it, close out `declined` and name that pull request.
4. Look for other items that the item's text or my notes name. You can't list or open other items, so judge only from what this item says about them:
   - When the text says that this item repeats a named item, and you are sure, close out `duplicate` of that item. Say in the reason what this item holds that the other may lack.
   - When this item must land before a named item, add a `blocks` relation to that item.
   - When this item waits on a named item, write "Waits on <the item>" in the body's Context. A close-out can't add that relation, so I add it.
   - When the two overlap in another way, add a `relates-to` relation, and say in the body which part belongs to which item.
   - When the two can't both be built as written, close out `declined`. Give both items, what each would build, and your recommendation.
5. Set the kind. When `boxxy attempt current` shows that the item arrived with one of these kinds, change it only when it is plainly wrong:

   - `bug`: fixes wrong behaviour.
   - `feature`: makes something possible that wasn't.
   - `improvement`: makes something work better for its users, such as a clearer error.
   - `chore`: upkeep that no user notices, such as a lint rollout, a sync, a pin or CI.
   - `refactor`: changes the structure of code and none of its behaviour.
   - `perf`: makes a path that a user waits on faster, with a measurement as its acceptance.
   - `hillclimb`: moves one number toward a target over a set minimum of attempts.
   - `design`: settles product scope, policy or a design, and merges no code.
   - `investigation`: answers questions from evidence alone, such as a measurement or a library comparison, and merges no code.
6. Write the item's body to this template. Keep every fact that the item already holds:

   ```markdown
   ## Context

   - <links and facts: related items, earlier pull requests, the files involved>
   - <for a bug: the steps to reproduce, and their output>
   - <each decision of mine that a note records>

   ## Scope

   In: <what this item changes>
   Out: <only what the item or my notes exclude; otherwise "none stated.">

   ## Permissions

   <what I wrote, word for word; when I wrote nothing, the line for the item's kind, below>

   ## Notes for the agent

   <optional: commands and pitfalls that you found>
   ```

   - For a `design` item, write `## Questions to settle` in place of `## Scope`, with one question per line. Link in Context everything that the design session needs.
   - For an `investigation` item, write `## Questions to answer` in place of `## Scope`. Give one question per line, each with the decision that its answer informs.
   - When I wrote no permission, write this line for a `design` or `investigation` item: "You should read the checkout, install dependencies, run the tests, and run throwaway scripts in a scratch folder."
   - For every other kind, write this line: "You should create a branch, install dependencies, run the tests and evals, edit any file in this repo that the work needs, commit, push and force-push your branch with `--force-with-lease`, and open a ready pull request."
   - Add no other permission. The builder acts on this section, so a permission that I did not write is my call.
7. Write the acceptance list. Each entry is one check, with the evidence that shows it.
   - Write at least one entry.
   - For an item that merges code, the builder shows the evidence in its pull request:
     - a test;
     - a command and its output;
     - an eval run;
     - a demo;
     - a screenshot or a recording.
   - For a change that a user can see, name a screenshot or a recording.
   - Write only entries that a pull request can show. boxxy refuses a finished build that lacks evidence for an entry, so leave out an entry that only a release or the running system can prove.
   - For a `design` or `investigation` item, each entry says what the design or the answers must hold, such as "each question has an answer with its evidence".
   - Make sure that the thing each entry tests exists already, or that this item builds it, or that an item this one waits on builds it. When none of these holds, rewrite the entry or the scope until one does.
8. Check that one agent can do the item, in one or more pull requests. An item that is one outcome stays one item, however large: a split for size leaves parts that can't land alone.
   - Split the item only when it holds separate outcomes, each with its own acceptance.
   - Never split a change that must land together.
   - You can't file items. To split, close out `declined` and give each part: a title, an outcome and an acceptance list. Write each title as the outcome, in plain lowercase, with no kind in front.

# What you may change, and what is mine

- When the item keeps its outcome, and each check stays or gets stricter, rewrite the scope and the acceptance list yourself.
- When a note records my decision, write the decision into the body. Don't ask me again.
- I make these calls:
  - to drop or change the outcome;
  - to add behaviour that the outcome doesn't ask for;
  - to loosen a rule that I set in the item, in a note or in a design doc in the repo;
  - to close the item while its work is still worth doing.
- When the item needs one of my calls, or a question blocks the build and only I can answer it, close out `declined`. Give the question, the options and your recommendation.
- When the item asks for my approval before it is built, check whether it touches one of my calls. When it does, close out `declined` with the question. When it doesn't, accept it.
- Leave `designMode` out of the close-out. It records whether I join the design session, and only I set it.

# When you are done

Send the close-out last, and send it once: boxxy keeps the first valid one. With `accepted`, send the kind, the acceptance list and the item's body.

With any outcome, add a `friction` entry for each thing that slowed you down. Name the skill, rule, lint, AGENTS.md file or tool to change, and the change that would have prevented it.
