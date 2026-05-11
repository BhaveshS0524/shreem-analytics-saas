/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable minification to prevent the build from hanging
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Essential for standalone deployment on Vercel
  output: 'standalone',
};

export default nextConfig;
