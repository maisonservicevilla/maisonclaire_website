// JPEG copies (1200px wide) of the photos used for social previews and structured data.
// Search engines, AI crawlers and chat apps read JPEG more reliably than AVIF.
import sharp from 'sharp';
export const SHARE = ['pool-infinity-mountain', 'pool-dusk', 'villa-night-pool', 'exterior-day', 'exterior-pool', 'bedroom-mountain-view', 'bedroom-balcony', 'living-teal', 'kitchen', 'dining-staircase', 'bathroom-green', 'balcony-view', 'bedroom-view-warm', 'kitchen-evening', 'living-chesterfield', 'living-warm', 'pool-view-portrait', 'terrace-view',
  'place-chembra', 'place-kandi', 'place-kanthanpara', 'place-soochipara', 'place-lakkidi', 'place-edakkal', 'place-karapuzha'];
for (const n of SHARE) await sharp(`assets/photos/${n}.jpg`).rotate().resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 74, mozjpeg: true }).toFile(`public/img/${n}-1200.jpg`);
console.log('share images', SHARE.length);
