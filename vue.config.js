module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commit': '@/commit',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
