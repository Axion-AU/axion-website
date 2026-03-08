import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: '/approach', destination: '/about', permanent: true },
      { source: '/culture', destination: '/about', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/collaborate', destination: '/contact', permanent: true },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
