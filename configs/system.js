const os = require('os');

module.exports = {
  threads: os.cpus().length,
};
