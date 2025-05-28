import {defineConfig} from 'vite'
import {resolve} from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: 'wagtail_vite_tailwind/static',
        rollupOptions: {
            input: {
                main: 'frontend/js/main.js',
            },
            output: {
                entryFileNames: 'js/main.min.js',
                assetFileNames: 'css/main.min.[ext]',
            },
        },
    },
})
