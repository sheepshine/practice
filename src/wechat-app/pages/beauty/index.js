// pages/beauty/index.js
Page({
  data:{
    imgData:[],
    urlData:[],
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
      url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/'+page,
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {

        var newArr=that.data.imgData.concat(res.data.results)
        var urlList=[];
        newArr.forEach(function(item){
          urlList.push(item.url)
        })

        that.setData({imgData:newArr,urlData:urlList})
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
    var that=this;
    //info=JSON.stringify(info)
    wx.previewImage({
      current: info.url, // 当前显示图片的http链接
      urls: that.data.urlData // 需要预览的图片http链接列表
    })
    // wx.navigateTo({
    //   url: '/pages/detail/index?info='+info
    // })
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