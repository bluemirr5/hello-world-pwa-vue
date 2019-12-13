module.exports = {
  pwa: {
    name: 'gs.w - full',
    short_name: 'gs.w - short',
    description: 'gs.w - description',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url: '/',
    display: 'standalone',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/sw.js'
      // ...other Workbox options...
    }
  }
}
