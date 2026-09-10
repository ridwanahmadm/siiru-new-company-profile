# Siiru Company Profile

Website company profile berbahasa Indonesia dengan heading Exo dan body Inter, responsive layout, animasi ringan, dan dukungan prefers-reduced-motion.

## Menjalankan

Memerlukan Node.js 20 atau lebih baru. Tidak perlu menginstal dependency.

```sh
npm run dev
```

Buka http://localhost:5173. PORT dapat diatur melalui environment variable. Untuk hosting statis, arahkan seluruh URL tanpa ekstensi ke index.html.

## Halaman

- `/`: hero, trust/values, kolaborasi, layanan, Siiru App, perencana anggaran, FAQ, closing, footer.
- `/layanan`: hero, daftar layanan dengan dialog detail, aplikasi, perencana anggaran, FAQ, closing.
- `/laporan-publik`: hero, program dampak, riwayat penyaluran, aplikasi, FAQ, closing.
- `/galeri`: filter kategori All, Hajj Campaign, Social Campaign, Press; dialog dokumentasi.
- `/tentang`: profil, Siiru Academy, kontak.
- `/kontak`: alamat, email, WhatsApp, media sosial.
- `/faq`: pertanyaan umum dengan accordion.
- `/privasi`: tanggal efektif, ringkasan dan tautan kebijakan resmi.

## Konten dan batasan

Sumber tercatat di SOURCES.md. Informasi layanan dan aset menggunakan publikasi Siiru; foto hero menggunakan Unsplash. Tidak ada angka dampak, testimoni, rating, atau harga layanan yang dibuat-buat. Laporan berisi program dan dokumentasi publik, bukan ledger transaksi. Rincian penyaluran terbaru dirujuk ke aplikasi/tim Siiru.

Perencana anggaran menghitung input pengguna: jumlah jemaah × anggaran tiket + (hari − 1) × ceil(jemaah / 2) × hotel per malam. Angka awal adalah contoh simulasi, bukan harga penawaran. Belum mencakup visa, makanan, transportasi, atau mutawwif.

Pemesanan, pembayaran, dan unduhan terhubung ke platform resmi. Website tidak menerima pembayaran atau menyimpan data pribadi. Kebijakan privasi adalah ringkasan; dokumen resmi tetap dirujuk. Exo dan Inter di-load dari Google Fonts.

## Verifikasi

`npm run check` memeriksa sintaks. Pengujian browser Chrome/Playwright meliputi seluruh route, error JavaScript, gambar rusak, dialog dan Escape, filter galeri, FAQ, kalkulator, menu mobile, serta overflow pada viewport 375, 390, 768, 1024, dan 1440 px.

## Deployment GitHub Pages

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) menjalankan `npm run check` dan `npm test` pada Node.js 24 LTS, lalu deploy otomatis ke GitHub Pages setiap push ke `main`. Pull request hanya menjalankan verifikasi.

Sebelum workflow pertama dijalankan, buka repository GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**. Repository harus memiliki Pages site terlebih dahulu; `configure-pages` tidak dapat membuatnya memakai `GITHUB_TOKEN` biasa. Setelah source dipilih, push ke `main` akan menjalankan deployment otomatis.

Karena GitHub Pages hanya menyajikan file statis, endpoint server `/api/products/:id` tidak berjalan di Pages; katalog tetap menampilkan fallback dan tautan ke website produksi Siiru. Untuk harga dinamis dan proxy API, gunakan deployment Node server seperti Render, Railway, atau VPS dan jalankan `npm run start`.

## Halaman layanan yang diperluas

`services.js`, `services.css`, dan `service-data.js` membentuk katalog 9 layanan dalam 5 kategori, pencarian, sorting, empty state, detail yang dapat dibagikan (`/layanan?kategori=sedekah-wakaf&detail=quran`), formulir booking, review yang dapat diedit, serta matriks fitur website/aplikasi. Estimator lama tetap tersedia.

- Produk sederhana yang tersedia: pengguna menentukan jumlah, meninjau subtotal, lalu menyetujui perpindahan ke checkout produksi `https://services.siiru.io/checkout/?add-to-cart=ID&quantity=N`. Keranjang resmi dapat berisi item sebelumnya dan harus ditinjau ulang sebelum pembayaran.
- Produk variabel: pengguna diarahkan ke halaman produk resmi untuk memilih varian sebelum checkout.
- Produk tidak tersedia: checkout tidak ditampilkan; pengguna dapat memeriksa halaman resmi untuk status terbaru.
- Mutawwif/transportasi: formulir menyiapkan kebutuhan dan tautan pesan ke tim Siiru. Pesan baru terkirim ketika pengguna menekan Kirim di WhatsApp. Ini belum mengonfirmasi booking atau harga. Chat mutawwif/driver tetap diarahkan ke aplikasi.
- Dam: informasi dan konsultasi, tanpa checkout yang dibuat-buat.
- Tidak ada status pembayaran sukses, nomor pesanan palsu, atau pelacakan donasi lokal. Pengalaman lanjutan diarahkan ke Siiru App.

### Katalog produksi

`product-api.mjs` menyediakan GET `/api/products/{id}`. Endpoint hanya menerima lima ID resmi, tidak melakukan mutasi, menolak metode lain, membatasi request upstream 12 detik, dan menyimpan hasil valid selama 60 detik. Jika sumber gagal, UI memberikan fallback ke halaman produk resmi. Tidak membutuhkan API key.

Fitur harga dinamis memerlukan server Node dan akses HTTPS ke services.siiru.io. Hosting statis saja tetap dapat menampilkan katalog dan tautan resmi, tetapi tidak dapat menjalankan endpoint harga. Pembayaran berlangsung di domain produksi milik Siiru; belum ada integrasi sesi pengguna/order-history/payment webhook di website company profile ini.

### Pengujian tambahan

```sh
npm run check
npm test
npm run test:browser
```

Pengujian browser membutuhkan paket `playwright` dan Chrome; gunakan `NODE_PATH` jika Playwright tersedia di runtime bersama. `CHROME_PATH` dapat mengganti lokasi Chrome, `SIIRU_TEST_URL` mengganti URL server. Pengujian browser menggunakan respons katalog fixture untuk mencakup stok tersedia/tidak tersedia dan tidak membuka transaksi produksi atau mengirim pesan.
# siiru-new-company-profile
