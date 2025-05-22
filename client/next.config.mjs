/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ✅ Disable ESLint errors during Vercel build
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
