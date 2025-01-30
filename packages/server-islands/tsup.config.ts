import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/runtime/*.ts'],
	format: ['esm'],
	target: 'node18',
	bundle: true,
	dts: {
		entry: ['src/index.ts', 'src/runtime/lib.ts'],
		banner: '/// <reference path="../virtual.d.ts" />\n',
	},
	sourcemap: true,
	clean: true,
	splitting: true,
	minify: false,
	external: ['astro', 'astro-integration-kit', './virtual.d.ts', 'vite', '@inox-tools/utils'],
	noExternal: [],
	treeshake: 'smallest',
	tsconfig: 'tsconfig.json',
});
