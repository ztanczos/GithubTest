'use strict';

githubTestApp.controller('MainController',
function MainController($scope, myData) {
    $scope.btnClick = function() {
        $scope.data = myData.data;
        console.log('helo');
    };
});