// pages/advise/advice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      food:"",
      advise:""

  },

  onChange: function (e) {
    var food = e.detail
    console.log(food)
    this.setData({
      food: e.detail
    })
  },
  onChange1: function (e) {
    var advise = e.detail
    console.log(advise)
    this.setData({
      advise: e.detail
    })
  },
  

  clickBtn: function (e) {
   
    console.log("aaaa")
    this.setData({
      advise:"",
      food:""
    })
    
    
    wx.showToast({
      title: '提交成功',
      image:"/assest/su.png",
      duration: 700,
      mask: true
    }),
  
    console.log("sssss")
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