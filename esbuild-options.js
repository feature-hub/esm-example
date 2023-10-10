/**
 * @type {import('esbuild').BuildOptions}
 */
export const options = {
  entryPoints: ['src/integrator.tsx', 'src/feature-app.tsx'],
  outdir: 'public/js',
  bundle: true,
  format: 'esm',
  external: ['react', 'react-dom'],
  sourcemap: true,
};
