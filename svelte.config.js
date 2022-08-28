import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess(),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						// additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	}
};

export default config;
