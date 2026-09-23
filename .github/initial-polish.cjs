// One-time, idempotent release polish. Removed after the verified release.
const fs = require('node:fs');
let html = fs.readFileSync('index.html', 'utf8');
const edits = [
  ['body.rotation.y=-Math.PI/2;', 'body.rotation.y=Math.PI;'],
  ['opacity:.65;margin-top:2px', 'opacity:.8;margin-top:2px'],
  ['<div class="hero-art" aria-label=', '<div class="hero-art" role="group" aria-label='],
  ['<div class="marquee" id="marquee" aria-label=', '<div class="marquee" id="marquee" role="region" aria-label='],
  ["lastDialogFocus=document.activeElement;$('#'+id).showModal();", "const active=document.activeElement;if(active&&!active.closest('dialog'))lastDialogFocus=active;else if(!lastDialogFocus||lastDialogFocus.closest('dialog'))lastDialogFocus=$('.pack-bar');$('#'+id).showModal();"],
  ["function crash(){if(game.state!=='playing')return;game.state='over';", "function crash(){if(game.state!=='playing')return;game.total=game.score+game.orbs*5;game.state='over';"],
  ["const old=[...pack];pack=[0,0,0];", "pack=[0,0,0];"]
];
for (const [before, after] of edits) html = html.replace(before, after);
if (!html.includes('/* compact release polish */')) html=html.replace('@media(prefers-reduced-motion:reduce)', '/* compact release polish */\n#endOverlay{align-items:flex-start;overflow-y:auto}#endOverlay .overlay-card{margin:auto 0;flex-shrink:0}.nav>.button{white-space:nowrap}@media(max-width:380px){.nav>.button{display:none}.menu-toggle{margin-left:auto}}\n@media(prefers-reduced-motion:reduce)');
fs.writeFileSync('index.html', html);
console.log('Applied initial release polish.');
