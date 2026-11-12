# A rework round

When the Findings section holds findings, the pull request exists already. Skip the steps above that you already did, and work on the findings:

- Answer every finding, where and how the Findings section says.
- Put the fix for each finding in one commit. Squash its commits before you push, and push to the same pull request.
- Answer `fixed` only after you push the fix. Give the hash of the commit that holds the fix, as that hash is on the pushed branch. After a rebase, give the new hash.
- Answer `not-a-defect` only when the finding is wrong about the code, or quotes a rule that doesn't apply. A true finding is a defect, however small. When the finding quotes a rule from one of my shared skills, quote the words that show the rule doesn't apply:
  - for `code-style` and `testing`, quote the shared skill, because a repo's own project skill can only add rules to these two;
  - for `docs-writing`, quote the shared skill or a line of the repo's project skill, because the project skill wins there.

  When you can't find such a quote, fix the finding.
- When a true finding's fix is in another repo, or needs a choice that this item doesn't settle, answer with that reason and leave the finding open. Report it as an open item in the close-out.
- Never answer that a risk is accepted. Only I accept a risk.
- When a finding that you fix cites a rule, read the rule again. Then search the whole diff for other breaks of that rule, and fix them all in one push.
- When you have patched the same logic twice, redesign that logic. Never patch it a third time. When the redesign needs a choice that this item doesn't settle, leave it unfixed for that reason.
- Update the `## Verification` section, then go to "When you are done". Skip its step 1.

# The pull request

Push your branch and open the pull request with `gh pr create`, from the repo's template, when the work is ready for my review. Open it earlier, as a draft, only where a step says so. boxxy links the pull request to this item when `gh pr create` runs, so you add no link yourself.

Put the evidence in the description, under `## Verification`. When the repo's template has no such section, add one. Use this form:

```markdown
## Verification

- [x] <an acceptance entry, in the item's words>: <what shows it: a test's name, a command and its result, or a screenshot>
- [x] <each line that "How to do the work" asks for>
- [x] <each fix you made on the way, and each check that CI can't run>
- [x] New or changed code has a test: <the test's name, or the reason the code has none>

<details><summary>Output: <the line it proves></summary>

<the output that proves the line, trimmed to what shows it, in 40 lines or fewer>

</details>

<details><summary>Rerun: <the line it reproduces></summary>

<the command or script that reproduces it>

</details>
```

- Write one line for each acceptance entry, even when its evidence is a check that CI runs. For the other lines, leave out a check that CI runs anyway.
- Keep each line to 30 words or fewer. Give a line an `Output:` block, a `Rerun:` block, or both, when the line alone doesn't prove itself.
- When the pull request can't show an acceptance entry, close out `blocked`, as "When you are done" says.
- A claim is not evidence. Before you open the pull request, and before each later push, check each claim in the description against a test or the diff.
- Add an image as the `pr-evidence` skill says, never as a commit.
- Put a one-off script or codemod, with the command that runs it, in a collapsed `<details>` block in the description, never in a commit. Commit a script only when the repo will run it again.
- Write no person's name in commit messages, the pull request or repo files, and leave the git identity as it is set.
- Never name my agent sessions, their roles or the tools that run them, such as boxxy, in commit messages, the pull request or repo files. Write "a second review" for the review in step 1 below. This rule doesn't cover the close-out.
- Invent every example, test and fixture. Never take one from my notes, my messages or people I know.
- Leave the merge to me.

# When you are done

1. On the first round, review the whole diff once, before you ask for my review. Run `codex review -c model_reasoning_effort=medium --base main`, with the repo's default branch in place of `main` when the two differ. When Codex fails or takes over 15 minutes, start a fresh subagent, give it the diff and the item, and ask it for defects. Fix each finding that is true, run the tests again, and push.
2. Open the pull request, or update its description. Mark a draft pull request ready for review.
3. Wait for the checks at the pull request's head, with `gh pr checks --watch`. Fix a red check, push, and wait again.
4. Record one piece of evidence for each acceptance entry, with the command that boxxy's text gives. Use kind `test` for a test, `ci-run` for a check that ran on the pull request, and `live-check` for anything else you ran or saw, such as a command's output, a measurement or a screenshot. In `--ref`, name the test, the check or the command.
5. Make sure the pull request holds every line of output that its evidence cites. Then stop your dev servers and daemons, and remove your containers, your temporary worktrees and your scratch folder. Keep your branch.
6. Send the close-out once, last. The first valid close-out is final, so put all of this in it:
   - `result`: `built`;
   - `criteria`: each acceptance entry with the ID of its evidence. boxxy refuses `built` when an entry has no evidence;
   - `openItems`: one for each defect you left unfixed;
   - `friction`: one entry for each thing that slowed you down, with the change that would have prevented it.

An open item has a title and a body. Write the title as what is true once the defect is fixed. Write the body in this form:

```markdown
## Context

<"Security." first, for a security defect. Then the file and line, and one sentence of evidence.>

## Scope

<what the fix changes>

## Why it is not fixed here

<the file path in the other repo, or the choice this item doesn't settle>

## Acceptance

- <a check, and the evidence that shows it>
```

Write each friction entry in this form:

```json
{ "target": { "kind": "<skill | rule | lint | agents-md | tool>", "name": "<its name>" }, "change": "<the change that would have prevented the delay>" }
```

Close out `blocked` when one of these stops you. First push what you have, in a draft pull request when none is open, and do step 5. Put the open items and the friction in this close-out too.

- You can't go on without an answer from me. Give the one question, the options and your recommendation.
- An action is refused, or a failure outside this repo stops you. Give the exact text of the refusal or the failure.
- The pull request can't show an acceptance entry. Name the entry, and say why.
- A step in "How to do the work" tells you to close out `blocked`. Give what the step asks for.

Close out `abandoned` only when this session itself is broken and a fresh session could do the work, such as a checkout you can't repair. Say what broke. boxxy then starts the build again in a new session.
