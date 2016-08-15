var app=angular.module("myApp",[]);

function Sandcrawler($scope) {
    $scope.location = "Mos Eisley North";
    $scope.move = function(newLocation) {
        $scope.location = newLocation;
    }
}
function Droid($scope) {
    $scope.sell = function(newLocation) {
        $scope.location = newLocation;
    }
}

app.controller('Sandcrawler', Sandcrawler);
app.controller('Droid', Droid);