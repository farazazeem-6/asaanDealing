import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.wasabisys.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mcauto-images-production.sendgrid.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
