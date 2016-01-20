angular.module('EgorFintess')

.service( 'Tranings', function ($firebaseArray, $firebaseObject, FirebaseUrl, users) { // прописываю зависимости
	var traningsRef = new Firebase(FirebaseUrl+'/users'); // прописываю адрес + юзерсы
	var tranings = $firebaseArray(traningsRef); // создаю массив 

	var Tranings = {
		  getProfile: function(uid){
		    return $firebaseObject(usersRef.child(uid));

		  },
		  getDisplayName: function(uid){
		    return users.$getRecord(uid).displayName;
		  },

		  getDisplayTranings: function(uid){
		    return tranings.$getRecord(uid).displayTranings;
		  }
		  

	};

    return Tranings;

  });