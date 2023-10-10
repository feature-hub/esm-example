import * as esbuild from 'esbuild';

let ctx = await esbuild.context({
  entryPoints: ['src/integrator.tsx', 'src/feature-app.tsx'],
  outdir: 'public/js',
  bundle: true,
  format: 'esm',
  external: ['react', 'react-dom'],
  sourcemap: true,
});

await ctx.watch();

const {host, port} = await ctx.serve({servedir: 'public'});

console.log(
  `Started server at http://${host.replace('0.0.0.0', 'localhost')}:${port}`,
);
