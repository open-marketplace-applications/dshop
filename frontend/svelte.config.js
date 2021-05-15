import sveltePreprocess from 'svelte-preprocess';

import node from '@sveltejs/adapter-node';

import copy from 'rollup-plugin-copy';

import _static from '@sveltejs/adapter-static';




/** @type {import('@sveltejs/kit').Config} */
export default {

	preprocess: sveltePreprocess(),

	kit: {

		adapter: _static(),

		target: '#svelte',

		vite: {
			ssr: {
	
			},
			plugins: [
				copy({
					src: 'node_modules/market-lib/market_lib_bg.wasm',
					dest: 'assets',
					rename: 'market_lib_bg.wasm',
					hook: 'writeBundle' // notice here
				})
			]
		}
	}
}
