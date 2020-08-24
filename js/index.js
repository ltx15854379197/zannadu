// <!-- Initialize Swiper -->
// 轮魔图
$(function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
             disableOnInteraction: false,
            },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
          });
    var placetxt=$(".placetxt"),
        date1=$(".date1"),
        date2=$(".date2"),
        dateinput=$(".dateinput");
        placetxt.on("click",function(){
            console.log(1);
        dateinput.animate({"width":"150px"},500)
        dateinput.css({"border":"1px solid red","background-color":"white","margin-right":"5px","padding":"12px 25px"})
        placetxt.css("margin-right","5px");
        date1.show(500);
        date2.show(500);
    })
    var navto=$(".navto"),
        birdlogo=$(".birdlogo"),
        navbox=$(".navbox"),
        navsearch=$(".navsearch");
        $(window).scroll(function(){
            var h=$(document).scrollTop();
                console.log(h); 
                if(h>=500){ 
                    console.log(1)
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
// 视频部分
     var h=$(window).height(),
         w=$(window).width();
         // console.log(w,h);
    var play=$(".play"),
        body=$("body"),
        video=$(".videoweb");
        play.on("click",function(e){
            video.show();
            // body.on("scroll mousewheel" ,stopScrolling)
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
// 首页尾部js
    $(".goTopBtn").click(function(){
        $("html,body").animate({scrollTop:0},500)
    })
})