# N3 文法 Pinpoint

Exam-focused N3 grammar app built from *Shin Kanzen Master N3 文法*, organized chapter by chapter.

## Open it
- Double-click `index.html` (works offline), or
- `python -m http.server 8765` in this folder → http://localhost:8765

## Add / edit patterns
1. Edit or add a file in `data/src/` (one chapter object, or an array of chapters).
2. Run `node build-data.js` → regenerates `data/patterns.json` and `data/patterns.js`.

Example sentence markup: `日本{にほん}` = furigana, `^は` / `^へ` = particle (romaji "wa"/"e").
Romaji is generated automatically.
