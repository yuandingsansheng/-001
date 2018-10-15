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
        done: false,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        sentence: '',
        sentenceAll: ["The great pleasure in life is doing what people say you cannot do.", "If you saw the darkness in front of you, don't be afraid, that's because sunshine is at your back.", "ake nothing for granted. Know that the harder you work, the luckier you'll get."],
        article: 'I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."',
        indexSen: 0, // 句子数组下标
        src: '', // 录音
    },


    // 提示
    tip: function(msg) {
        wx.showModal({
            title: '提示',
            content: msg,
            showCancel: false
        })
    },

    // 滑动
    changeStatus: function() {
        let that = this;

        // 
        // 只有在 index ==0 的时候才可以修改逐句逐段的配音方式
        if (that.data.indexSen == 0) {
            that.setData({
                byStentebce: !that.data.byStentebce, // 逐句
                byParagraph: !that.data.byParagraph, // 逐段
            });

            if (that.data.byStentebce) { // 如果是逐句
                that.setData({
                    sOpacity: 1,
                    pOpacity: 0,
                    left: 70,
                    sentence: that.data.sentenceAll[that.data.indexSen],
                })
            } else if (that.data.byParagraph) { // 如果是逐段
                that.setData({
                    sOpacity: 0,
                    pOpacity: 1,
                    left: 0,
                })
            }
        } else {
            that.tip('当前不可以改变配音方式哦')
        }

    },

    // 
    dub: function() {
        let that = this;
       that.recorderManager.start({
           format: 'mp3'
       })

    },

    // 播放
    bofang: function() {
        let that = this;
        var src = that.data.src;
        if (src == '') {
            that.tip("请先录音！")
            return;
        }
        that.innerAudioContext.src = that.data.src;
        that.innerAudioContext.play()
    },

    // 重新配音
    redub:function() {
        let that = this;
        that.recorderManager.start({
            format: 'mp3'
        })

    },

    // 下一句
    next: function() {
        let that = this;
        let index = 0;
        index = that.data.indexSen;
        if (index < that.data.sentenceAll.length - 1) { // 文章尚未结束
            index += 1;
            that.setData({
                sentence: that.data.sentenceAll[index],
                indexSen: index
            })
        } else { // 文章结束了
            that.setData({
                done: true,
                byStentebce: false, // 逐句
                byParagraph: false, // 逐段
            })

        }

    },

    // 配音完成，进入预览界面
    preview: function() {
        wx.navigateTo({
            url: '../preview/preview',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        if (that.data.byStentebce) {
            that.setData({
                sentence: that.data.sentenceAll[that.data.indexSen],
            })
        }
        that.recorderManager = wx.getRecorderManager();
        that.recorderManager.onError(()=> {
            that.tip("录音失败");
        });
        that.recorderManager.onStop((res)=> {
            that.setData({
                src: res.tempFilePath
            });
            console.log(res.tempFilePath);
            that.tip("录音完成");
        });
        this.innerAudioContext = wx.createInnerAudioContext();
        this.innerAudioContext.onError((res) => {
            that.tip("播放录音失败！")
        })

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