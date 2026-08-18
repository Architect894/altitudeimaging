/** @type {import('next').NextConfig} */
const nextConfig = {
    // ✅ New way to allow external images
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'i9.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'altitudeimagingvideos.b-cdn.net',
                // You can add pathname if you want to restrict further, e.g.:
                // pathname: '/**',
            },
        ],
    },

    // ✅ Keep your SVG loader customization
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]',
                    },
                },
                'svgo-loader',
            ],
        });

        return config;
    },
};

export default nextConfig;
