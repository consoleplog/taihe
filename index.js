function popupDialog1(){
    $('.tanchu1').css('display','block');

}

function popupDialog2(){
 $('.tanchu2').css('display','block');
}

function closeDialog2(){
    $('.tanchu2').css('display','none');
}

function saveUserinfo() {
    var username=$("#username").val();
    var usermobile=$("#usermobile").val();
    var verifycode=$("#verifycode").val();

    // $.post(baseUrl + '/wx/saveuser',
    //     {
    //         username: username,
    //         usermobile: usermobile,
    //         verifycode: verifycode,
    //         id4: shareid4
    //     },
    //     function (data) {
    //         data = eval("(" + data + ")");
    //         if(data.errcode==0){
    //             alert("保存成功");
    //             closeDialog2();
    //             showShareMenuItems();
    //         }
    //         else{
    //             alert(data.errmsg);
    //         }
    //     }
    // );
}

$(document).ready(function(){

// 弹出层
// 	$('.lx').click(function(e){
// 		e.preventDefault();
//         popupDialog1();
// 	})

	$('.close1').click(function(e){
			e.preventDefault();
			$('.tanchu1').css('display','none');
	})

	$('.shenqing').click(function(e){
		//e.preventDefault();
        popupDialog2();
	})

	$('.close2').click(function(e){
		closeDialog2();
	})

	$('#save_user_info').click(function(e){
        saveUserinfo();
	});


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
// // 首页跳转列表
// 	$('.go_').click(function(){
// 		location.href="02.html"
// 	})
// // 列表跳转详情页
// 	$('.li').click(function(){
// 		location.href="03.html"
// 	})
// //箭头回跳
// 	$('.arrow_top').click(function(e){
// 		e.preventDefault();
// 		history.back();
// 	})


})