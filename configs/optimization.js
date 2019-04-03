module.exports = {
  splitChunks: {
    chunks: 'async',
    cacheGroups: {
      vendors: {
        name: 'vendors',
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        minChunks: 1,
        priority: -10,
      },
      commons: {
        name: 'commons',
        chunks: 'all',
        minChunks: 4,
      },
    },
  },
};
