const withPWA = require('next-pwa')({
	dest: 'public',
	// disable: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
