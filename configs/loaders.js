const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const constants = require('./constants');

const base = [];

const dev = [
  {
    test: /\.jsx?$/,
    use: ['cache-loader', 'happypack/loader?id=babel-fast-loader-dev', 'react-hot-loader/webpack'],
    exclude: constants.nodeModules,
  },
  {
    test: /\.scss$/,
    use: ['cache-loader', 'happypack/loader?id=style-fast-loader-dev'],
    exclude: constants.nodeModules,
  },
];

const prod = [
  {
    test: /\.jsx?$/,
    use: 'happypack/loader?id=babel-fast-loader-prod',
    exclude: constants.nodeModules,
  },
  {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=style-fast-loader-prod'],
    exclude: constants.nodeModules,
  },
];

module.exports = (mode) => {
  if (mode === constants.prod) {
    return [...base, ...prod];
  }
  return [...base, ...dev];
};
