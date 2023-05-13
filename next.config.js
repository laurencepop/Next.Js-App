/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: [
            "i.dummyjson.com",
            "user-images.githubusercontent.com",
            "pngimg.com",
            "via.placeholder.com",
            "api.slingacademy.com",
        ],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
