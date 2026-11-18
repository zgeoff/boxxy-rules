1. When the Design section holds a design, build what it decides. When the design is wrong, build the parts that the fault doesn't touch, and close out `blocked` with the fault.
2. Define the types before the logic. Prefer a state machine to a set of booleans, and a table to a chain of if/else. When the change crosses a module boundary, write the signatures and the calling code before any function body.
3. Build in small steps, with a test for each. Commit a step once its tests pass.
4. Prove the feature with the repo's `bun verify` setup. Add a journey for the feature you change, or extend the journey that covers it, and run it. Keep the output.
   - Verify only the features your change touches. A journey covers a boundary that your code doesn't own, such as a real dependency or a real user path from end to end, and never what a unit test already pins.
   - In the journey, use the real dependency when it runs in your sandbox. A fake shows only that the code matches your own assumption about the dependency.
   - When the repo has no verify setup, drive the feature by hand, keep the output, and say in the pull request that the repo has no verify setup.
5. When the repo has a feature map, add or update the feature's entry in this pull request, in the form of the nearest entry.
