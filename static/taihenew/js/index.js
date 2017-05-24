$(document).ready(function(){





// 弹出层
	$('.lx').click(function(e){
			e.preventDefault();
			$('.tanchu1').css('display','block');

	})

	$('.close1').click(function(e){
			e.preventDefault();
			$('.tanchu1').css('display','none');
	})

	$('.shenqing').click(function(e){
			e.preventDefault();
		$('.tanchu2').css('display','block');

	})
	$('.close2').click(function(e){
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

	

	
	 

	$(window).scroll(function(){
		var he=$('.fly').offset().top;
	  if(he>0){
	  	$('.fly').css('display','block');
	  };
	  if(he==0){
	  	$('.fly').css('display','none');
	  }
	  console.log(he)
	});

})