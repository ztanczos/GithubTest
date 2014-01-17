'use strict';

var githubTestApp = angular.module('githubTestApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/helo', {
            controller: 'MainController',
            templateUrl: 'templates/main.html'
        })
        .when('/multiPaint', {
            controller: 'CanvasController',
            templateUrl: 'templates/multipaint.html'
        })
        .otherwise({
           redirectTo: '/helo'
        });

    }]);