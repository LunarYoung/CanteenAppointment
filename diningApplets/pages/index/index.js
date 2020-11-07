//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';

Page({
  

 
  data: {
    motto: 'Hello World',
    

      url: "",



    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    scImage:[
      {
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg"
      },
      {
        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3052658242,2901276237&fm=26&gp=0.jpg"
      },
      {
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3038786427,2045024497&fm=26&gp=0.jpg"
      }
    ],

    items: [ ]
  },
  

  onShow: function () {
    var that = this
    wx.request({
      url: 'http://127.0.0.1/Applets/showFood',
      data: {},
      method: 'GET', 
      success: function (res) {
        // success
        console.log(res.data)
        that.setData({ items: res.data });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

    wx.getStorage({
      key: 'url',
      success: function (res) {
        console.log(res.data)
        that.setData({
          url: res.data
        })
      },
      fail:function(){
        wx.switchTab({ url: '/pages/me/me', })
      }
    })


    
  },





  a:function(){
   wx.getUserInfo({
     success:function(res){
       console.log(res.userInfo.avatarUrl)
     }
   })
  },

  


  clickBtn: function () {
    Toast({
      message:"加入成功",
      duration:500,
      position:"bottom"
    });
   
  },
  
  // gotoPage1: function () {
  //   wx.navigateTo({ url: '/pages/me/me', })
  // },
  //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
    
//     if (app.globalData.userInfo) {
      
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
      
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//       console.log(app.globalData.userInfo)
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }


  





 })
