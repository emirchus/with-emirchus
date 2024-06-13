import { NextConfig } from 'next';

/**
 * @type {NextConfig}
 */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
    },
  ],
};

export default nextConfig;
