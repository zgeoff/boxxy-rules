Build this in {{repo}} and open a pull request. I am the owner of this work, and "I" in this prompt means the owner. The text above this prompt comes from boxxy, the system that runs this session: it gives the commands that record evidence and send the close-out. You are done when the pull request's checks are green and you have sent one close-out, `built`, with evidence for each acceptance entry. The item is below, then how I want the work done.

# {{title}}

What I want to be true when this item is done:

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Design

An empty section means no design was made for this item: work from the item's own text.

{{design}}

## Findings to fix

An empty section means this is the first round. Otherwise the review sent the work back: this section says where its findings are and how to answer them, and "A rework round" below says how to work on them.

{{findings}}

## Notes from me

{{notes}}

# Rules for all the work

These hold from the first step of "How to do the work" to the close-out.

- Before you write code, read the repo's own agent instructions, such as `AGENTS.md`, and run the checks they name. You then know what passed before your change.
- Run every git hook and every check. Never skip one with `--no-verify`, a `LEFTHOOK*` variable or a local lefthook config.
- After you close out, boxxy's review phase reads the pull request. It checks the diff against these sections of my shared skills, which this session has loaded. Read them before you write code, and check your diff against them before you finish:
  - `code-style`: Function names, Types, Structure, Errors and logs, Comments, and One-off codemods;
  - `testing`: Principles and Boundaries;
  - `docs-writing`: "Describe the system as it is now", "Give each doc one job, and each fact one doc that owns it", and the Procedures and Formatting rules under Shape the doc.
- Fix every defect you meet in this repo while you work, whatever its size. A failing or flaky test, hook or CI check is a defect. Fix the defects you meet; don't go looking for more.
- Leave a defect unfixed only for one of these reasons:
  - The fix is in another repo.
  - The fix needs a choice that this item doesn't settle, such as a public interface, a schema, a config format or behaviour that others rely on. When the fix works the same whichever way the choice goes, the choice is no reason: fix the defect.
- None of these is a reason: the size of the fix, the time it takes, the number of review rounds so far, the extra push it needs, or an item with a narrow scope.
- Fix a security defect in this repo in this pull request, even when the fix needs a choice that this item doesn't settle. Make the smallest choice that closes the hole, and say which in the pull request. Report a security defect in another repo as an open item.
- When you leave a defect unfixed, carry on with the work, and report the defect as an open item in the close-out. An open item is work that boxxy files as a new item. "When you are done" shows its form.
- When a fix needs an action that is refused, close out `blocked`, as "When you are done" says.
- Some of my repos have a `bun verify` script. It drives a feature the way a user would, and prints what happened. Such a repo also has a skill named `verify-<the app's name>`, whose feature map lists each feature, the command that drives it and the end state that proves it. Look for the script in `package.json`. Where a step names `bun verify` and the repo has none, run the app or call the endpoint yourself, and say so in the pull request.
- Keep scratch files in a git-ignored folder in your checkout, such as `.scratch/`. When the repo doesn't ignore that folder, add it to the file that `git rev-parse --git-path info/exclude` prints. Never change `.gitignore` for it.

# How to do the work

Build what the item asks for, and prove that it works the way a user would use it. Each acceptance entry proves one part. Step 5 drives the whole feature once, as a user.

When the item improves something that exists, show the improvement, and change no other behaviour. You may change an existing test where the acceptance list asks for the new behaviour.

1. When the Design section holds a design, build what it decides. When the design is wrong, build the parts that the fault doesn't affect, push them in a draft pull request, and close out `blocked` with the fault.
2. Define the types before you write logic. Prefer a state machine to a set of booleans, and a table to a chain of if/else. The next agent then sees every state and every case in one place.
3. When the change crosses a module boundary, write the function signatures and the code that calls them before any function body. You then see whether the interface works before you spend time on its insides.
4. Build in small steps. Write a test for each step, and commit the step once its tests pass.
5. Drive the feature with `bun verify`, and keep the output. When `bun verify` can't drive the feature, such as a background job, show its effect another way, such as the record it writes. The run passes when it shows the end state that the acceptance list names. When the list names none, use the end state from step 6.
6. When users can reach the feature and the repo has a feature map, give the feature an entry in the map, in this pull request. Copy the form of the nearest entry. When the change alters a feature that is in the map, update its entry. An entry holds:
   - what the feature is;
   - how a user reaches it;
   - the `bun verify` command that drives it, or how to see its effect when `bun verify` can't drive it;
   - the end state that proves it works.
7. Add one line to the `## Verification` section, in the form that "The pull request" shows: the command from step 5 and the end state it shows. Put the output that shows the end state in an `Output:` block, and the command in a `Rerun:` block.

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
