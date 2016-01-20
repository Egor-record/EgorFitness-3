  var app = angular.module('EgorFintess');

	app.controller('CreateCtrl', ["$scope", "$firebaseObject",
  		function($scope, $firebaseObject) {



   		var ref = new Firebase("https://sweltering-fire-2598.firebaseio.com");
    // download physicsmarie's profile data into a local object
    // all server changes are applied in realtime
    	$scope.profile = $firebaseObject(ref.child('users').child('uid').child('chest'));
  }
]);