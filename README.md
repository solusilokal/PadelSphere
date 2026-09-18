# PadelSphere - Mini Website Arena Padel Premium Standar WPT

Website landing page interaktif & mobile-first untuk **PadelSphere** (Arena Padel Premium Standar World Padel Tour di Banjarmasin, Kalimantan Selatan). Dilengkapi dengan katalog lapangan indoor/outdoor, sewa raket pro, daftar harga sewa, fasilitas tambahan, lightbox galeri foto, form booking langsung ke WhatsApp, integrasi Google Maps & Media Sosial, FAQ akordeon, testimoni, dan fitur berbagi (share modal).

- **Live Website:** [https://solusilokal.github.io/PadelSphere/](https://solusilokal.github.io/PadelSphere/)
- **GitHub Repository:** [https://github.com/solusilokal/PadelSphere](https://github.com/solusilokal/PadelSphere)

---

## 🚀 Cara Menjalankan & Preview

Tersedia **2 cara praktis** untuk melihat preview website ini:

### 1. Langsung Buka di Browser (Paling Cepat & Praktis)
- Buka folder `lapangan padel` di File Explorer.
- Cukup **klik dua kali (double-click)** pada file **`standalone.html`**.
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan semua styling neon & teal, ikon Lucide, gambar, dan interaksi tanpa perlu menjalankan server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara 1 (Batch Script 1-Klik):** Klik dua kali file **`preview.bat`**, lalu pilih opsi `[2]` untuk menjalankan Vite Dev Server (otomatis membuka browser di `http://localhost:3000`).
- **Cara 2 (Terminal):** Buka terminal (PowerShell / Command Prompt) di folder ini dan jalankan:
  ```bash
  npm.cmd run dev
  ```
- Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
lapangan padel/
├── src/
│   ├── App.tsx             # Komponen utama React PadelSphere
│   ├── index.css           # Styling Tailwind CSS & Google Font Space Grotesk
│   └── main.tsx            # Entry point aplikasi React
├── standalone.html         # File preview mandiri (bisa dibuka langsung via double-click)
├── preview.bat             # Launcher praktis 1-klik untuk Windows
├── index.html              # Template HTML utama untuk Vite
├── package.json            # Konfigurasi dependensi dan scripts npm
├── vite.config.js          # Konfigurasi Vite server & build
├── tailwind.config.js      # Konfigurasi Tailwind CSS (tema warna neon #BBE834 & teal #2BBBAE)
├── postcss.config.js       # Konfigurasi PostCSS & Autoprefixer
├── build_standalone.cjs    # Script bundler untuk generate standalone.html mandiri
├── padelsphere.tsx         # File source code asli komponen React
└── README.md               # Dokumentasi panduan penggunaan & preview
```

---

## ✨ Fitur-Fitur Unggulan

- **Hero Banner & Brand PadelSphere**: Desain modern bernuansa dark navy (`#072844`), electric neon (`#BBE834`), dan teal (`#2BBBAE`) yang sporty dan dinamis.
- **Tautan Media Sosial & Lokasi**: Tombol direct link ke Instagram, TikTok, dan Google Maps lokasi Banjarmasin.
- **Tentang Kami & History**: Informasi profil dan perjalanan PadelSphere sejak 2023 sebagai pelopor arena padel premium.
- **Katalog Lapangan & Fasilitas**: Slider interaktif berisi:
  - *Indoor Panoramic Court* (Full kaca standar WPT)
  - *Outdoor Classic Court* (Sirkulasi udara maksimal)
  - *Pro Racket Rental* (Babolat, Bullpadel, Nox)
- **Lightbox Galeri Foto**: Klik gambar katalog untuk menampilkan foto beresolusi penuh dalam modal lightbox dengan navigasi interaktif.
- **Daftar Harga Sewa (Pricing)**: Rincian tarif sewa lapangan weekday pagi/sore dan weekend/libur.
- **Fasilitas Tambahan**: Grid fasilitas area parkir, locker & showering air hangat, cafe & lounge, serta free WiFi.
- **Testimoni Pemain**: Ulasan dan rating bintang dari para pemain padel dan komunitas.
- **FAQ Akordeon**: Jawaban atas pertanyaan seputar raket, sepatu khusus, keanggotaan bulanan, dan ruang ganti.
- **Formulir Reservasi WhatsApp**: Formulir booking cepat (Nama, Tanggal, Jam, Pilihan Lapangan, Catatan) yang langsung menghubungkan ke WhatsApp admin (+6289529605601).
- **Sticky Booking CTA**: Tombol pemesanan melayang yang muncul saat pengguna menggulir ke bawah layar.
- **Modal Berbagi (Share Modal)**: Fitur salin tautan, serta direct share ke WhatsApp, X (Twitter), Facebook, dan Instagram.
