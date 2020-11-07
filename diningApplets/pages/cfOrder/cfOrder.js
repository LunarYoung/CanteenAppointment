// pages/cfOrder/cfOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',


  cf_info:{
    get_num:33333,
    cf_num:23456,
    cf_time:"2020/9/20.10:30",
    cf_name:"鸡单打独斗",
    cf_price:44,
    contact:1346644,
    address:"东丽aa"

  }

  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
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