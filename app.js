/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 * 
 */


App({
    
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    console.log('getStorageSync=' + JSON.stringify(wx.getStorageSync('logs')))
    var logs = wx.getStorageSync('logs') || []


    console.log('logs='+JSON.stringify(logs));
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('getStorageSync=' + JSON.stringify(wx.getStorageSync('logs')))

    console.log('wx.getStorageInfoSync()=' + JSON.stringify(wx.getStorageInfoSync()))//缓存信息 {"keys":["logs","openLinkCount","readLogs"],"currentSize":1,"limitSize":10240}  大小限制10M
  },
  getUserInfo:function(cb){
    console.log('cb='+cb)
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    openid:'',
    isGetUserInfo:false,
    isGetOpenid:false

  }
})