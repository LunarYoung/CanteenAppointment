//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';

Page({
  

 
  data: {
    motto: 'Hello World',
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

    items: [
      {
        name: "青菜青菜",
        price: 5.5,
        sellSum:33,
        imageUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2723039218,827709283&fm=26&gp=0.jpg",
      },
      {
        name: "爆炒牛肉",
        price: 5,
        sellSum: 33,
        imageUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3538711052,1428795582&fm=26&gp=0.jpg",
      },

    ]
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
