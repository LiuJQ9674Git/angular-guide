var app = angular.module('myApp', [], function(){
    console.log('here')

}//function over
);
app.directive('sayHello',function(){
    return {
        restrict : 'E',
        //template : '<div>hello，<b ng-transclude></b>！</div>',
        replace : true,
        transclude : true,
        templateUrl :'helloTemplate.html'
    };
})



