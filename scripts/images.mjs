// Builds responsive AVIF + WebP versions of every photo in assets/photos,
// favicons from the brand mark, and a social sharing image.
// Run: npm run images  (only needed when photos change)
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets/photos';
const OUT = 'public/img';
const WIDTHS = [480, 800, 1200, 1800];
await fs.mkdir(OUT, { recursive: true });

const manifest = {};
for (const file of (await fs.readdir(SRC)).filter(f => /\.(jpe?g|png)$/i.test(f)).sort()) {
  const name = path.parse(file).name;
  const img = sharp(path.join(SRC, file)).rotate();
  const { width, height } = await img.metadata();
  const widths = WIDTHS.filter(w => w <= width);
  if (!widths.includes(width) && width < WIDTHS.at(-1)) widths.push(width);
  for (const w of widths) {
    const resized = sharp(path.join(SRC, file)).rotate().resize({ width: w });
    await resized.clone().avif(w <= 800 ? { quality: 42, effort: 6 } : { quality: 52, effort: 4 }).toFile(`${OUT}/${name}-${w}.avif`);
    if (w <= 800) await resized.clone().webp({ quality: 72 }).toFile(`${OUT}/${name}-${w}.webp`);
  }
  manifest[name] = { w: width, h: height, widths };
  console.log('done', name, widths.join(','));
}
await fs.writeFile('src/content/images.json', JSON.stringify(manifest, null, 2));

// Social image 1200x630
for (const n of ['pool-infinity-mountain', 'exterior-day', 'bedroom-mountain-view']) await sharp(`${SRC}/${n}.jpg`).resize({ width: 1200 }).jpeg({ quality: 78 }).toFile(`public/img/${n}-1200.jpg`);
await sharp(`${SRC}/pool-infinity-mountain.jpg`).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80 }).toFile('public/og.jpg');

// Favicons from the tree mark on cream
const mark = await fs.readFile('assets/brand/mark-dark.svg');
await fs.copyFile('assets/brand/mark-dark.svg', 'public/icon.svg');
const square = async (size, pad) => {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: '#F4EFE6' } }).composite([{ input: m, gravity: 'centre' }]).png();
};
await (await square(180, 0.14)).toFile('public/apple-touch-icon.png');
await (await square(192, 0.14)).toFile('public/icon-192.png');
await (await square(512, 0.14)).toFile('public/icon-512.png');
await (await square(48, 0.08)).toFile('public/favicon-48.png');
console.log('images ready');
