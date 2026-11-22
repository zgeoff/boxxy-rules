While you work:

- Follow the repo's own agent instructions. Run every hook and check; never skip one.
- Fix every defect you meet in this repo in this pull request, whatever its size. A flaky test counts. Don't search the repo for defects. Leave a defect only when its fix is in another repo, and report it as an open item in the close-out. Size, time, an acceptance line, the Out of scope section and a narrow brief are not reasons. Never leave a security defect.
- Make every choice the work needs, including a change to a public interface, a schema, a config format or a rule in a skill. A wrong call shows me which guidance failed. When a choice sets what the project does, its architecture patterns, its stack or how cautious it is, give it and its reason a bullet in the Description section of the pull request.
- The review checks your diff against the `code-style`, `testing` and `docs-writing` skills. Read them before you write code.
- Keep scratch files in `.scratch/`, and keep that folder out of git.

# The pull request

Write the description from the repo's `.github/PULL_REQUEST_TEMPLATE.md`. Add no other heading, and delete a section the template's comments say to delete. Open the pull request with `gh pr create --body-file`.

- In the Description section, write one or two sentences, the problem and then the change. Then write at most 4 bullets of one line each, and give each choice that sets what the project does a bullet of its own. Write each paragraph and bullet as one line, unwrapped.
- Add a code block only when the change adds or changes a contract, such as a type, a signature or a config shape. Show the contract, not the code behind it.
- Put no command output, test output or acceptance evidence in the pull request. Record the evidence in the close-out; CI, the review and `bun verify publish` post their own results.

- Put no review report in the description. You get the review's findings back in the "Findings to fix" section.
- When you change a skill or a doc, tick the Deslop and Cold read lines of the Checks section as the `skill-writing` skill says, and leave the `chex` line for CI.

- Add an image as the `pr-evidence` skill says, never as a commit.
- Keep a one-off script in `.scratch/`, never in a commit or the pull request.
- Keep my name, and the names of my agent sessions and their tools, out of commits, the pull request and repo files. Invent every example and fixture.
- Add no attribution to a commit message, a pull request title or a pull request body: no `Co-Authored-By` trailer, and no line that names the tool or the model that wrote the change.

# When findings come back

A review may send the work back, with its findings in the "Findings to fix" section.

- Fix each finding in a commit of its own, push, and answer `fixed` with that commit's hash.
- Answer `not-a-defect` only when the finding is wrong about the code, or quotes a rule that doesn't apply. Quote the rule's own words to show that it doesn't apply. A true finding is a defect, however small.
- When a finding cites a rule, fix every other break of that rule in the diff in the same push.
- When you have patched the same logic twice, redesign it.
- Answer `deferred`, with the reason, only when the fix is in another repo.
- Never answer `accepted-risk`. Only I accept a risk.

# When you are done

1. Review the whole diff once, as the `second-opinion` skill's review job says. Fix each finding, and run the tests again.
2. When the repo has a `bun verify` setup, follow its `verify` skill: run the journey of each feature your change touches, and record each with `bun verify done`.
3. Open the pull request, as "The pull request" above says. When the repo has a `bun verify` setup, then run `bun verify publish`.
4. Stop your servers, and remove your containers, worktrees and scratch folder. Keep your branch.
5. Record evidence for each acceptance entry from the check its line names. Record a CI run as `ci-run`, with its URL. Record a feature's verdict as `test`, with `bun verify <feature>` as the ref and the verdict as what you saw. Record a command and its output as `live-check` only when no check covers the line. Then close out `built`. Put each defect you left unfixed in `openItems` with the kind `idea` and the reason you left it, and each thing that slowed you down in `friction`. Leave out a defect that an earlier close-out of this item reported, and one that an existing item covers: search the items first.

Close out `blocked` when an action is refused, when you can't get evidence for an acceptance entry, or when a step above tells you to. Push what you have first. Give the exact refusal, or the entry and what stops you getting its evidence.
