angular.module('EgorFintess')


.factory("ganteliAdd", ["$firebaseArray",
	function($firebaseArray) {
	    // create a reference to the database where we will store our data
	    var ref = new Firebase("https://sweltering-fire-2598.firebaseio.com/users/trainers");
	    return $firebaseArray(ref);
	}
]);
