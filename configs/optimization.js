module.exports = {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendors: {
        name: 'vendors',
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        minChunks: 4,
        priority: -10,
      },
      commons: {
        name: 'commons',
        chunks: 'all',
        minChunks: 10,
      },
    },
  },
};
