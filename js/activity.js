$(function(){
	$(".goTopBtn").click(function(){
		$("html,body").animate({scrollTop:0},500)
	})
	var goTopBtn=$(".goTopBtn");
    $(window).scroll(function(){
        var h=$(document).scrollTop();
        if(h>=1000){
        goTopBtn.show();
        goTopBtn.css({
                "position":"fixed",
                "top" :"675px",
                "left":"50%",
                "transform":"translate(-50%,0)"
            })
        }
        if(h>1500){
            goTopBtn.show();
            goTopBtn.css({
                "position":"relative",
                "bottom":"0px",
                "top":"5px",
                "left":"20%"
            })
        }
        if(h<800){
            goTopBtn.hide();
        }
    })
    $(".headlogo").click(function(){
        location.href="./index.html"
    })
    // 热气球
    $(".projectimg").click(function(){
        location.href="./exploer_the_world.html"
    })
})