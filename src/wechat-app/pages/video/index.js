Page({
  data:{
    imgData:[],
    curpage:1
  },
  onLoad:function(options){
    this.getImg(this.data.curpage)
  },
  //获取图片
  getImg:function(page){
    var that=this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: 'http://gank.io/api/data/休息视频/10/'+page,
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {

        var newArr=that.data.imgData.concat(res.data.results)
        that.setData({imgData:newArr})
        wx.hideToast()
      }
    })
  },
  //上拉刷新
  onPullDownRefresh: function(){
    this.setData({imgData:[],curpage:1})
    this.getImg(this.data.curpage)
    wx.stopPullDownRefresh()
  },
  //下拉刷新
  onReachBottom:function(){
    var page=this.data.curpage+1;
    this.setData({curpage:page})
    this.getImg(this.data.curpage)
  },
  //查看详情
  getInfo:function(e){
    var info=e.target.dataset.info;
    info=JSON.stringify(info)
    wx.navigateTo({
      url: '/pages/detail/index?info='+info
    })
  },
  //微信分享
  onShareAppMessage: function () {
    return {
      title: '这个网站很黄也',
      desc: '大家快来看看呀',
      path: '/page/beauty/index'
    }
  }
})