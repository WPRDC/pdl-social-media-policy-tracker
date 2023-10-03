/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tessercat.net/',
      },
    ],
  }
}

module.exports = nextConfig
