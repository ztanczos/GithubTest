'use strict';

var githubTestApp = angular.module('githubTestApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/helo', {
                    templateUrl: 'templates/main.html'
        })
        .when('/belo', {
            templateUrl: 'templates/belo.html'
        })
        .otherwise({
           redirectTo: '/helo'
        });
    }]);