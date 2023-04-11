/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["source.unsplash.com",'blogger.googleusercontent.com',"scontent.fsde2-1.fna.fbcdn.net","upload.wikimedia.org"]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
