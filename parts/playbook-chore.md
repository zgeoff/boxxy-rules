1. Do the maintenance. Before you remove code that you don't understand, use the `why` skill.
2. Run the tests, and fix each one that fails, even one that failed before your change. Never switch a check off to make it pass.
3. Show that nobody sees a difference. Drive each feature that your change can reach, on the base branch and on yours, and compare the output. When the repo publishes a package, compare its exports too.
4. When a user or an importer would see a difference, keep the change, and close out `blocked` with the difference.
%%VERIFICATION%%
- [x] No visible change: <the features you drove on both branches, and the result>
