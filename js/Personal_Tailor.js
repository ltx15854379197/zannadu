;jQuery.fn.selectFilter = function (options){
	var defaults = {
		callBack : function (res){}
	};
	var ops = $.extend({}, defaults, options);
	var selectList = $(this).find('select option');
	var that = this;
	var html = '';
	
	// 读取select 标签的值
	html += '<ul class="filter-list">';
	
	$(selectList).each(function (idx, item){
		var val = $(item).val();
		var valText = $(item).html();
		var selected = $(item).attr('selected');
		var disabled = $(item).attr('disabled');
		var isSelected = selected ? 'filter-selected' : '';
		var isDisabled = disabled ? 'filter-disabled' : '';
		if(selected) {
			html += '<li class="'+ isSelected +'" data-value="'+val+'"><a title="'+valText+'">'+valText+'</a></li>';
			$(that).find('.filter-title').val(valText);
		}else if (disabled){
			html += '<li class="'+ isDisabled +'" data-value="'+val+'"><a>'+valText+'</a></li>';
		}else {
			html += '<li data-value="'+val+'"><a title="'+valText+'">'+valText+'</a></li>';
		};
	});
	
	html += '</ul>';
	$(that).append(html);
	$(that).find('select').hide();
	
	//点击选择
	$(that).on('click', '.filter-text', function (){
		$(that).find('.filter-list').slideToggle(100);
		$(that).find('.filter-list').toggleClass('filter-open');
		$(that).find('.icon-filter-arrow').toggleClass('filter-show');
	});
	
	//点击选择列表
	$(that).find('.filter-list li').not('.filter-disabled').on('click', function (){
		var val = $(this).data('value');
		var valText =  $(this).find('a').html();
		$(that).find('.filter-title').val(valText);
		$(that).find('.icon-filter-arrow').toggleClass('filter-show');
		$(this).addClass('filter-selected').siblings().removeClass('filter-selected');
		$(this).parent().slideToggle(50);
		for(var i=0; i<selectList.length; i++){
			var selectVal = selectList.eq(i).val();
			if(val == selectVal) {
				$(that).find('select').val(val);
			};
		};
		ops.callBack(val); //返回值
	});
	
	//其他元素被点击则收起选择
	$(document).on('mousedown', function(e){
		closeSelect(that, e);
	});
	$(document).on('touchstart', function(e){
		closeSelect(that, e);
	});
	
	function closeSelect(that, e) {
		var filter = $(that).find('.filter-list'),
			filterEl = $(that).find('.filter-list')[0];
		var filterBoxEl = $(that)[0];
		var target = e.target;
		if(filterEl !== target && !$.contains(filterEl, target) && !$.contains(filterBoxEl, target)) {
			filter.slideUp(50);
			$(that).find('.filter-list').removeClass('filter-open');
			$(that).find('.icon-filter-arrow').removeClass('filter-show');
		};
	}
};
// 滑块插件
$(document).ready(function(){
	$("#range_1").ionRangeSlider({
		min: 0,
		max: 24,
		from:1000,
		to: 4000,
		type: 'double',//设置类型
		step: 1,
		prefix: "",//设置数值前缀
		postfix: ":00",//设置数值后缀
		prettify: true,
		hasGrid: true
	});
});
// 表单验证插件
$(function(){
	$(".formBox").validate({

	 	rules:{
	 		destination:{
	 			required:true,
	 		},
	 		colorFout:{
	 			required:true,
	 		},
	 		"go-off":{
	 			required:true,
	 		},
	 		firstname:{
	 			required:true,
	 		},
	 		lastname:{
	 			required:true,
	 		},
	 		phone:{
	 			required:true,
	 		},
	 		email:{
	 			required:true,
	 		}
	 	},
	 	messages:{
	 		destination:{
	 			required:"",
	 		},
	 		colorFout:{
	 			required:"出发地 不可为空白.",
	 		},
	 		"go-off":{
	 			required:"出发日期 不可为空白.",
	 		},
	 		firstname:{
	 			required:"姓氏 不可为空白.",
	 		},
	 		lastname:{
	 			required:"名字 不可为空白.",
	 		},
	 		phone:{
	 			required:"手机号 不可为空白.",
	 		},
	 		email:{
	 			required:"邮箱地址 不可为空白.",
	 		},
	 	},
	});
});

