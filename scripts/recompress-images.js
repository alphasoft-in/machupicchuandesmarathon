import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

// ─── Per-file overrides (path relative to public/images/) ────────────────────
// maxWidth: resize to this width (px), quality: AVIF/WebP quality (1-100)
const FILE_OVERRIDES = {
  // Hero / full-bleed backgrounds ─ 1280px wide is plenty for most screens
  'hero.avif':                             { maxWidth: 1280, quality: 50 },
  'inca-trail/bg-inca-trail.avif':         { maxWidth: 1280, quality: 50 },
  'alternative-trek/bg-alternative-trek.avif': { maxWidth: 1280, quality: 50 },
  'home/book-your-expedition.avif':        { maxWidth: 1280, quality: 50 },

  // Section / feature images – display at ~640px, bump to 900px for 2× retina
  'home/excellence-in-every-step.avif':    { maxWidth: 900,  quality: 55 },
  'home/1-day-inca-trail.avif':            { maxWidth: 900,  quality: 55 },
  'home/ancascocha-trek-5d.avif':          { maxWidth: 750,  quality: 55 },

  // Logo – displayed at 203×67 px, 2× = 406px wide
  'logo.webp':                             { maxWidth: 406,  quality: 80 },
  'logo.avif':                             { maxWidth: 406,  quality: 80 },
};

// ─── Fallback rules ───────────────────────────────────────────────────────────
const HERO_PATTERN = /bg-|hero\.|book-your-expedition/;
const HERO_MAX_WIDTH = 1280;
const HERO_QUALITY   = 50;

const CARD_MAX_WIDTH = 900;
const CARD_QUALITY   = 55;

const LOGO_PATTERN   = /^logo\./;
const LOGO_MAX_WIDTH = 406;
const LOGO_QUALITY   = 80;

let totalSavedBytes = 0;

async function recompressImage(filePath) {
  const filename  = path.basename(filePath);
  const ext       = path.extname(filePath).toLowerCase();
  // key relative to public/images/
  const relKey    = path.relative(path.join(PUBLIC_DIR, 'images'), filePath).replace(/\\/g, '/');

  try {
    const before = (await fs.stat(filePath)).size;
    const img    = sharp(filePath);
    const meta   = await img.metadata();

    let maxWidth, quality;

    if (FILE_OVERRIDES[relKey]) {
      ({ maxWidth, quality } = FILE_OVERRIDES[relKey]);
    } else if (LOGO_PATTERN.test(filename)) {
      maxWidth = LOGO_MAX_WIDTH;
      quality  = LOGO_QUALITY;
    } else if (HERO_PATTERN.test(filename)) {
      maxWidth = HERO_MAX_WIDTH;
      quality  = HERO_QUALITY;
    } else {
      maxWidth = CARD_MAX_WIDTH;
      quality  = CARD_QUALITY;
    }

    let pipeline = img;
    if (meta.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }

    const tmp = filePath + '.tmp';
    if (ext === '.avif') {
      // effort 7 gives better compression at the cost of ~2× CPU time (still fast on modern HW)
      await pipeline.avif({ quality, effort: 7 }).toFile(tmp);
    } else if (ext === '.webp') {
      await pipeline.webp({ quality }).toFile(tmp);
    } else {
      return; // skip other formats
    }

    const after = (await fs.stat(tmp)).size;
    if (after < before) {
      await fs.rename(tmp, filePath);
      const saved = before - after;
      totalSavedBytes += saved;
      console.log(`✅ ${relKey.padEnd(55)} ${kb(before)} → ${kb(after)}  saved ${kb(saved)}`);
    } else {
      await fs.unlink(tmp);
      console.log(`⏭️  ${relKey.padEnd(55)} already optimal at ${kb(before)}`);
    }
  } catch (err) {
    console.error(`❌ Error: ${filename}`, err.message);
  }
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1).padStart(7) + ' KB';
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile() && /\.(avif|webp)$/i.test(entry.name)) {
      await recompressImage(full);
    }
  }
}

console.log('🚀 Recompressing images for optimal web delivery...\n');
await walk(PUBLIC_DIR);
console.log(`\n🏁 Done! Total saved: ${kb(totalSavedBytes)}`);
