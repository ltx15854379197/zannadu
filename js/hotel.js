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
        if(h>=1200){
            console.log(1);
            goTopBtn.show();
            goTopBtn.css({
                "position":"fixed",
                "top" :"675px",
                "left":"50%",
                "transform":"translate(-50%,0)"
            })
        }
        if(h>6000){
            goTopBtn.show();
            goTopBtn.css({
                "position":"relative",
                "bottom":"0px",
                "top":"5px",
                "left":"20%"
                // "transform":"translate(-50%,0)"
            })
        }
        if(h<1200){
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
    var puton=$(".puton"),
        metoo=$(".metoo"),
        txt=$(".txt"),
        toname=$(".toname");
    puton.click(function(){
        toname.show();
    })
    metoo.click(function(){
        txt.show();
    })
// blue轮模图
    var swiper = new Swiper('.blue .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
// 地图
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type:BMAP_NAVIGATION_CONTROL_ZOOM}); 
    map.addControl(top_right_navigation);
// 表单的变量
    var input=$(".input"),
        pink=$(".pink");
// 三角形
    var day1=$(".day1"),
        number1=$(".number1"),
        number=$(".number2"),
        daynum1=$(".daynum1"),
        money=$(".money"),
        figure=$(".figure"),
        temp=0;    
        sanjiao1=$(".sanjiao1");
    day1.on("click",function(){
        temp=1;
        sanjiao1.css({
            "border-top":"8px solid transparent",
            "border-bottom":"8px solid black",
            "top":"14px"
        });
        console.log(1);
        daynum1.slideToggle(300);
    })
    var dayshu1=$(".daynum1 li");
    dayshu1.on("click",function(e){
        console.log(this);
        sanjiao1.css({
            "border-bottom":"8px solid transparent",
            "border-top":"8px solid black",
            "top":"20px"
        });
    
        number1.text($(this).text());
        daynum1.slideUp(300);
    var daynumber=$(this).text();
    input.on("click",function(){
        if(daynumber==="0"){
            pink.show();
        }     
    })    
        
// 合计
        figure.text(Number($(this).text())+Number(day.text()));
        money.text(Number($(this).text()*1580)+Number(day.text()*1780));
    })
    var left1=$(".left1"),
        ulbox1=$(".ulbox1");
    left1.on("click",function(){
        ulbox1.slideToggle(300);
    })
    // 三角形2
    var day=$(".day2"),
        daynum=$(".daynum2"),
        sanjiao=$(".sanjiao2");
    day.on("click",function(){
        temp=1;
        sanjiao.css({
            "border-top":"8px solid transparent",
            "border-bottom":"8px solid black",
            "top":"14px"
        });
        console.log(1);
        daynum.slideToggle(300); 
    })
    var dayshu=$(".daynum2 li");
    dayshu.on("click",function(e){
        console.log(this);
        sanjiao.css({
            "border-bottom":"8px solid transparent",
            "border-top":"8px solid black",
            "top":"20px"
        });
        number.text($(this).text());
        daynum.slideUp(300);
    var daynumber1=$(this).text();
    input.on("click",function(){
        if(daynumber1==="0"){
            pink.show();
        }     
    }) 
        figure.text(Number($(this).text())+Number(day1.text()));
        money.text(Number($(this).text()*1780)+Number(day1.text()*1580));
    })
    var left=$(".left2"),
        ulbox=$(".ulbox2");
    left.on("click",function(){
        ulbox.slideToggle(300);
    })
    input.on("click",function(){
        if(temp===0){
            pink.show();
        }     
    })
// 表单
    var book=$(".book input"),
        sanjiao4=$(".sanjiao4"),
        daynum4=$(".daynum4");
    book.on("click",function(){
        sanjiao4.css({
            "border-top":"8px solid transparent",
            "border-bottom":"8px solid black",
            "top":"192px"
        });
        console.log(1);
        daynum4.slideToggle(300);
    })
    var dayshu4=$(".daynum4 li");
    dayshu4.on("click",function(e){
        console.log(this);
        sanjiao4.css({
            "border-bottom":"8px solid transparent",
            "border-top":"8px solid black",
            "top":"195px"
        });
        daynum4.slideUp(300);
        book.val($(this).text());
    })


    var room=$(".room input"),
        sanjiao3=$(".sanjiao3"),
        daynum3=$(".daynum3");
    room.on("click",function(){
        sanjiao3.css({
            "border-top":"8px solid transparent",
            "border-bottom":"8px solid black",
            "top":"138px"
        });
        console.log(1);
        daynum3.slideToggle(300);
    })
    var dayshu3=$(".daynum3 li");
    dayshu3.on("click",function(e){
        console.log(this);
        sanjiao3.css({
            "border-bottom":"8px solid transparent",
            "border-top":"8px solid black",
            "top":"140px"
        });
        daynum3.slideUp(300);
       room.val($(this).text());
    })
// 选择框
    var chose=$(".chose"),
        remainbox=$(".remainbox");
    chose.on("click",function(){
        if(chose.prop("checked")){
           remainbox.show(); 
       }else{
            remainbox.hide(); 
       }  
    })
// 规则
$(".nametel").validate({
    rules:{
        username:{
            required:true
        },
        date:{
            required:true
        }
    },
    messages:{
        username:{
            required:"付款人姓名 不可为空白"
        },
         date:{
            required:"入住日期 不可为空白"
        }
    }
})  



// 最后一个轮模图
   var swiper = new Swiper('.blackpicture .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup:2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})