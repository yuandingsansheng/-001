Page({

    /**
     * 页面的初始数据
     */
    data: {
        courseInfo: [{
            'title': 'CET4',
            'pic': '../../image/CET4.png',
            'introduce': '我们针对四级口语考试精心准备的过关课程，帮您轻松拿下高分！'
        }, {
            'title': 'CET6',
            'pic': '../../image/CET6.png',
            'introduce': '我们针对六级口语考试精心准备的过关课程，帮您轻松拿下高分！'
        }]
    },



    swiperChange(e) {
        const that = this;
        that.setData({
            swiperIndex: e.detail.current,
        })
    },

    // 点击事件
    toCourse: function(e) {
        console.log(e.currentTarget.dataset.id);

        if (e.currentTarget.dataset.id == 0) { // 四级
            wx.navigateTo({
                url: '../cet4/cet4'
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})