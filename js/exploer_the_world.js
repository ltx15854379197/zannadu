$(function(){
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
                "top" :"675px",
                "left":"50%",
                "transform":"translate(-50%,0)"
            })
        }
        if(h>3000){
            goTopBtn.show();
            goTopBtn.css({
                "position":"relative",
                "bottom":"0px",
                "top":"5px",
                "left":"20%"
                // "transform":"translate(-50%,0)"
            })
        }
        if(h<1800){
            goTopBtn.hide();
        }
    })

    var navto=$(".go"),
        navbox=$(".go div")
    $(window).scroll(function(){
        var h=$(document).scrollTop();
        console.log(h); 
        if(h>=690){
            navto.css({"position":"fixed","top":"0px","left":"0px"});
            navbox.css("height","80px");
        }else{
            navto.css({"position":"absolute","top":""});
            navbox.css("height","50px");
        }
    })

    $(".headlogo").click(function(){
        console.log(1)
        location.href="./index.html"
    })
    // 热气球
    $(".projectimg").click(function(){
        console.log(1)
        location.href="./exploer_the_world.html"
    })
})