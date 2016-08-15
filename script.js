angular.module("myApp", []) .controller('MyCntl2',  function($scope) {
    $scope.name = "Ari";

    var exprs = $scope.exprs = [];
    $scope.expr = '3*10|currency';
    $scope.addExp = function(expr) {
        exprs.push(expr);
    };

    $scope.removeExp = function(index) {
        exprs.splice(index, 1);
    };

});