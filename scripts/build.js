import {commonjs} from '@hyrious/esbuild-plugin-commonjs';
import * as esbuild from 'esbuild';
import path from 'path';
import url from 'url';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

/**
 * @type {import('esbuild').BuildOptions}
 */
export const options = {
  absWorkingDir: path.join(dirname, '..'),
  entryPoints: ['src/integrator.tsx', 'src/feature-app.tsx'],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  external: ['react'],
  plugins: [commonjs({filter: /node_modules\/(react-dom)\//})],
  sourcemap: true,
  minify: process.env.NODE_ENV === 'production',
};

await esbuild.build(options);
