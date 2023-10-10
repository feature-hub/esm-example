import * as esbuild from 'esbuild';
import {options} from './esbuild-options.js';

let ctx = await esbuild.context(options);

await ctx.watch();

const {host, port} = await ctx.serve({servedir: 'public'});

console.log(
  `Started server at http://${host.replace('0.0.0.0', 'localhost')}:${port}`,
);
