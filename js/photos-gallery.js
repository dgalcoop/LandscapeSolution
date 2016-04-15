$(document).ready(function() {
	$('.photos-gallery').slick({
		infinite: true,
		slidesToShow: 3,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 7500,
		slidesToScroll: 3,
		variableWidth: true,
		prevArrow: '<div class="arrow carousel-prev"><i class="fa fa-chevron-circle-left"></i></div>',
  	nextArrow: '<div class="arrow carousel-next"><i class="fa fa-chevron-circle-right"></i></div>'
	});
});