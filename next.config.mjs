/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for the initial launch
  output: 'standalone', 
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This bypasses the hang during "Creating an optimized production build"
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
