'use strict';




$(document).ready(function () {

	$(window).on("load", function() {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item'
		});

		$('.backdrops').fadeOut('slow');

	});


});