'use strict';

/* Controllers */

angular.module('angularjsrepo.controllers', []).
  controller('ListCtrl', ['$scope', '$http', function($scope, $http) {

        $http.get('items.json').success(function(data) {
            $scope.items = data;
        });
  }])
  .controller('EditCtrl', ['$scope', '$location', '$routeParams', '$http',
        function($scope, $location, $routeParams, $http) {

            $scope.isClean = function() {
                return angular.equals($scope.original, $scope.item);
            }

            $http.get('items.json').success(function(data) {

                angular.forEach(data, function(item){
                    if(item.ID == $routeParams.itemId){
                        $scope.item = item;
                        $scope.original = angular.copy($scope.item);
                    }
                })

            });

            $scope.save = function() {
                $location.path('/list');
            }
        }])
