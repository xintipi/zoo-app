/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import dayjs from 'dayjs';
import * as path from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import svgrPlugin from 'vite-plugin-svgr';

// @ts-ignore
import pkg from './package.json';

const { dependencies, devDependencies, name, version, author } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, author },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};
const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['antd'],
    output: 'antd',
  },
  {
    match: ['lodash'],
    output: 'lodash',
  },
  {
    match: ['formik'],
    output: 'formik',
  },
  {
    match: ['i18next'],
    output: 'i18next',
  },
];
const configManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(
        `[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`,
        'ig',
      );
      return reg.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
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
    pure: ['console.log', 'console.error', 'debugger'],
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: configManualChunk,
      },
    },
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
        modifyVars: {
          '@btn-primary-bg': '#042e59',
          '@menu-bg': '#042e59',
          '@menu-item-color': '#fff',
          '@menu-highlight-color': '#ade9ff',
          '@menu-item-active-bg': '#064780',
          '@menu-inline-submenu-bg': '#042e59',
        },
      },
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false,
        },
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  optimizeDeps: {
    include: ['@ant-design/icons', 'axios', 'formik', 'lodash'],
  },
  test: {
    include: ['src/**/*.{test,spec}.{jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.test.ts',
    css: true,
  },
});
