Refactor this code in {{repo}} and open a pull request. The item is below, then how I want the work done.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Design

{{design}}

## Findings to fix

{{findings}}

## Notes

{{notes}}

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
- Fix every defect you meet in this repo, whatever its size. A flaky test counts. Leave a defect only when its fix is in another repo, or depends on a choice that this item doesn't settle. Report each defect you leave as an open item in the close-out. Never leave a security defect.
- The review checks your diff against the `code-style`, `testing` and `docs-writing` skills. Read them before you write code.
- Keep scratch files in `.scratch/`, and keep that folder out of git.

# The pull request

Open it with `gh pr create`, from the repo's template. Show the evidence in the description:

```markdown
## Verification

- [x] <an acceptance entry, in the item's words>: <the test, the command and its result, or the screenshot that shows it>
- [x] Behaviour kept: <the test command and its result>
- [x] Simpler: <what got simpler, or why you reverted>
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
