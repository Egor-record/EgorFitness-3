;(function(){
  'use strict';

  	// Подключаю модуль
	var app = angular.module('chestcntr', []);

	app.controller('chestIndexController', function(){  // подключаю контроллер
		this.products = gems;

	});

	var gems = [{  // создаю массив, где будут выдаваться вся инфа главной страницы 
		title : 'Ganteli',
		href: 'ganteli',
		img: 'http://placehold.it/100x100',
		bootstrap: 'pull-left'
	},{
		title : 'Gim',
		href: '#/start.html',
		img: 'http://placehold.it/100x100',
		bootstrap: 'pull-right'
	}, {
		title : 'Babochka',
		href: '#/start.html',
		img: 'http://placehold.it/100x100',
		bootstrap: 'pull-left'
	},{
		title : 'Smith',
		href: '#/start.html',
		img: 'http://placehold.it/100x100',
		bootstrap: 'pull-right'
	}]



})();