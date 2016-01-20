;(function(){
  'use strict';

  	// Подключаю модуль
	var app = angular.module('startcntr', []);

	app.controller('startIndexController', function(){  // подключаю контроллер
		this.products = gems;

	});

	var gems = [{  // создаю массив, где будут выдаваться вся инфа главной страницы 
		title : 'Chest',
		href: 'chest',
		img: 'http://placehold.it/250x250'
	},{
		title : 'Sholder',
		href: 'chest',
		img: 'http://placehold.it/250x250'
	}, {
		title : 'Backbone',
		href: 'chest',
		img: 'http://placehold.it/250x250'
	},{
		title : 'Legs',
		href: 'chest',
		img: 'http://placehold.it/250x250'
	}]



})();