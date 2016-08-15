var app=angular.module("myApp",[]);

function Sandcrawler($scope) {
    $scope.obj = {location:"Mos Eisley North"};
    $scope.move = function(newLocation) {
        $scope.obj.location = newLocation;
    }
}
function Droid($scope) {
    $scope.summon = function(newLocation) {
        $scope.obj.location = newLocation;
    }
}

app.controller('Sandcrawler', Sandcrawler);
app.controller('Droid', Droid);