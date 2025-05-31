/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ✅ Disable ESLint errors during Vercel build
    },
    images: {
        domains: ['altitudeimagingvideos.b-cdn.net'], // ✅ Allow external image domain
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
