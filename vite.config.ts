import path from 'path'
import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return ({
    base: env.ROOT_PATH,
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    define: {
      ROOT_PATH: JSON.stringify(env.ROOT_PATH)
    },
  })
})
