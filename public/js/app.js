'use strict';

	var Porter = {
		init: function () {
			setTimeout(function() {
				var $grid = $('.grid').isotope({
					itemSelector: '.grid-item'
				});

				$('.backdrops').fadeOut('slow');

			}, 2750);


		},
		renderHeader: function () {
			dust.render('header', {}, function () {

			});
		}
	};


$(document).ready(function () {

	Porter.init();



});