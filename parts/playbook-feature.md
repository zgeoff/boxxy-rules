Build what the item asks for, and prove that it works the way a user would use it. Each acceptance entry proves one part. Step 5 drives the whole feature once, as a user.

When the item improves something that exists, show the improvement, and change no other behaviour. You may change an existing test where the acceptance list asks for the new behaviour.

1. When the Design section holds a design, build what it decides. When the design is wrong, build the parts that the fault doesn't affect, push them in a draft pull request, and close out `blocked` with the fault.
2. Define the types before you write logic. Prefer a state machine to a set of booleans, and a table to a chain of if/else. The next agent then sees every state and every case in one place.
3. When the change crosses a module boundary, write the function signatures and the code that calls them before any function body. You then see whether the interface works before you spend time on its insides.
4. Build in small steps. Write a test for each step, and commit the step once its tests pass.
5. Drive the feature with `bun verify`, and keep the output. When `bun verify` can't drive the feature, such as a background job, show its effect another way, such as the record it writes. The run passes when it shows the end state that the acceptance list names. When the list names none, use the end state from step 6.
6. When users can reach the feature and the repo has a feature map, give the feature an entry in the map, in this pull request. Copy the form of the nearest entry. When the change alters a feature that is in the map, update its entry. An entry holds:
   - what the feature is;
   - how a user reaches it;
   - the `bun verify` command that drives it, or how to see its effect when `bun verify` can't drive it;
   - the end state that proves it works.
7. Add one line to the `## Verification` section, in the form that "The pull request" shows: the command from step 5 and the end state it shows. Put the output that shows the end state in an `Output:` block, and the command in a `Rerun:` block.
