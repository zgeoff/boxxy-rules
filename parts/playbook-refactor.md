Change the structure of the code, and keep its behaviour. A passing type check doesn't prove that the behaviour stayed the same, so step 2 records the behaviour first. A refactor can also end no simpler than the code it replaced, so step 9 measures that.

1. Work out the area: the files that the item names, and the functions elsewhere that call into those files directly. When the item names no file, take the files that hold the code it describes.
2. Record what the area does today, before you move any code:
   - Run the tests that import the area's files. These are the baseline tests.
   - When an exported function in the area has no test, write a test for what the function does today. Commit these tests first.
   - When a baseline test fails before your change, fix the failure in its own commit. When you can't tell what the code is meant to do, close out `blocked` with the failure.
   - When the repo's feature map holds a feature in the area, drive it with `bun verify`, and keep the output.
3. After your first commit, open a draft pull request. Under `## Structure` in its description, write the structure you aim for: the module layout, the types, and which module calls which.
4. Before you remove code that you don't understand, use the `why` skill.
5. Delete what nobody needs, in one commit: dead code, and each input check that repeats an earlier check on the same code path. Keep the check that is closest to where the input enters.
6. Inline each function that only passes its arguments on to another function and has one caller. Then move the code in small moves, one commit for each. Run the baseline tests after each move. When the same edit repeats across more than about 10 files, write a codemod, and commit its edits. Never commit the codemod.
7. When an exported function or type changes, move every caller to the new one, and delete the old one, in this pull request. Then search the repo for the old name: a rename can miss uses in strings, docs and comments. When the item says that this pull request is one of several in a migration, keep the old code that the old callers still need, and list each piece under `## Not changed` in the description.
8. Fix each bug that you find in the area, in its own commit, with a test that fails without the fix. When the fix changes what a baseline test expects, update that test, and say why in the commit message.
9. Compare the code with what it replaced. For each exported function that the area had before, count its branches, and count the calls that a reader follows from it to the code that does the work. When no function's counts dropped, the refactor made nothing simpler:
   - Revert the commits from steps 5 to 7, with `git revert`.
   - Keep the tests and the bug fixes.
   - Close out `blocked`. Say that the refactor made nothing simpler, and give the counts.
10. Use the `blast-radius` skill on the commits from steps 5 to 7. Apart from the renames that step 7 makes on purpose, those commits must change nothing that a caller can see. Treat any other change it finds, such as a different error message, as a bug in your refactor, and fix it.
11. Run the baseline tests again, and expect them all to pass. When you kept `bun verify` output in step 2, drive the feature again. Expect the same output, apart from values that change on every run.
12. Add these lines to the `## Verification` section, in the form that "The pull request" shows:
    - the test command and its result;
    - one line for each `bun verify` run, with its output in an `Output:` block;
    - what got simpler, with the counts from step 9;
    - for each bug from step 8: `- [x] Fixed on the way: <the bug>, <commit>, "<test name>"`, or `- [x] Fixed on the way: none`.

    Put the test command and the `bun verify` commands in a `Rerun:` block.
