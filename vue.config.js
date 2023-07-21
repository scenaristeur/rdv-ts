const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/rdv-ts/' : '/'


module.exports = defineConfig({
  publicPath: publicPath,
    pwa: {
    name: 'rdvTs',
    //  themeColor: '#4DBA87',
    //  msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath,
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    }
  },

 /* devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    //hotOnly: false,
  },*/
  transpileDependencies: true
})
