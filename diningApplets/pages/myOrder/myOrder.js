// pages/myOrder/myOrder.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[]
    
  },

  startSetInter: function () {
    var that = this;
    that.data.setInter = setInterval(
    function () {
        //函数
    }, 1000);
 },

  clickBtn: function () {
    // console.log(this.data.userId)   
    // wx.setStorage({
    //   key: "phone", data: this.data.phone,
    //   //key: "userId", data: res.data.userId,
    // })
     wx.request({
       method:"post",
       url: app.globalData.URL +'Applets/cfMyOrder',
       data: ({
         userId: this.data.userId,
         getNum:this.data.order[0].getNum
       }),
       header: {
         'content-type': 'application/x-www-form-urlencoded' //修改此处即可
       },
       success(res) {
         wx.showToast({
           title: '提交成功',
           image: "/assest/su.png",
           duration: 700,
           mask: true,
      
           
         })
         setTimeout(() => {
          wx.switchTab({ url: '/pages/index/index', })
         }, 1000);
        
       },
      

       fail(res) {
         wx.showToast({
           title: '提交失败',
           image: "/assest/fail.png",
           duration: 700,
           mask: true
         })
       },
     })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'info',
      success: function (res) {
        that.setData({
          userId: res.data.userId
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.request({
      method: "post",
      url: app.globalData.URL +'Applets/myOrder',
      data: ({
        userId: this.data.userId,
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data)
        that.setData({order: res.data });
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.request({
      method: "post",
      url: app.globalData.URL +'Applets/myOrder',
      data: ({
        userId: this.data.userId,
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data)
        that.setData({order: res.data });
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})