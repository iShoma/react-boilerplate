const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');

const constants = require('./constants');
const system = require('./system');

const threadPool = HappyPack.ThreadPool({ size: system.threads });

const dev = [
  new HappyPack({
    id: 'babel-fast-loader-dev',
    threadPool,
    loaders: ['babel-loader?cacheDirectory=true&sourceMap=true'],
  }),
  new HappyPack({
    id: 'style-fast-loader-dev',
    threadPool,
    loaders: [
      'style-loader?sourceMap=true',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: { path: 'src/js/postcss.config.js' },
        },
      },
      'sass-loader?sourceMap=true',
    ],
  }),
  new BundleAnalyzerPlugin({
    analyzerPort: constants.analyzerPort,
    openAnalyzer: false,
  }),
  new webpack.HotModuleReplacementPlugin(),
];

const prod = [
  new HappyPack({
    id: 'babel-fast-loader-prod',
    threadPool,
    loaders: ['babel-loader'],
  }),
  new HappyPack({
    id: 'style-fast-loader-prod',
    threadPool,
    loaders: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: { path: 'src/js/postcss.config.js' },
        },
      },
      'sass-loader',
    ],
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
  }),
];

module.exports = (mode) => {
  const base = [
    new HtmlWebpackPlugin({
      title: 'React boilerplate',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(mode),
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
    new StylelintPlugin(),
  ];

  if (mode === constants.prod) {
    return [...base, ...prod];
  }
  return [...base, ...dev];
};
