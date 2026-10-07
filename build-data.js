// Merges data/src/*.json into data/patterns.json and data/patterns.js
// Run: node build-data.js
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, 'data', 'src');
const chapters = [], patterns = [];
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
  let d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const c of Array.isArray(d) ? d : [d]) {
    chapters.push(c.chapter);
    for (const p of c.patterns) patterns.push({ ...p, chapter: c.chapter.id });
  }
}
const order = id => id.startsWith('p1-') ? 0 : id.startsWith('sec-') ? 1 : id === 'p2' ? 2 : id === 'p3' ? 3 : 4;
chapters.sort((a, b) => order(a.id) - order(b.id) || a.id.localeCompare(b.id));
const out = { chapters, patterns };
fs.writeFileSync(path.join(__dirname, 'data', 'patterns.json'), JSON.stringify(out, null, 1));
fs.writeFileSync(path.join(__dirname, 'data', 'patterns.js'), 'window.PATTERN_DATA=' + JSON.stringify(out) + ';');
console.log(`${chapters.length} chapters, ${patterns.length} patterns`);
