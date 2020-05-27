
function libsActivate() {
// slick slider
(function(){
	$('.mainSlider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<div class="slick-arrow slick-prev"><svg class="icon"><use xlink:href="img/svg/symbol/sprite.svg#arr-prev"></use></svg></div>',
		nextArrow: '<div class="slick-arrow slick-next"><svg class="icon"><use xlink:href="img/svg/symbol/sprite.svg#arr-next"></use></svg></div>',
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
})();



}



module.exports = libsActivate();
