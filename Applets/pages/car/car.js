// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    totalPrice: 0,
   
    items:[
      {
        name:"青菜",
        number:"1",
        price:5.5,
        sum:30,
        thumb:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=679410507,3478666188&fm=26&gp=0.jpg"
      },
      {
        name: "鸭子",
        number: "1",
        price: 10,
        sum: 30,
        thumb: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3930683827,148986577&fm=26&gp=0.jpg"
      },
      
    ],
   
  },



  plus(e){
    console.log(e);
    var items = this.data.items  //获取购物车列表
     var index = e.currentTarget.dataset.index;//获取当前点击事件的下标索引
     console.log(index)
    var number = items[index].number  //获取购物车里面的value值
          number++
    console.log(number)
        items[index].number = number;
        this.setData({
             items: items
    });
    this.getTotalPrice();
},

  minus(e) {
    console.log(e);
    var items = this.data.items  //获取购物车列表
    var index = e.currentTarget.dataset.index;//获取当前点击事件的下标索引
    console.log(index)
    var number = items[index].number  //获取购物车里面的value值
    number--
    console.log(number)
    items[index].number = number;
    this.setData({
      items: items
    });
    this.getTotalPrice();
  },



  getTotalPrice() {
         let items = this.data.items;                  // 获取购物车列表
         let total = 0;
         for (let i = 0; i < items.length; i++) {         // 循环列表得到每个数据           
                 total += items[i].number * items[i].price;     // 所有价格加起来
                 total = total
                 }
    
         this.setData({                                // 最后赋值到data中渲染到页面
             items: items,
             totalPrice: total
 
    });
         console.log(this.data.totalPrice)
    
  },


  deleteList(e) {
         const index = e.currentTarget.dataset.index;
        let items = this.data.items;
        items.splice(index, 1);              // 删除购物车列表里这个商品
        this.setData({
             items: items
             });
    this.getTotalPrice();
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
    let items = this.data.items;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < items.length; i++) {         // 循环列表得到每个数据           
      total += items[i].number * items[i].price;     // 所有价格加起来
      total = total
    }

    this.setData({                                // 最后赋值到data中渲染到页面
      items: items,
      totalPrice: total

    });
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