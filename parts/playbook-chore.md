1. Do the maintenance. Before you remove code that you don't understand, use the `why` skill.
2. Run the tests, and fix each one that fails, even one that failed before your change. Never switch a check off to make it pass.
3. Show that nobody sees a difference with the tests, the lint and the repo's `bun verify` journeys. Compare by hand only what they don't cover, such as a published package's exports, on the base branch and on yours.
4. When a user or an importer would see a difference, keep the change, and close out `blocked` with the difference.
