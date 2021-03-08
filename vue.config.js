/**
 *
 *作者：葛以伟
 *时间：16:12 2021-03-08
 *描述：
 *
 **/

var data = new Date()
var y = data.getFullYear();
var m = data.getMonth()+1;
var r = data.getDate();
var h = data.getHours();
var mon = data.getMinutes();
const Version = y+'_'+m+'_'+r+'_'+h+'_'+mon;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
      resolve: {
          alias:{
              'assets':'@/assets',
              'common':'@/common',
              'components':'@/components',
              'network':'@/network',
          }
      }
  },
  chainWebpack:config =>{
    if(process.env.NODE_ENV === 'production'){
      config.output.filename('js/[name].[chunkhash].' + Version + '.js').end();
      config.output.chunkFilename('js/[name].[chunkhash].' + Version + '.js').end();
      config.plugin('extract-css').tap(args => [{
        filename: `css/[name].[chunkhash].${Version}.css`,
        chunkFilename: `css/[name].[chunkhash].${Version}.css`
      }])
    }
  },
  devServer: {
    proxy: "http://192.168.10.62:9000",
  }
}
