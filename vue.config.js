// vue.config.js 这里是配置了webapck

const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
let cesiumSource = "./node_modules/cesium/Source";
let cesiumWorkers = "../Build/Cesium/Workers";
module.exports = {
  // 选项...
  // publicPath: '/', // 默认配置 部署应用包时的基本 URL
  // outputDir: 'dist', // 默认配置 打包生成的生产环境构建文件的目录
  // assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // lintOnSave: false,
  // lintOnSave: false && process.env.NODE_ENV === 'development', // 不进行eslint警告编译
  // productionSourceMap: false, // source map将错误映射到具体的文件的具体行数 默认配置true

  // 配置webpack插件，这里的代码最终会被merge到webpack中
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@crud": path.resolve("src/components/Crud"),
        "cesium": path.resolve(__dirname, cesiumSource)
      }
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, cesiumWorkers),
        to: "Workers"
      }]),
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, "Assets"),
        to: "Assets"
      }]),
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, "Widgets"),
        to: "Widgets"
      }]),
      new CopyWebpackPlugin([{
        from: path.join(cesiumSource, "ThirdParty/Workers"),
        to: "ThirdParty/Workers"
      }]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/")
      })
    ]
  },

  /**
   * @description 这是webpack的服务器启动 就是http://localhost:8000/
   * 还需要在package.json中配置编译命令"dev": "webpack-dev-server",
   */
  devServer: {
    open: true, // 自动打开浏览器
    port: 8000, // 端口号修改，默认8080
    // proxy代理
    // proxy: {
    //   // 主要是用于跨域，比如接口请求中带有/api的时候，会自动代理到 http://localhost:8000
    //   '/apiRequest': {
    //     target: 'http://',
    //     pathRewrite: {
    //       '^/apiRequest': ''
    //     }
    //   },
    // }
  },

  // 配置css全局变量，这里配置的会变成全局通用的
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 这里的选项会传递给 css-loader
  //       additionalData: `@import "~@/assets/css/common.scss";`
  //     }
  //   }
  // }
}