/** @type {import('next').NextConfig} */

const ApiUrl = process.env.NEXT_PUBLIC_SHAREBOOK_API ?? 'https://dev.sharebook.com.br/api/';

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx'],
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `${ApiUrl.replace('/api', '')}:path*`
			}
		];
	}
};

module.exports = nextConfig;
