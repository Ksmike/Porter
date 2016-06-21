'use strict';

	var Porter = {
		init: function () {
			setTimeout(function() {
				var $grid = $('.grid').isotope({
					itemSelector: '.grid-item',
					masonry: {
					  columnWidth: '.grid-sizer'
					}
				});

				$('.backdrops').fadeOut('slow');

			}, 1500);


		},
		renderHeader: function () {
			dust.render('header', {}, function () {

			});
		}
	};


$(document).ready(function () {

	Porter.init();



});