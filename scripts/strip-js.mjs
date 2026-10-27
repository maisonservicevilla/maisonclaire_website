// Post-build: these pages are fully static (no React interactivity), so we
// remove the Next.js client runtime from every HTML file. Result: zero
// framework JavaScript. Kept: JSON-LD structured data and the small
// booking loader (<script id="bk-loader">).
import fs from 'node:fs/promises';
import path from 'node:path';

async function* walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else if (e.name.endsWith('.html')) yield p;
  }
}
let files = 0, removed = 0;
const cssCache = {};
async function inlineCss(html) {
  // inline the one small stylesheet so it does not block first paint
  const links = [...html.matchAll(/<link rel="stylesheet" href="(\/_next\/static\/[^"]+\.css)"[^>]*\/?>/g)];
  for (const [tag, href] of links) {
    cssCache[href] ??= (await fs.readFile(path.join('out', href), 'utf8'))
      // make relative font/image URLs absolute, since the CSS now lives inside the page
      .replace(/url\((['"]?)(?!data:|https?:|\/)([^)'"]+)\1\)/g, (m, q, u) => `url(${q}${new URL(u, 'https://x' + href).pathname}${q})`);
    html = html.replace(tag, `<style>${cssCache[href]}</style>`);
  }
  return html.replace(/<link rel="preload" href="\/_next\/static\/[^"]+\.css"[^>]*\/?>/g, '');
}
for await (const file of walk('out')) {
  let html = await fs.readFile(file, 'utf8');
  const before = html.length;
  html = html
    .replace(/<link rel="preload" as="script"[^>]*>/g, '')
    .replace(/<script src="\/_next\/[^"]*"[^>]*><\/script>/g, '')
    .replace(/<script id="_R_">[\s\S]*?<\/script>/g, '')
    .replace(/<script>[\s\S]*?<\/script>/g, '');
  html = await inlineCss(html);
  if (/\/_next\/static\/chunks\/[^"]+\.js/.test(html)) throw new Error('Leftover JS chunk in ' + file);
  removed += before - html.length; files++;
  await fs.writeFile(file, html);
}
// the .txt RSC payload files are only used by the client router
for await (const f of (async function* () { for (const e of await fs.readdir('out', { recursive: true })) if (e.endsWith('.txt') && !e.endsWith('robots.txt') && !e.endsWith('llms.txt')) yield e; })()) await fs.rm(path.join('out', f));
console.log(`strip-js: ${files} pages, ${(removed / 1024).toFixed(0)} KB of framework script removed`);
