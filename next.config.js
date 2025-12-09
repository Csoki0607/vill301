// next.config.js
// 301-es átirányítás a villux.hu domainre

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://villux.hu/:path*',
        permanent: true, // 301-es átirányítás
      },
    ];
  },
};

module.exports = nextConfig;
