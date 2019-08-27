const Path = require('path')
const Webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    index: Path.resolve(__dirname, '../src/lib/index.js')
  },
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  output: {
    path: Path.join(common.output.path, 'lib'),
    filename: 'js/js-accordion.min.js'
  },
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src/lib')
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/js-accordion.css'
    }),
    new CopyWebpackPlugin([
      {from: Path.resolve(__dirname, '../package.json'), to: 'package.json'},
      {from: Path.resolve(__dirname, '../README.md'), to: 'README.md'},
      {from: Path.resolve(__dirname, '../LICENSE'), to: 'LICENSE.md'},
      {
        from: Path.resolve(__dirname, '../CONTRIBUTING.md'),
        to: 'CONTRIBUTING.md'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
})
