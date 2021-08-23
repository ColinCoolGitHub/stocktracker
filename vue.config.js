module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
          sass: {
            implementation: require("sass") // This line must in sass option
          }
        }
      },    
}