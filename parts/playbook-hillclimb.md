Move one number toward a target over many attempts. Each attempt is one code change and one measurement, and you keep the change or revert it. A run can look like a win when it isn't: one lucky early attempt, a change that wins by failing or by producing less, or a target lowered until the number meets it. The steps below check for each.

1. Take these from the item before you change anything: the metric, which direction is better, the target, and the minimum number of attempts. The minimum stops one lucky early win from ending the run. When the item lacks one of them, close out `blocked` with the values you propose.
2. Write one script that measures the metric, and commit it. Never change it once you start.
   - Make the script also print an error count, and a count of what the program produced, such as requests answered, rows written or commands that ran. A change that wins by failing, or by producing less, then shows in those counts.
   - Test the script before you start. Make a change that must move the metric, such as a delay for a speed metric, and check that the script shows it. Then remove that change.
3. Keep a log of the attempts as a table in your scratch folder, and read it before each new attempt:

   ```markdown
   | # | Guess | Change | Before | After | Tests | Kept |
   | --- | --- | --- | --- | --- | --- | --- |
   | 0 | baseline | none | <median> | <range> | <pass or fail> | - |
   | 1 | <why it should help> | <commit, or one line> | <median> | <median> | <pass or fail> | <kept or reverted> |
   ```
4. Run the script 5 times on the unchanged code. The median is the baseline. The range, the highest result minus the lowest, is the noise. Run the whole test suite. Log the baseline, the noise and the test result as row 0.
5. Make one guess for each attempt. A guess says why the change should help, such as "move the font load off the startup path, because it blocks the first paint". For a speed metric, try these kinds of guess in this order. Each keeps the results the same and does less to produce them:
   1. don't do the work;
   2. don't do it twice;
   3. do less;
   4. do it later;
   5. do it at the same time as something else;
   6. do it cheaper.
6. For each attempt:
   - Make the code change. Run the script 5 times, and run the tests.
   - Compare the median with the last result you kept, or with the baseline when you have kept none.
   - Keep the change only when all of these hold: the metric moved the better way by more than the noise, every test that passed in row 0 still passes, and the error count and the produced count are the same.
   - Otherwise revert every file that the attempt touched.
   - Commit a change that you keep, in its own commit. Log the row either way.
7. After 3 reverted attempts in a row, change your approach. Try one of these:
   - a guess of another kind from step 5;
   - two reverted changes together, when each moved the metric by less than the noise;
   - a fresh read of the code.
8. Stop when the target and the minimum number of attempts are both met, or when every guess you have left would cost more than it could gain. Never lower the target to meet it. When you stop short of the target, close out `blocked` with the target, the number you reached and the next guess you would try.
9. Add these lines to the `## Verification` section, in the form that "The pull request" shows:
   - the metric, the target, the baseline, the final result, and how far the metric moved, in its unit and in percent, with the output that shows the final result in an `Output:` block;
   - the script's path, with the command that runs it in a `Rerun:` block;
   - the next guess you would try;
   - the log from step 3, in a collapsed `<details>` block.
