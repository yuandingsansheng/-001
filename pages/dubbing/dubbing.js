Page({

    /**
     * 页面的初始数据
     */
    data: {
        dubbingList: [{
                'matchingUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'title': 'Flipped',
                'degree': 'ssss',
                'amounts': '10人'
            }, {
                'matchingUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'title': 'Flipped',
                'degree': 'ssss',
                'amounts': '10人'
            },
            {
                'matchingUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'title': 'Flipped',
                'degree': 'ssss',
                'amounts': '10人'
            },
            {
                'matchingUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'title': 'Flipped',
                'degree': 'ssss',
                'amounts': '10人'
            },
            {
                'matchingUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'title': 'Flipped',
                'degree': 'ssss',
                'amounts': '10人'
            }
        ]
    },

    // dubbing 
    dubbing: function(e) {
        wx.navigateTo({
            url: '../dubSingle/dubSingle?title=' + e.currentTarget.dataset.text,
        })
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