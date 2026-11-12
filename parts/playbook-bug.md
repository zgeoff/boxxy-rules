Find the cause of the bug, fix it, and prove the fix with a run. The code you suspect first is often not the cause, so test each guess. Fix the code that makes the bad value. A guard at the place that reads the value hides the bug.

1. Read the code around the bug.
2. Reproduce the bug: run a command whose output shows it, and keep the output for the pull request.
   - When the item gives a reproduction, use it.
   - Otherwise use the first of these that reaches the bug: `bun verify`, a command that runs the app or calls the endpoint, or a failing test.
   - Always reproduce a bug that came from a live incident or a user's report, and a bug whose cause the code doesn't show.
   - Skip the reproduction only when the code shows the defect plainly, such as a wrong value, an inverted condition or a typo.
   - When no reproduction shows the bug, close out `blocked` with each command you ran and its output.
3. Find the cause. Test one guess at a time with a run, such as a focused test or a throwaway script. When you don't know how the code works, use the `how` skill. Before you remove code that you don't understand, use the `why` skill.
4. Fix the cause. When the bug wrote records that should never exist, such as an order with no customer, fix the code that writes them. Leave the stored records as they are, unless the item says to repair them. In the pull request, list them, or give the query that finds them when you can't read the store.
5. Search the repo for the same faulty expression or call, and fix each match that has the same defect, in this pull request. A copy of the bug left elsewhere is the next bug report.
6. Add a test that fails without the fix and passes with it. A reproduction that is a failing test can be this test. Then check the test: take the fix out of the source files, keep the test, run it, and put the fix back. Before a commit, `git stash push <the source files>` takes the fix out. After a commit, `git checkout <the commit before the fix> -- <the source files>` does. Expect a failure message that shows the bug. A setup error or an import error proves nothing.
7. When you reproduced the bug in step 2, run the reproduction again, and keep the passing output.
8. Add these lines to the `## Verification` section, in the form that "The pull request" shows:
   - with a reproduction: the test's name and what the reproduction showed, with its output before and after the fix in an `Output:` block, and its command in a `Rerun:` block;
   - without a reproduction: the test's name, its failing and passing results, and `No reproduction: <why the code alone shows the defect>`;
   - for each other match from step 5: `- [x] Fixed on the way: <the bug>, <commit>, "<test name>"`, or `- [x] Fixed on the way: none`.
