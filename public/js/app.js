'use strict';

var Porter = class Porter {
	constructor(height, width) {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item'
		});

		$('.backdrops').fadeOut('slow');
	}
};

$(window).on("load", function() {

	new Porter();
});