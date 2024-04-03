/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "minoos-space.sgp1.cdn",
      },
      {
        protocol: "https",
        hostname: "minoos-space.sgp1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "minoos-space.sgp1.cdn.digitaloceanspaces.com",
      },
    ],
    unoptimized: true, // Cache images false and true means no cache
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/your-unique-account-id/",
  },
  // images: {
  //   domains: ['images.unsplash.com'],
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/blog/:slug*',
  //       destination: '/blog/:slug',
  //       permanent: true,
  //     },
  //   ];
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["src"],
  },
}

export default nextConfig
