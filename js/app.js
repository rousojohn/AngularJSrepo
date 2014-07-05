'use strict';


// Declare app level module which depends on filters, and services
angular.module('angularjsrepo', ['angularjsrepo.filters', 'angularjsrepo.services', 'angularjsrepo.directives', 'angularjsrepo.controllers', 'ui.bootstrap','ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
    $routeProvider.when('/edit/:itemId', {templateUrl: 'partials/edit.html', controller: 'EditCtrl'});
    $routeProvider.otherwise({redirectTo: '/list'});
  }]);