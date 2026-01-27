import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.wasabisys.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mcauto-images-production.sendgrid.net', // Doosri image ke liye bhi
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
