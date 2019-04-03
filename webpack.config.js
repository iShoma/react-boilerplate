const constants = require('./configs/constants');
const dev = require('./configs/dev');
const entry = require('./configs/entries');
const loaders = require('./configs/loaders');
const optimization = require('./configs/optimization');
const output = require('./configs/outputs');
const plugins = require('./configs/plugins');
const resolve = require('./configs/resolve');

const mode = process.env.NODE_ENV === constants.prod ? constants.prod : constants.dev;

module.exports = {
  mode,
  entry,
  output: output(mode),
  module: { rules: loaders(mode) },
  plugins: plugins(mode),
  optimization,
  resolve,
  ...dev(mode),
};
