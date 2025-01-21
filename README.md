WhatsApp Screenshot Bot

WhatsApp Screenshot Bot adalah bot WhatsApp berbasis Node.js yang mampu:
	•	Mengambil screenshot dari halaman web yang diminta pengguna.
	•	Menjadwalkan pengiriman screenshot harian secara otomatis.
	•	Merespons perintah manual pengguna seperti !ss [URL].

Bot ini dibangun menggunakan Baileys dan Puppeteer.

Fitur
	1.	Screenshot Manual:
	•	Kirimkan perintah !ss [URL] melalui WhatsApp untuk mengambil screenshot dari halaman web tertentu.
	2.	Screenshot Harian Otomatis:
	•	Bot secara otomatis mengirimkan screenshot dari Forex Factory Calendar setiap hari pukul 08:00.
	3.	Perintah Bantuan:
	•	Kirimkan perintah !help untuk melihat daftar perintah yang tersedia.
	4.	Notifikasi Awal:
	•	Bot akan mengirimkan pesan konfirmasi saat pertama kali aktif.

Persyaratan
	1.	Node.js (v16 atau lebih baru)
	2.	npm
	3.	WhatsApp Number yang terhubung dengan bot
	4.	Dependencies:
	•	Baileys untuk integrasi WhatsApp.
	•	Puppeteer untuk mengambil screenshot halaman web.
	•	node-cron untuk penjadwalan tugas otomatis.

Instalasi
	1.	Clone repository ini:

git clone https://github.com/username/whatsapp-screenshot-bot.git
cd whatsapp-screenshot-bot


	2.	Install dependensi:

npm install


	3.	Konfigurasi:
	•	Buka file src/config.js dan masukkan nomor WhatsApp penerima untuk pesan otomatis:

module.exports = {
    recipients: ['628xxxxxxxxxx@s.whatsapp.net'], // Ganti dengan nomor WhatsApp Anda
};


	4.	Jalankan bot:

node src/bot.js


	5.	Scan QR Code:
	•	Setelah menjalankan bot, QR code akan muncul di terminal. Scan QR code menggunakan WhatsApp Anda untuk menghubungkan bot.

Struktur Folder

/whatsapp-bot
├── src/
│   ├── bot.js             <-- File utama untuk menjalankan bot
│   ├── config.js          <-- File konfigurasi, seperti nomor penerima
│   ├── commands.js        <-- File untuk mengatur perintah manual
│   ├── tasks.js           <-- File untuk tugas otomatis
│   ├── utils/
│       ├── screenshot.js  <-- Fungsi untuk mengambil screenshot
├── auth_info.json         <-- Data autentikasi bot (dibuat otomatis)
├── package.json           <-- Metadata proyek
├── package-lock.json      <-- Kunci versi dependensi

Penggunaan

Perintah Manual
	1.	Ambil Screenshot:
	•	Kirim pesan ke bot:

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

Proyek ini dilisensikan di bawah MIT License.

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
	•	Baileys
	•	Puppeteer
	•	node-cron

Ganti https://github.com/username/whatsapp-screenshot-bot dengan URL GitHub repository Anda!
