$(document).ready(function() {
	$('.photos-gallery').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 7500,
		slidesToScroll: 3,
		arrows: true
	});
});