var app = angular.module('myApp', []);

function AlertDemoCtrl($scope) {
    $scope.alerts = [
        { type: 'alert-dismissable', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'alert alert-warning alert-dismissable', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: "Another alert!"});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

};

app.controller("AlertDemoCtrl",AlertDemoCtrl).
    controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
         $scope.closeable = 'close' in $attrs;
    }]).
    controller('Ctrl', function($scope) {
    $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
    };
   }).
    directive('alert', function () {
        return {
            restrict:'EA',
            controller:'AlertController',
            templateUrl:'alert.html',
            transclude:true,
            replace:true,
            scope: {
                type: '@',//传递一个字符串作为属性的值
                close: '&'//使用父作用域中的一个函数,可以在指令中调用
            }
        };
    }).directive('myCustomer', function() {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    }).
    directive("hello", function () {
        var option = {
            restrict: "AECM",
            template: "<h3>Hello, Directive, <span ng-transclude></span></h3>",
            replace: true,
            transclude: true
        };
        return option;
    }).
    directive("hello_Rep", function () {
    var option = {
        restrict: "AECM",
        template: "<h3>Hello, Directive</h3>",
        replace: true
    };
    return option;
    }).
    directive("helloAS", function () {
    var option = {
        restrict: "AECM",
        template: "Hello, Directive",
        replace: true
    };
    return option;
});

