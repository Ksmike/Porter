'use strict';

var Porter = {
	init: function () {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item'
		});

		$('.backdrops').fadeOut('slow');
	}
};

$(window).on("load", function() {

	Porter.init();
});