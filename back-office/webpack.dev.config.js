/* eslint-disable  new-cap, no-console, angular/log, angular/json-functions */
// const { argv } = require('yargs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const sourceFileList = [
  path.join(__dirname, './src'),
];

// const isCordova = (argv.cordova || (argv.env && argv.env.cordova));

const jsLoaders = ['ng-annotate-loader', 'babel-loader', 'eslint-loader'];
const scssLoaders = [
  'style-loader',
  'css-loader',
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, 'src/app/shared/styles/_variables.scss'),
        path.resolve(__dirname, 'src/app/shared/styles/_mixin.scss'),
      ],
    },
  },
];

// const API_URL = JSON.stringify(process.env.API_URL);

// if (API_URL) console.log(`API_URL is ${API_URL}`);

const config = {
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: {
    app: path.join(__dirname, 'src/app/app.js'),
  },
  devServer: {
    port: 4000,
    contentBase: './dist',
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
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: sourceFileList,
        loaders: scssLoaders,
      },
      {
        test: /\.js$/,
        include: sourceFileList,
        loaders: jsLoaders,
      },
      // {
      //   test: /\.txt$/,
      //   include: sourceFileList,
      //   loader: 'raw-loader',
      // },
      {
        test: /\.html$/,
        include: sourceFileList,
        loader: 'raw-loader',
      },
      {
        test: /\.pug$/,
        include: sourceFileList,
        loader: `apply-loader!pug-loader?root=${path.join(__dirname, 'src', 'app', 'common', 'pug-mixins')}`,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loaders: [
          'file-loader',
          // TODO Not working in Jenkins: version `GLIBC_2.14' not found
          // Jenkins needs a newer version of libc6, or something else is wrong
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.(ttf|eot|pdf)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  // WARNING: noParse seems to make the build slower...
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
      hash: true,
    }),
    new ProgressBarPlugin(),
    // // Automatically move all modules defined outside of application directory to vendor bundle.
    // // If you are using more complicated project structure, consider
    // // to specify common chunks manually.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: 2,
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'resources')],
        },
      },
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'resources'),
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname),
    ],
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
  },
};

module.exports = config;
