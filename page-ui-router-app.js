var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "/pagerouter/Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "/pagerouter/Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "/pagerouter/Page3.html"
        });
});
