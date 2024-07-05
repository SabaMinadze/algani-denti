const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    target: 'serverless',
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/aboutus': { page: '/aboutus' },
        '/stomatologi': { page: '/stomatologi' },
        '/achievements': { page: '/achievements' },
        '/questions': { page: '/questions' },
        '/servicesandprices': { page: '/servicesandprices' },
        '/servicesandprices/prices': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices2': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices3': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices4': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices5': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices6': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices7': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices8': { page: '/servicesandprices/prices' },
        '/servicesandprices/prices9': { page: '/servicesandprices/prices' },
        '/servicesandprices/contactus': { page: '/servicesandprices/contactus' },

        // Add other pages as needed
      };
    },
  };
  
  module.exports = nextConfig;