"""Build the build recipes from the shared head and tail and each kind's playbook.

boxxy has no include mechanism, so each prompt file holds the whole text. Run this after a change to a
part, and never edit a prompts/build-*.md file by hand:  python3 parts/assemble.py
"""
import pathlib

root = pathlib.Path(__file__).resolve().parent.parent
parts = root / "parts"

OPENINGS = {
    "bug": "Fix this bug in {{ repo }} and open a pull request.",
    "feature": "Build this in {{ repo }} and open a pull request.",
    "chore": "Do this maintenance in {{ repo }} and open a pull request.",
    "refactor": "Refactor this code in {{ repo }} and open a pull request.",
    "perf": "Make this faster in {{ repo }} and open a pull request.",
    "hillclimb": "Move this number to its target in {{ repo }} and open a pull request.",
}
MARK = "%%VERIFICATION%%"

head = (parts / "build-head.md").read_text()
tail = (parts / "build-tail.md").read_text()

for kind, opening in OPENINGS.items():
    steps, lines = (parts / f"playbook-{kind}.md").read_text().split("\n" + MARK + "\n")
    text = opening + " " + head + steps + "\n\n" + tail.replace(MARK, lines.strip("\n"))
    (root / "prompts" / f"build-{kind}-v1.md").write_text(text)
    print(kind, len(text.splitlines()))
