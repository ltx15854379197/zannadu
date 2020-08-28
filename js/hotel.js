$(function(){
	var schedule=$(".schedule"),
        percent=$(".percent"),
        place=$(".place"),
	    birdlogo=$(".birdlogo"),
	    navbox=$(".navbox"),
	    navsearch=$(".navsearch");
	$(window).scroll(function(){
		var h=$(document).scrollTop();
		console.log(h);	
		if(h>=170){
			schedule.css({
                "position":"fixed",
                "top":"0px"
            })
            percent.hide();
            place.hide();

		}else{
           schedule.css({
                "position":"relative",
                "top":"0px"
            }) 
           percent.show();
            place.show();

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
                // "transform":"translate(-50%,0)"
            })
        }
        if(h<1800){
            goTopBtn.hide();
        }
    })
// 轮模图
    var swiper = new Swiper('.picture .swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      }
    })
// 全景轮模图
 
 var h=$(window).height(),
    w=$(window).width();
         // console.log(w,h);
    var play=$(".play"),
        body=$("body"),
        photo=$(".full img"),
        close=$(".close1"),
        search=$(".search"),
        next=$(".swiper-button-next"),
        prev=$(".swiper-button-prev"),
        fullbox=$(".fullbox"),
        full1=$(".full");
        // console.log(photo);
        play.on("click",function(e){
            full1.show();
            // body.on("scroll mousewheel" ,stopScrolling)
            body.css({
                "width":"100%",
                "height":"100%",
                "overflow":"hidden"
            })
            var swiper = new Swiper(' .full .swiper-container', {
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

        })
        search.on("click",function(e){
            full1.show();
            // body.on("scroll mousewheel" ,stopScrolling)
            body.css({
                "width":"100%",
                "height":"100%",
                "overflow":"hidden"
            })
            var swiper = new Swiper(' .full .swiper-container', {
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
            
        })
        full1.on("click",function(e){
            var obj =e.target;
            // console.log(e.target);
            e.preventDefault();
            if(obj ===full1[0]){
                full1.hide();
                body.css({
                    "width":"100%",
                    "height":"auto",
                    "overflow":"auto"
                })
            }
        
        })
        close.on("click",function(e){
            full1.hide();
            body.css({
                "width":"100%",
                "height":"auto",
                "overflow":"auto"
            })
        })
        full1.css({"width":w,"height":h});
// 下面的轮模图
    var swiper = new Swiper('.photo .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var photo1=$(".photo img");
    console.log(photo1);
    photo1.on("click",function(){
        this.css("border","2px solid  #D66382"); 
    })
})