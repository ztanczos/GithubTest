'use strict';

githubTestApp.controller('MainController',
function MainController($scope, myData) {
    $scope.data = [];

    $scope.btnClick = function() {
        $scope.data = myData.data;
    };

    $scope.removeItem = function(item) {
        var index = $scope.data.indexOf(item);
        $scope.data.splice(index, 1);
    };

    $scope.addItem = function(newItem, myForm) {
        if(myForm.$valid) {
            $scope.data.push({foo: newItem});
        }
    };
});