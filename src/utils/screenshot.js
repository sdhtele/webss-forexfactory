const puppeteer = require('puppeteer');

const takeScreenshot = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'load', timeout: 0 });
        const screenshot = await page.screenshot({ type: 'png', fullPage: true });
        await browser.close();
        return screenshot;
    } catch (error) {
        console.error('Error saat mengambil screenshot:', error);
        throw new Error('Gagal mengambil screenshot.');
    }
};

module.exports = { takeScreenshot };
