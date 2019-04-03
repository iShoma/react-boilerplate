const constants = require('./configs/constants');

const mode = process.env.NODE_ENV === constants.prod ? constants.prod : constants.dev;

const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  'airbnb',
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  '@loadable/babel-plugin',
];

if (mode === constants.dev) {
  plugins.push('react-hot-loader/babel');
}

module.exports = {
  presets,
  plugins,
};
