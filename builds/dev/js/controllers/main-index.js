;(function(){
  'use strict';

  	// Подключаю модуль
	var app = angular.module('maincntr', []);

	app.controller('mainIndexController', function(){  // подключаю контроллер
		this.products = gems;

	});

	var gems = [{  // создаю массив, где будут выдаваться вся инфа главной страницы 
		title : 'Start',
		href: 'start',
		classFor: 'pull-left',
		classFor1: ''
	},{
		title : 'login',
		href: 'logout',
		classFor: 'pull-right',
		classFor1: ''
	}, {
		title : 'My Stat',
		href: 'profile',
		classFor: 'pull-left',
		classFor1: 'choose-buttons__mr-top'
	},{
		title : 'Programs',
		href: 'profile',
		classFor: 'pull-right',
		classFor1: 'choose-buttons__mr-top'
	}]



})();