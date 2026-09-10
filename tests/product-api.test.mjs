import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeProduct, serveProduct } from '../product-api.mjs';
const product={id:641,type:'simple',prices:{price:'5500',currency_minor_unit:2,currency_code:'SAR'},is_in_stock:false,is_purchasable:false};
test('normalizes minor currency units without enabling unavailable products',()=>{assert.deepEqual(normalizeProduct(product,'2026-09-10T00:00:00Z'),{id:641,price:55,currency:'SAR',inStock:false,purchasable:false,variable:false,checkedAt:'2026-09-10T00:00:00Z'})});
test('preserves variable product pricing and purchase eligibility separately',()=>{const out=normalizeProduct({...product,type:'variable',is_in_stock:true,is_purchasable:false});assert.equal(out.variable,true);assert.equal(out.inStock,true);assert.equal(out.purchasable,false)});
test('rejects malformed and negative prices',()=>{for(const prices of [{price:'x',currency_minor_unit:2,currency_code:'SAR'},{price:'-10',currency_minor_unit:2,currency_code:'SAR'},{price:'100',currency_minor_unit:8,currency_code:'SAR'},{price:'100',currency_minor_unit:2,currency_code:'<script>'}])assert.throws(()=>normalizeProduct({...product,prices}))});
function response(){return {headers:{},setHeader(k,v){this.headers[k]=v},writeHead(status,headers){this.status=status;Object.assign(this.headers,headers);return this},end(body){this.body=JSON.parse(body)}}}
test('proxy rejects unknown products without calling the upstream',async()=>{const res=response();assert.equal(await serveProduct({method:'GET'},res,'/api/products/9999'),true);assert.equal(res.status,404)});
test('proxy does not allow writes or payment requests',async()=>{const res=response();await serveProduct({method:'POST'},res,'/api/products/641');assert.equal(res.status,405);assert.equal(res.headers.Allow,'GET')});
