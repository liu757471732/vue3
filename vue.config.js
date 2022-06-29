module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.ENV === 'development',
  productionSourceMap: false,
  devServer: {
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      [process.env.NODE_ENV]: {
        // 目标 API 地址
        target: process.env.VUE_APP_BASE_API,
        // 如果要代理 websockets
        ws: true,
        pathRewrite: {
          [`^${process.env.NODE_ENV}`]: '' // 需要rewrite的,
        },
        changeOrigin: true
        // 将主机标头的原点更改为目标URL
      }
    }
  }
}