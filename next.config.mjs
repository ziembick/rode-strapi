/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: process.env.NODE_ENV === 'production' ? '/rode-strapi' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/rode-strapi/' : '',
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.ctfassets.net',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//     unoptimized: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;


// hostname: "127.0.0.1",
