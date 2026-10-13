const { defineConfig } = require("cypress");
const fs = require('fs') // added

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout:10000,
  pageLoadTimeout:160000,
  watchForFileChanges:false,
  screenshotOnRunFailure:false,
  video:false,
  experimentalMemoryManagement:false,
  numTestsKeptInMemory:1,

  env: {

  },

  e2e: {
    
    baseUrl:'https://library-test.planninginspectorate.gov.uk',
    setupNodeEvents(on, config) {
      // ensure logs folder exists
      const logsDir = `${config.projectRoot}/cypress/logs`
      if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true })

      // maximize browser window for Chromium/Firefox/Electron when running interactively
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && !browser.isHeadless) {
          launchOptions.args.push('--start-maximized')
          launchOptions.args = launchOptions.args.filter(arg => !arg.startsWith('--window-size'))
          return launchOptions
        }
        if (browser.name === 'firefox' && !browser.isHeadless) {
          launchOptions.args.push('--start-fullscreen')
          return launchOptions
        }
        if (browser.name === 'electron' && !browser.isHeadless) {
          launchOptions.preferences = launchOptions.preferences || {}
          launchOptions.preferences.width = 1920
          launchOptions.preferences.height = 1080
          return launchOptions
        }
        return launchOptions
      })

      return config
    },
  },

});