// pages/cfOrder/cfOrder.js
const app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:"",
    radio: '1',
    remark:"",
    type:"堂食",

    get_num:0,
    cf_num:0,
    cf_time:"0",

    cf_name:"",
    cf_name1:"",
    url:"",
    url1:"",
    name_num:1,
    name_num1:1,
    food_price:0,
    food_price1:0,

    cf_price:0,
    run_price:0,
    all_Price:0,

    order:[],

    phone:"没填电话哦!",
    address:"没填地址哦!"

  

  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });

    if (event.detail ==1){
      this.setData({ type: "堂食", });
      this.setData({ run_price: 0, });
      
    }else{
      this.setData({ type: "外卖", });
      this.setData({ run_price: 1, });
    }
  },

  remark1(){
    this.setData({ remark: "多加饭",});
  },

  remark2() {
    this.setData({ remark: "多加汁", });
  },

onSubmit(){
  wx.request({
    method: 'post',
    url: app.globalData.URL + 'Applets/handleOrder', //仅为示例，并非真实的接口地址
    data: ({
      getNum:this.data.get_num,
      orderNum:this.data.cf_num,
      userId:this.data.userId,
      time:this.data.cf_time,
      foodName: this.data.cf_name,
      foodName1: this.data.cf_name1,
      url:this.data.url,
      url1:this.data.url1,
      foodNum:this.data.name_num,
      foodNum1: this.data.name_num1,
      price: this.data.food_price,
      price1: this.data.food_price1,
      allPrice:this.data.all_Price,
     // advise: this.data.advise,
      type:this.data.type,
      remark:this.data.remark,
      address:this.data.address,
      phone:this.data.phone
    }),
    header: {
      'content-type': 'application/x-www-form-urlencoded' //修改此处即可
    },
    success(res) {
     
      wx.showToast({ 
        title: '提交成功',
        image: "/assest/su.png",
        duration: 700,
        mask: true
      })
      var app = getApp()
      app.globalData.buycar.splice(0,2)

      setTimeout(() => {
        wx.switchTab({ url: '/pages/myOrder/myOrder', })
       }, 1000);
      

    },

    fail(res) {
      wx.showToast({
        title: '提交失败',
        image: "/assest/fail.png",
        duration: 700,
        mask: true
      })
    }
  })

},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var i = (Math.random() * 9999).toFixed(0)
    this.setData({
      get_num:i
    })


    var str = "",
      range = 10,//min
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',         't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', ];

    // 随机产生
    if (true) {
      range = Math.round(Math.random() * (2)) + 6;
    }
    for (var i = 0; i < range; i++) {
      var pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
   
    this.setData({
      cf_num:str
    })

    var that = this;
    wx.getStorage({
      key: 'phone',
      //key:"address",
      success: function (res) {
        console.log(res.data)
        that.setData({
          phone: res.data,
         // address:res.data.address
        })
      },
    })
    wx.getStorage({
      key:"address",
      success: function (res) {
        console.log(res.data)
        that.setData({
          address:res.data
        })
      },
    })

    wx.getStorage({
      key: 'info',
      success: function (res) {
        that.setData({
          userId:res.data.userId
        })
      },
      fail: function () {
      },
    })
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

    // var app = getApp()
    // this.setData({
    //   items: app.globalData.buycar
    // })


    var TIME = util.formatTime(new Date());
    this.setData({
      cf_time: TIME,
    });

    var app = getApp()
    this.setData({
      order: app.globalData.buycar
    })

    let order = this.data.order;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < order.length; i++) {         // 循环列表得到每个数据           
      total += order[i].number * order[i].price;     // 所有价格加起来
      total = total
    }
    this.setData({
      all_Price:total
    })

    let foodName,foodNum,foodName1,foodNum1,url,url1
    if(order.length==1){
    foodName=order[0].name
    foodNum=order[0].number
    url=order[0].thumb
   
    }
    if(order.length==2){
      foodName=order[0].name
      foodNum=order[0].number
      url=order[0].thumb
      foodName1=order[1].name
      foodNum1=order[1].number
      url1=order[1].thumb
    }
    this.setData({
      cf_name:foodName,
      cf_name1:foodName1,
      name_num:foodNum,
      name_num1:foodNum1,
      url:url,
      url1:url1
    })
    console.log(this.data.order)
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