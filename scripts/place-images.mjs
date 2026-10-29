import sharp from 'sharp'; import fs from 'node:fs/promises';
const dir=process.cwd(); const m=JSON.parse(await fs.readFile(dir+'/src/content/images.json','utf8'));
for (const f of (await fs.readdir(dir+'/assets/photos')).filter(f=>f.startsWith('place-'))) {
  const name=f.replace('.jpg',''); const src=dir+'/assets/photos/'+f; const {width,height}=await sharp(src).metadata();
  const widths=[480,800,1200];
  for (const w of widths){ const r=sharp(src).resize({width:w}); await r.clone().avif(w<=800?{quality:36,effort:6}:{quality:50,effort:4}).toFile(`${dir}/public/img/${name}-${w}.avif`); if(w<=800) await r.clone().webp({quality:72}).toFile(`${dir}/public/img/${name}-${w}.webp`); }
  m[name]={w:width,h:height,widths}; console.log(name,width,height);
}
await fs.writeFile(dir+'/src/content/images.json', JSON.stringify(m,null,2));
