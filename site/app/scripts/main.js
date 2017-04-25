$(document).ready(function(){
	var logo = $('.logo img');
	if($(window).width() < 768){
		logo.attr('src', './images/logo-1-small.png')
	}
	$('button.hamburger').click(function(){
		$('nav ul').toggleClass('open');
		$('.hamburger').toggleClass('is-active');
	})
	$('.content').slick({
		arrows: true,
		dots: true,
		nextArrow: '<i class="arrow-right"></i>',
  		prevArrow: '<i class="arrow-left"></i>',
	});

	$(window).resize(function(){
		if($(window).width() < 480){
			logo.attr('src', './images/logo-1-small.png');
		}
		else{
			logo.attr('src', './images/logo-1.png');
		}
	})

});
