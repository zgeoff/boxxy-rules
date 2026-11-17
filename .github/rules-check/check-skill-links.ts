// Fails when a recipe installs a skill that names another shared skill the recipe leaves out, so
// an agent never follows a skill's pointer to a skill its session doesn't have. Follows the
// pointers to their end. Run as: bun check-skill-links.ts <checkout>
import { $ } from 'bun';
import { mkdtemp, readdir, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

interface RulesFile {
  skills: { source: string; ref: string };
  recipes: Record<string, { skills: string[] }>;
}

// A pointer to another skill: a relative link to its SKILL.md, or its name in backticks before
// the word "skill".
const pointerPatterns = [/\.\.\/([a-z0-9-]+)\/SKILL\.md/gu, /`([a-z0-9-]+)` skill/gu];

const rules = Bun.YAML.parse(await readFile(join(process.argv[2], 'rules.yaml'), 'utf8')) as RulesFile;
const skillsRepo = await mkdtemp(join(tmpdir(), 'skills-'));

await $`git clone --quiet --filter=blob:none --no-checkout https://github.com/${rules.skills.source}.git ${skillsRepo}`;
await $`git -C ${skillsRepo} checkout --quiet ${rules.skills.ref}`;

const shared = new Set(await readdir(join(skillsRepo, 'skills')));
const pointers = new Map<string, Set<string>>();

async function readPointers(skill: string): Promise<Set<string>> {
  const known = pointers.get(skill);

  if (known !== undefined) {
    return known;
  }

  const found = new Set<string>();
  const files = await Array.fromAsync(new Bun.Glob('**/*.md').scan(join(skillsRepo, 'skills', skill)));

  for (const file of files) {
    const text = await readFile(join(skillsRepo, 'skills', skill, file), 'utf8');

    for (const pattern of pointerPatterns) {
      for (const match of text.matchAll(pattern)) {
        const name = match[1];

        if (name !== undefined && name !== skill && shared.has(name)) {
          found.add(name);
        }
      }
    }
  }

  pointers.set(skill, found);

  return found;
}

const faults: string[] = [];

for (const [recipe, { skills }] of Object.entries(rules.recipes)) {
  const installed = new Set(skills);
  const missing = new Set<string>();
  const queue = [...skills];

  for (let skill = queue.shift(); skill !== undefined; skill = queue.shift()) {
    for (const name of await readPointers(skill)) {
      if (!installed.has(name) && !missing.has(name)) {
        missing.add(name);
        queue.push(name);
      }
    }
  }

  if (missing.size > 0) {
    faults.push(`${recipe}: add ${[...missing].join(', ')} to its skills`);
  }
}

if (faults.length > 0) {
  console.error(`Each recipe installs every shared skill its skills point to.\n${faults.join('\n')}`);
  process.exit(1);
}

console.log(`skill pointers: every recipe holds the skills its skills point to (${rules.skills.ref})`);
