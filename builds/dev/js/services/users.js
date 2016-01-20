angular.module('EgorFintess')

.factory( 'Users', function ($firebaseArray, $firebaseObject, FirebaseUrl) { // прописываю зависимости
	var usersRef = new Firebase(FirebaseUrl+'/users'); // прописываю адрес + юзерсы
	var users = $firebaseArray(usersRef); // создаю массив 

	var Users = {
		  getProfile: function(uid){
		    return $firebaseObject(usersRef.child(uid));

		  },
		  getDisplayName: function(uid){
		    return users.$getRecord(uid).displayName;
		  },
		  
		  all: users

		//   getGravatar: function(uid){
		//   return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
		// }
	};

    return Users;

  });