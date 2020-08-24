$(function(){
	var navto=$(".navto"),
	    birdlogo=$(".birdlogo"),
	    navbox=$(".navbox"),
	    navsearch=$(".navsearch");
	$(window).scroll(function(){
		var h=$(document).scrollTop();
		console.log(h);	
		if(h>=120){
			navto.css({"position":"fixed","top":"0px","left":"0px"});
			navbox.css("height","80px");
			birdlogo.show();
			navsearch.show();
		}else{
			navto.css({"position":"absolute","top":""});
			navbox.css("height","50px");
			birdlogo.hide();
			navsearch.hide();
		}
	})
	$(".goTopBtn").click(function(){
		$("html,body").animate({scrollTop:0},500)
	})

})