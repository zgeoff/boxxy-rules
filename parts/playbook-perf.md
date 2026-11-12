Make a path that a user waits on faster, and prove the gain with measurements. A measurement can show a gain that isn't real: the work never ran inside the timed part, a failure returned fast, or the difference is noise between runs. Steps 2 and 4 check for each.

An item that sets a minimum number of attempts belongs to the `hillclimb` kind. Close out `blocked`, and say so.

1. Pick the number that matters to the user, from the item, such as the time to the first result. Measure it 5 times before you change anything, with realistic data from the repo's seed or fixtures. Drive the path with the repo's benchmark script, such as a `bench` script in `package.json`. When the repo has none, use `bun verify`, or write a script that times the path. Keep the output.
2. Check the number before you trust it:
   - Make sure that the work happened inside the timed part: rows written, a request answered, a result used. Code that never ran takes no time.
   - Count the errors. A run that fails can return faster than a run that succeeds. Throw a failed run away, find the cause, and fix it.
   - Profile once, outside a timed run, with the runtime's CPU profiler, and log the time of each query. Note the function or query that takes the most time. Your fixes aim at it.
3. Try these kinds of fix in this order, one fix at a time, each aimed at the slowest function or query. Skip a kind that can't apply, and say so in the pull request:
   1. don't do the work at all;
   2. don't do it twice, such as with a cache;
   3. do less of it, such as with a smaller query;
   4. do it later, off the path the user waits on;
   5. do it at the same time as something else;
   6. do it cheaper.
4. After each fix, measure it:
   - Check the number as the first two checks of step 2 say.
   - Measure the commit before the fix and the commit with the fix, each in its own worktree, with the same data. Run each 5 times, and alternate between the two, so that a slow spell on the machine hits both alike.
   - Take the median of each, and the range of each: its slowest run minus its fastest.
   - When the difference between the medians is smaller than the larger range, the fix made no difference. Revert it.
   - When the commit with the fix is slower, revert the fix.
   - Commit a fix that you keep. Then profile again, and aim the next fix at the function or query that is now slowest.
5. Stop when one of these holds:
   - The number meets the item's goal, such as "under 200 ms".
   - The item sets no goal, and you tried each kind that applies once.
   - The kinds ran out before the goal. Push what you have, and close out `blocked` with the goal, the number you reached and each fix you tried.
6. Measure the commit you started from and your final commit, as step 4 says. Then add these lines to the `## Verification` section, in the form that "The pull request" shows:
   - the result, with this table in an `Output:` block of 40 lines or fewer:

     ```markdown
     | Path | Before | After | Change | Runs | Range before | Range after |
     | --- | --- | --- | --- | --- | --- | --- |
     | <the path you measured> | <median> | <median> | <percent> | <count> | <range> | <range> |
     ```
   - the slowest function or query before, and the slowest now;
   - each fix you tried, the reverted ones too: its kind from step 3, the change, and its measured effect;
   - the command that reproduces the measurement, in a `Rerun:` block;
   - the raw runs, in a collapsed `<details>` block of 40 lines or fewer.
