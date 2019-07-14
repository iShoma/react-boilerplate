const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  coverage: path.resolve(__dirname, '../coverage'),
  modules: path.resolve(__dirname, '../src/modules'),
  config: path.resolve(__dirname),
};
