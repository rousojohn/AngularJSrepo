'use strict';

/* Directives */


angular.module('angularjsrepo.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('navbar',function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/navbar.html'
        }
    })
    .directive('message', function(){
        return{
            restrict: 'E',
            controller: ['$scope', '$attrs', 'SharedService', function($scope,$attrs,SharedService){
                $scope.alerts = [];

                $scope.$on('handleBroadcastAlert',function(){
                    $scope.alerts.push({type: "danger", msg: SharedService.alert});
                })

                $scope.closeAlert = function(index) {
                    $scope.alerts.splice(index, 1);
                };
            }],
            templateUrl: 'partials/message.html'
        }
    });
