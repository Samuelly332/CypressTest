const {defineConfig} = require("cypress");

module.exports = defineConfig({
    viewportHeight: 2048,
    viewportWidth: 2560,
    e2e: {
        baseUrl: 'https://www.babybabysoft.sk/'
    },
});
