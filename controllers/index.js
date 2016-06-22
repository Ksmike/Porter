'use strict';

var IndexModel = require('../models/index');
var request = require('request');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

    	request('http://127.0.0.1:3000/api/products', function(error, response, body) {
    		if (error) {
    			console.log('error: ', error);
    		} else {
    			res.render('index', {
    			    products: JSON.parse(body)
    			});
    		}

    	});

    });

    router.get('/product/:itemID', function (req, res, next) {
    	console.log('req.params: ', req.params);
    	request('http://127.0.0.1:3000/api/product/' + req.params.itemID, function(error, response, body) {
    		console.log('body: ', body);
    		if (error) {
    			console.log('error: ', error);
    		} else {
    			res.render('product', {
    			    product: JSON.parse(body)
    			});
    		}

    	});

    });

};
