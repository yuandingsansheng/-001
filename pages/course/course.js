Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
=======
    selected: true,
    selected1: false,
    courseContent: [{
      'icon': '../../image/peiyin.png',
      'name': '配音',
      'type': 'CET4',
      'more':'../../image/more.png'
    }, {
      'icon': '../../image/xunlian.png',
      'name': '训练',
      'type': 'CET4',
      'more': '../../image/more.png'
    }],
    allcourseContent:[{
      'icon':'../../image/CET4.png',
      'name':'CET4',
      'more': '../../image/more.png'
    },{
        'icon': '../../image/CET6.png',
        'name': 'CET6',
        'more': '../../image/more.png'
    }]
  },

  selected: function(e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  click:function(e){
    var name = e.currentTarget.dataset.name;
    if(name=="CET4"){
      wx.navigateTo({
        url: '../cet4/cet4',
      })
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
  onReady: function () {
    
=======
  onReady: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 生命周期函数--监听页面显示
   */
<<<<<<< HEAD
  onShow: function () {
    
=======
  onShow: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
<<<<<<< HEAD
  onHide: function () {
    
=======
  onHide: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 生命周期函数--监听页面卸载
   */
<<<<<<< HEAD
  onUnload: function () {
    
=======
  onUnload: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
<<<<<<< HEAD
  onPullDownRefresh: function () {
    
=======
  onPullDownRefresh: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 页面上拉触底事件的处理函数
   */
<<<<<<< HEAD
  onReachBottom: function () {
    
=======
  onReachBottom: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  },

  /**
   * 用户点击右上角分享
   */
<<<<<<< HEAD
  onShareAppMessage: function () {
    
=======
  onShareAppMessage: function() {

>>>>>>> 8359e1d1f7142fd4b6ab60a5b073f7dd565d0b46
  }
})