const { takeScreenshot } = require('./utils/screenshot');

const handleCommand = async (sock, msg) => {
    const sender = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    console.log(`Pesan dari ${sender}: ${text}`);

    if (text.startsWith('!ss ')) {
        const url = text.split(' ')[1];
        if (!url) {
            await sock.sendMessage(sender, { text: 'Mohon sertakan URL setelah perintah "!ss".' });
            return;
        }

        try {
            const screenshot = await takeScreenshot(url);
            await sock.sendMessage(sender, {
                image: screenshot,
                caption: `Berikut adalah tangkapan layar dari ${url}`,
            });
        } catch (error) {
            await sock.sendMessage(sender, { text: `Gagal mengambil screenshot: ${error.message}` });
        }
    } else if (text === '!help') {
        await sock.sendMessage(sender, {
            text: 'Daftar Perintah:\n1. !ss [URL] - Ambil screenshot dari sebuah website\n2. !help - Daftar perintah',
        });
    } else {
        await sock.sendMessage(sender, {
            text: 'Perintah tidak dikenali. Gunakan "!help" untuk melihat daftar perintah.',
        });
    }
};

module.exports = { handleCommand };
