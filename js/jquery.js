
$(document).ready(function(){
	$(".panel").click(function(){
		$(".panelMenu").css("width","70%")
	})
	$("#container").click(function(){
		$(".panelMenu").css("width","0")
	})
})
$(document).ready(function(){
	$(".on").click(function(e){
		e.preventDefault();
		$(".panelMenuSub",this).toggle(300)
	})
})
$(document).ready(function(){
	$(".mainSlider").slick({
		infinite:true,
		arrows:false,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:3000,
		dots:false,
	});
})
$(document).ready(function(){
	$(".con01Slider").slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
	  ]
	});
})
$(document).ready(function(){
	$(".con02Slider").slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
	  ]
	});
})
$(document).ready(function(){
    $(".con03MoreBtn").on('click', function (e) {
        e.preventDefault();
        $(".con03_02").slideDown();
        $(".con03_02").animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});