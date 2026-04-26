import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const SRC_DIR = path.join(__dirname, '../src');

async function convertImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await convertImages(fullPath);
    } else if (entry.isFile() && fullPath.toLowerCase().endsWith('.png')) {
      const avifPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.avif';
      try {
        console.log(`Converting: ${entry.name}...`);
        await sharp(fullPath)
          .avif({ quality: 90, effort: 6 }) // Very high quality, keeps resolution
          .toFile(avifPath);
        
        // Delete original PNG
        await fs.unlink(fullPath);
        console.log(`✅ Success: -> ${path.basename(avifPath)}`);
      } catch (err) {
        console.error(`❌ Error converting ${fullPath}:`, err);
      }
    }
  }
}

async function updateCodebaseReferences(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await updateCodebaseReferences(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(fullPath);
      if (['.astro', '.tsx', '.ts', '.js', '.json', '.md'].includes(ext)) {
        let content = await fs.readFile(fullPath, 'utf8');
        if (content.includes('.png')) {
          // Replace .png with .avif (case sensitive for standard extensions)
          const newContent = content.replace(/\.png/g, '.avif');
          if (content !== newContent) {
            await fs.writeFile(fullPath, newContent, 'utf8');
            console.log(`🔄 Updated references in: ${path.relative(SRC_DIR, fullPath)}`);
          }
        }
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting PNG to AVIF conversion...');
  await convertImages(PUBLIC_DIR);
  
  console.log('\n📝 Updating codebase references...');
  await updateCodebaseReferences(SRC_DIR);
  
  console.log('\n✨ All done!');
}

main().catch(console.error);
