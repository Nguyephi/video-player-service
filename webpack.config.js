const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'main_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js?|jsx?)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};
