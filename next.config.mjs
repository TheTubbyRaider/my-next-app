import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  ...bundleAnalyzerConfig,
  compress: true,
  webpack: (config, { isServer }) => {
    // Additional webpack configuration
    return config;
  },
};

export default nextConfig;
