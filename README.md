WhatsApp Screenshot Bot

WhatsApp Screenshot Bot adalah bot WhatsApp berbasis Node.js yang dapat:
	•	Mengambil screenshot dari halaman web yang diminta pengguna.
	•	Menjadwalkan pengiriman screenshot harian secara otomatis.
	•	Merespons perintah manual pengguna seperti !ss [URL].

Bot ini dibangun menggunakan Baileys dan Puppeteer.

Fitur
	•	Screenshot Manual:
	•	Kirimkan perintah !ss [URL] melalui WhatsApp untuk mengambil screenshot dari halaman web tertentu.
	•	Screenshot Harian Otomatis:
	•	Bot secara otomatis mengirimkan screenshot dari Forex Factory Calendar setiap hari pukul 08:00.
	•	Perintah Bantuan:
	•	Kirimkan perintah !help untuk melihat daftar perintah yang tersedia.
	•	Notifikasi Awal:
	•	Bot akan mengirimkan pesan konfirmasi saat pertama kali aktif.

Persyaratan
	1.	Node.js (v16 atau lebih baru)
	2.	npm (Node Package Manager)
	3.	Nomor WhatsApp yang terhubung dengan bot
	4.	Dependensi:
	•	Baileys untuk integrasi WhatsApp.
	•	Puppeteer untuk mengambil screenshot halaman web.
	•	node-cron untuk penjadwalan tugas otomatis.

Instalasi

Ikuti langkah-langkah berikut untuk menjalankan bot ini di lokal Anda:

1. Clone Repository Ini

Buka terminal dan jalankan perintah berikut:

git clone https://github.com/sdhtele/webss-forexfactory.git
cd webss-forexfactory

2. Install Dependensi

Pastikan Anda berada di dalam folder proyek, kemudian jalankan:

npm install

3. Konfigurasi
	•	Buka file src/config.js dan masukkan nomor WhatsApp penerima untuk pesan otomatis:

module.exports = {
    recipients: ['628xxxxxxxxxx@s.whatsapp.net'], // Ganti dengan nomor WhatsApp Anda
};



4. Jalankan Bot

Setelah konfigurasi selesai, jalankan bot dengan perintah:

node src/bot.js

5. Scan QR Code
	•	Setelah menjalankan bot, QR code akan muncul di terminal. Scan QR code menggunakan WhatsApp Anda untuk menghubungkan bot.

Struktur Folder

/webss-forexfactory
├── src/
│   ├── bot.js             <-- File utama untuk menjalankan bot
│   ├── config.js          <-- File konfigurasi, seperti nomor penerima
│   ├── commands.js        <-- File untuk mengatur perintah manual
│   ├── tasks.js           <-- File untuk tugas otomatis
│   ├── utils/
│       ├── screenshot.js  <-- Fungsi untuk mengambil screenshot
├── auth_info.json         <-- Data autentikasi bot (file ini akan di-ignore, jangan diupload)
├── .gitignore             <-- File untuk mengatur file dan folder yang di-ignore oleh git
├── package.json           <-- Metadata proyek dan dependensi
├── package-lock.json      <-- Kunci versi dependensi
├── README.md              <-- Dokumentasi proyek
└── LICENSE                <-- Lisensi proyek (misal MIT License)

Penggunaan

Perintah Manual
	1.	Ambil Screenshot:
	•	Kirimkan pesan ke bot:

!ss [URL]


	•	Contoh:

!ss https://www.forexfactory.com/calendar


	•	Bot akan mengirimkan screenshot dari URL tersebut.

	2.	Bantuan:
	•	Kirimkan pesan:

!help


	•	Bot akan menampilkan daftar perintah yang tersedia.

Tugas Otomatis
	•	Bot akan secara otomatis mengirimkan screenshot dari Forex Factory Calendar ke nomor WhatsApp yang telah diatur di file src/config.js setiap hari pukul 08:00.

Lisensi

Proyek ini dilisensikan di bawah MIT License. Lihat file LICENSE untuk detail lebih lanjut.

Kontribusi
	1.	Fork repository ini.
	2.	Buat branch fitur baru:

git checkout -b fitur-anda


	3.	Commit perubahan Anda:

git commit -m "Menambahkan fitur baru"


	4.	Push ke branch:

git push origin fitur-anda


	5.	Buat Pull Request.

Masalah atau Pertanyaan?

Jika Anda memiliki pertanyaan atau menemukan masalah, silakan buat issue di repository ini.

Credits
	•	Baileys – Library untuk integrasi WhatsApp dengan Node.js.
	•	Puppeteer – Library untuk mengambil screenshot dari halaman web.
	•	node-cron – Library untuk penjadwalan tugas otomatis.

Dengan perubahan ini, URL repository GitHub telah diperbarui menjadi https://github.com/sdhtele/webss-forexfactory, dan file README.md sudah disesuaikan dengan format yang lebih terstruktur dan mudah dibaca.
