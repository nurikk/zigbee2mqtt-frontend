import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import viteCompression from 'vite-plugin-compression';
import { startServer } from './ws';

export default defineConfig(async ({ command, mode }) => {
    if (command === 'serve' && mode !== 'test') {
        startServer();
    }

    return {
        root: 'src',
        base: '',
        build: {
            emptyOutDir: true,
            outDir: '../dist',
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: '../setupTests.js',
            coverage: {
                provider: 'v8',
            },
            onConsoleLog(log, type) {
                if (log?.includes('18next')) {
                    return false;
                }
            },
        },
        plugins: [
            react({
                include: '**/*.{jsx,tsx}',
            }),
            sassDts(),
            viteCompression({ verbose: true, algorithm: 'brotliCompress' }),
        ],
        server: {
            proxy: {
                '/api': {
                    changeOrigin: true,
                    target: process.env.Z2M_API_URI ? process.env.Z2M_API_URI : 'ws://localhost:8579',
                    ws: true,
                },
            },
        },
    };
});
