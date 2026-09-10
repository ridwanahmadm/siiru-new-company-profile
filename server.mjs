import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { serveProduct } from './product-api.mjs';
const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
const server = http.createServer(async (req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  if (await serveProduct(req, res, pathname)) return;
  if (pathname.startsWith('/api/')) { res.writeHead(404).end('Not found'); return; }
  let file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (pathname === '/' || !path.extname(file)) file = path.join(root, 'index.html');
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
    res.end(data);
  });
});
server.listen(Number(process.env.PORT) || 5173, '0.0.0.0', () => console.log(`Siiru: http://localhost:${Number(process.env.PORT)||5173}`));
