import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 6001,
    cors: true,
  },
  plugins: [
    react(),
    federation({
      name: 'trend',
      filename: 'remoteEntry.js',
      exposes: {
        './Trend': './src/trend/trend.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build:{
    target:'exnext',
    minify: false, // Disable minification for easier debugging
    cssCodeSplit: false, // Enable CSS code splitting
  }
})
