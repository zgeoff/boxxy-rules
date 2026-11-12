1. Take the metric, which direction is better, the target and the minimum number of attempts from the item. When one is missing, close out `blocked` with the values you propose.
2. Write one script that measures the metric, and commit it. Make it also print an error count and a count of the work done, so that a change that wins by failing shows. Check that it sees a change you make on purpose, then never change it.
3. Run it 5 times on the unchanged code. The median is the baseline, and the spread is the noise.
4. Loop, one guess per attempt, and say why the guess should help. Keep the change only when the metric improves by more than the noise, the tests still pass, and both counts stay the same. Otherwise revert it. Commit each kept change by itself.
5. Log every attempt in a table: the guess, the change, the metric before and after, and kept or reverted. Read the table before each new attempt.
6. After 3 reverts in a row, change approach.
7. Stop when the target and the minimum attempts are both met, or when no guess left is worth its cost. Never lower the target.
%%VERIFICATION%%
- [x] Result: <the metric, the target, the baseline, the final value and the change>
- [x] Attempts: <the log table, in a collapsed block>
- [x] Next guess: <what you would try next>
