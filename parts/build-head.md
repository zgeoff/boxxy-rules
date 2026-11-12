
I am the owner of this work, and "I" in this prompt means the owner. The text above this prompt comes from boxxy, the system that runs this session: it gives the commands that record evidence and send the close-out. You are done when the pull request's checks are green and you have sent one close-out, `built`, with evidence for each acceptance entry. The item is below, then how I want the work done.

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

