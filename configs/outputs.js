const constants = require('./constants');
const paths = require('./paths');

const base = { path: paths.dist };

const dev = { filename: '[name].bundle.js' };

const prod = { filename: '[name].[chunkhash].bundle.js' };

module.exports = (mode) => {
  if (mode === constants.prod) {
    return { ...base, ...prod };
  }
  return { ...base, ...dev };
};
