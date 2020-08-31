// 首页尾部js
    $(".goTopBtn").click(function(){
        $("html,body").animate({scrollTop:0},500)
    })
    var goTopBtn=$(".goTopBtn");
    var footheight=$("footer").offset().top;
    console.log(footheight);
    $(window).scroll(function(){
        var h=$(document).scrollTop();
        if(h>=1300){
            goTopBtn.show();
            goTopBtn.css({
                "position":"fixed",
                "bottom":"-50px",   
                "left":"50%",
                "transform":"translate(-50%,0)"
            })
        }
        if(h>(footheight)-800){
            goTopBtn.show();
            goTopBtn.css({
                "position":"absolute",
                "bottom":"-50px",
                "left":"20%",
            })
        }
        if(h<1300){
            goTopBtn.hide();
        }
    })