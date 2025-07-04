'use strict';

const execPath = process.env.npm_execpath || '';
const isPnpm = execPath.toLowerCase().includes('pnpm');

if (!isPnpm) {
    console.error(`
✖ Erreur : Vous devez utiliser pnpm, pas npm !
→ Lancez plutôt : pnpm ${process.argv.slice(2).join(' ')}
`);
    process.exit(1);
}
