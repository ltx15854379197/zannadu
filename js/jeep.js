$(function(){
	$(".goTopBtn").click(function(){
		$("html,body").animate({scrollTop:0},500)
	})
	var goTopBtn=$(".goTopBtn");
    $(window).scroll(function(){
        var h=$(document).scrollTop();
        if(h>=1800){
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
})
// 视频部分
$(function(){
    var h=$(window).height(),
        w=$(window).width();
    var play=$(".play"),
        body=$("body"),
        video=$(".videoweb");
        play.on("click",function(e){
            video.show();
            body.css({
                "width":"100%",
                "height":"100%",
                "overflow":"hidden"
            })
        })
        video.on("click",function(e){
            video.hide();
            e.preventDefault();
            body.css({
                "width":"100%",
                "height":"auto",
                "overflow":"auto"
            })
        })
        function stopScrolling (e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        video.css({"width":w,"height":h});
})
// 配置信息
$(function(){
	let cutBtn=$(".container-fluid .col-xs-2")
	let bgI=$(".configuration .col-xs-12")
	let triangle=$(".triangle")
	let img=$(".container-fluid .col-xs-2 img")
	cutBtn.mouseover(function(){
		var _this=$(this)
		triangle.css("visibility","hidden")
		_this.children(".triangle").css("visibility","")
		$(".firstSec .up").css("display","inline-block")
		$(".firstSec .down").css("display","none")
		_this.children(".up").css("display","none")
		_this.children(".down").css("display","inline-block")
		var val="url("+_this.attr("val")+")"
		$(".configuration .firstImgbox").css("background-image",val)
		if (_this.attr("val") == "imgs/jeep/slide1-2.jpg") {
			$(".firstSec .Uptext").css("display","none")
			$(".firstSec .Downtext").css("display","block")
		}else{
			$(".firstSec .Downtext").css("display","none")
			$(".firstSec .Uptext").css("display","block")
		}
	})
})
$(function(){
	let cutBtn=$(".container-fluid .col-xs-3")
	let bgI=$(".configuration .col-xs-12")
	let triangle=$(".triangle")
	let img=$(".container-fluid .col-xs-3 img")
	cutBtn.mouseover(function(){
		var _this=$(this)
		triangle.css("visibility","hidden")
		_this.children(".triangle").css("visibility","")

		$(".secondSec .up").css("display","inline-block")
		$(".secondSec .down").css("display","none")

		_this.children(".up").css("display","none")
		_this.children(".down").css("display","inline-block")
		var val="url("+_this.attr("val")+")"
		$(".configuration .secondImgbox").css("background-image",val)
		if (_this.attr("val") == "imgs/jeep/slide3-2.jpg") {
			$(".secondSec .Uptext").css("display","none")
			$(".secondSec .Downtext").css("display","block")
			$(".btn").css("display","none")
		}else{
			$(".secondSec .Downtext").css("display","none")
			$(".secondSec .Uptext").css("display","block")
			$(".btn").css("display","block")
		}
	})
})
// 切换路况摁扭
$(function(){
	let cutBtn= $(".btn")
	let t=1
	cutBtn.click(function(){
		t++;
		if (t==5) {
			t=1
		}
		$(".changeBtn1 img").attr(`src`,`imgs/jeep/pst_rbt${t}.png`)
		$(".changeBtn2 img").attr(`src`,`imgs/jeep/pst_rd${t}.png`)
		$(".secondImgbox").css("background-image",`url(imgs/jeep/slide3-1-${t}.jpg)`)
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