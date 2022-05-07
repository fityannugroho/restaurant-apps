const { existsSync, mkdirSync, readdirSync } = require('fs');
const { resolve } = require('path');
const ImageResizer = require('./utils/image-resizer');

// ================================================================
// Resize hero images.
// ================================================================
const targetDir = resolve(__dirname, '../public/images/heros');
const destinationDir = resolve(__dirname, '../../dist/images/heros');

if (!existsSync(destinationDir)) {
  mkdirSync(destinationDir, { recursive: true });
}

readdirSync(targetDir).forEach((fileName) => {
  // Resize the image to 800px wide, with the suffix -large.jpg
  ImageResizer.resize({
    path: `${targetDir}/${fileName}`,
    width: 800,
    destination: destinationDir,
    suffix: '-large',
  }).then((outputInfo) => {
    console.log(`Large ${fileName} (${outputInfo.width}x${outputInfo.height}) has been created (${outputInfo.size} Byte).`);
  });

  // Resize the image to 480px wide, with the suffix -small.jpg
  ImageResizer.resize({
    path: `${targetDir}/${fileName}`,
    width: 480,
    destination: destinationDir,
    suffix: '-small',
  }).then((outputInfo) => {
    console.log(`Small ${fileName} (${outputInfo.width}x${outputInfo.height}) has been created (${outputInfo.size} Byte).`);
  });
});
