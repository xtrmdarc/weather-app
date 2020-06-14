const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jp[e]?g$|\.png$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};