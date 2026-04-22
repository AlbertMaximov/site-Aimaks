import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/text-white/g, 'text-slate-900');
content = content.replace(/bg-white/g, 'bg-slate-900');
content = content.replace(/border-white/g, 'border-slate-900');
content = content.replace(/from-black/g, 'from-white');
content = content.replace(/via-black/g, 'via-white');
content = content.replace(/bg-black/g, 'bg-white');

fs.writeFileSync('src/App.tsx', content);
console.log('Replacements completed');
