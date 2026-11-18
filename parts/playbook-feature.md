1. When the Design section holds a design, build what it decides. When the design is wrong, build the parts that the fault doesn't touch, and close out `blocked` with the fault.
2. Define the types before the logic. Prefer a state machine to a set of booleans, and a table to a chain of if/else. When the change crosses a module boundary, write the signatures and the calling code before any function body.
3. Build in small steps, with a test for each. Commit a step once its tests pass.
4. Prove the feature, and keep the output.
   - When the repo has a `bun verify` setup, add a journey for the feature you change, or extend the journey that covers it, and run it.
   - Verify only the features your change touches. Use the journey for what a unit test can't reach, such as a real dependency or a whole user path from end to end. Leave out what a unit test already checks.
   - When the repo has no verify setup, drive the feature by hand, and say so in the pull request.
5. When the repo has a feature map, add or update the feature's entry in this pull request, in the form of the nearest entry.
