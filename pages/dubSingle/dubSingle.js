
Page({

    /**
     * 页面的初始数据
     */
    data: {
        byStentebce: false,
        byParagraph: true,
        sOpacity: 0,
        pOpacity: 1,
        left: 0,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        sentence: '',
        paragraph: '',
        sentenceAll: ["The great pleasure in life is doing what people say you cannot do.", "If you saw the darkness in front of you, don't be afraid, that's because sunshine is at your back.", "ake nothing for granted. Know that the harder you work, the luckier you'll get."],
        article: ['I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."', 'I have a dream that one day on the red hills of Georgia,the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.I have a dream that one day even the state of Mississippi,a state sweltering with the heat of injustice,sweltering with the heat of oppression,will be transformed into an oasis of freedom and justice.', 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.', 'I have a dream today!I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of "interposition" and "nullification" --one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.I have a dream today!', 'I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it together."'],
        indexSen: 0, // 句子数组下标
        indexPar: 0, // 段落数组下标


    },


    // 滑动
    changeStatus: function() {
        let that = this;
        that.setData({
            byStentebce: !that.data.byStentebce, // 逐句
            byParagraph: !that.data.byParagraph, // 逐段
        });

        if (that.data.byStentebce) { // 如果是逐句
            that.setData({
                sOpacity: 1,
                pOpacity: 0,
                left: 70,
            })
        } else if (that.data.byParagraph) { // 如果是逐段
            that.setData({
                sOpacity: 0,
                pOpacity: 1,
                left: 0,
            })
        }
    },

    // 下一句
    nextSentence: function() {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        if(that.data.byParagraph) {
            that.setData({
                paragraph: that.data.article[that.data.indexPar],
            })
        }else if(that.data.byStentebce) {
            that.setData({
                sentence: that.data.sentenceAll[that.data.indexSen],
            })
        }
        
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