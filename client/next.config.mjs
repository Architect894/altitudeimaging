/** @type {import('next').NextConfig} */
const nextConfig = {
    // ✅ Removed invalid experimental.appDir
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]'
                    }
                },
                'svgo-loader'
            ]
        });
        return config;
    },
};

export default nextConfig;
