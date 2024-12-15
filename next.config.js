/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['media.clarityapp.in'],
  },
 
};

module.exports = nextConfig;
