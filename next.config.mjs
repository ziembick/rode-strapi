/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;

// hostname: "127.0.0.1",
