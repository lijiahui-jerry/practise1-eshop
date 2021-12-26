module.exports={
  //关闭eslint语法检查
  lintOnSave:false,

  productionSourceMap:false,

  //代理解决跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.98.123.211',
        // pathRewrite: {'^/api': ''},
      },
    },
  },
}