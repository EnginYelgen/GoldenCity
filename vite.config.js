import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// CRA'deki config-overrides.js içinde yaptığın Node polyfill'leri
// burada Vite alias'ları ile sağlıyoruz.
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert',
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify',
      url: 'url',
      process: 'process/browser'
    }
  },
  define: {
    // Bazı kütüphaneler process.env bekleyebilir, en azından boş bir obje veriyoruz
    'process.env': {},
    // Node global değişkeni bekleyen paketler için
    global: 'window'
  },
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173,
    strictPort: false
  }
})