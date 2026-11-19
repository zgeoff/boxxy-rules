// Loads the rules checkout with the server's own reader and loader, at the version that
// package.json pins. Run as: bun check-rules.ts <checkout>
import { loadServerRules, readRulesCheckout } from '@boxxy/server';

const read = await readRulesCheckout({ folder: process.argv[2], ref: 'HEAD' });

if (read.kind === 'rejected') {
  console.error(read.reason);
  process.exit(1);
}

// The prod server's spawn scope, as its config sets it, so the check refuses rules that run a
// review on an agent other than the one that holds the clone token. Prod keeps its repo list
// private, so the check passes none, and checks no agent's repo list.
const spawn = {
  agents: { 'boxxy-review': { phases: ['review'] } },
  phases: { review: { requireScopedAgent: true } },
  repos: [],
};

const loaded = loadServerRules(read.checkout, spawn);

if (loaded.kind === 'rejected') {
  console.error(JSON.stringify(loaded.rejections, null, 2));
  process.exit(1);
}

console.log(`loads: ${loaded.rules.version}`);
