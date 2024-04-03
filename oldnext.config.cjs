import { withContentlayer } from "next-contentlayer"

import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx", "ts", "js"],
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "uploadthing.com",
      'source.unsplash.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random/**',
      },
    ],
    unoptimized: true, // Cache images false and true means no cache
  },
}

export default withContentlayer(nextConfig)
