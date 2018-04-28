/* eslint-disable object-shorthand, func-names */
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const gulp = require('gulp');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    after: function (app) {
      gulp.src('./resources/images/loader-green.gif').pipe(gulp.dest('./dist/'));
    },
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
