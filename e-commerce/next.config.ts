import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators:false, 
  images:{
    remotePatterns : [
      {
        protocol : "https",
        hostname : "res.cloudinary.com"
      },
      {
        protocol : "https",
        hostname : "files.stripe.com"
      }
    ]
  }
};

export default nextConfig;
