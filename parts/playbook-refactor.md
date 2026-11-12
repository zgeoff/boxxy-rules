1. Before you move code, pin what it does today. Run the tests that cover the area, add a test for each function they miss, and commit those tests first.
2. Open a draft pull request that states the structure you aim for: the modules, the types, and which module calls which.
3. Delete what nobody needs, as one commit. Before you remove code that you don't understand, use the `why` skill.
4. Move code in small steps, and run the tests after each. Move every caller of a changed export, and delete the old export in this pull request. Then search for the old name: a rename misses strings, docs and comments.
5. Fix a bug you find as its own commit, with a test that fails without the fix.
6. Compare the result with what it replaced. When no function has fewer branches or a shorter path to the code that does the work, revert the refactor. Keep the tests and the bug fixes, and say why in the pull request.
7. Use the `blast-radius` skill on the refactor's commits. A change in behaviour that a caller can see, apart from a rename you meant, is a bug in the refactor.
%%VERIFICATION%%
- [x] Behaviour kept: <the test command and its result>
- [x] Simpler: <what got simpler, or why you reverted>
