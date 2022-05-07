const sharp = require('sharp');

const ImageResizer = {
  async resize({
    path, width, height, destination, prefix, suffix, extension,
  }) {
    const { dirPath, fileName, fileExtension } = this._splitFilePath(path);
    const newFileName = `${prefix ?? ''}${fileName}${suffix ?? ''}.${extension || fileExtension}`;
    const fileDestination = `${destination || dirPath}/${newFileName}`;

    const outputInfo = await sharp(path)
      .resize(width, height)
      .toFile(fileDestination);

    return {
      ...outputInfo,
      fileName: newFileName,
      location: fileDestination,
      srcName: `${fileName}.${fileExtension}`,
      srcPath: path,
    };
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
