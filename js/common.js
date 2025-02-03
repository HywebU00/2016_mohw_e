$(document).ready(function() {
$('html').removeClass('no-js');/*程式一開始就把 class="no-js" 移除*/
	// 多層選單
	//var menu = $('#Header .menu');
	var menu = $('#Header .menu>ul');

	//$('#Header .menu>ul>li').addClass('hasChild');
	$('.menu li:has(ul)').addClass('hasChild')
	
	//menu.find('li.hasChild').hover(
	menu.children('li.hasChild').hover(
		function(){$(this).children().stop().fadeIn(200);},
		function(){$(this).children('ul').stop().fadeOut(200);}
		);

	menu.find('li').keyup(	
		function(){
			$(this).siblings().children('ul').hide();
		});

	menu.find('li.hasChild').keyup(
		function(){
			$(this).children().show();
		});
	
	menu.find('li:last>a').focusout(
	function(){
		menu.find('li ul').hide();
	});

 // $(menu).last('li').children('a').focusout(
	// //$('#Header .menu li:last>a').focusout(
	// function(){
	// 	$(menu).find('li ul').hide();
	// 	//$('#Header .menu li>ul').hide();
	// });
	


});



//gotop
$(function(){
    	$("#gotop").click(function(){
    		//$("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
			$('html, body').animate({scrollTop : 0},800);
    		return false;	
    	});
})


//公告
$(function(){
	   $('.options li.here .contents').show();
	  
	   //點到頁籤後
	   // $('.options>li>a').focus(function(){
	   $('.options>li>a').click(tabs);
	   $('.options>li>a').focus(tabs);//因為無障礙要可以使用鍵盤點選，所以用focus的設定
		  
		function tabs(){
			    
			var  li_index=$(this).index();
			
			$('.options .here').removeClass('here');
			$(this).parent().addClass('here');
		}
  })
  


//theme頁籤

jQuery(document).ready(function(){
    var ww = $(window).width();

	$('.tabs').find('.active').next('.tabContent').show();
	
    var    tw = $('.tabSet').width(),
	       tabItemHeight = $('.tabs>.tabtitle>a').innerHeight();
           wwSmall = 767;//視窗寬度小於等於這個數值，頁籤垂直排列。css需配合調整。

	$('.tabs').find('.tabContent').css('top' , tabItemHeight );

	$('.tabSet').each(function(){//各別處理每個頁籤組
		var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight(),
		    tabItemLength = $(this).find('.tabtitle').length,
            tabItemWidth = tw / tabItemLength;
		
		$(this).height(tabContentHeight + tabItemHeight);
		$(this).find('.tabtitle>a').innerWidth(tabItemWidth);
        if(ww > wwSmall){
            $(this).find('.tabtitle:last-of-type').css({position:"absolute", top:"0", right:"0"});
            $(this).find('.tabtitle:last-of-type>a').css({width:tabItemWidth+1});
        }
	});

	$('.tabs>.tabtitle>a').focus(tabs);
	$('.tabs>.tabtitle>a').click(tabs);
	
	function tabs(){
        var _aParent = $(this).parent(),
             tvp = _aParent.parents('.tabSet').offset(),
             tabIndex = _aParent.index()/2,
             scollDistance = tvp.top + tabItemHeight*tabIndex;

        if(ww <= wwSmall){
            _aParent.siblings('.tabtitle').removeClass('active').next('.tabContent').slideUp();
            _aParent.addClass('active').next().slideDown();
            $("html,body").stop(true,false).animate({scrollTop:scollDistance});
        } else {
            _aParent.siblings('.tabtitle').removeClass('active').next('.tabContent').css("display","none");
            _aParent.addClass('active').next('.tabContent').css("display","block");            
        }

		tabContentHeight = _aParent.next('.tabContent').innerHeight();
		_aParent.parents('.tabSet').height(tabContentHeight + tabItemHeight);

        return false;
	}
});




//查詢
$(function(){
	$('#searchbtn').click(   
		function(){
		$('#searchbox').stop().fadeToggle();

        })
})


$(function(){

	$("#b_news").click(function(){ 
		$("#b_cont").stop().fadeToggle();//加.stop()才不會一直切換
		return false;
	});
	 	
});

// menu 
$(function(){
	$("#menubtn").click(function(){ 
		$(".Topmenu").slideToggle(500);
		return false;
	});
	
	});

// search3 
$(function(){
	$('#searchqp').hide();
	$("#search3").click(function(){ 
		$("#searchqp").slideToggle(500);
		return false;
	});
	
	});