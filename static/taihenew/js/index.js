$(document).ready(function(){





// 弹出层
	$('.lx').click(function(e){
			e.preventDefault();


			// 获取网页高度
			var h=document.body.scrollHeight;
			// $('.zhezhao').css('height',h)
			// 获取网页被圈去的高度
			var scrollTop=document.body.scrollTop;
			// 获取屏幕可用工作高度，和宽度
			var width_=window.screen.availWidth;
			var height_=window.screen.availHeight;

			$('.zhezhao').css('display','block');
			$('.tanchu').css('display','block');

			//获取 定位 宽高；
			var box_w=$('.tanchu').width();
			var box_h=$('.tanchu').height();
			
			var set_bottom=(height_-box_h)/2
			var set_left=(width_-box_w)/2
			$('.tanchu').css("bottom",set_bottom);
			$('.tanchu').css('left',set_left);

			


	})

	$('.close1').click(function(e){
			e.preventDefault();
			$('.zhezhao').css('display','none');
			$('.tanchu').css('display','none');
	})

	$('.shenqing').click(function(e){
			e.preventDefault();
			var h=document.body.scrollHeight;
			// $('.zhezhao').css('height',h)
			// 获取网页被圈去的高度
			var scrollTop=document.body.scrollTop;
			// 获取屏幕可用工作高度，和宽度
			var width_=window.screen.availWidth;
			var height_=window.screen.availHeight;

			$('.zhezhao').css('display','block');
			$('.tanchu2').css('display','block');
			//获取 定位 宽高；
			var box_w=$('.tanchu2').width();
			var box_h=$('.tanchu2').height();
			var set_bottom=(height_-box_h)/2;
			var set_left=(width_-box_w)/2
			$('.tanchu2').css("top",set_bottom);
			$('.tanchu2').css('left',set_left);

	})
	$('.close2').click(function(e){

			$('.zhezhao').css('display','none');
			$('.tanchu2').css('display','none');
	})

// 首页跳转列表
	$('.go_').click(function(){
		location.href="02.html"
	})
// 列表跳转详情页
	$('.li').click(function(){
		location.href="03.html"
	})
//箭头回跳
	$('.arrow_top').click(function(e){
		e.preventDefault();
		history.back();
	})


})