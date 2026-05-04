import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

const tasks = [
  {
    // Resize logo to match rendered dimensions more closely (rendered 203x67)
    file: 'images/logo.webp',
    action: async (inputPath) => {
      const outPath = inputPath.replace('logo.webp', 'logo-opt.webp');
      await sharp(inputPath).resize({ width: 220, withoutEnlargement: true }).webp({ quality: 75, effort: 6 }).toFile(outPath);
      console.log('Resized and Optimized logo.webp to logo-opt.webp');
    }
  }
];

async function run() {
  for (const task of tasks) {
    const filePath = path.join(PUBLIC_DIR, task.file);
    if (fs.existsSync(filePath)) {
      try {
        await task.action(filePath);
      } catch (e) {
         console.error(`Error processing ${task.file}:`, e);
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  }
  console.log('Done!');
}

run();
