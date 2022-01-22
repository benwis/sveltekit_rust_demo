import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import wasmPack from 'vite-plugin-wasm-pack';
import { wasm } from '@rollup/plugin-wasm';
import ViteRsw from 'vite-plugin-rsw';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: () => ({
			plugins: [wasmPack(['./wasm_game_of_life'],[])]
			// plugins: [wasm()]
			// plugins: [
			// ViteRsw({
			// 	crates: [
			// 	  'wasm_game_of_life'
			// 	]
			//   })
			// ]
		})
	}
};

export default config;
