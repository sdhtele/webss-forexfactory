const { makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { state, saveState } = useSingleFileAuthState('./auth_info.json');
const { handleCommand } = require('./commands');
const { setupDailyTask } = require('./tasks');
const { recipients } = require('./config');

const startBot = async () => {
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });

    sock.ev.on('creds.update', saveState);

    // Tugas otomatis
    setupDailyTask(sock);

    // Event listener untuk pesan masuk
    sock.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type === 'notify') {
            const msg = messages[0];
            if (!msg.key.fromMe && msg.message) {
                await handleCommand(sock, msg);
            }
        }
    });

    // Tanda bot berhasil aktif
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('Bot terhubung ke WhatsApp!');

            // Kirim pesan konfirmasi
            try {
                const recipient = recipients[0];
                await sock.sendMessage(recipient, {
                    text: 'Bot WhatsApp berhasil terinstal dan aktif. Bot siap digunakan!',
                });
                console.log('Pesan konfirmasi berhasil dikirim.');
            } catch (error) {
                console.error('Gagal mengirim pesan konfirmasi:', error);
            }
        }
    });
};

startBot();
