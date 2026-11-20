Refactor this code in {{ repo }} and open a pull request. The item is below, then how I want the work done.

# {{ title }}

{{ outcome }}
{%- if body %}

{{ body }}
{%- endif %}
{%- if acceptance %}

## Acceptance

{{ acceptance }}
{%- endif %}
{%- if design %}

## Design

{{ design }}
{%- endif %}
{%- if findings %}

## Findings to fix

{{ findings }}
{%- endif %}
{%- if notes %}

## Notes on this item

{{ notes }}
{%- endif %}

# How to do the work

1. Before you move code, pin what it does today. Run the tests that cover the area, add a test for each function they miss, and commit those tests first. When the repo can drive the feature as a user, do that too, and keep the output.
2. Open a draft pull request that states the structure you aim for: the modules, the types, and which module calls which.
3. Delete what nobody needs, as one commit. Before you remove code that you don't understand, use the `why` skill.
4. Move code in small steps, and run the tests after each. Move every caller of a changed export, and delete the old export in this pull request, unless the item says that this is one step of a longer migration. Then search for the old name: a rename misses strings, docs and comments.
5. Fix a bug you find as its own commit, with a test that fails without the fix.
6. Compare the result with what it replaced. When no function has fewer branches or a shorter path to the code that does the work, revert the refactor. Keep the tests and the bug fixes, and say why in the pull request.
7. Use the `blast-radius` skill on the refactor's commits. A change in behaviour that a caller can see, apart from a rename you meant, is a bug in the refactor.
8. Run the tests again, drive the feature again when you did in step 1, and mark the pull request ready for review.

While you work:

- Follow the repo's own agent instructions. Run every hook and check; never skip one.
- Fix every defect you meet in this repo in this pull request, whatever its size. A flaky test counts. Don't search the repo for defects. Leave a defect only when its fix is in another repo, and report it as an open item in the close-out. Size, time, an acceptance line, the Out of scope section and a narrow brief are not reasons. Never leave a security defect.
- Make every choice the work needs, including a change to a public interface, a schema, a config format or a rule in a skill. A wrong call shows me which guidance failed. When a choice sets what the project does, its architecture patterns, its stack or how cautious it is, list it with its reason under "Decisions" in the pull request's description.
- The review checks your diff against the `code-style`, `testing` and `docs-writing` skills. Read them before you write code.
- Keep scratch files in `.scratch/`, and keep that folder out of git.

# The pull request

Open it with `gh pr create`, and fill in each section of the repo's template as its comments say.

- Check each claim in the description against a test or the diff. A claim is not evidence.
- Add an image as the `pr-evidence` skill says, never as a commit.
- Put a one-off script in a collapsed block in the description, never in a commit.
- Keep my name, and the names of my agent sessions and their tools, out of commits, the pull request and repo files. Invent every example and fixture.
- Add no attribution to a commit message, a pull request title or a pull request body: no `Co-Authored-By` trailer, and no line that names the tool or the model that wrote the change.

# When findings come back

A review may send the work back, with its findings in the Findings section.

- Fix each finding in one commit, push, and answer `fixed` with that commit's hash.
- Answer `not-a-defect` only when the finding is wrong about the code, or quotes a rule that doesn't apply. Quote the rule's own words to show it. A true finding is a defect, however small.
- When a finding cites a rule, fix every other break of that rule in the diff in the same push.
- When you have patched the same logic twice, redesign it.
- Answer `deferred`, with the reason, only when the fix is in another repo.
- Never answer `accepted-risk`. Only I accept a risk.

# When you are done

1. Review the whole diff once with `codex review --base main`, or with a fresh subagent when Codex fails. Fix what it finds, and run the tests again.
2. Stop your servers, and remove your containers, worktrees and scratch folder. Keep your branch.
3. Record evidence for each acceptance entry, then close out `built`. Put each defect you left unfixed in `openItems` with the kind `idea` and the reason you left it, and each thing that slowed you down in `friction`. Leave out a defect that an earlier close-out of this item reported, and one that an existing item already covers: search the items first.

Close out `blocked` when an action is refused, or when the pull request can't show an acceptance entry. Push what you have first. Give the exact refusal, or the entry and what stops the pull request from showing it.
