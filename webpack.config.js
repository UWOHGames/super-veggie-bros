const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/game.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    // NOTE: the "to" endpoint is relative
    // to the output path
    new CopyPlugin([
      {
        from: './assets',
        to: './assets'
      }
    ]),
    new CopyPlugin([
      {
        from: './src/index.html',
        to: './index.html'
      }
    ])
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devServer: {
    contentBase: './dist'
  }
}
