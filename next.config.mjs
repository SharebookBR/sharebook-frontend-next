/** @type {import('next').NextConfig} */
import configs from './src/configs/index.js'; //if remove this, please put src/configs/index to typescript

console.log('configs', JSON.stringify(configs));

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx'],
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `${configs.ApiUrl.replace('/api', '')}:path*`
			}
		];
	}
};

export default nextConfig;
