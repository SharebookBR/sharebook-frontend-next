/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx'],
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `${process.env.NEXT_PUBLIC_SHAREBOOK_API.replace('/api', '')}:path*`
			}
		];
	}
};

module.exports = nextConfig;
