/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/rode-strapi',
  output:'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// hostname: "127.0.0.1",
