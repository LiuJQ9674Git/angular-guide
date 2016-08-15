angular.module('xmpl.service', []).
value('greeter', {
    salutation: 'Hello',
    localize: function(localization) {
        this.salutation = localization.salutation;
    },
    greet: function(name) {
        return this.salutation + ' ' + name + '!';
    }
}).
value('user', {
    load: function(name) {
        this.name = name;
    }
});

angular.module('xmpl.directive', []);

angular.module('xmpl.filter', []);

var app=angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter']);

app.run(function(greeter, user) {
    // This is effectively part of the main method initialization code
    greeter.localize({
        salutation: 'Bonjour'
    });
    user.load('World');
})

app.controller('XmplController', function($scope, greeter, user) {
    $scope.greeting = greeter.greet(user.name);
});