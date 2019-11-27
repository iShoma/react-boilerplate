const paths = require('./paths');

module.exports = {
  client: ['react-hot-loader/patch', `${paths.src}/client.jsx`],
};
