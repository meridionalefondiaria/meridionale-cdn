import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIR = path.join(process.cwd(), 'icons');   // SVG ottimizzati
const OUTPUT_DIR = path.join(process.cwd(), 'icons-png');  // PNG generati

async function convertSvgToPng() {
  await fs.ensureDir(OUTPUT_DIR);

  const files = await fs.readdir(INPUT_DIR);
  const svgFiles = files.filter(f => f.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('no SVG found', INPUT_DIR);
    return;
  }

  for (const file of svgFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputName = file.replace(/\.svg$/i, '.png');
    const outputPath = path.join(OUTPUT_DIR, outputName);

    await sharp(inputPath)
      .png({ compressionLevel: 9 })
      .resize(64, 64)
      .toFile(outputPath);

    console.log(`${file} → ${outputName}`);
  }
}

convertSvgToPng().catch(err => console.error(err));
