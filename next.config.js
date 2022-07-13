/** @type {import('next').NextConfig} */

const AngularUrl = process.env.NEXT_PUBLIC_SHAREBOOK_ANGULAR ?? 'https://www.angular.sharebook.com.br/';

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx'],
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `${AngularUrl}:path*`
			}
		];
	}
};

module.exports = nextConfig;
