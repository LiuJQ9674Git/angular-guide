/*
var app=angular.module("Greet", []);

app.config(function($provide) {
    $provide.provider('greeting', function() {
        this.$get = function() {
            return function(name) {
                alert("Hello, " + name);
            };
        };
    });
});

app.config(function($provide) {
    $provide.factory('greeting', function() {
        return function(name) {
            alert("Hello, " + name);
        };
    });
});

app.config(function($provide) {
    $provide.value('greeting', function(name) {
        alert("Hello, " + name);
    });
});

app.service('greeting', function() {
    return function(name) {
        alert("Hello, " + name);
    };
});

app.controller('GreetCtrl', function($scope, greeting) {
    $scope.onClick = function() {
        greeting('Ford Prefect');
    };
});

app.controller('GreetCtrl', function($scope, $injector) {
    $scope.onClick = function() {
        var greeting = $injector.get('greeting');
        greeting('Beijing');

    };
});

var myFunction = function(greeting) {
    greeting('Ford Prefect');
};

app.controller('GreetCtrl', function($scope, $injector) {
    $scope.onClick = function() {
        $injector.invoke(myFunction);
    };
});


app.provider('greeting', function() {
    var text = 'Hello, ';

    this.setText = function(value) {
        text = value;
    };

    this.$get = function() {
        return function(name) {
            alert(text + name);
        };
    };
});

app.config(function(greetingProvider) {
    greetingProvider.setText("Howdy there, ");
});

app.run(function(greeting) {
    greeting('Ford Prefect');
});

var app = angular.module('Greet', [], function($provide) {
    $provide.factory('greeting', function() {
        return function(name) {
            alert("Hello, " + name);
        };
    });
});
 **/

var app=angular.module("Greet", []);

/**
app.factory('greeting',function(){
    return function(name) {
        alert("Hello, " + name);
    };
});
 **/

app.service('greeting',function(){
    return function(name) {
        alert("Hello, " + name);
    };
});

app.controller('GreetCtrl', function($scope, greeting) {
    $scope.onClick = function() {
        //var greeting = $injector.get('greeting');
        greeting('Beijing');
    };
});
