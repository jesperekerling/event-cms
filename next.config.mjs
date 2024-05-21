/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'incredible-meadowlark-669.convex.cloud',
        },
      ],
    },
  };
  
  export default nextConfig;
