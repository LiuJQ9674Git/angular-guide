var app = angular.module('myApp', []);
/*
app.controller('MainCtrl',['$scope' , function($scope ) {
    $scope.name = "Foo";
    $scope.changeFoo = function() {
        $scope.name = "Bar";
    }
}]);


app.controller('MainCtrl',function($scope ) {
    $scope.name = "Foo";
    $scope.changeFoo = function() {
        $scope.name = "Bar";
    }
});


app.controller('MainCtrl', function($scope) {
    $scope.name = "Angular";
    $scope.updated = -1;
    $scope.$watch('name', function() {
        $scope.updated++;
    });
});
 */

/**
app.controller('MainCtrl', function($scope) {
    $scope.name = "Angular";
    $scope.updated = 0;
    $scope.$watch('name', function(newValue, oldValue) {
        if (newValue === oldValue) { return; } // AKA first run
        $scope.updated++;
    });
});
**/

/*
app.controller('MainCtrl', function($scope) {
    $scope.user = { name: "Fox" };
    $scope.updated = 0;
    $scope.$watch('user', function(newValue, oldValue) {
        if (newValue === oldValue) { return; }
        $scope.updated++;
    });
});
*/

app.controller('MainCtrl', function($scope) {
    $scope.user = { name: "Fox" };
    $scope.updated = 0;
    $scope.$watch('user', function(newValue, oldValue) {
        if (newValue === oldValue) { return; }
        $scope.updated++;
    }, true  );
});
