;(function(){
  'use strict';

  angular
    .module('EgorFintess', [  // Подключаю все модули 
      'angular-md5',
      'firebase',
      'ui.bootstrap',
      'ui.router',
      'main-index', // модули главной страницы 
      'start-index',
      'chest-index'
    ])


     .constant('FirebaseUrl', 'https://sweltering-fire-2598.firebaseio.com'); // подключаю datebase

})();



