/**
 * [娱乐模块]
 */
loader.define(function(require,exports,module) {
    var pageview = {};

    pageview.init = function () {
        // 获取频道的id
        bui.getPageParams().done(function(result){
            console.log(result)
            // 初始化列表
            common.getNewsByChannel(result.id)
        })
    }

    // 初始化
    pageview.init();
})