const productIds = new Set([641, 3721, 118, 226, 4754]);
const cache = new Map();
const inFlight = new Map();
export function normalizeProduct(product, checkedAt = new Date().toISOString()) {
  const prices = product.prices;
  if (!prices || !Number.isInteger(prices.currency_minor_unit) || prices.currency_minor_unit < 0 || prices.currency_minor_unit > 4 || !/^[A-Z]{3}$/.test(prices.currency_code)) throw new Error('Invalid product pricing');
  const amount = Number(prices.price);
  if (!Number.isFinite(amount) || amount < 0) throw new Error('Invalid product amount');
  return { id: product.id, price: amount / (10 ** prices.currency_minor_unit), currency: prices.currency_code, inStock: product.is_in_stock === true, purchasable: product.is_purchasable === true, variable: product.type === 'variable', checkedAt };
}
export async function serveProduct(req, res, pathname) {
  if (!pathname.startsWith('/api/products/')) return false;
  const id = Number(pathname.slice('/api/products/'.length));
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') { res.writeHead(405, { Allow: 'GET' }).end(JSON.stringify({error:'Method not allowed'})); return true; }
  if (!productIds.has(id)) { res.writeHead(404).end(JSON.stringify({error:'Unknown product'})); return true; }
  try {
    let entry = cache.get(id);
    if (!entry || Date.now() - entry.savedAt > 60000) {
      if (!inFlight.has(id)) {
        const promise = fetch(`https://services.siiru.io/wp-json/wc/store/v1/products/${id}`, {signal:AbortSignal.timeout(12000), headers:{Accept:'application/json'}}).then(async response => {
          if (!response.ok) throw new Error('Product source unavailable');
          const product = await response.json();
          if (product.id !== id) throw new Error('Invalid product');
          const data = normalizeProduct(product);
          cache.set(id, {data, savedAt:Date.now()});
          return data;
        }).finally(() => inFlight.delete(id));
        inFlight.set(id, promise);
      }
      const data = await inFlight.get(id);
      res.writeHead(200).end(JSON.stringify(data));
    } else res.writeHead(200).end(JSON.stringify(entry.data));
  } catch {
    res.writeHead(503).end(JSON.stringify({error:'Harga dan ketersediaan belum dapat dimuat. Periksa halaman resmi Siiru.'}));
  }
  return true;
}
