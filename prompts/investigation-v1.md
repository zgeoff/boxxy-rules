Investigate this item for {{repo}}. I am the owner that boxxy's text above names, and this is my item. Answer its questions from evidence, and recommend what I do next. I decide from your answers, so leave the code as it is: a change to it would take the decision from me. Commit nothing, push nothing, and open no pull request.

boxxy has no phase for an investigation, so it runs this session as an attempt at the design phase. You hand back answers where a design session hands back a design. You are done when you send one close-out:

- `designed`, with the answers as markdown, in the template below;
- `blocked`, with the reason, when a question can't be answered until I reply. boxxy then holds the item for me;
- `abandoned`, only when this session is broken and a fresh session could do the work, such as a checkout that is corrupted. boxxy then starts a new session.

boxxy's text above gives the close-out command, and `boxxy attempt current` prints the close-out's fields. You record no evidence with `boxxy attempt evidence` in this phase: the evidence goes in the answers. The item follows, from its title to "Notes from me". Its first paragraph is the outcome: what is true once the investigation is done.

# {{title}}

{{outcome}}

{{body}}

## Acceptance

{{acceptance}}

## Notes from me

{{notes}}

# What this session is for

I want answers that I can decide on. Before you close out, check the answers against the acceptance list.

- You may run anything that reads or measures.
- Run nothing that changes stored data that you didn't create, or a service outside this machine. Measure against a local or test copy.
- Write files only in a git-ignored scratch folder, such as `.scratch/`. When the repo doesn't ignore the folder, add it to the file that `git rev-parse --git-path info/exclude` prints.
- You may add timing or logging lines to the code to measure it. Remove them before you close out.

# How to do the work

1. List the item's questions. When the item asks none outright, write the questions that it implies. For each question, write the decision that its answer informs. When the item names no decision, write the decision that you think I face. The decision keeps the answer on what I need.
2. Answer the questions one at a time, from evidence: code, a command and its output, a log line, a past pull request or item.
   - When a question asks how something works, use the `how` skill.
   - When a question asks why something is built the way it is, use the `why` skill.
   - Put each source that those skills cite beside the sentence that it supports.
3. When a question is about behaviour, such as speed, output, layout or whether something works, run the code to find out. Use the repo's own script that drives the feature as a user would, when the repo has one, such as `bun verify`. Otherwise write a throwaway script. For a question about layout, give the sizes or the markup that you measured.
4. End each sentence that states a fact with one tag. When two tags fit, use the first that fits:
   - `[measured]`: you ran it and saw the result.
   - `[read in the code]`: you read it in the code.
   - `[from a record]`: you read it in a log, a pull request, an item or a doc that existed before this session.
   - `[guess]`: none of these. Use it only after a search found nothing, and a run found nothing where a run can answer. Say what would settle it.

   A conclusion that you draw from tagged facts needs no tag.
5. When a question asks you to choose between options, give a table of the options, with what each costs in effort and risk. Recommend one, and say what would change your pick.
6. When the evidence shows that a question is the wrong question, say so, with the evidence. Then answer the question that the item should have asked.
7. After the answers, write one recommendation: what I do next.
8. List each piece of work that the answers call for under "Follow-up items". I decide which ones to file. You can't file items, so write each one in full, as the template shows.

# The answers you hand back

Put the answers in the `summary` of the close-out's `design`, as markdown, and set `location` to null. Under each `[measured]` fact, give the command and the lines of its output that show the result. You can't store a document, so only the close-out reaches me.

- Write "the owner" for me, and write no person's name.
- Never name my agent sessions, their roles or the tools that run them.
- Quote real output and real code as they are. When you need any other example, invent it. Never take one from my messages, my notes or people I know.

````markdown
# Investigation: <the item's title>

## Questions

1. <the question>
2. <the question>

## 1. <the question>

Decision it informs: <the decision>

<the answer; each sentence that states a fact ends with its tag>

```text
<the command, and the lines of its output that show the result>
```

| Option | Effort | Risk |
| --- | --- | --- |
| <option> | <the work it takes> | <what could go wrong> |

Pick: <the option you recommend, and what would change your pick>

## Recommendation

<what the owner does next, in 1 to 3 sentences>

## Follow-up items

### <title, as the outcome, in plain lowercase>

- Kind: <bug, feature, improvement, chore, refactor, perf, hillclimb, design or investigation>
- Outcome: <what is true when the work is done, in 1 to 3 sentences>
- Context: <links and facts that the builder needs>
- Scope: <In: what the work changes. Out: what the owner excluded, or "none stated.">
- Acceptance:
  - <one check, with the evidence that the builder will show>
````

Give the table and the pick only under a question that asks you to choose. Leave out "Follow-up items" when the answers call for no work.

# When you are done

Send the close-out last, and send it once: boxxy keeps the first valid one. After boxxy accepts it, remove your scratch folder.

- Send `designed` with the answers, when every question has its answer. A question that the evidence can't settle still has an answer: say what you found, tag the rest `[guess]`, and say what would settle it.
- Send `blocked` when a question needs a reply from me before you can answer it. Answer the other questions first. In the reason, give what you need from me, the options, your recommendation, and the answers so far. The next session gets my reply in a note.
- Send `abandoned` only when this session is broken and a fresh one could do the work. Say what broke.

With any outcome, add a `friction` entry for each thing that slowed you down. Name the skill, rule, lint, AGENTS.md file or tool to change, and the change that would have prevented it.
