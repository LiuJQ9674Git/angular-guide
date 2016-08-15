var app = angular.module('myApp', [], function(){
    console.log('here')

}//function over
);
app.controller('testC',function($scope){
    $scope.title = '个人简介';
    $scope.text = '我正在研究AngularJs，欢迎大家与我交流';
});
app.directive('expander',function(){
    return {
        restrict : 'E',
        templateUrl : 'expanderTemp.html',
        replace : true,
        transclude : true,
        scope : {
            mytitle : '=etitle'
        },
        link : function(scope,element,attris){
            scope.showText = false;
            scope.toggleText = function(){
                scope.showText = ! scope.showText;
            }
        }
    };
});




