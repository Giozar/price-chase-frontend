import { defineConfig, loadEnv } from '@rsbuild/core';

const { publicVars } = loadEnv({ prefixes: ['API_URL'] });

export default defineConfig({
  source: {
    define: publicVars,
  },
});
