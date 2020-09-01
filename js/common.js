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
        if(h>2500){
            goTopBtn.show();
            goTopBtn.css({
                "position":"relative",
                "bottom":"0px",
                "top":"5px",
                "left":"20%"
            })
        }
        if(h<1800){
            goTopBtn.hide();
        }
    })
    $(".headlogo").click(function(){
        console.log(1)
        location.href="./index.html"
    })
    $(".projectimg").click(function(){
        console.log(1)
        location.href="./exploer_the_world.html"
    })

})