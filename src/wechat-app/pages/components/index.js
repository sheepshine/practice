//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[
      'http://lorempixel.com/750/300/sports',
      'http://lorempixel.com/750/300/sports'
    ],
    process:0,
    loadingCtr:false
  },
  //事件处理函数
  testchange: function() {
    console.log(1111)
  },
  loading:function(){
    this.setData({loadingCtr:true});
    var that=this;
    setTimeout(function(){
      that.setData({loadingCtr:false})
    },1000)
  },
  onReady:function(){
    var that=this;
    var timer=setInterval(function(){
      var _process=that.data.process;
      _process++;
      if(_process>=100){
        clearInterval(timer)
      }
      that.setData({process:_process})
    },20)
  }
})
