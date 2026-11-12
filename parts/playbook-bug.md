1. Reproduce the bug, and keep the output. Use the item's reproduction when it gives one. Skip this step only when the code shows the defect plainly, such as an inverted condition.
2. Find the cause. Test one guess at a time with a run. The code you suspect first is often not the cause.
3. Fix the code that makes the bad value. A guard where the value is read hides the bug. List the bad records that are already stored, and leave them as they are.
4. Search the repo for the same faulty call, and fix each match that has the same defect.
5. Add a test that fails without the fix and passes with it. Check that it fails for the right reason: take the fix out, run the test, and put the fix back.
6. Run the reproduction again, and keep the passing output.
%%VERIFICATION%%
- [x] Reproduction: <what it showed before the fix, and after>
