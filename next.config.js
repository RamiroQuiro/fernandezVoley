/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["source.unsplash.com",'blogger.googleusercontent.com',"scontent.fsde2-1.fna.fbcdn.net","firebasestorage.googleapis.com","drive.google.com","upload.wikimedia.org"]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
