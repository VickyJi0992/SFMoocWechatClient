// pages/notice/notice.js
import Util from '../../utils/util';
import * as CONST from '../../utils/const';
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tabItems: CONST.EXPLORE_TOPIC_CATEGORY,
    swiperHeight: '500rpx',
    currentTab: 2,
    scrollLeft: 0,
    directions: [],
    sessions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },

  init: function(){
    let that = this;
    wx.request({
      url: app.globalData.host + '/session/all',
      method: 'POST',
      data: {
        pageNum: 1,
        pageSize: 10
      },
      success: function (res) {
        if (res.data.msg === 'ok') {
          console.log(res.data);
          let mockRecord = {
            id: 10,
            location: 'PVG03 D5.1',
            topic: 'Vue + VUX + Koa2 long long long long long long long long long name',
            owner: {
              nickName: 'smallsun'
            }
          }
          res.data.retObj.sessions.push(mockRecord);
          res.data.retObj.sessions.push(mockRecord);
          res.data.retObj.sessions.push(mockRecord);
          res.data.retObj.sessions.push(mockRecord);
          res.data.retObj.sessions.push(mockRecord);
          res.data.retObj.sessions.push(mockRecord);
          res.data.retObj.sessions.push(mockRecord);
          that.setData({
            directions: res.data.retObj.directions,
            sessions: res.data.retObj.sessions,
            swiperHeight: res.data.retObj.sessions.length * 200 + 'rpx'
          });
        }
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },

  swichNav: function (evt) {
    let cur = evt.target.dataset.current;
    if (this.data.currentTab === cur) { 
      return false; 
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab: function (evt) {
    this.setData({
      currentTab: evt.detail.current
    });
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
    //  this.init();
    let that = this
    // wx.getSystemInfo({
    //   success: function (res) {
    //     debugger;
    //     that.setData({
    //       clientHeight: res.windowHeight
    //     });
    //   }
    // });
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
