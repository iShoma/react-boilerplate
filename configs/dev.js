const constants = require('./constants');
const paths = require('./paths');

module.exports = (mode) => {
  if (mode === constants.prod) {
    return {};
  }

  return {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: paths.dist,
      compress: true,
      port: constants.devPort,
      hot: true,
    },
  };
};
