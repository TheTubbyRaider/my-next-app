const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    compress: true,
    webpack: (config, { isServer }) => {
      // Additional webpack configuration
      return config;
    },
  });
  