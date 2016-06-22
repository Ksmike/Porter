'use strict';

var IndexModel = require('../models/index');
var request = require('request');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

    	request('http://127.0.0.1:3000/api/products', function(error, response, body) {
    	    res.render('index', {
    	        products: JSON.parse(body)
    	    });
    	});

    });

};
