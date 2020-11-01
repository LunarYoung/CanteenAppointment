// pages/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    address:"东丽bc524"
  },

  input: function (e) {
   
    console.log(e.detail)
    var address=e.detail
    console.log(address)
    this.setData({
      address:e.detail
    })
  },

   
    clickBtn:function(){
      this.setData({ show: false  });
      wx.showToast({
        title: '提交成功',
        image: "/assest/su.png",
        duration: 700,
        mask: true
      })
    },

  showPopup() {
    this.setData({ show: true });
  },



  onClose() {
    this.setData({ show: false });
    wx.showToast({
      title: '提交成功',
      image: "/assest/su.png",
      duration: 700,
      mask: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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