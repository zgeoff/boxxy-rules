// Loads the rules checkout with the server's own reader and loader, at the version that
// package.json pins. Run as: bun check-rules.ts <checkout>
import { loadServerRules, readRulesCheckout } from '@boxxy/server';

const read = await readRulesCheckout({ folder: process.argv[2], ref: 'HEAD' });

if (read.kind === 'rejected') {
  console.error(read.reason);
  process.exit(1);
}

const loaded = loadServerRules(read.checkout);

if (loaded.kind === 'rejected') {
  console.error(JSON.stringify(loaded.rejections, null, 2));
  process.exit(1);
}

console.log(`loads: ${loaded.rules.version}`);
