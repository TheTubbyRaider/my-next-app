import { defineConfig } from 'next/config';
import withPlugins from 'next-compose-plugins';
import withImages from 'next-images';

const nextConfig = defineConfig({
  // your config options here
  images: {
    domains: ['example.com'],
  },
});

module.exports = withPlugins(nextConfig, [
  withImages,
  // add other plugins here
]);