# Sumber konten dan aset

Diakses 10 September 2026.

- https://siiru.io/ — profil, layanan, fitur, program sosial, kolaborasi, alamat, kontak, logo, mockup aplikasi, foto program dan logo media. Foto di assets/ berasal dari uploads/2025/10–12.
- https://siiru.io/faq/ — informasi layanan, pemisahan pemesanan umrah dan ziarah. Beberapa informasi aplikasi di FAQ lebih lama daripada App Store; fitur booking mengikuti listing App Store.
- https://apps.apple.com/id/app/siiru/id6739772762 — unduhan iOS dan informasi aplikasi.
- https://play.google.com/store/apps/details?id=io.siiru.app — tautan Android dari website resmi.
- https://siiru.io/privacy-policy-2/ — kebijakan resmi, efektif Desember 2025. Halaman privasi merupakan ringkasan, bukan pengganti dokumen resmi.
- https://www.instagram.com/siiruapp.id/ — akun Indonesia.
- https://www.instagram.com/siiruapp/ — akun global.
- https://unsplash.com/photos/kaaba-mecca-landmark-TbTeMOmgQJo — foto hero Ka'bah oleh Ekrem Osmanoglu (assets/kaaba.jpg).
- https://unsplash.com/photos/a-large-group-of-people-standing-around-a-building-Jyj3Q1eIELI — foto kartu Makkah oleh Danish Habib (assets/kaaba-day.jpg).

Logo media tampil sebagai pihak yang berkolaborasi atau meliput sesuai bagian “As seen on” sumber resmi; bukan klaim endorsement baru. Kategori galeri berfungsi sebagai pengelompokan editorial dokumentasi. Data statistik publik yang belum terverifikasi tidak ditampilkan.

## Pendalaman layanan — 10 September 2026

Benchmark yang diberikan pengguna:
- https://services-dev.siiru.space/services — lima kategori, filter, kartu layanan, detail, dan konfigurasi kebutuhan. Website secara eksplisit memakai sample data. Nama, rating, harga, ketersediaan, dan klaim pelaksanaan contoh tidak diimpor sebagai data nyata.
- https://services-dev.siiru.space/services/mutawwif — preferensi kota, bahasa, cakupan pendampingan.
- https://services-dev.siiru.space/services/transport — penumpang, bagasi, pilihan kendaraan.
- https://services-dev.siiru.space/services/sadaqah-waqaf — pencarian program, jumlah unit.
- https://services-dev.siiru.space/services/qurban-aqiqah — kebutuhan peserta dan pemilihan produk.
- https://services-dev.siiru.space/services/dam — katalog; checkout belum tersedia pada benchmark.
- https://services.siiru.io/ — katalog produksi, tautan layanan tambahan, tujuan transaksi.
- https://services.siiru.io/form-transport/ — alur produksi saat pemeriksaan mengarah ke WhatsApp tim Siiru, bukan checkout transportasi otomatis.
- https://services.siiru.io/waqafsadaqah/ dan /products/ — katalog dan stok produksi.
- https://services.siiru.io/product/sedekah-iftar-at-masjidil-haram/ — rincian iftar dan paket 1/5/10.
- https://services.siiru.io/product/chilled-drinking-water-for-pilgrims-during-hajj/
- https://services.siiru.io/product/alquran/
- https://services.siiru.io/product/wheelchair/
- https://services.siiru.io/product/qurban/

### Harga dan ketersediaan

Endpoint publik WooCommerce Store API `/wp-json/wc/store/v1/products/{id}` untuk ID 3721, 4754, 641, 118, dan 226. Server lokal hanya membaca ID whitelist dan menormalisasi mata uang/minor units. Tidak menggunakan harga MYR dari website dev atau HTML lama. Saat diperiksa, API produksi menyatakan produk-produk ini tidak dapat dibeli; halaman HTML iftar memuat varian lama yang terlihat tersedia. Implementasi mengikuti API dan tetap memberi tautan pengecekan resmi, tanpa memaksakan checkout saat stok tidak tersedia.

### Aset tambahan

Mutawwif dan transportasi: `siiru.io/wp-content/uploads/2025/11/`. Gambar produk Al-Qur’an, kursi roda, iftar, air minum, serta qurban berasal dari metadata gambar produk resmi `services.siiru.io`. Mockup aplikasi adalah ilustrasi UI dari publikasi Siiru, bukan daftar penyedia/harga terkini.
