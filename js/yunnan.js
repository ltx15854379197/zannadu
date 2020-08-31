$(function(){
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(102.805, 25.00), 7);
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM});
	map.addControl(top_right_navigation);
	function addMarker(point){
	  var marker = new BMap.Marker(point);
	  map.addOverlay(marker);
	}
	var pt = new BMap.Point(103.6, 26.8);
	var myIcon = new BMap.Icon("imgs/yunnan/map.png", new BMap.Size(25,38));
	var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);
	marker2.setTitle("春华大酒店");
	var sContent =
	"<img style='float:left;margin:4px; cursor:pointer' id='imgDemo' src='imgs/yunnan/trip.jpg' width='139' height='104' title='丽江'/>" + 
	"<p style='margin:0;line-height:1.5;font-size:16px;text-indent:2em'>丽江金茂璞修雪山酒店——雪山畅享4天3晚套餐</p>" + 
	"<p style='font-size:12px; color:gray;'>中国,丽江</p>"+
	"<br>"+
	"<a href='./hotel.html'>查看国内短假</a>"
	"</div>";
	var infoWindow = new BMap.InfoWindow(sContent);  
	marker2.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow);
	   //图片加载完毕重绘infowindow
	   document.getElementById('imgDemo').onload = function (){
		   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
	var pt1 = new BMap.Point(102.6, 24.8);
	var marker3 = new BMap.Marker(pt1,{icon:myIcon});  // 创建标注
	map.addOverlay(marker3);
	marker3.setTitle("王克去旅游一天三斯顿大酒店");
	var sContent1 =
	"<img style='float:left;margin:4px; cursor:pointer' id='imgDemo' src='imgs/yunnan/trip.jpg' width='139' height='104' title='丽江'/>" + 
	"<p style='margin:0;line-height:1.5;font-size:16px;text-indent:2em'>丽江金茂璞修雪山酒店——雪山畅享4天3晚套餐</p>" + 
	"<p style='font-size:12px; color:gray;'>中国,丽江</p>"+
	"<br>"+
	"<a href='./hotel.html'>查看国内短假</a>"
	"</div>";
	var infoWindow1 = new BMap.InfoWindow(sContent1);  
	marker3.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow1);
	   //图片加载完毕重绘infowindow
	   document.getElementById('imgDemo').onload = function (){
		   infoWindow1.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
	var pt2 = new BMap.Point(99.6, 25.8);
	var marker4 = new BMap.Marker(pt2,{icon:myIcon});  // 创建标注
	map.addOverlay(marker4);
	marker4.setTitle("香格里拉，飞机火车，拉牛车");
	var sContent2 =
	"<img style='float:left;margin:4px ; cursor:pointer' id='imgDemo' src='imgs/yunnan/trip.jpg' width='139' height='104' title='丽江'/>" + 
	"<p style='margin:0;line-height:1.5;font-size:16px;text-indent:2em'>丽江金茂璞修雪山酒店——雪山畅享4天3晚套餐</p>" + 
	"<p style='font-size:12px; color:gray;'>中国,丽江</p>"+
	"<br>"+
	"<a href='./hotel.html'>查看国内短假</a>"
	"</div>";
	var infoWindow2 = new BMap.InfoWindow(sContent2);  
	marker4.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow2);
	   //图片加载完毕重绘infowindow
	   document.getElementById('imgDemo').onload = function (){
		   infoWindow2.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
	var pt3 = new BMap.Point(101.6, 23.8);
	var marker5 = new BMap.Marker(pt3,{icon:myIcon});  // 创建标注
	map.addOverlay(marker5);
	marker5.setTitle("腾冲柏泉------云里雾里 泉里来见");  
	var sContent3 =
	"<img style='float:left;margin:4px; cursor:pointer' id='imgDemo' src='imgs/yunnan/trip.jpg' width='139' height='104' title='丽江'/>" + 
	"<p style='margin:0;line-height:1.5;font-size:16px;text-indent:2em'>丽江金茂璞修雪山酒店——雪山畅享4天3晚套餐</p>" + 
	"<p style='font-size:12px; color:gray;'>中国,丽江</p>"+
	"<br>"+
	"<a href='./hotel.html'>查看国内短假</a>"
	"</div>";
	var infoWindow3 = new BMap.InfoWindow(sContent3);  
	marker5.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow3);
	   //图片加载完毕重绘infowindow
	   document.getElementById('imgDemo').onload = function (){
		   infoWindow3.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
	$(".thumbnail").mouseover (function(){
        // console.log(1)
        var _this=$(this)
        var inDwon=_this.children(".inDwon")
        var inUp=_this.children(".inUp")
        $(inDwon).css("display","none")
        $(inUp).css("display","block")
    })
    $(".thumbnail").mouseout (function(){
        var _this=$(this)
        var inDwon=_this.children(".inDwon")
        var inUp=_this.children(".inUp")
        $(inUp).css("display","none")
        $(inDwon).css("display","block")
        
    })
// 轮模图1
	var swiper = new Swiper('.yunnanbgc .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
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
// 轮模图2
	var swiper = new Swiper('.balckbox .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
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
// 热气球
 	$(".projectimg").click(function(){
        console.log(1)
        location.href="./exploer_the_world.html"
    })
})