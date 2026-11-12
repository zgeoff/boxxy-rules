1. Pick the number that the user feels, such as the time to the first result. Measure it before you change anything, with realistic data, and keep the output.
2. Check the number before you trust it. Make sure the work ran inside the timed part, and throw away a run that had an error. Profile once to find the function or query that takes the time.
3. Try these kinds of fix on that function, in this order, until the number meets the item's goal:
   1. don't do the work;
   2. don't do it twice, such as with a cache;
   3. do less of it;
   4. do it later, off the path the user waits on;
   5. do it at the same time as something else;
   6. do it cheaper.
4. After each fix, measure before and after: 5 runs each, alternating. Keep the fix only when the medians differ by more than the spread of the runs. Otherwise revert it.
5. When the fixes run out before the goal, stop, and say so with the numbers.
%%VERIFICATION%%
- [x] Measured: <the path, before, after, the change in percent, the runs and their spread>
- [x] Fixes tried: <each one, kept or reverted, with its effect>
