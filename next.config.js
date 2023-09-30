/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4wheelerbd.com',
      },
    ],
  },
}
  
  module.exports = nextConfig;