import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Detect if we are building inside GitHub Actions
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
