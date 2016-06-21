'use strict';

	var Porter = {
		init: function () {
			$('.product-grid').isotope({
				itemSelector: '.product-wrapper'
			});

			console.log("wakka");
		}
	};

$(function	() {
	Porter.init();
});