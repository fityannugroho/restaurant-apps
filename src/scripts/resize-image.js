const { existsSync, mkdirSync, readdirSync } = require('fs');
const { resolve } = require('path');
const ImageResizer = require('./utils/image-resizer');

const resizeImage = (imageResizerConfig) => {
  ImageResizer
    .resize(imageResizerConfig)
    .then((outputInfo) => {
      console.log(`${outputInfo.fileName} (${outputInfo.width}x${outputInfo.height}) has been created (${outputInfo.size} Byte)`);
    });
};

// ================================================================
// Resize hero images.
// ================================================================
const targetDir = resolve(__dirname, '../public/images/heros');
const destinationDir = resolve(__dirname, '../../dist/images/heros');

if (!existsSync(destinationDir)) {
  mkdirSync(destinationDir, { recursive: true });
}

readdirSync(targetDir).forEach((fileName) => {
  const imageResizerConfig = {
    path: `${targetDir}/${fileName}`,
    destination: destinationDir,
  };

  const xlargeImageConfig = {
    ...imageResizerConfig,
    width: 1200,
    suffix: '-xlarge',
  };

  const largeImageConfig = {
    ...imageResizerConfig,
    width: 800,
    suffix: '-large',
  };

  const smallImageConfig = {
    ...imageResizerConfig,
    width: 480,
    suffix: '-small',
  };

  // Resize the image to 1200px wide, with the suffix -xlarge.jpg
  resizeImage({ ...xlargeImageConfig, extension: 'jpg' });
  // Resize the image to 800px wide, with the suffix -large.jpg
  resizeImage({ ...largeImageConfig, extension: 'jpg' });
  // Resize the image to 480px wide, with the suffix -small.jpg
  resizeImage({ ...smallImageConfig, extension: 'jpg' });
  // Resize the image to 1200px wide, with the suffix -xlarge.webp
  resizeImage({ ...xlargeImageConfig, extension: 'webp' });
  // Resize the image to 800px wide, with the suffix -large.webp
  resizeImage({ ...largeImageConfig, extension: 'webp' });
  // Resize the image to 480px wide, with the suffix -small.webp
  resizeImage({ ...smallImageConfig, extension: 'webp' });
});
