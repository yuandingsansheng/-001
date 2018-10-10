//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        indicatorDots: true, // 显示版面指示点
        autoplay: true, // 自动播放
        interval: 5000, // 自动切换时长
        duration: 1000, // 滑块时长
        swiperList: [{
                'imageUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'english': 'The great pleasure in life is doing what people say you cannot do.',
                'fanyi': '人生最大的快乐是做到别人认为你做不到的事情。'
            }, {
                'imageUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'english': 'This is where all dreams begin.——THE BFG',
                'fanyi': '我所有的梦都是从这里开始的。——圆梦巨人'
            },
            {
                'imageUrl': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                'english': 'You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. ',
                'fanyi': '你灵魂中每一点力量、勇气与自信的积累，都来自于你一次又一次地直视恐惧、面对恐惧。'
            }
        ],
        dailyRecommendation: [{
            'text': 'The great pleasure in life is doing what people say you cannot do.',
            'author': '—— Mark Twain',
            'matchUrl': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        }, {
            'text': 'You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. ',
            'author': '—— Mark Twain',
            'matchUrl': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
        }, {
            'text': "Some of us get dipped in flat. But every once in a while you find someone who's iridescent, and when you do, nothing will ever compare.",
            'author': '—— Mark Twain',
            'matchUrl': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        }]
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