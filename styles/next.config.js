const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Add other pages as needed
      };
    },
  };
  
  module.exports = nextConfig;