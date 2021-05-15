const sveltePreprocess = require('svelte-preprocess')
const node = require('@sveltejs/adapter-node')
const pkg = require('./package.json')
const copy = require('rollup-plugin-copy')
const static = require('@sveltejs/adapter-static')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: static(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
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
