/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/social-media-election-policies',
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tessercat.net',
      },
    ],
  }
}

module.exports = nextConfig
