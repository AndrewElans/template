import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // root: 'src', // this does not work -> 404
    server: {
        host: '127.0.0.1',
        port: 5501,
        open: true,
        https: {
            key: fs.readFileSync('./_cert/cert.key'), //
            cert: fs.readFileSync('./_cert/cert.crt'),
            passphrase: '2255'
        },
        // proxy: {
        //     '/api': {
        //         target: 'https://localhost:8000',
        //         changeOrigin: true,
        //         secure: false,
        //         rewrite: (path) => path
        //     }
        // }
    },
    preview: {
        host: '127.0.0.1',
        port: 5502,
        open: true
    },
    build: {
        minify: false, // enable for prod
        // rollupOptions: {
        //     input: {
        //         main: resolve(__dirname, 'index.html'),
        //         ['_layout/tokenhtml']: resolve(
        //             __dirname,
        //             '_layout/tokenhtml/index.html'
        //         ),
        //         ['page-not-found']: resolve(
        //             __dirname,
        //             'page-not-found/index.html'
        //         ),
        //         ['page-assets']: resolve(__dirname, 'page-assets/index.html')
        //     },
        //     output: {
        //         entryFileNames: `page-not-found/entry-[name].js`,
        //         // chunkFileNames: `page-not-found/chunk-[name].js`,
        //         chunkFileNames: (chunk) =>
        //             chunk.name.startsWith('portal')
        //                 ? `page-assets/chunk-[name].js`
        //                 : `page-not-found/chunk-[name].js`,
        //         assetFileNames: `page-not-found/asset-[name].[ext]`
        //     }
        // },
        assetsDir: 'page-not-found'
    },
    base: '/'
});
