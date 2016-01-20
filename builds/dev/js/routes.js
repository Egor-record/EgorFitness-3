  angular.module('EgorFintess')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider


        .state('home', {
          url: '/home.html',
          templateUrl: 'templates/main-index/index.html',
        })

        .state('login', {
          url: '/',
          templateUrl: 'templates/login/login-ui.html',
          controller: 'AuthCtrl as authCtrl',
          resolve: {
            requireNoAuth: function($state, Auth){
              return Auth.$requireAuth().then(function(auth){
                $state.go('home');
              }, function(error){
                return;
              });
            }
          }
        })

        .state('logout', {
          url: '/logout.html',
          templateUrl: 'templates/logout/logout.html',
          controller: 'ChannelsCtrl as channelsCtrl',
          resolve: {
              channels: function (Channels){
                return Channels.$loaded();
              },
              profile: function ($state, Auth, Users){
                return Auth.$requireAuth().then(function(auth){
                  return Users.getProfile(auth.uid).$loaded().then(function (profile){
                    if(profile.displayName){
                      return profile;
                    } else {
                      $state.go('profile');
                    }
                  });
                }, function(error){
                  $state.go('home');
                });
              }
            }
        })

        .state('register', {
          url: '/regist.html',
          templateUrl: 'templates/login/regist-ui.html',
          controller: 'AuthCtrl as authCtrl',
          resolve: {
            requireNoAuth: function($state, Auth){
              return Auth.$requireAuth().then(function(auth){
                $state.go('home');
              }, function(error){
                return;
              });
            }
          }
        })

        .state('profile', {
            url: '/mystat.html',
            controller: 'ProfileCtrl as profileCtrl',
            templateUrl: 'templates/mystat/mystat.html',
            resolve: {
                auth: function($state, Users, Auth){
                  return Auth.$requireAuth().catch(function(){
                    $state.go('home');
                  });
                },
                profile: function(Users, Auth){
                  return Auth.$requireAuth().then(function(auth){
                    return Users.getProfile(auth.uid).$loaded();
                  });
                }
              }
        })

        .state('start', {
        url: '/start.html',
        templateUrl: 'templates/start/index.html'
        })

        .state('chest', {
        url: '/start/chest.html',
        templateUrl: 'templates/start/chest/index.html'
        })

        .state('create', {
		  url: '/start/chest/ganteli-create.html',
		  templateUrl: 'templates/start/chest/ganteli/ganteli-create.html'
		})

        .state('ganteli', {
        url: '/start/chest/ganteli.html',
        templateUrl: 'templates/start/chest/ganteli/ganteli.html',
        controller: 'CreateCtrl as createCtrl'
        })

    });

