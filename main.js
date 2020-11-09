$(document).ready(function() {
	$("#sidebar").css({ right: ($(window).width() - 1110) / 2 - 98 });
	$('.globalnav >li').hover(

	function() {
		$(this).addClass("active");
		var current_li = $(this);
		if(!$(current_li).children('.dropdown').is(':visible')&& $('.dropdown').find('a').length>0) {
			$(current_li).find('.dropdown').slideDown(200);
		}
		
	}, function() {
		
		$(this).find('.dropdown').slideUp(100);
		$(this).removeClass("active");
		if(li_id) {
		$("#" + li_id ).addClass("active");
		}
		

	});
	if(li_id) {
		$("#" + li_id ).addClass("active");
		}

	// backtopbutton

var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$(".backtop").data("expanded",true);
		}else{
			$(".backtop").data("expanded",false);
		}
		if($(".backtop").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$(".backtop").data("expanded");
			if(lastRmenuStatus){
				$(".backtop").slideDown();
			}else{
				$(".backtop").slideUp();
			}
		}
	});

	$(window).resize(function () { $("#sidebar").css({ right: ($(window).width() - 1110) / 2 - 98 }) });
	
	
	// $('.pro-list >.item').hover(
	// 	function() {
	// 		$(this).find('.item_mask').fadeTo("300",0.7);
	// 		$(this).find('.item_title').css("color","#fff");
	// 		$(this).find('.item_txt').css("color","#fff");
	// 	}, 
	// 	function() {		
	// 		$(this).find('.item_mask').fadeOut(100);
	// 		$(this).find('.item_title').css("color","#004898");
	// 		$(this).find('.item_txt').css("color","#666");
	// 	}
	// );
	
	// $('.maintools > ul > li.li-qr').hover(

	// 	function(){
	// 		$(this).find('#qrcodecon').fadeIn(200);
	// 	}, function(){
	// 		$(this).find('#qrcodecon').fadeOut(500);
	// 	}


	// );
	// $('.maintools > ul > li.li-qq').hover(

	// 	function(){
	// 		$(this).find('#qqcon').fadeIn(200);
	// 	}, function(){
	// 		$(this).find('#qqcon').fadeOut(500);
	// 	}


	// );

	// $('.topnav > .hotline').hover(

	// 	function(){
	// 		$(this).find('ul').fadeIn(100);


			
	// 	}, function(){
	// 		$(this).find('ul').fadeOut(200);
	// 	}


	// );
})