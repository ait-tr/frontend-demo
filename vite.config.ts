import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (mode === 'development') {
    return {
			plugins: [react()],
			server: {
				open: true,
				proxy: {
					'/api': {
						target: 'http://localhost:8080',
					},
				},
			},
			build: {
				outDir: 'build',
				sourcemap: true,
			},
			test: {
				globals: true,
				environment: 'jsdom',
				setupFiles: 'src/setupTests',
				mockReset: true,
			},
		
    }
  } else {
    // command === 'build'
    return {
			plugins: [react()],
			server: {
				open: true,
				proxy: {
					'/api': {
						target: '/',
					},
				},
			},
			build: {
				outDir: 'build',
				sourcemap: true,
			},
			test: {
				globals: true,
				environment: 'jsdom',
				setupFiles: 'src/setupTests',
				mockReset: true,
			},
		
    }
  }
})
