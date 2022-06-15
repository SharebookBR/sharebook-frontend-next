module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		//To include new paths, include also into tsconfig.paths.json
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
		// '^@/sharebook-components/(.*)$': '<rootDir>/components/$1', //to all paths, ex: @sharebook-components/somegfolder
		'^@sharebook-themes': '<rootDir>/src/themes',
		'^@sharebook-layouts': '<rootDir>/src/layouts',
		'^@sharebook-components': '<rootDir>/src/components',
		'^@sharebook-hooks': '<rootDir>/src/hooks',
		'^@sharebook-configs': '<rootDir>/src/configs',
		'^@sharebook-axios': '<rootDir>/src/axios',
		'^@sharebook-utils': '<rootDir>/src/utils',
		'^@sharebook-enums': '<rootDir>/src/enums',
		'^@sharebook-tests': '<rootDir>/src/tests'
	},
	testEnvironment: 'jest-environment-jsdom'
};
