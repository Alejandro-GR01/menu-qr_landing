import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, parse } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const VIEWS_DIR = join(PUBLIC_DIR, 'views');

const IMAGE_RE = /\.(png|jpg|jpeg|webp)$/i;

// Procesa un directorio: convierte cada imagen a AVIF al lado del original
async function convertDir(dir) {
  let files;
  try {
    files = readdirSync(dir).filter(f => IMAGE_RE.test(f));
  } catch {
    return 0; // directorio no existe
  }

  for (const file of files) {
    const input = join(dir, file);
    const output = join(dir, `${parse(file).name}.avif`);
    const { size: before } = await sharp(input).metadata();
    const { size: after } = await sharp(input).avif({ quality: 80 }).toFile(output);
    const pct = ((1 - after / before) * 100).toFixed(1);
    console.log(`✅ ${file.padEnd(40)} ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB  (${pct}% menos)`);
  }

  return files.length;
}

console.log('--- public/ (raíz) ---');
const rootCount = await convertDir(PUBLIC_DIR);

console.log('\n--- public/views/ ---');
const viewsCount = await convertDir(VIEWS_DIR);

console.log(`\n🎯 ${rootCount + viewsCount} imágenes convertidas a AVIF (${rootCount} en public/, ${viewsCount} en public/views/)`);