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
        forceSwcTransforms: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    },
    redirects: async () => {
        return [
            {
                source: "/oldPath",
                destination: "/",
                permanent: true, // false -> Maintenance
            },
        ]
    },
}

export default nextConfig
