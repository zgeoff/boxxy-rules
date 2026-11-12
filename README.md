# boxxy-rules

The live rules of the boxxy server: the pipelines, the phases and their limits, the recipes, the
phase prompts, and the pin of the shared skills repo.

boxxy loads only a commit that `main` holds, and reloads the rules on its next runner tick when the
commit moves. A rules change is a pull request to this repo. When boxxy refuses a commit, the
previous rules stay live, and the refusal shows in `boxxy runner status`.

`rules.yaml` holds the policy, and `prompts/` holds one prompt per recipe.
