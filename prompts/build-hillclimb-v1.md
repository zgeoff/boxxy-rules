Move this number to its target in {{ repo }} and open a pull request. The item is below, then how I want the work done.

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

## Notes

{{ notes }}
{%- endif %}

# How to do the work

1. Take the metric, which direction is better, the target and the minimum number of attempts from the item. When one is missing, close out `blocked` with the values you propose.
2. Write one script that measures the metric, and commit it. Make it also print an error count and a count of the work done, so that a change that wins by failing shows. Check that it sees a change you make on purpose, then never change it.
3. Run it 5 times on the unchanged code. The median is the baseline, and the spread is the noise.
4. Loop, one guess per attempt, and say why the guess should help. Keep the change only when the metric improves by more than the noise, the tests still pass, and both counts stay the same. Otherwise revert it. Commit each kept change by itself.
5. Log every attempt in a table: the guess, the change, the metric before and after, and kept or reverted. Read the table before each new attempt.
6. After 3 reverts in a row, change approach.
7. Stop when the target and the minimum attempts are both met, or when no guess left is worth its cost. Never lower the target.

While you work:

- Follow the repo's own agent instructions. Run every hook and check; never skip one.
- Fix every defect you meet in this repo, whatever its size. A flaky test counts. Leave a defect only when its fix is in another repo, or depends on a choice that this item doesn't settle. Report each defect you leave as an open item in the close-out. Never leave a security defect.
- The review checks your diff against the `code-style`, `testing` and `docs-writing` skills. Read them before you write code.
- Keep scratch files in `.scratch/`, and keep that folder out of git.

# The pull request

Open it with `gh pr create`, from the repo's template. Show the evidence in the description:

```markdown
## Verification

- [x] <an acceptance entry, in the item's words>: <the test, the command and its result, or the screenshot that shows it>
- [x] Result: <the metric, the target, the baseline, the final value and the change>
- [x] Attempts: <the log table, in a collapsed block>
- [x] Next guess: <what you would try next>
- [x] Tests: <the test for the new or changed code, or why it has none>
- [x] Fixed on the way: <each other defect you fixed, with its commit and test, or "none">

<details><summary>Output</summary>
<the output that proves a line above, in 40 lines or fewer>
</details>

<details><summary>Rerun</summary>
<the command that reproduces it>
</details>
```

- Check each claim in the description against a test or the diff. A claim is not evidence.
- Add an image as the `pr-evidence` skill says, never as a commit.
- Put a one-off script in a collapsed block in the description, never in a commit.
- Keep my name, and the names of my agent sessions and their tools, out of commits, the pull request and repo files. Invent every example and fixture.
- Leave the merge to me.

# When findings come back

A review may send the work back, with its findings in the Findings section.

- Fix each finding in one commit, push, and answer `fixed` with that commit's hash.
- Answer `not-a-defect` only when the finding is wrong about the code, or quotes a rule that doesn't apply. Quote the rule's own words to show it. A true finding is a defect, however small.
- When a finding cites a rule, fix every other break of that rule in the diff in the same push.
- When you have patched the same logic twice, redesign it.
- Never accept a risk for me. Only I do that.

# When you are done

1. Review the whole diff once with `codex review --base main`, or with a fresh subagent when Codex fails. Fix what it finds, and run the tests again.
2. Wait for the pull request's checks, and fix a red one.
3. Stop your servers, and remove your containers, worktrees and scratch folder. Keep your branch.
4. Record evidence for each acceptance entry, then close out `built`. Put each defect you left unfixed in `openItems`, and each thing that slowed you down in `friction`.

Close out `blocked` when you need an answer from me, when an action is refused, or when the pull request can't show an acceptance entry. Push what you have first. Give the one question and your recommendation, or the exact refusal.
