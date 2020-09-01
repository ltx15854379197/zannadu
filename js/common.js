$(function(){
	var navto=$(".navto"),
	    birdlogo=$(".birdlogo"),
	    navbox=$(".navbox"),
	    navsearch=$(".navsearch");
	$(window).scroll(function(){
		var h=$(document).scrollTop();
		// console.log(h);	
		if(h>=120){
			navto.css({"position":"fixed","top":"0px","left":"0px","z-index","10"});
			navbox.css("height","80px");
			birdlogo.show();
			navsearch.show();
		}else{
			navto.css({"position":"absolute","top":"","z-index","10"});
			navbox.css("height","50px");
			birdlogo.hide();
			navsearch.hide();
		}
	})
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
    $(".headlogo").click(function(){
        location.href="./index.html"
    })
    $(".projectimg").click(function(){
        location.href="./exploer_the_world.html"
    })

})