;(function ($,window,document,undefined) {
    function SliderUnlock(elm, options, success){
        var me = this;
        var $elm = me.checkElm(elm) ? $(elm) : $;
        success = me.checkFn(success) ? success : function(){};

        var opts = {
            successLabelTip:  "Successfully Verified",
            duration:  200,
            swipestart:  false,
            min:  0,
            max:  $elm.width(),
            index:  0,
            IsOk:  false,
            lableIndex:  0
        };

        opts = $.extend(opts, options||{});

        //$elm
        me.elm = $elm;
        //opts
        me.opts = opts;
        //是否开始滑动
        me.swipestart = opts.swipestart;
        //最小值
        me.min = opts.min;
        //最大值
        me.max = opts.max;
        //当前滑动条所处的位置
        me.index = opts.index;
        //是否滑动成功
        me.isOk = opts.isOk;
        //滑块宽度
        me.labelWidth = me.elm.find('#label').width();
        //滑块背景
        me.sliderBg = me.elm.find('#slider_bg');
        //鼠标在滑动按钮的位置
        me.lableIndex = opts.lableIndex;
        //success
        me.success = success;
    }

    SliderUnlock.prototype.init = function () {
        var me = this;

        me.updateView();
        me.elm.find("#label").on("mousedown", function (event) {
            var e = event || window.event;
            me.lableIndex = e.clientX - this.offsetLeft;
            me.handerIn();
        }).on("mousemove", function (event) {
            me.handerMove(event);
        }).on("mouseup", function (event) {
            me.handerOut();
        }).on("mouseout", function (event) {
            me.handerOut();
        }).on("touchstart", function (event) {
            var e = event || window.event;
            me.lableIndex = e.originalEvent.touches[0].pageX - this.offsetLeft;
            me.handerIn();
        }).on("touchmove", function (event) {
            me.handerMove(event, "mobile");
        }).on("touchend", function (event) {
            me.handerOut();
        });
    };

    /**
     * 鼠标/手指接触滑动按钮
     */
    SliderUnlock.prototype.handerIn = function () {
        var me = this;
        me.swipestart = true;
        me.min = 0;
        me.max = me.elm.width();
    };

    /**
     * 鼠标/手指移出
     */
    SliderUnlock.prototype.handerOut = function () {
        var me = this;
        //停止
        me.swipestart = false;
        //me.move();
        if (me.index < me.max) {
            me.reset();
        }
    };

    /**
     * 鼠标/手指移动
     * @param event
     * @param type
     */
    SliderUnlock.prototype.handerMove = function (event, type) {
        var me = this;
        if (me.swipestart) {
            event.preventDefault();
            event = event || window.event;
            if (type == "mobile") {
                me.index = event.originalEvent.touches[0].pageX - me.lableIndex;
            } else {
                me.index = event.clientX - me.lableIndex;
            }
            me.move();
        }
    };

    /**
     * 鼠标/手指移动过程
     */
    SliderUnlock.prototype.move = function () {
        var me = this;
        if ((me.index + me.labelWidth) >= me.max) {
            me.index = me.max - me.labelWidth;
            //停止
            me.swipestart = false;
            //解锁
            me.isOk = true;
        }
        if (me.index < 0) {
            me.index = me.min;
            //未解锁
            me.isOk = false;
        }
        if (me.index+me.labelWidth == me.max && me.max > 0 && me.isOk) {
            //解锁默认操作
            $('#label').unbind().next('#labelTip').
            text(me.opts.successLabelTip).css({'color': '#fff'});

            me.success();
        }
        me.updateView();
    };


    /**
     * 更新视图
     */
    SliderUnlock.prototype.updateView = function () {
        var me = this;

        me.sliderBg.css('width', me.index);
        me.elm.find("#label").css("left", me.index + "px")
    };

    /**
     * 重置slide的起点
     */
    SliderUnlock.prototype.reset = function () {
        var me = this;

        me.index = 0;
        me.sliderBg .animate({'width':0},me.opts.duration);
        me.elm.find("#label").animate({left: me.index}, me.opts.duration)
            .next("#lableTip").animate({opacity: 1}, me.opts.duration);
        me.updateView();
    };

    /**
     * 检测元素是否存在
     * @param elm
     * @returns {boolean}
     */
    SliderUnlock.prototype.checkElm = function (elm) {
        if($(elm).length > 0){
            return true;
        }else{
            throw "this element does not exist.";
        }
    };

    /**
     * 检测传入参数是否是function
     * @param fn
     * @returns {boolean}
     */
    SliderUnlock.prototype.checkFn = function (fn) {
        if(typeof fn === "function"){
            return true;
        }else{
            throw "the param is not a function.";
        }
    };

    window['SliderUnlock'] = SliderUnlock;
})(jQuery, window, document);
$(function () {
    var slider = new SliderUnlock("#slider",{
            successLabelTip : "验证成功" 
        },function(){
            alert("验证成功,即将跳转至#");
            window.location.href="#";
            //以下四行设置恢复初始，不需要可以删除
                $("#tel-error").show();
                setTimeout(function(){
                $("#labelTip").html("请向右滑动获取验证码");
                $("#labelTip").css("color","#787878");
                },2000);
            slider.init(); 
            
            
        });
    slider.init();
})
// 表单验证插件
$(function(){
    $(".formBox").validate({
        rules:{
            state:{
                required:true,
            },
            tel:{
                required:true,
            },
            pwd:{
                required:true,
            },
        },
        messages:{
            state:{
                required:"请输入国家",
            },
            tel:{
                required:"请输入手机号",
            },
            pwd:{
                required:"请输入验证码",
            },
        },
    });
// 热气球
    $(".projectimg").click(function(){
        console.log(1)
        location.href="./exploer_the_world.html"
    })
// 下拉框
    var china=$(".china"),
        sanjiao=$(".sanjiao");
        china.val("中国 +86");
    china.on("click",function(){
        sanjiao.css({
            "border-right":"8px solid transparent",
            "border-left":"8px solid transparent",
            "border-top":"8px solid transparent",
            "border-bottom":"8px solid black",
            "top":"14px"
        })
        $(".list").slideToggle(300);
    })
    $(".list li").on("click",function(e){
        sanjiao.css({
            "border-right":"8px solid transparent",
            "border-left":"8px solid transparent",
            "border-bottom":"8px solid transparent",
            "border-top":"8px solid black",
            "top":"18px"
        })
        $(".list").slideUp(300);
        china.val($(this).text());
    })
});