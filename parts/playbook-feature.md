1. When the Design section holds a design, build what it decides. When the design is wrong, build the parts that the fault doesn't touch, and close out `blocked` with the fault.
2. Define the types before the logic. Prefer a state machine to a set of booleans, and a table to a chain of if/else. When the change crosses a module boundary, write the signatures and the calling code before any function body.
3. Build in small steps, with a test for each. Commit a step once its tests pass.
4. Drive the feature the way a user would, with `bun verify` when the repo has it, and keep the output. A passing unit test doesn't show that the feature works.
5. When the repo has a feature map, add or update the feature's entry in this pull request, in the form of the nearest entry.

When the item improves something that exists, change no other behaviour.
%%VERIFICATION%%
- [x] Driven as a user: <the command, and the end state it showed>
