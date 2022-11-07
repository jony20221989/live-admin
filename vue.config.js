//const { defineConfig } = require('@vue/cli-service')

const port ='8090'

module.exports = {
  //transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV === 'development',

  devServer:{
    host:'0.0.0.0',
    port:port,
    // https:false,
    open:false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy:{ //配置跨域
      '/api':{
        target:process.env.VUE_APP_BASE_API,
        ws:true,
        changeOrigin:true,//允许跨域
        pathRewrite:{
          '^/api':''   //请求的时候使用这个api就可以
        }
      }
    }
  }

}
