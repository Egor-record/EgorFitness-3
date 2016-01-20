;(function(){
  'use strict';


	angular.module('main-index', ['maincntr']) // подключаю контроллеры главной страницы 

	.directive("heading", function() {
  return {
    restrict: "E",
    template: "<h1>do!Fitness</h1>"
	  }
	})




})();