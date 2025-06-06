import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sonia-clone/',  // <-- add this line
  plugins: [react()],
});
