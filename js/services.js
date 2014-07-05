'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('angularjsrepo.services', ['ngResource']).
  value('version', '0.1').
  factory('SharedService', ['$rootScope', function($rootScope){
      var sharedService = {};

      sharedService.alert = "";

      sharedService.updateAlert = function(msg){
          this.alert = msg;
          this.broadcastAlert();
      }

      sharedService.broadcastAlert = function(){
        $rootScope.$broadcast('handleBroadcastAlert');
      }

      return sharedService;
  }])
