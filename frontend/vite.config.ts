import react from '@vitejs/plugin-react';
import path from 'path';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        tsconfigPaths(),
        visualizer() as PluginOption,
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@components': `${path.resolve(__dirname, './src/components/')}`,
            '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
            '@routes': `${path.resolve(__dirname, './src/routes/')}`,
            '@stores': `${path.resolve(__dirname, './src/stores/')}`,
            '@assets': `${path.resolve(__dirname, './src/assets/')}`,
            '@themes': `${path.resolve(__dirname, './src/themes/')}`,
            '@public': `${path.resolve(__dirname, './public/')}`,
        },
    },
    server: {
        port: 3000,
        host: true,
    },
    build: {
        target: browserslistToEsbuild(),
    },
});
