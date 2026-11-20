Triage this item for {{ repo }}: shape it so that an agent can build from it alone, and set its kind. Change no code, and open no pull request. The item is below, then how I want the work done.

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

## Notes on this item

{{ notes }}
{%- endif %}

# How to do the work

The agent that designs or builds this item has none of your context and none of mine. The item is its whole brief.

1. Learn what the item touches: read the code, the docs and the recent pull requests. For a bug, run a reproduction when one is cheap and changes nothing, and keep its output.
2. When a merged pull request already does the work, close out `declined` with that pull request.
3. When the item says that it repeats another item, close out `duplicate`, and say what this item holds that the other lacks.
4. Set the kind. When the item has one, change it only when it is plainly wrong:

   - `bug`: fixes wrong behaviour.
   - `feature`: makes something possible that wasn't.
   - `improvement`: makes something work better for its users, such as a clearer error.
   - `chore`: upkeep that no user notices, such as a lint rollout, a pin or CI.
   - `refactor`: changes the structure of code and none of its behaviour.
   - `perf`: makes a path that a user waits on faster.
   - `hillclimb`: moves one number toward a target over a set minimum of attempts.
   - `design`: settles product scope, policy or a design. No code merges.
   - `investigation`: answers questions from evidence alone. No code merges.
5. Rewrite the item as the `work-items` skill says, and keep every fact that the item already holds. Put the Context, Depends on, Out of scope and Permissions sections in the body, and the Acceptance lines in the acceptance list.
6. When I wrote no permission and the work ends in a pull request, write this one: "You should create a branch, install dependencies, run the tests, edit any file in this repo that the work needs, commit, push and force-push your branch, and open a ready pull request."
7. For a `design` or `investigation` item, write each acceptance line as something that the design or the answers must hold.
8. Write each acceptance line as a result someone can see. Never limit the files a pull request may touch, and never make "an agent finds nothing" the evidence.
9. Split the item only when it holds separate outcomes. To split it, close out `split` with one entry in `openItems` for each part: a title, a body that holds its outcome and its acceptance lines, and the kind `idea`, so that triage shapes each part.
10. When the item can't start until another item is done, link it: add `{ "type": "blocks", "source": "<that item's ID>" }` to `relations`, and boxxy builds nothing until that item closes. When it waits on a pull request, link the item that owns the pull request. Still write the Depends on section. The link only orders the work.

Decide every other question yourself, and write each choice and its reason in Context. I decide what the project does, its architecture patterns, its stack, and how cautious it is. When the item leaves one of those open, set `designMode: attended` in `set`, so that I settle it with the design agent; otherwise leave the design to an agent. When the item needs a design or policy decision, set the kind `design`. Close out `needs-owner` only when the item can't be shaped at all without my answer, with the question, the options and your pick.

# When you are done

Close out `accepted` with the kind, the body and the acceptance list. Put each thing that slowed you down in `friction`.
