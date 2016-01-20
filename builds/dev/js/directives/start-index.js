;(function(){
  'use strict';


	angular.module('start-index', ['startcntr']) // подключаю контроллеры главной страницы 

	.directive("nav", function() {
  return {
    restrict: "E",
    template: "<div class='pull-left'>< Back</div></a>"
	  }
	})

		.directive("startheader", function() {
  return {
    restrict: "E",
    template: "<h2 class='start_header'>What to do?</h2>"
	  }
	})




})();

// <h2 class="start_header">What to do?</h2>