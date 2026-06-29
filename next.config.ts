import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "C:/Users/Fix/Desktop/yourmart",
  },
  images:{
    remotePatterns:[
      {hostname:"lh3.googleusercontent.com"},
      {hostname:"plus.unsplash.com"},
      {hostname: "images.unsplash.com"},
      {hostname: "res.cloudinary.com"}

    ]
  }
};

export default nextConfig;
