import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const INCLUDE_PATTERN = /<!--\s*@include\s+(\S+)\s*-->/g;

/**
 * Inlines HTML partials referenced as `<!-- @include templates/foo.html -->`
 * and reloads the page whenever a partial changes during development.
 */
function htmlIncludes() {
  return {
    name: 'html-includes',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) =>
        html.replace(INCLUDE_PATTERN, (_, file) => {
          const path = resolve(import.meta.dirname, file);
          return readFileSync(path, 'utf-8');
        }),
    },
    handleHotUpdate({ file, server }) {
      if (file.startsWith(resolve(import.meta.dirname, 'templates'))) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
    },
  };
}

export default defineConfig({
  plugins: [htmlIncludes()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap and the site's partials still rely on `@import`.
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        quietDeps: true,
      },
    },
  },
});
