import { cpSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const publicDir = resolve(root, 'public');

if (existsSync(publicDir)) {
  for (const item of readdirSync(publicDir)) {
    cpSync(resolve(publicDir, item), resolve(root, item), { recursive: true });
  }
}
