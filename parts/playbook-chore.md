1. Do the maintenance. Before you remove code that you don't understand, use the `why` skill.
2. Run the tests, and fix each one that fails, even one that failed before your change. Never switch a check off to make it pass.
3. Use the tests, the lint and the repo's `bun verify` journeys to show that nobody sees a difference. For what they don't cover, such as a published package's exports, compare the base branch and yours by hand.
4. When a user or an importer would see a difference, keep the change, and close out `blocked` with the difference.
