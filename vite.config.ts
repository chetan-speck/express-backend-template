// ------------------------------------------------------------------------------------------

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// ------------------------------------------------------------------------------------------

export default defineConfig({
	plugins: [react()],
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		minify: 'esbuild',
		cssCodeSplit: true,
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
});

// ------------------------------------------------------------------------------------------
