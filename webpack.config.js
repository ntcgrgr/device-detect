const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'device-detect.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'deviceDetect',
    libraryTarget: 'umd',
  },
};
