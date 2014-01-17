'use strict';

var githubTestApp = angular.module('githubTestApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/helo', {
            controller: 'MainController',
            templateUrl: 'templates/main.html'
        })
        .when('/belo', {
            templateUrl: 'templates/belo.html'
        })
        .otherwise({
           redirectTo: '/helo'
        });

    }]);