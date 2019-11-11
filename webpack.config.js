const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  output: {
    filename: 'device-detect.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'deviceDetect',
    libraryTarget: 'umd',
  },
};
