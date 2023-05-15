import {sveltekit} from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	base: "./",
	resolve: {
		alias: [
			{find: "E2E", replacement: "/E2E"}
		]
	},
	plugins: [sveltekit()]
};

export default config;
