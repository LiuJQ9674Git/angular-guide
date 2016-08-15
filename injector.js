// Create a module
/**
var myModule = angular.module('myModule', []);
// Configure the injector
myModule.factory('serviceA', function() {
    return {
        test:function () {
            console.log("service...");
        }
    };
});

// create an injector and configure it from 'myModule'
var $injector = angular.injector(['myModule']);
// retrieve an object from the injector by name
var serviceA = $injector.get('serviceA');

console.log("===:",$injector.get('serviceA') === $injector.get('serviceA'));
serviceA.test();
**/
////////////////////////////////////////////////s
angular.module('myModule', []).
// Teach the injector how to build a 'greeter'
// Notice that greeter itself is dependent on '$window'
factory('greeter', function() {
    // This is a factory function, and is responsible for
    // creating the 'greet' service.
    return {
        greet: function(text) {
            alert(text);
        }
    };
})
// New injector is created from the module.
// (This is usually done automatically by angular bootstrap)
var injector = angular.injector(['myModule']);

// Request any dependency from the injector
var greeter = injector.get('greeter');
greeter.greet("Hello");
console.log("Over..");


// And this controller definition
function MyController($scope, greeter) {
    $scope.sayHello = function() {
        greeter('Hello World');
    };
}

// The 'ng-controller' directive does this behind the scenes
injector.instantiate(MyController);
