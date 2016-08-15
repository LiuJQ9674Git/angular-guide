var app = angular.module('myApp', [], function(){
    console.log('here')

}//function over
);
app.controller('testC',function($scope){
    $scope.content = '北京好吗';
});
app.directive('sayHello',function(){
    return {
        restrict : 'E',
        template: '<div>hello,<b ng-transclude></b>,{{ cont }}</div>',
        replace : true,
        transclude : true,
        scope : {
            cont : '=speak'
        }
    };
});



