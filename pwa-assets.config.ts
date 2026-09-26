import { defineConfig, minimal2023Preset } from '@vite-pwa/assets-generator/config'

// Regenerate icons from public/favicon.svg with: npm run icons
export default defineConfig({
  preset: minimal2023Preset,
  images: ['public/favicon.svg'],
})
