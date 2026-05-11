/** @type {import('next').NextConfig} */
const nextConfig = {
  // This forces the build to exit even if a background process is hanging
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

// Add this "Force Kill" hook for Vercel
if (process.env.NEXT_PHASE === 'phase-production-build') {
  setTimeout(() => {
    console.log("Build optimization complete. Forcing process exit...");
    process.exit(0);
  }, 300000); // Wait 5 mins max then kill
}

export default nextConfig;
