var abcRouter = angular.module('abcRouter', ['ngRoute']);
abcRouter.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            template: 'hello world'
        });

});

var abcUIRouter = angular.module("abcUIRouter", ['ui.router']);
abcUIRouter.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    template: 'hello world'
                },
                'status': {
                    template: 'home page'
                }
            }
        });


});