var path = require('path');

module.exports = {
  entry: './frontend/react_minesweeper.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
},
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};