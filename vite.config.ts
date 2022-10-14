/// <reference types="vitest" />
/// <reference types="vite/client" />

import svgr from '@honkhonk/vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import dayjs from 'dayjs';
import * as path from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';

// @ts-ignore
import pkg from './package.json';

const { dependencies, devDependencies, name, version, author } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, author },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: true,
    port: 8080,
    open: true,
  },
  preview: {
    port: 5555,
    open: true,
  },
  esbuild: {
    pure: ['console.log', 'debugger'],
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  define: { __APP_INFO__: JSON.stringify(__APP_INFO__) },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    svgr(),
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.test.ts',
    css: true,
  },
});
