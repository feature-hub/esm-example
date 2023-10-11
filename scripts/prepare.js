import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

const originalHtml = await fs.readFile(
  path.join(dirname, '../index.html'),
  'utf-8',
);

const finalHtml =
  process.env.NODE_ENV === 'production'
    ? originalHtml.replace(/\?dev/g, '')
    : originalHtml;

await fs.writeFile(path.join(dirname, '../public/index.html'), finalHtml);
