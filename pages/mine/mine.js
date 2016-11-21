var app = getApp()
Page({
  data:{
    userInfo:[],
    orderClassifyArray:[
      {"name": "代付款",
       "img":"../../images/mine_noPay.png"},
       {"name": "代付款",
       "img":"../../images/mine_noGet.png"},
       {"name": "代付款",
       "img":"../../images/mine_getted.png"}
      
    ],
    itemArray:[
      {
        "name":"钱包",
        "img":"../../images/mine_item_wallet.png"
      },
      {
        "name":"优惠券",
        "img":"../../images/mine_item_discount.png"
      },
      {
        "name":"我的储值卡",
        "img":"../../images/mine_item_valueCart.png"
      },
      {
        "name":"帮助",
        "img":"../../images/mine_item_help.png"
      },
      {
        "name":"客服",
        "img":"../../images/mine_item_service.png"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  }
})