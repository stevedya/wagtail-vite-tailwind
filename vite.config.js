import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    server: {
        proxy: {
            // Proxy all unknown requests to Django/wagtail, must run wagtail and django first
            '/': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
        },
        port: 5173, // optional, default Vite port
        open: false, // set to true if you want it to auto-open in browser
    },
    publicDir: 'frontend',
    build: {
        outDir: 'wagtail_vite_tailwind/static',
        rollupOptions: {
            input: {
                main: 'frontend/js/main.js',
            },
            output: {
                entryFileNames: 'js/main.min.js',
                assetFileNames: 'css/main.min.[ext]', // This now works as expected
            },
        },
    },
})
