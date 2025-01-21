const cron = require('node-cron');
const { takeScreenshot } = require('./utils/screenshot');
const { recipients } = require('./config');

const setupDailyTask = (sock) => {
    cron.schedule('0 8 * * *', async () => {
        console.log('Menjalankan tugas harian: mengambil screenshot Forex Factory');
        try {
            const url = 'https://www.forexfactory.com/calendar';
            const screenshot = await takeScreenshot(url);

            for (const recipient of recipients) {
                await sock.sendMessage(recipient, {
                    image: screenshot,
                    caption: 'Berikut adalah kalender Forex Factory hari ini.',
                });
            }

            console.log('Screenshot berhasil dikirim ke semua penerima.');
        } catch (error) {
            console.error('Gagal mengambil atau mengirim screenshot:', error);
        }
    });
};

module.exports = { setupDailyTask };
