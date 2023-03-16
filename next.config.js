/** @type {import('next').NextConfig} */


module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // assetPrefix: '/'
};
