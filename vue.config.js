module.exports = {
  lintOnSave: true,

  css: {
      loaderOptions: {
        sass: {
          implementation: require("sass") // This line must in sass option
        }
      }
    },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
