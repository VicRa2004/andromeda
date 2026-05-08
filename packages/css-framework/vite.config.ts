import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isMinify = mode === 'production';
  return {
    build: {
      outDir: 'dist',
      emptyOutDir: false, // Don't empty so we can build both min and normal side-by-side easily if run separately
      minify: isMinify ? 'esbuild' : false,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'AndromedaCSS',
        formats: ['es'],
        fileName: 'dummy'
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return isMinify ? 'andromeda.min.css' : 'andromeda.css';
            }
            return assetInfo.name || '[name].[ext]';
          }
        }
      }
    }
  };
});
