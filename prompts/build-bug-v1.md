Fix this bug in {{repo}} and open a pull request. The item is below, then how I want the work done.

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

1. Reproduce the bug, and keep the output. Use the item's reproduction when it gives one. Skip this step only when the code shows the defect plainly, such as an inverted condition.
2. Find the cause. Test one guess at a time with a run. The code you suspect first is often not the cause.
3. Fix the code that makes the bad value. A guard where the value is read hides the bug. List the bad records that are already stored, and leave them as they are.
4. Search the repo for the same faulty call, and fix each match that has the same defect.
5. Add a test that fails without the fix and passes with it. Check that it fails for the right reason: take the fix out, run the test, and put the fix back.
6. Run the reproduction again, and keep the passing output.

While you work:

- Follow the repo's own agent instructions. Run every hook and check; never skip one.
- Fix every defect you meet in this repo, whatever its size. A flaky test counts. Leave one only when its fix is in another repo, or needs a choice that this item doesn't settle; report it as an open item in the close-out. Always fix a security defect in this repo.
- The review checks your diff against the `code-style`, `testing` and `docs-writing` skills. Read them before you write code.
- Keep scratch files in `.scratch/`, and keep that folder out of git.

# The pull request

Open it with `gh pr create`, from the repo's template. Show the evidence in the description:

```markdown
## Verification

- [x] <an acceptance entry, in the item's words>: <the test, the command and its result, or the screenshot that shows it>
- [x] Reproduction: <what it showed before the fix, and after>
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
