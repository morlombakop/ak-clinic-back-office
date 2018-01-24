const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 4000,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: false,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
});
