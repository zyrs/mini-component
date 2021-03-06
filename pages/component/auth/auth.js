// pages/component/auth/auth.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //主要按钮背景色 可随着整体背景色改变 自定义
    color: {
      type: String,
      value: "#02c6dc"
    },
    backColor: {
      type: String,
      value: "none"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo:null
  },
  attached:function(e){

    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _bindgetuserinfo:function(e){

      console.log("用户绑定完成下面回调....",e);

      if (e.detail.userInfo != undefined){

        /**
         * 一下可以进行，登录成功的所有操作
         */
         this.setData({
           userInfo: e.detail.userInfo
         })

        wx.setStorageSync("userInfo", e.detail.userInfo);
        app.globalData.userInfo = e.detail.userInfo;

      }

      this.triggerEvent("authCallback", e.detail);
      }
  }
})
