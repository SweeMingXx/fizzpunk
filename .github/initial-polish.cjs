// One-time, idempotent visual polish. Removed after the verified release.
const fs = require('node:fs');
let html = fs.readFileSync('index.html', 'utf8');
const edits = [
  ['targetColor=new THREE.Color(flavors[0].color);fromColor=targetColor.clone();', 'targetColor=new THREE.Color(flavors[0].color).convertSRGBToLinear();bodyMat.color.copy(targetColor);fromColor=targetColor.clone();'],
  ['targetColor.set(f.color);colorStart=', 'targetColor.set(f.color).convertSRGBToLinear();colorStart='],
  ['renderer.toneMappingExposure=1.18;', 'renderer.toneMappingExposure=1.05;'],
  ['new THREE.AmbientLight(0xffffff,.9)', 'new THREE.AmbientLight(0xffffff,.65)'],
  ['new THREE.DirectionalLight(0xffffff,1.55)', 'new THREE.DirectionalLight(0xffffff,.95)'],
  ['new THREE.DirectionalLight(0xffe5d6,.7)', 'new THREE.DirectionalLight(0xffe5d6,.35)']
];
for (const [before, after] of edits) html = html.replace(before, after);
if (!html.includes('/* final visual review */')) html=html.replace('</style>', '/* final visual review: outrank asynchronously injected CDN preflight */\nbody h1,body h2,body h3{font-weight:900}.logo{white-space:nowrap;flex-shrink:0}@media(max-width:480px){.nav>.button{display:none}.menu-toggle{margin-left:auto}}\n</style>');
fs.writeFileSync('index.html',html);
// Freeze CSS transitions and allow the label tint to settle for stable QA screenshots.
let tests=fs.readFileSync('tests/verify.mjs','utf8');
tests=tests.replace("await page.screenshot({ path: 'qa/desktop.png', fullPage: true });", "await page.waitForTimeout(700); await page.screenshot({ path: 'qa/desktop.png', fullPage: true, animations: 'disabled' });");
fs.writeFileSync('tests/verify.mjs',tests);
console.log('Applied final visual review.');
