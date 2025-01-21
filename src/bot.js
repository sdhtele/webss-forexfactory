const { makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { state, saveState } = useSingleFileAuthState('./auth_info.json');
const { handleCommand } = require('./commands');
const { setupDailyTask } = require('./tasks');
const { recipients } = require('./config');

// Fungsi utama untuk menjalankan bot
const startBot = async () => {
    // Membuat koneksi ke WhatsApp
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true, // Tampilkan QR di terminal
    });

    // Simpan status autentikasi secara otomatis
    sock.ev.on('creds.update', saveState);

    // Mengatur tugas otomatis harian
    setupDailyTask(sock);

    // Event listener untuk pesan masuk
    sock.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type === 'notify') {
            const msg = messages[0]; // Pesan pertama dalam batch
            if (!msg.key.fromMe && msg.message) {
                try {
                    await handleCommand(sock, msg); // Tangani perintah
                } catch (error) {
                    console.error('Gagal memproses perintah:', error);
                }
            }
        }
    });

    // Event listener untuk pembaruan koneksi
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'open') {
            console.log('Bot berhasil terhubung ke WhatsApp!');

            // Kirim pesan konfirmasi ke penerima pertama
            try {
                const recipient = recipients[0];
                await sock.sendMessage(recipient, {
                    text: 'Bot WhatsApp berhasil terinstal dan aktif. Bot siap digunakan!',
                });
                console.log('Pesan konfirmasi berhasil dikirim.');
            } catch (error) {
                console.error('Gagal mengirim pesan konfirmasi:', error);
            }
        } else if (connection === 'close') {
            const reason = lastDisconnect?.error?.output?.statusCode || 'Tidak diketahui';
            console.error(`Koneksi terputus. Alasan: ${reason}`);
        }
    });
};

// Memulai bot
startBot().catch((error) => {
    console.error('Gagal memulai bot:', error);
});
