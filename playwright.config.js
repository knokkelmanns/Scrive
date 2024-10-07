module.exports = {
    testDir: './tests',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
    },
};