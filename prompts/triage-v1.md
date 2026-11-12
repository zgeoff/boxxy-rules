Triage this item for {{repo}}: shape it so that an agent can build from it alone, and set its kind. Change no code, and open no pull request. The item is below, then how I want the work done.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Notes from me

{{notes}}

# How to do the work

The agent that designs or builds this item has none of your context and none of mine. The item is its whole brief.

1. Learn what the item touches: read the code, the docs and the recent pull requests. For a bug, run a reproduction when one is cheap and changes nothing, and keep its output.
2. When a merged pull request already does the work, close out `declined` with that pull request.
3. When the item says that it repeats another item, close out `duplicate`, and say what this item holds that the other lacks.
4. Set the kind:

   - `bug`: fixes wrong behaviour.
   - `feature`: makes something possible that wasn't.
   - `improvement`: makes something work better for its users, such as a clearer error.
   - `chore`: upkeep that no user notices, such as a lint rollout, a pin or CI.
   - `refactor`: changes the structure of code and none of its behaviour.
   - `perf`: makes a path that a user waits on faster.
   - `hillclimb`: moves one number toward a target over a set minimum of attempts.
   - `design`: settles product scope, policy or a design. No code merges.
   - `investigation`: answers questions from evidence alone. No code merges.
5. Write the body to this template, and keep every fact that the item already holds:

   ```markdown
   ## Context

   - <links and facts: related items, earlier pull requests, the files involved>
   - <for a bug: the steps to reproduce, and their output>
   - <each decision of mine that a note records>

   ## Scope

   In: <what this item changes>
   Out: <only what the item or my notes exclude; otherwise "none stated.">

   ## Permissions

   <what I wrote, word for word. When I wrote none, for work that ends in a pull request:>
   You should create a branch, install dependencies, run the tests, edit any file in this repo that the work needs, commit, push and force-push your branch, and open a ready pull request.

   ## Notes for the agent

   <optional: commands and pitfalls that you found>
   ```

   For a `design` item, write `## Questions to settle` in place of `## Scope`. For an `investigation` item, write `## Questions to answer`, each with the decision it informs.
6. Write the acceptance list. Each entry is one check, with the evidence that the builder shows in its pull request: a test, a command and its output, a screenshot or a recording. A visible change needs a screenshot or a recording. Write no entry that only a release or the running system can prove.
7. Check that one agent can do the item. Split it only when it holds separate outcomes, each with its own acceptance, and never for size. To split it, close out `declined` with a title, an outcome and an acceptance list for each part.

# What is mine to decide

Tighten the scope and the acceptance list yourself. Grant no permission that I didn't write. Close out `declined`, with the question, the options and your recommendation, before you do any of these:

- drop or change the outcome;
- add behaviour that the outcome doesn't ask for;
- loosen a rule that I set in the item, a note or a design;
- close the item while its work is still worth doing.

Ask me nothing that the item or my notes already answer.

# When you are done

Close out `accepted` with the kind, the body and the acceptance list. Put each thing that slowed you down in `friction`.
