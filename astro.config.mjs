// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://drix.one',
  adapter: vercel(),
	vite: {
		plugins: [tailwindcss()]
	},
	experimental: {
		fonts: [
			{
				cssVariable: '--font-dm-sans',
				name: 'DM Sans',
				provider: fontProviders.fontsource()
			}
		]
	}
})
