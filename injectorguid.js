// 传递参数不止一个,代表新建模块;空数组代表该模块不依赖其他模块
var createModule = angular.module("myModule", []);

// 只有一个参数(模块名),代表获取模块
// 如果模块不存在,angular框架会抛异常
var getModule = angular.module("myModule");

// true,都是同一个模块
console.log("createModule == getModule",createModule == getModule);

var injector = angular.injector();
console.log("$provide has",injector.has("$provide"));//false
console.log("$injector has",injector.has("$injector"));//true

// 创建myModule模块、注册服务
var myModule = angular.module('myModule', []);
myModule.service('myService', function() {
    this.my = 0;
});

// 创建herModule模块、注册服务
var herModule = angular.module('herModule', []);
herModule.service('herService', function() {
    this.her = 1;
});

// 加载了2个模块中的服务
var injector = angular.injector(["myModule","herModule"]);

var myService=injector.get("myService");

console.log("myService my",injector.get("myService").my);
console.log("herService her",injector.get("herService").her);

var injector1 = angular.injector(["myModule","herModule"]);
var injector2 = angular.injector(["myModule","herModule"]);
console.log("injector1 == injector2",injector1 == injector2);//false

//获取injector
var myInjector = angular.injector(["myModule"]);
// 第一种inference
myInjector.invoke(function(myService){
    console.log(myService.my);
});


function explicit(serviceA) {
    console.log(serviceA.my);
};
explicit.$inject = ['myService'];
injector.invoke(explicit);

// 第三种inline
injector.invoke(['myService', function(serviceA){
    console.log(serviceA.my);
}]);



