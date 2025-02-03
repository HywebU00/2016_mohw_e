/*------底圖*/	
$(document).ready(function(){


//

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
   dots: false, //要不要顯示圓點
}); 	
  
});

//
$('.adbanner').slick({
 dots: true,//顯示原點
 speed: 1000,
  arrows:false, //左右箭頭
  autoplay:true,//自動播放
  infinite: true, //無限輪播
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll:4,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow:2,
      slidesToScroll:2,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 684,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  
  {
    breakpoint: 504,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    
    
    
  });	

 $('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
   vertical: true , //Vertical slide mode 改成垂直方向
    rtl: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 });
