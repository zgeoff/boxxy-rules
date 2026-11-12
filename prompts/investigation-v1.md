Investigate this item for {{ repo }}: answer its questions from evidence, and recommend what I do next. Change no code, commit nothing, and open no pull request. The item is below, then how I want the work done.

# {{ title }}

{{ outcome }}
{%- if body %}

{{ body }}
{%- endif %}
{%- if acceptance %}

## Acceptance

{{ acceptance }}
{%- endif %}
{%- if notes %}

## Notes

{{ notes }}
{%- endif %}

# How to do the work

1. List the item's questions, and the decision that each one informs. When the item asks none outright, write the questions that it implies.
2. Answer each question from evidence: code, a command and its output, a log line, a past pull request. For how something works, use the `how` skill. For why it's built that way, use the `why` skill.
3. When a question is about behaviour, such as speed, output or whether something works, find out with a run.
4. End each sentence that states a fact with one tag:
   - `[measured]`: you ran it and saw the result.
   - `[read in the code]`: you read it in the code.
   - `[from a record]`: a log, a pull request or a doc says so.
   - `[guess]`: none of these. Use it only after a run and a search found nothing, and say what would settle it.
5. When a question asks you to choose, recommend one option, and say what would change your pick.
6. When the evidence shows that a question is wrong, say so, and answer the question that it should have asked.

# The answers

````markdown
# Investigation: <the item's title>

## 1. <the question>

Decision it informs: <the decision>

<the answer; each sentence that states a fact ends with its tag>

```text
<the command, and the lines of its output that show the result>
```

| Option | Effort | Risk |
| --- | --- | --- |
| <an option> | <its cost> | <what could go wrong> |

Recommendation: <your pick, and what would change it>

## Recommendation

<what I should do next>

## Follow-up items

### <title, as the outcome, in plain lowercase>

- Kind: <bug, feature, improvement, chore, refactor, perf, hillclimb, design or investigation>
- Outcome: <what is true when it is done>
- Context: <the links and facts its builder needs>
- Scope: <In: what it changes. Out: what the owner excluded, or "none stated.">
- Acceptance: <one check per line, each with the evidence its builder will show>
````

Give a table only for a question that asks you to choose. List a follow-up item for each piece of work that the answers call for; I decide which to file. Write "the owner" for me, name no agent session or tool, and invent every example.

# When you are done

Close out `designed` with the answers as markdown. When no question can be answered until I reply, close out `blocked` with what you need from me. Put each thing that slowed you down in `friction`.
