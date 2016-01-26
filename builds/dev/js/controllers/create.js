  var app = angular.module('EgorFintess');

	app.controller('CreateCtrl', ["$scope", "ganteliAdd", function($scope, ganteliAdd) {
  	

			$scope.heading = "Lite Weights";
    		$scope.messages = ganteliAdd;


    		$scope.addMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
		      $scope.messages.$add({
		        kg: $scope.message2,
		        raz: $scope.message1
		      });

		      $scope.message = "";
		    };

}
  		
	]);
