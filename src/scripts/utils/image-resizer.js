const sharp = require('sharp');

const ImageResizer = {
  resize({
    path, width, height, destination, suffix,
  }) {
    const { dirPath, fileName, fileExtension } = this._splitFilePath(path);
    const fileDestination = `${destination || dirPath}/${fileName}${suffix ?? ''}.${fileExtension}`;

    return sharp(path)
      .resize(width, height)
      .toFile(fileDestination);
  },

  _splitFilePath(filePath) {
    const fileName = filePath.split('/').slice(-1)[0];

    return {
      dirPath: filePath.split('/').slice(0, -1).join('/'),
      fileName: fileName.split('.').slice(0, -1).join('.'),
      fileExtension: fileName.split('.').slice(-1)[0],
    };
  },
};

module.exports = ImageResizer;
