import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace opacities to make gray text darker
content = content.replace(/text-slate-900\/70/g, 'text-slate-900/90');
content = content.replace(/text-slate-900\/60/g, 'text-slate-900/80');
content = content.replace(/text-slate-900\/50/g, 'text-slate-900/70');
content = content.replace(/text-slate-900\/40/g, 'text-slate-900/60');
content = content.replace(/text-slate-900\/30/g, 'text-slate-900/50');

fs.writeFileSync('src/App.tsx', content);
console.log('Opacities replaced to make text darker');
