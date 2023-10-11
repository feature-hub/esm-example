import * as esbuild from 'esbuild';
import path from 'path';
import url from 'url';
import {options} from './build.js';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const servedir = path.join(dirname, '../public');

let ctx = await esbuild.context(options);

await ctx.watch();

const {host, port} = await ctx.serve({servedir});

console.log(
  `Started server at http://${host.replace('0.0.0.0', 'localhost')}:${port}`,
);
