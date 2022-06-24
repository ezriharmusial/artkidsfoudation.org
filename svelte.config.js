import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
		},
	},
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
