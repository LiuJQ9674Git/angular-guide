var app = angular.module('myApp', []);

function MyController($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
    };
}

app.controller('MyController', MyController);