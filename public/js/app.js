'use strict';

var Porter = {
	init: function () {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item'
		});

		$('.backdrops').fadeOut('slow');
		window.addEventListener('scroll', this.getMoreProducts.bind(this), false);
	},
	getMoreProducts: function () {
		$.ajax({
			url: 'http://127.0.0.1:3000/api/products',
			type: 'GET',
			dataType: 'json',
			data: {
				offset: 60,
				limit: 200
			}
		})
		.done(function (data) {
			this.renderNewProducts(data);
		}.bind(this));

	},
	renderNewProducts: function (products) {
		console.log('products: ', products);
	}
};

$(window).on("load", function() {

	Porter.init();
});