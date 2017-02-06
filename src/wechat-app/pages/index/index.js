//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '获取最新地址',
    userInfo: {},
    array:[
      {
        id:1,
        message:'呵呵'
      },
      {
        id:2,
        message:'哈哈'
      },
      {
        id:3,
        message:'呵呵'
      }
    ],
    item:{
      msg:'牛逼咕噜'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
