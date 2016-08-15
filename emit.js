var app = angular.module('myApp', []);

function EventController($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
        $scope.count++;
    });
}

app.controller('EventController', EventController);

