$(function(){
	$(".thumbnail").mouseover (function(){
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
	// 热气球
    $(".projectimg").click(function(){
        location.href="./exploer_the_world.html"
    })
})