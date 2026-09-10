# Verifikasi website Siiru

10 September 2026 · Chrome headless melalui Playwright.

- Pemeriksaan sintaks JavaScript: lulus.
- Beranda dan tujuh halaman: dapat dimuat dengan heading yang sesuai.
- Seluruh gambar halaman: tidak ada gambar rusak.
- Console JavaScript: tidak ada error.
- Dialog unduhan, detail layanan, dan dokumentasi: dapat dibuka dan ditutup dengan Escape.
- Filter galeri Press: menampilkan satu dokumentasi yang sesuai.
- FAQ: membuka jawaban melalui elemen details native.
- Kalkulator: 4 jemaah, 9 hari, tiket Rp9 juta/orang dan hotel Rp1 juta/kamar/malam menghasilkan Rp52 juta.
- Beranda: tidak ada horizontal overflow pada 375, 390, 768, 1024, 1440 px.
- Semua halaman tambahan: tidak ada horizontal overflow pada 390 px.
- Menu mobile: membuka navigasi dan berpindah ke galeri.
- Font terkonfirmasi: Exo untuk heading, Inter untuk body.
- Dukungan prefers-reduced-motion diperiksa.
- Screenshot desktop dan mobile ditinjau; hero dan ukuran heading mobile disempurnakan.

Cakupan: frontend lokal. Transaksi, pengiriman pesan WhatsApp/email, dan instalasi aplikasi tidak dilakukan.

## Pendalaman layanan

10 September 2026. Seluruh pemeriksaan berikut lulus:

- Sintaks modul aplikasi, layanan, data katalog, endpoint produk, dan server.
- Lima unit test untuk minor unit mata uang, status stok/pembelian, produk variabel, data harga invalid, ID tidak dikenal, dan penolakan metode tulis.
- Sembilan layanan; filter lima kategori, pencarian, sorting, empty state, reset.
- Validasi kebutuhan wajib, rute asal/tujuan berbeda, review, dan pengeditan draft booking.
- Escaping input pengguna di ringkasan; karakter HTML tampil sebagai teks.
- Tautan tim Siiru memuat rincian booking tanpa mengirim pesan otomatis.
- Subtotal produk sederhana, kuantitas, konfirmasi, dan tujuan checkout produksi dengan ID serta jumlah yang benar.
- Produk variabel diarahkan ke halaman produk untuk memilih varian; tidak memaksakan varian.
- Stok tidak tersedia dan layanan dam tidak membuka checkout.
- Endpoint gagal menampilkan fallback ke situs resmi, bukan harga/stok buatan.
- Perpindahan dialog detail ke Siiru App, keyboard Escape, serta URL detail/kategori.
- Estimator lama tetap menghasilkan Rp52 juta untuk skenario empat jemaah, sembilan hari, tiket Rp9 juta/orang, dan hotel Rp1 juta/kamar/malam.
- Tidak ada overflow halaman/dialog pada lebar 375, 390, 640, 768, 1024, dan 1440 px.
- Tidak ada error JavaScript. Pemeriksaan produksi terpisah mengonfirmasi endpoint lokal HTTP 200 dan tidak ada gambar rusak.
- Screenshot desktop, mobile, detail booking, dan katalog penuh ditinjau; gambar produk dan tipografi mobile diperbaiki.

Pengujian alur transaksi menggunakan respons katalog fixture dan hanya memeriksa URL tujuan. Permintaan checkout produksi dan pesan WhatsApp diblokir oleh pengujian; tidak ada pembayaran, booking, atau pengiriman pesan yang dilakukan. Harga/stok produksi diperiksa melalui GET terpisah. Beberapa produk saat pemeriksaan tidak tersedia menurut API resmi, sehingga checkout mengikuti status tersebut.
