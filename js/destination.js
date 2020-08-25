$(function(){
$(".thumbnail").mouseover (function(){
        // console.log(1)
        var _this=$(this)
        var inDwon=_this.children(".inDwon")
        var inUp=_this.children(".inUp")
        $(inDwon).css("display","none")
        $(inUp).css("display","block")
    })
    $(".thumbnail").mouseout (function(){
        var _this=$(this)
        var inDwon=_this.children(".inDwon")
        var inUp=_this.children(".inUp")
        $(inUp).css("display","none")
        $(inDwon).css("display","block")
        
    })
// 返回顶部
 $(".goTopBtn").click(function(){
        $("html,body").animate({scrollTop:0},500)
    })
     var goTopBtn=$(".goTopBtn");
    $(window).scroll(function(){
        var h=$(document).scrollTop();
        if(h>=1800){
            console.log(1);
            goTopBtn.show();
            goTopBtn.css({
                "position":"fixed",
                "top" :"610px",
                "left":"50%",
                "transform":"translate(-50%,0)"
            })
        }
        if(h>2500){
            goTopBtn.show();
            goTopBtn.css({
                "position":"relative",
                "bottom":"0px",
                "top":"5px",
                "left":"50%",
                "transform":"translate(-50%,0)"
            })
        }
        if(h<1800){
            goTopBtn.hide();
        }
    })
})