var app=angular.module("Greet", []);

app.module("Greet", []) .controller('GreetCtrl',  function($scope) {
    $scope.greeting={text:'Beijing'};

});

function GreetCtrl($scope) {
    $scope.greeting={text:'Beijing'};

}
app.controller('GreetCtrl', ['$scope', GreetCtrl]);

app.controller('GreetCtrl', ['$scope', function($scope){
    $scope.greeting={text:'Beijing'};
}]);


function GreetCtrl($scope) {
    $scope.greeting={text:'Beijing'};

}

GreetCtrl.$inject = ['$scope'];
app.controller('GreetCtrl', GreetCtrl);

app.controller('GreetCtrl', function($scope) {
    $scope.greeting={text:'Beijing'};
});


app.config(function($controllerProvider) {
    $controllerProvider.register('GreetCtrl', function($scope) {
        $scope.greeting={text:'Beijing'};
    });
});

