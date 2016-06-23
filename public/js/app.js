'use strict';

var Porter = class Porter {
	constructor() {
		this.isotopeProducts();
		$('.backdrops').fadeOut('slow');

		this.addListeners();

	}
	isotopeProducts() {
		$('.grid').isotope({
			itemSelector: '.grid-item'
		});
	}
	addListeners() {
		setTimeout(function () {
			window.addEventListener('scroll', this.getMoreProducts.bind(this), false);

		}.bind(this), 2000);

	}
	getMoreProducts() {
		var offset = $('.grid-item').length;

		$.ajax({
			url: 'http://127.0.0.1:3000/api/products',
			type: 'GET',
			dataType: 'json',
			data: {
				offset: offset,
				limit: 50
			}
		})
		.done(function (data) {
			var productsObj = data.data;
			console.log('productsObj: ', productsObj);

			this.renderTemplate(productsObj);

		}.bind(this));
	}
	renderTemplate(productArray) {
		var $items;
		for (var i = 0; i < productArray.length; i++) {
			$items = this.generateTemplate(productArray[i]);
			$('.grid').append($items).isotope('appended', $items);
		}
	}
	generateTemplate(data) {
		var	gridLink = document.createElement('a'),
			gridItem = document.createElement('div'),
			gridContainer = document.createElement('div'),
			gridImage = document.createElement('img'),
			gridDesigner = document.createElement('div'),
			gridName = document.createElement('div'),
			gridPrice = document.createElement('div');

			gridLink.href = '/product/' + data.id;

			gridItem.classList.add('grid-item');
			gridItem.dataset.id = data.id;
			gridItem.dataset.cost = data.price;

			gridContainer.classList.add('grid-contain');

			gridImage.classList.add('grid-image');
			gridImage.src = data.image.outfit;

			gridDesigner.classList.add('designer');
			gridDesigner.innerHTML = data.designer;

			gridName.classList.add('product-name');
			gridName.innerHTML = data.name;

			gridPrice.classList.add('price');
			gridPrice.innerHTML = data.price;

			gridLink.appendChild(gridItem);
			gridItem.appendChild(gridContainer);
			gridContainer.appendChild(gridImage);
			gridContainer.appendChild(gridDesigner);
			gridContainer.appendChild(gridName);
			gridContainer.appendChild(gridPrice);

			return gridLink;
	}

};

$(window).on("load", function() {

	new Porter();
});