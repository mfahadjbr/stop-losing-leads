import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = new URL('../.vercel/output/', import.meta.url);
const config = JSON.parse(await readFile(new URL('config.json', output), 'utf8'));
assert.equal(config.version, 3);
assert(config.routes.some(route => route.handle === 'filesystem'));
assert(config.routes.some(route => route.src === '/(.*)' && route.dest === '/__server'));
const functionConfig = JSON.parse(await readFile(new URL('functions/__server.func/.vc-config.json', output), 'utf8'));
assert.equal(functionConfig.runtime, 'nodejs24.x');
const { default: server } = await import(new URL('functions/__server.func/index.mjs', output));

for (const [path, expected] of [
  ['/', 'You already paid'],
  ['/our-story', 'for ourselves first.'],
  ['/business-lab', 'with other owners.'],
  ['/contact', 'Full Name'],
  ['/quiz', 'Lead Leak Quiz.'],
  ['/book', 'Lead Leak Diagnostic.'],
]) {
  const response = await server.fetch(new Request('https://sllhq-build-test.example' + path));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert(html.includes(expected), path + ' missing rendered page');
  assert(html.includes('/assets/company-logo.png'), path + ' missing favicon');
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
    await access(fileURLToPath(new URL('static' + decodeURIComponent(match[1]), output)));
  }
  console.log('PASS generated Vercel Function:', path);
}
const missing = await server.fetch(new Request('https://sllhq-build-test.example/does-not-exist'));
assert.equal(missing.status, 404);
console.log('PASS Vercel routing, Node runtime, static assets, six rendered pages and real 404 handling.');
