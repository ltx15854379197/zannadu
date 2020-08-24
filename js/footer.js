$(function(){
	console.log(11)
	$(".goTopBtn").click(function(){
		console.log(111)
		$("html,body").animate({scrollTop:0},500)
	})
})